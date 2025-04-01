export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className=" flex flex-col items-center h-auto w-full py-16 text-black/75 bg-[#D9D9D9] ">
      <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-xl font-normal whitespace-nowrap">
          Devsnest
        </span>
      </a>
      <ul className="font-medium mt-6 mb-2 flex flex-col md:flex-row items-center md:space-x-8 rtl:space-x-reverse md:border-0 ">
        <li>
          <a
            href="/"
            className="block py-2 px-3 font-normal text-black/75"
            aria-current="page"
          >
            Instagram Downloader
          </a>
        </li>
        <li>
          <a
            href="/youtube"
            className="block py-2 px-3 font-normal text-black/75 "
          >
            YouTube Downloader
          </a>
        </li>
        <li>
          <a
            href="/tiktok"
            className="block py-2 px-3 font-normal text-black/75 "
          >
            TikTok Downloader
          </a>
        </li>
      </ul>
      <ul className="font-medium mt-2 md:mt-0 mb-6 flex flex-col md:flex-row items-center md:space-x-8 rtl:space-x-reverse md:border-0 ">
        {" "}
        <li>
          <a href="#" className="block py-2 px-3 font-normal text-black/75 ">
            Terms and Conditions
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 font-normal text-black/75 ">
            Contact Us
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 font-normal text-black/75 ">
            Privacy Policy
          </a>
        </li>
      </ul>
      <p>Copyright {currentYear} | All Rights Reserved</p>
    </div>
  );
}
