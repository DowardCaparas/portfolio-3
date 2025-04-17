"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../lib/constants";
import { useEffect, useState } from "react";

const NavBar = () => {
  const pathname = usePathname();
  const code = "</>";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <nav
        className={`flex justify-between items-center py-4 lg:px-24 md:px-16 sm:px-8 px-4 mx-auto 
          transition-all duration-150 ease-in border-[#252525] 
          max-w-[1440px] ${
            isScrolled
              ? "bg-[#0A0A0A]/80 backdrop-blur-md border-b"
              : "bg-transparent"
          }`}
      >
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-3xl text-violet-500">{code}</span>
          <span className="font-semibold text-2xl">Doward</span>
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium text-white max-md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.url}
              className={`px-4 py-1 rounded-full ${
                pathname === link.url
                  ? "ring text-white"
                  : "hover:ring-[#585858] hover:ring"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
