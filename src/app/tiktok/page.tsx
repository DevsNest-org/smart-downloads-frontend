import Header from "@/components/ui/sections/header";
import BestQuality from "@/components/ui/sections/bestquality";
import DownloadFrom from "@/components/ui/sections/downloadfrom";
import HowitWorks from "@/components/ui/sections/howitworks";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig?.basePath || "";

export default function Tiktok() {
  return (
    <div className="flex flex-col items-center bg-white">
      <Header
        platform="Tiktok"
        description={
          <>
            Download Tiktok short <br className="block md:hidden" /> and long
            videos, and <br className="block md:hidden" />{" "}
            <br className="hidden md:inline-flex" /> pictures in great quality.
          </>
        }
        bgColor={
          "bg-linear-105 md:bg-linear-125 from-[#FF0050] from-20% to-[#00F2EA] to-85%"
        }
      />
      <HowitWorks
        primaryColor={"text-black"}
        bgColor={
          " bg-linear-105 md:bg-linear-135 from-[#FF0050] from-25% to-[#00F2EA] to-75%"
        }
      />
      <BestQuality primaryColor={"text-black"} />
      <DownloadFrom
        link1={"/youtube"}
        platform1Icon={`${process.env.NEXT_PUBLIC_BASE_PATH}/icons/arrow-yt.png`}
        platform1={"Youtube"}
        platform1TextColor={"text-[#FF0000]"}
        platform1BgColor={"bg-[#FF0000]"}
        link2={"/"}
        platform2={"Instagram"}
        platform2TextColor={"text-purple"}
        platform2Icon={`${process.env.NEXT_PUBLIC_BASE_PATH}/icons/arrow-insta.png`}
        platform2BgColor={"bg-purple"}
      />
    </div>
  );
}
