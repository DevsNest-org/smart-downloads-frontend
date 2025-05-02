'use client';

import { useEffect, useState } from 'react';

interface DownloadHandlerProps {
  downloadData: { url: string; platform: string; thumbnail?: string } | null;
  onDownloadComplete: () => void;
}

export default function DownloadHandler({ downloadData, onDownloadComplete }: DownloadHandlerProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleDownload = async () => {
      if (!downloadData || !isMounted) return;

      try {
        const response = await fetch(downloadData.url);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${downloadData.platform}-video.mp4`;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        onDownloadComplete();
      } catch (error) {
        console.error('Error downloading video:', error);
        onDownloadComplete();
      }
    };

    if (downloadData && isMounted) {
      handleDownload();
    }
  }, [downloadData, onDownloadComplete, isMounted]);

  return null;
} 