export interface DownloadRequest {
  url: string;
}

export interface DownloadResponse {
  platform: string;
  originalUrl: string;
  videoUrl: string;
  message: string;
} 