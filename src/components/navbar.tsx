"use client";

import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { IoMenu } from "react-icons/io5";

interface state {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: state) {
  return (
    <nav className="bg-white z-20 relative">
      {" "}
      <div className="h-18 w-[90%] flex flex-wrap items-center justify-between mx-auto">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-xl font-light whitespace-nowrap text-black">
            Devsnest
          </span>
        </Link>
        <div
          className="inline-flex md:hidden text-3xl text-black cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <IoMenu />
        </div>
        <div className="hidden md:block">
          <ul className="font-medium flex flex-col md:flex-row md:items-center p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-black">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-black"
                aria-current="page"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link href="/youtube" className="block py-2 px-3 text-black">
                YouTube
              </Link>
            </li>
            <li>
              <Link href="/tiktok" className="block py-2 px-3 text-black">
                TikTok
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
