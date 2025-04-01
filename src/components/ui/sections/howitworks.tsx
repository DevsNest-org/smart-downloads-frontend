import Image from "next/image";

export default function HowitWorks({ primaryColor, bgColor }: any) {
  return (
    <div className=" flex flex-col items-center justify-center h-auto min-h-150 w-[90%] max-w-300 mt-20 md:mt-20 ">
      <div className=" h-auto w-full flex flex-col items-center">
        <h1 className={` text-4xl font-semibold ${primaryColor} `}>
          How it works
        </h1>
        <p className=" text-black/70 text-center mt-2 ">
          Follow these simple steps to <br className=" inline-flex md:hidden" />{" "}
          download your videos, <br className="hidden md:inline-flex" /> reels,
          and
          <br className=" inline-flex md:hidden" />
          pictures from Instagram
        </p>
        <div className=" w-full flex flex-col md:flex-row items-center justify-between flex-wrap gap-10 md:gap-8 mt-14 md:mt-20 text-black ">
          <div className=" flex flex-col">
            <div className=" relative h-50 w-80  flex flex-col justify-center items-end rounded-[18px] bg-gray-100/50">
              <p className=" absolute top-4 left-4 text-red-400 rounded-full py-1 px-3 bg-white">
                1
              </p>
              <p className="py-2 px-4 text-sm text-black/50 rounded-full bg-gray-300/60">
                Copied
              </p>
              <div className=" py-5 pl-5 rounded-l-[20px] mt-1 bg-white ">
                <h1 className=" text-xl text-black/50 bg-sky-blue ">
                  www.instagram.com/p/Dvrmr
                </h1>
              </div>
            </div>
            <h1 className={` text-lg font-normal ${primaryColor}  mt-10 `}>
              Copy the URL
            </h1>
            <p className=" text-black/70 text-sm mt-2 ">
              Open your Instagram app or website, <br /> copy the URL or Share
              link of the media
            </p>
          </div>
          <div className=" relative flex flex-col ">
            <div className=" flex items-center h-50 w-80 rounded-[18px] bg-gray-100/50 ">
              <p className=" absolute top-4 left-4 text-red-400 rounded-full py-1 px-3 bg-white">
                2
              </p>
              <div className=" flex items-center py-2 pr-2 rounded-r-[20px] bg-white ">
                <h1 className=" text-xl text-black/50 mr-14 bg-sky-blue ">
                  vrmr
                </h1>
                <div
                  className={`relative py-4 px-8 text-xl text-white font-medium rounded-[25px] ${bgColor}`}
                >
                  Paste
                  <div className="absolute bottom-[-22px] right-5.5 w-10 ">
                    <Image
                      src="icons/select-hand-guesture.png"
                      alt="Profile Picture"
                      width={500}
                      height={400}
                      quality={80} // Optimizes file size without major quality loss
                      className="object-cover" // Ensures proper scaling
                    />
                  </div>
                </div>
              </div>
            </div>
            <h1 className={` text-lg font-normal ${primaryColor}  mt-10 `}>
              Paste the link
            </h1>
            <p className=" text-black/70 text-sm mt-2 ">
              Come to the webapp, paste the link and <br /> click the Download
              button
            </p>
          </div>
          <div className=" flex flex-col ">
            <div className=" relative flex flex-col items-center h-50 w-80 rounded-[18px] bg-gray-100/50">
              <p className=" absolute top-4 left-4 text-red-400 rounded-full py-1 px-3 bg-white">
                3
              </p>
              <div className="relative py-4 px-8 text-xl top-14 text-white font-medium rounded-[25px] bg-black">
                Download
                <div className="absolute bottom-[-22px] right-9.5 w-10 ">
                  <Image
                    src="icons/select-hand-guesture.png"
                    alt="Profile Picture"
                    width={500}
                    height={400}
                    quality={80} // Optimizes file size without major quality loss
                    className="object-cover" // Ensures proper scaling
                  />
                </div>
              </div>
            </div>
            <h1 className={` text-lg font-normal ${primaryColor}  mt-10 `}>
              Download
            </h1>
            <p className=" text-black/70 text-sm mt-2 ">
              Choose your preferred quality type and <br /> download into your
              device
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
