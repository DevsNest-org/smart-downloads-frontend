import { DownloadRequest, DownloadResponse } from '../types';
import { downloadVideo } from './base';

export const downloadYouTubeVideo = async (data: DownloadRequest): Promise<DownloadResponse> => {
  return downloadVideo('youtube', data);
}; 