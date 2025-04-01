"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const navLinksRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen && navLinksRef.current) {
      navLinksRef.current.style.transition =
        "transform 0.3s ease-in-out, opacity 0.3s ease-in-out";
      navLinksRef.current.style.transform = "translateY(0)";
      navLinksRef.current.style.opacity = "1";
    } else if (navLinksRef.current) {
      navLinksRef.current.style.transition =
        "transform 0.3s ease-in-out, opacity 0.3s ease-in-out";
      navLinksRef.current.style.transform = "translateY(-100%)";
      navLinksRef.current.style.opacity = "0";
    }
  }, [isOpen]);

  return (
    <>
      {/* Overlay (Covers Fullscreen) */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-50 z-0" : "opacity-0 -z-10"
        }`}
        onClick={onClose} // Clicking outside closes the menu
      ></div>

      {/* Mobile Menu */}
      <div
        ref={navLinksRef}
        className={`w-full transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } absolute top-18 left-0 bg-white z-10 md:hidden`}
      >
        <ul className="font-medium flex flex-col p-4 mt-4 text-black">
          <li
            className={`transition-all duration-500 ease-in-out ${
              isOpen
                ? "translate-x-0 opacity-100 delay-200"
                : "translate-x-full opacity-0"
            }`}
          >
            <Link href="/" className="block py-2 px-3 text-black">
              Instagram
            </Link>
          </li>
          <li
            className={`transition-all duration-500 ease-in-out ${
              isOpen
                ? "translate-x-0 opacity-100 delay-300"
                : "translate-x-full opacity-0"
            }`}
          >
            <Link href="/youtube" className="block py-2 px-3 text-black">
              YouTube
            </Link>
          </li>
          <li
            className={`transition-all duration-500 ease-in-out ${
              isOpen
                ? "translate-x-0 opacity-100 delay-400"
                : "translate-x-full opacity-0"
            }`}
          >
            <Link href="/tiktok" className="block py-2 px-3 text-black">
              TikTok
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
