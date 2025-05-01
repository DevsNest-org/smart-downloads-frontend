"use client";

import { ReactElement, useState } from "react";
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
  const { downloadVideo, initiateDownload, resetState, isLoading, data } =
    useDownload();
  const [showThumbnail, setShowThumbnail] = useState(false);

  const handlePaste = async () => {
    const text = await navigator.clipboard.readText();
    setInputValue(text);
  };

  const handleFetchVideo = async () => {
    if (!inputValue) return;
    const response = await downloadVideo(platform.toLowerCase(), inputValue);
    if (response?.status) {
      setShowThumbnail(true);
    }
  };

  const handleDownload = () => {
    initiateDownload(platform.toLowerCase());
  };

  const handleReset = () => {
    resetState();
    setShowThumbnail(false);
    setInputValue("");
  };

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
              className="h-8 w-[60px] text-black rounded-[10px] bg-gray-300 hover:scale-105 duration-300 active:scale-95"
            >
              Paste
            </button>
          </div>
          <button
            onClick={handleFetchVideo}
            onTouchEnd={handleFetchVideo}
            disabled={isLoading || !inputValue}
            className={`h-12 w-25 rounded-[20px] bg-black hover:scale-105 active:scale-95 mt-[25px] md:mt-0 duration-300 min-w-[120px] touch-manipulation ${
              isLoading || !inputValue ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? <RiseLoader color="white" size={8} /> : "Get Video"}
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center mt-8">
          {data?.data?.[0]?.thumbnail && (
            <div className="relative w-[30vh] md:w-[300px] h-[20vh] md:h-[300px] mb-6 rounded-lg overflow-hidden bg-gray-400">
              <Image
                src={data.data[0].thumbnail}
                alt="Video thumbnail"
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="flex gap-4">
            <button
              onClick={handleDownload}
              onTouchEnd={handleDownload}
              className="h-12 w-40 md:w-48 rounded-[20px] bg-black hover:scale-105 active:scale-95 duration-300 touch-manipulation"
            >
              Download Video
            </button>
            <button
              onClick={handleReset}
              onTouchEnd={handleReset}
              className="h-12 w-40 md:w-48 rounded-[20px] bg-gray-600 hover:scale-105 active:scale-95 duration-300 touch-manipulation"
            >
              Try Another
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
