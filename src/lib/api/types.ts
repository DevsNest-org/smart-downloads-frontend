export interface DownloadRequest {
  url: string;
}

export interface VideoData {
  thumbnail: string;
  url: string;
}

export interface DownloadResponse {
  developer: string;
  status: boolean;
  data: VideoData[];
} 