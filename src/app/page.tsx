import Header from "@/components/home/header";
import Howitworks from "@/components/home/howitworks";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center w-[90%]">
        <Header />
      </div>
      <Howitworks />
    </div>
  );
}
