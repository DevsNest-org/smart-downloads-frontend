import Image from "next/image";

export default function DownloadFrom({
  platform1,
  platform1Color,
  platform2,
  platform2Color,
  platform1Icon,
  platform2Icon,
}: any) {
  return (
    <div className=" flex flex-col items-center justify-center h-auto min-h-150 w-[90%] max-w-250 my-20 md:mt-0 lg:my-0 ">
      <div className=" h-auto w-full flex flex-col lg:flex-row justify-between ">
        <div className=" w-full flex flex-col">
          <h1 className=" text-4xl font-semibold text-[#1E1E1E]/60">
            Download from <br className=" hidden md:inline-flex " />{" "}
            <span className={`text-${platform1Color}`}>{ platform1 }</span> and{" "}
            <span className={`text-${platform2Color}`}>{ platform2 }</span>
          </h1>
          <p className=" text-black/70 mt-4 ">
            Download video and audio files from Tiktok and{" "}
            <br className=" hidden md:inline-flex " /> Youtube
          </p>
        </div>
        <div className=" w-full flex flex-col mt-12 lg:mt-0 ">
          <a
            href="#"
            className={` relative h-45 w-full flex flex-col justify-end rounded-[20px] bg-${platform1Color}`}
          >
            <div className="absolute top-4 right-4 flex flex-col items-center justify-center  h-10 w-10 rounded-full bg-white ">
              <div className="w-12">
                <Image
                  src={platform1Icon}
                  alt="Profile Picture"
                  width={500}
                  height={400}
                  quality={80} // Optimizes file size without major quality loss
                  className="object-cover" // Ensures proper scaling
                />
              </div>
            </div>
            <h1 className="absolute bottom-5 left-5 text-xl font-medium ">
              {platform1} Downloader
            </h1>
          </a>
          <a
            href="#"
            className={` relative h-45 w-full flex flex-col justify-end rounded-[20px] mt-6 bg-${platform2Color}`}
          >
            <div className="absolute top-4 right-4 flex flex-col items-center justify-center  h-10 w-10 rounded-full bg-white ">
              <div className="w-12">
                <Image
                  src={platform2Icon}
                  alt="Profile Picture"
                  width={500}
                  height={400}
                  quality={80} // Optimizes file size without major quality loss
                  className="object-cover" // Ensures proper scaling
                />
              </div>
            </div>
            <h1 className="absolute bottom-5 left-5 text-white text-xl font-medium ">
              {platform2} Downloader
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
}
