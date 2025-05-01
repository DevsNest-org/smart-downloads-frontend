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
    setState({ ...state, isLoading: true, error: null });
    try {
      let response = null;
      switch (platform) {
        case 'youtube':
          response = await downloadYouTubeVideo({ url });
          break;

        case 'tiktok':
          response = await downloadTikTokVideo({ url });
          break;

        case 'instagram':
          response = await downloadInstagramVideo({ url });
          break;

        default:
          throw new Error('Unsupported platform');
      }

      setState({ ...state, isLoading: false, data: response });
      return response;
    } catch (error) {
      setState({
        ...state,
        isLoading: false,
        error: error instanceof Error ? error.message : 'An error occurred',
      });
      return undefined;
    }
  };

  const initiateDownload = (platform: string) => {
    if (state.data?.data?.[0]?.url) {
      setDownloadData({ 
        url: state.data.data[0].url, 
        platform,
        thumbnail: state.data.data[0].thumbnail 
      });
    }
  };

  const resetState = () => {
    setState(initialState);
    setDownloadData(null);
  };

  const handleDownloadComplete = () => {
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