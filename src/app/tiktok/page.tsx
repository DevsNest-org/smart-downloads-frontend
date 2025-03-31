import Header from "@/components/ui/sections/header";
// import BestQuality from "@/components/ui/sections/bestquality";
// import DownloadFrom from "@/components/ui/sections/downloadfrom";
// import HowitWorks from "@/components/ui/sections/howitworks";

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
      {/* <HowitWorks />
      <BestQuality />
      <DownloadFrom /> */}
    </div>
  );
}
