import React, { createContext, useContext, useState } from 'react';
import { DownloadContextType, DownloadState } from './types';
import { downloadInstagramVideo, downloadTikTokVideo, downloadYouTubeVideo } from '../lib/api/services';
import dynamic from 'next/dynamic';

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
  const [downloadData, setDownloadData] = useState<{ url: string; platform: string } | null>(null);

  const downloadVideo = async (platform: string, url: string) => {
    setState({ ...state, isLoading: true, error: null });
    try {
      let response = null;
      switch (platform) {
        case 'youtube':
          response = await downloadYouTubeVideo({ url });
          if (response.videoUrl) {
            setDownloadData({ url: response.videoUrl, platform });
          }
          break;

        case 'tiktok':
          response = await downloadTikTokVideo({ url });
          if (response.videoUrl) {
            setDownloadData({ url: response.videoUrl, platform });
          }
          break;

        case 'instagram':
          response = await downloadInstagramVideo({ url });
          if (response.videoUrl) {
            setDownloadData({ url: response.videoUrl, platform });
          }
          break;

        default:
          throw new Error('Unsupported platform');
      }

      setState({ ...state, isLoading: false, data: response });
    } catch (error) {
      setState({
        ...state,
        isLoading: false,
        error: error instanceof Error ? error.message : 'An error occurred',
      });
    }
  };

  const resetState = () => {
    setState(initialState);
  };

  const handleDownloadComplete = () => {
    setDownloadData(null);
  };

  return (
    <DownloadContext.Provider value={{ ...state, downloadVideo, resetState }}>
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