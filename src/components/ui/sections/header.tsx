"use client";

import { ReactElement, useState, useEffect } from "react";
import { useDownload } from "@/context/DownloadContext";
import Image from "next/image";
import { RiseLoader } from "react-spinners";

interface HeaderProps {
  platform: string;
  description: ReactElement;
  bgColor: string;
}

export default function Header({
  platform,
  description,
  bgColor,
}: HeaderProps) {
  const [inputValue, setInputValue] = useState("");
  const { downloadVideo, initiateDownload, resetState, isLoading, data, error } = useDownload();
  const [showThumbnail, setShowThumbnail] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlePaste = async () => {
    const text = await navigator.clipboard.readText();
    setInputValue(text);
  };

  const handleFetchVideo = async () => {
    if (!inputValue) return;
    try {
      const response = await downloadVideo(platform.toLowerCase(), inputValue);
      
      if (!response) {
        console.error('No response received from downloadVideo');
        return;
      }

      if (response.status === true && response.data?.[0]?.thumbnail) {
        console.log('Valid response with thumbnail:', response.data[0]);
        setShowThumbnail(true);
      } else {
        console.error('Invalid response format:', {
          status: response.status,
          hasData: !!response.data,
          dataLength: response.data?.length,
          hasThumbnail: !!response.data?.[0]?.thumbnail
        });
      }
    } catch (error) {
      console.error('Error fetching video:', error);
    }
  };

  const handleDownload = () => {
    if (!data?.data?.[0]?.url) {
      return;
    }
    setIsDownloading(true);
    initiateDownload(platform.toLowerCase());
  };

  const handleReset = () => {
    resetState();
    setShowThumbnail(false);
    setInputValue("");
    setIsDownloading(false);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={`flex flex-col items-center justify-center h-[90dvh] w-[90%] rounded-[44px] text-white text-center ${bgColor}`}
    >
      <h1 className="text-5xl md:text-5xl font-bold leading-18">
        Download <br className="block md:hidden" /> from{" "}
        <br className="block md:hidden" />{" "}
        <br className="hidden md:inline-flex" /> {platform}
      </h1>
      <p className="text-lg md:text-base mt-6">{description}</p>
      
      {error && (
        <div className="text-red-500 mt-4">
          {error}
        </div>
      )}
      
      {!showThumbnail ? (
        <div className="w-full md:w-auto flex flex-col md:flex-row items-center mt-8">
          <div className="flex items-center rounded-[20px] w-[85%] md:w-auto pr-2 mr-0 md:mr-[14px] bg-white">
            <input
              className="h-12 w-[90%] md:w-70 pl-4 pr-4 focus:outline-none text-black placeholder:text-gray-400"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={`Input ${platform} link URL`}
            />
            <button
              onClick={handlePaste}
              className="h-8 w-[60px] text-black rounded-[10px] bg-gray-300 hover:scale-105 duration-300"
            >
              Paste
            </button>
          </div>
          <button
            onClick={handleFetchVideo}
            disabled={isLoading || !inputValue}
            className={`h-12 w-25 rounded-[20px] bg-black hover:scale-105 mt-[25px] md:mt-0 duration-300 ${
              isLoading || !inputValue ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? <RiseLoader color="white" size={8} /> : "Get Video"}
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center mt-8">
          {data?.data?.[0]?.thumbnail && (
            <div className="relative w-[300px] h-[300px] mb-6 rounded-lg overflow-hidden bg-gray-400">
              <Image
                src={data.data[0].thumbnail}
                alt="Video thumbnail"
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          <div className="flex gap-4">
            <button
              onClick={handleDownload}
              disabled={isDownloading || !data?.data?.[0]?.url}
              className={`h-12 w-48 rounded-[20px] bg-black hover:scale-105 duration-300 ${
                isDownloading || !data?.data?.[0]?.url ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isDownloading ? <RiseLoader color="white" size={8} /> : "Download Video"}
            </button>
            <button
              onClick={handleReset}
              disabled={isDownloading}
              className={`h-12 w-48 rounded-[20px] bg-gray-600 hover:scale-105 duration-300 ${
                isDownloading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Try Another
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
