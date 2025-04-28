"use client";

import { useState } from "react";
import { useDownload } from "@/context/DownloadContext";

export default function Header({ platform, description, bgColor }: any) {
  const [inputValue, setInputValue] = useState("");
  const { downloadVideo, isLoading } = useDownload();

  const handlePaste = async () => {
    // if (!navigator.clipboard) {
    //   throw new Error('Clipboard API not available');
    // }
    const text = await navigator.clipboard.readText();
    setInputValue(text);
  };

  const handleDownload = async () => {
    if (!inputValue) return;
    await downloadVideo(platform.toLowerCase(), inputValue);
  };

  return (
    <div
      className={` flex flex-col items-center justify-center  h-[90dvh] w-[90%] rounded-[44px] text-center ${bgColor} `}
    >
      <h1 className="text-5xl md:text-5xl font-bold leading-18">
        Download <br className="block md:hidden" /> from{" "}
        <br className="block md:hidden" />{" "}
        <br className="hidden md:inline-flex" /> {platform}
      </h1>
      <p className=" text-lg md:text-base  mt-6 ">{description}</p>
      <div className=" flex flex-col md:flex-row items-center mt-8 ">
        <div className="flex items-center rounded-[20px] pr-2 mr-0 md:mr-[14px] bg-white ">
          <input
            className="h-12 w-50 md:w-70 pl-4 pr-4 focus:outline-none text-black placeholder:text-gray-400  "
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={`Input ${platform} link URL`}
          />
          <button
            onClick={handlePaste}
            className=" h-8 w-[60px] text-black rounded-[10px] bg-gray-300 hover:scale-105 duration-300 "
          >
            Paste
          </button>
        </div>
        <button
          onClick={handleDownload}
          disabled={isLoading || !inputValue}
          className={`h-12 w-25 rounded-[20px] bg-black hover:scale-105 mt-[25px] md:mt-0 duration-300 ${
            isLoading || !inputValue ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Downloading..." : "Download"}
        </button>
      </div>
    </div>
  );
}
