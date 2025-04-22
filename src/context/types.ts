import { DownloadResponse } from '../lib/api/types';

export interface DownloadState {
  isLoading: boolean;
  error: string | null;
  data: DownloadResponse | null;
}

export interface DownloadContextType extends DownloadState {
  downloadVideo: (platform: string, url: string) => Promise<void>;
  resetState: () => void;
} 