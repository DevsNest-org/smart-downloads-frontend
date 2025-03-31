import BestQuality from "@/components/home/bestquality";
import Header from "@/components/home/header";
import HowitWorks from "@/components/home/howitworks";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center w-[90%]">
        <Header />
      </div>
      <HowitWorks />
      <BestQuality />
    </div>
  );
}
