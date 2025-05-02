import React, { createContext, useContext, useState } from 'react';
import { DownloadContextType, DownloadState } from './types';
import { downloadInstagramVideo, downloadTikTokVideo, downloadYouTubeVideo } from '../lib/api/services';
import dynamic from 'next/dynamic';
import { DownloadResponse } from '../lib/api/types';

const DownloadHandler = dynamic(() => import('../components/DownloadHandler'), {
  ssr: false,
});

const initialState: DownloadState = {
  isLoading: false,
  error: null,
  data: null,
};

const DownloadContext = createContext<DownloadContextType | undefined>(undefined);

export const DownloadProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<DownloadState>(initialState);
  const [downloadData, setDownloadData] = useState<{ url: string; platform: string; thumbnail?: string } | null>(null);

  const downloadVideo = async (platform: string, url: string): Promise<DownloadResponse | undefined> => {
    console.log('DownloadContext: Starting download for', platform, url);
    setState({ ...state, isLoading: true, error: null });
    try {
      let response = null;
      switch (platform) {
        case 'youtube':
          console.log('DownloadContext: Fetching YouTube video');
          response = await downloadYouTubeVideo({ url });
          break;

        case 'tiktok':
          console.log('DownloadContext: Fetching TikTok video');
          response = await downloadTikTokVideo({ url });
          break;

        case 'instagram':
          console.log('DownloadContext: Fetching Instagram video');
          response = await downloadInstagramVideo({ url });
          break;

        default:
          throw new Error('Unsupported platform');
      }

      console.log('DownloadContext: Raw response:', response);

      if (!response) {
        throw new Error('No response received from server');
      }

      if (!response.status || !response.data || !Array.isArray(response.data) || response.data.length === 0) {
        throw new Error('Invalid response format from server');
      }

      if (!response.data[0].url || !response.data[0].thumbnail) {
        throw new Error('Missing required data in response');
      }

      console.log('DownloadContext: Valid response with data:', response);
      setState({ ...state, isLoading: false, data: response });
      return response;
    } catch (error) {
      console.error('DownloadContext: Error downloading video:', error);
      const errorMessage = error instanceof Error ? error.message : 'An error occurred while downloading the video';
      setState({
        ...state,
        isLoading: false,
        error: errorMessage,
      });
      return undefined;
    }
  };

  const initiateDownload = (platform: string) => {
    console.log('DownloadContext: Initiating download for', platform);
    console.log('DownloadContext: Current state data:', state.data);
    
    if (!state.data?.data?.[0]?.url) {
      console.error('DownloadContext: No download URL available in state');
      setState({
        ...state,
        error: 'No download URL available. Please try again.',
      });
      return;
    }

    console.log('DownloadContext: Setting download data with URL:', state.data.data[0].url);
    setDownloadData({ 
      url: state.data.data[0].url, 
      platform,
      thumbnail: state.data.data[0].thumbnail 
    });
  };

  const resetState = () => {
    console.log('DownloadContext: Resetting state');
    setState(initialState);
    setDownloadData(null);
  };

  const handleDownloadComplete = () => {
    console.log('DownloadContext: Download complete');
    setDownloadData(null);
  };

  return (
    <DownloadContext.Provider value={{ ...state, downloadVideo, initiateDownload, resetState }}>
      {children}
      <DownloadHandler 
        downloadData={downloadData} 
        onDownloadComplete={handleDownloadComplete} 
      />
    </DownloadContext.Provider>
  );
};

export const useDownload = () => {
  const context = useContext(DownloadContext);
  if (context === undefined) {
    throw new Error('useDownload must be used within a DownloadProvider');
  }
  return context;
}; 