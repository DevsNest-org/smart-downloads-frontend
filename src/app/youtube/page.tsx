import Header from "@/components/ui/sections/header";
import BestQuality from "@/components/ui/sections/bestquality";
import DownloadFrom from "@/components/ui/sections/downloadfrom";
import HowitWorks from "@/components/ui/sections/howitworks";

export default function Youtube() {
  return (
    <div className="flex flex-col items-center bg-white">
      <Header
        platform="Youtube"
        description={
          <>
            Download YouTube <br className="block md:hidden" /> videos and audio{" "}
            <br className="block md:hidden" /> in mp3{" "}
            <br className="hidden md:inline-flex" /> and mp4.
          </>
        }
        bgColor={
          "bg-linear-105 md:bg-linear-125 from-[#FF0000] from-20% to-[#E50000] to-85%"
        }
      />
      <HowitWorks
        primaryColor={"text-[#FF0000]"}
        bgColor={
          " bg-linear-105 md:bg-linear-135 from-[#FF0000] from-10% to-[#070707] to-70%"
        }
      />
      <BestQuality primaryColor={"text-[#FF0000]"} />
      <DownloadFrom
        link1={"/tiktok"}
        platform1={"TikTok"}
        platform1Color={"black"}
        platform1Icon={"/icons/arrow-tiktok.png"}
        link2={"/"}
        platform2={"Instagram"}
        platform2Color={"purple"}
        platform2Icon={"/icons/arrow-insta.png"}
      />{" "}
    </div>
  );
}
