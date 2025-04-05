import Image from "next/image";

interface props {
  primaryColor: string;
}

export default function BestQuality({ primaryColor }: props) {
  return (
    <div className=" flex flex-col items-center justify-center h-auto min-h-150 w-[90%] max-w-300 mt-20 md:mt-0 ">
      <div className=" h-auto w-full flex flex-col items-center">
        <h2 className={` text-4xl text-center font-semibold ${primaryColor}`}>
          Only the best <br className="inline-flex md:hidden" /> Quality
        </h2>
        <p className=" text-black/70 text-center mt-4 ">
          We’ve taken all the best <br className=" inline-flex md:hidden" />{" "}
          attributes a downloader can <br className="hidden md:inline-flex" />{" "}
          have <br className=" inline-flex md:hidden" /> and placed them in ours
        </p>
        <div className=" w-full grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mt-14 md:mt-20 text-black">
          <div className=" flex flex-col items-center ">
            <div className=" h-25 w-25 flex flex-col items-center justify-center text-xl top-14 text-white font-medium rounded-[18px] bg-[#EE2A7B]/10">
              <div className=" bottom-[-22px] right-9.5 w-10 ">
                <Image
                  src="/icons/time.png"
                  alt="Profile Picture"
                  width={500}
                  height={400}
                  quality={80} // Optimizes file size without major quality loss
                  className="object-cover" // Ensures proper scaling
                />
              </div>
            </div>
            <h2 className={` text-lg font-normal ${primaryColor} mt-10 `}>
              Fast and Quick
            </h2>
            <p className=" text-black/70 text-sm text-center mt-2 ">
              Download your media <br /> file in seconds
            </p>
          </div>
          <div className=" flex flex-col items-center ">
            <div className=" h-25 w-25 flex flex-col items-center justify-center text-xl top-14 text-white font-medium rounded-[18px] bg-[#EE2A7B]/10">
              <div className=" bottom-[-22px] right-9.5 w-10 ">
                <Image
                  src="/icons/home-secure.png"
                  alt="Profile Picture"
                  width={500}
                  height={400}
                  quality={80} // Optimizes file size without major quality loss
                  className="object-cover" // Ensures proper scaling
                />
              </div>
            </div>
            <h2 className={` text-lg font-normal ${primaryColor} mt-10 `}>
              Secure
            </h2>
            <p className=" text-black/70 text-sm text-center mt-2 ">
              Your privacy is <br /> protected and secure
            </p>
          </div>
          <div className=" flex flex-col items-center ">
            <div className=" h-25 w-25 flex flex-col items-center justify-center text-xl top-14 text-white font-medium rounded-[18px] bg-[#EE2A7B]/10">
              <div className=" bottom-[-22px] right-9.5 w-10 ">
                <Image
                  src="/icons/hd.png"
                  alt="Profile Picture"
                  width={500}
                  height={400}
                  quality={80} // Optimizes file size without major quality loss
                  className="object-cover" // Ensures proper scaling
                />
              </div>
            </div>
            <h2 className={` text-lg font-normal ${primaryColor} mt-10 `}>
              Top Quality
            </h2>
            <p className=" text-black/70 text-sm text-center mt-2 ">
              Your media quality will <br /> not be compressed
            </p>
          </div>
          <div className=" flex flex-col items-center ">
            <div className=" h-25 w-25 flex flex-col items-center justify-center text-xl top-14 text-white font-medium rounded-[18px] bg-[#EE2A7B]/10">
              <div className=" bottom-[-22px] right-9.5 w-10 ">
                <Image
                  src="/icons/mouse.png"
                  alt="Profile Picture"
                  width={500}
                  height={400}
                  quality={80} // Optimizes file size without major quality loss
                  className="object-cover" // Ensures proper scaling
                />
              </div>
            </div>
            <h2 className={` text-lg font-normal ${primaryColor} mt-10 `}>
              Simply and Easy
            </h2>
            <p className=" text-black/70 text-sm text-center mt-2 ">
              The processes are <br /> effortless and simple
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
