// import Header from "@/components/ui/sections/header";
// import BestQuality from "@/components/ui/sections/bestquality";
// import DownloadFrom from "@/components/ui/sections/downloadfrom";
// import HowitWorks from "@/components/ui/sections/howitworks";
import ComingSoon from "../comingsoon/page";

export default function Tiktok() {
  return (
    <>
      <ComingSoon />
      {/* <div className="flex flex-col items-center bg-white">
        <Header
          platform="Tiktok"
          description={
            <>
              Download Tiktok short <br className="block md:hidden" /> and long
              videos, and <br className="block md:hidden" />{" "}
              <br className="hidden md:inline-flex" /> pictures in great
              quality.
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
          platform1Icon={"/icons/arrow-yt.png"}
          platform1={"Youtube"}
          platform1Color={"[#FF0000]"}
          link2={"/"}
          platform2={"Instagram"}
          platform2Color={"purple"}
          platform2Icon={"/icons/arrow-insta.png"}
        />
      </div> */}
    </>
  );
}
