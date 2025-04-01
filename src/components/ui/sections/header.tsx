export default function Header({ platform, description, bgColor }: any) {
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
            name=""
            id=""
            placeholder={`Input ${platform} link URL`}
          />
          <button className=" h-8 w-[60px] text-black rounded-[10px] bg-gray-300 hover:scale-105 duration-300 ">
            Paste
          </button>
        </div>
        <button className=" h-12 w-25 rounded-[20px] bg-black hover:scale-105 mt-[25px] md:mt-0 duration-300 ">
          Download
        </button>
      </div>
    </div>
  );
}
