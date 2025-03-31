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
      <HowitWorks />
      <BestQuality />
      <DownloadFrom />
    </div>
  );
}
