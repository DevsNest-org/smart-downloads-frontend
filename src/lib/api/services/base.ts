import api from '../config';
import { DownloadRequest, DownloadResponse } from '../types';

export const downloadVideo = async (
  platform: string,
  data: DownloadRequest
): Promise<DownloadResponse> => {
  const response = await api.post<DownloadResponse>(`/download/${platform}/`, data);
  return response.data;
}; 