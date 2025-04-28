import { DownloadRequest, DownloadResponse } from '../types';
import { downloadVideo } from './base';

export const downloadTikTokVideo = async (data: DownloadRequest): Promise<DownloadResponse> => {
  return downloadVideo('tiktok', data);
}; 