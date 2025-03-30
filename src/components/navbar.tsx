import { IoMenu } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className="bg-white ">
      <div className="h-18 w-[90%] flex flex-wrap items-center justify-between mx-auto ">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-xl font-light whitespace-nowrap text-black">
            Devsnest
          </span>
        </a>
        <div className="inline-flex md:hidden text-3xl text-black">
          <IoMenu />
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col md:flex-row md:items-center p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-black ">
            <li>
              <a
                href="#"
                className="block py-2 px-3  text-black hover:scale-110 duration-300"
                aria-current="page"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black hover:scale-110 duration-300 ">
                YouTube
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black hover:scale-110 duration-300 ">
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
