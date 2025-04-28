import { DownloadRequest, DownloadResponse } from '../types';
import { downloadVideo } from './base';

export const downloadInstagramVideo = async (data: DownloadRequest): Promise<DownloadResponse> => {
  return downloadVideo('instagram', data);
}; 