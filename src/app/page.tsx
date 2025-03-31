import Footer from "@/components/footer";
import BestQuality from "@/components/home/bestquality";
import DownloadFrom from "@/components/home/downloadfrom";
import Header from "@/components/home/header";
import HowitWorks from "@/components/home/howitworks";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-white">
      <Header />
      <HowitWorks />
      <BestQuality />
      <DownloadFrom />
      <Footer />
    </div>
  );
}
