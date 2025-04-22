'use client';

import { useEffect } from 'react';

interface DownloadHandlerProps {
  downloadData: { url: string; platform: string } | null;
  onDownloadComplete: () => void;
}

export default function DownloadHandler({ downloadData, onDownloadComplete }: DownloadHandlerProps) {
  useEffect(() => {
    if (downloadData) {
      const a = document.createElement('a');
      a.href = downloadData.url;
      a.download = `${downloadData.platform}-video.mp4`;
      a.target = '_blank'; // Open in new tab for Instagram
      a.rel = 'noopener noreferrer';
      
      // For Instagram, we need to handle the download differently
      if (downloadData.platform === 'instagram') {
        // Create a fetch request to get the video
        fetch(downloadData.url)
          .then(response => response.blob())
          .then(blob => {
            const url = window.URL.createObjectURL(blob);
            a.href = url;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            onDownloadComplete();
          })
          .catch(error => {
            console.error('Error downloading video:', error);
            onDownloadComplete();
          });
      } else {
        // For other platforms, use the direct download
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        onDownloadComplete();
      }
    }
  }, [downloadData, onDownloadComplete]);

  return null;
} 