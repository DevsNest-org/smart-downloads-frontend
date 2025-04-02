import BestQuality from "@/components/ui/sections/bestquality";
import DownloadFrom from "@/components/ui/sections/downloadfrom";
import Header from "@/components/ui/sections/header";
import HowitWorks from "@/components/ui/sections/howitworks";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-white">
      <Header
        platform="Instagram"
        description={
          <>
            Download Instagra <br className="block md:hidden" /> videos,
            pictures, reels, <br className="hidden md:inline-flex" /> IGTV{" "}
            <br className="block md:hidden" /> and carousel.
          </>
        }
        bgColor={
          "bg-linear-105 md:bg-linear-125 from-[#F9CE34] from-10% via-[#EE2A7B] via-40%  to-[#6228D7] to-70%"
        }
      />
      <HowitWorks
        primaryColor={"text-purple"}
        bgColor={
          " bg-linear-105 md:bg-linear-125 from-[#EE2A7B] from-10% to-[#6228D7] to-70%"
        }
      />
      <BestQuality primaryColor={"text-purple"} />
      <DownloadFrom
        link1={"/tiktok"}
        platform1={"TikTok"}
        platform1TextColor={"text-black"}
        platform1BgColor={"bg-black"}
        platform1Icon={`${process.env.NEXT_PUBLIC_BASE_PATH}/icons/arrow-tiktok.png`}
        link2={"/youtube"}
        platform2={"YouTube"}
        platform2TextColor={"text-[#FF0000]"}
        platform2Icon={`${process.env.NEXT_PUBLIC_BASE_PATH}/icons/arrow-yt.png`}
        platform2BgColor={"bg-[#FF0000]"}
      />
    </div>
  );
}
