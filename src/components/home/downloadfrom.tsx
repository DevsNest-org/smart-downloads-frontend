import Image from "next/image";

export default function DownloadFrom() {
  return (
    <div className=" flex flex-col items-center justify-center h-auto min-h-150 w-[90%] max-w-250 mt-20 md:mt-0 ">
      <div className=" h-auto w-full flex flex-col lg:flex-row justify-between ">
        <div className=" w-full flex flex-col">
          <h1 className=" text-4xl font-semibold text-[#1E1E1E]/60">
            Download from <br className=" hidden md:inline-flex " />{" "}
            <span className="text-[#1E1E1E]">TikTok</span> and{" "}
            <span className="text-[#FF0000]">YouTube</span>
          </h1>
          <p className=" text-black/70 mt-4 ">
            Download video and audio files from Tiktok and{" "}
            <br className=" hidden md:inline-flex " /> Youtube
          </p>
        </div>
        <div className=" w-full flex flex-col mt-12 lg:mt-0 ">
          <div className=" relative h-45 w-full flex flex-col justify-end rounded-[20px] bg-black">
            <div className="absolute top-4 right-4 flex flex-col items-center justify-center  h-10 w-10 rounded-full bg-white ">
              <div className="w-12">
                <Image
                  src="icons/arrow-tiktok.png"
                  alt="Profile Picture"
                  width={500}
                  height={400}
                  quality={80} // Optimizes file size without major quality loss
                  className="object-cover" // Ensures proper scaling
                />
              </div>
            </div>
            <h1 className="absolute bottom-5 left-5 text-xl font-medium ">
              TikTok Downloader
            </h1>
          </div>
          <div className=" relative h-45 w-full flex flex-col justify-end rounded-[20px] mt-6 bg-[#FF0000]">
            <div className="absolute top-4 right-4 flex flex-col items-center justify-center  h-10 w-10 rounded-full bg-white ">
              <div className="w-12">
                <Image
                  src="icons/arrow-yt.png"
                  alt="Profile Picture"
                  width={500}
                  height={400}
                  quality={80} // Optimizes file size without major quality loss
                  className="object-cover" // Ensures proper scaling
                />
              </div>
            </div>
            <h1 className="absolute bottom-5 left-5 text-white text-xl font-medium ">
              TikTok Downloader
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
