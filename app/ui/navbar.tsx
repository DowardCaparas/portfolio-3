"use client";

import { navLinks } from "../lib/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="p-5 text-center grid sticky top-0 z-10">
      <div
        className="ring-2 ring-[#3F3F3F] bg-[#0A0A0A] p-1.5 rounded-xl mx-auto 
    space-x-2 col-span-3 flex"
      >
        {navLinks.map((link, index) => (
          <div key={link.label} className="flex gap-2 items-center">
            <Link
              href={link.url}
              className={`text-sm  py-1.5 px-3 rounded-lg flex gap-2 items-center
            transition duration-150 ease-out
              ${
                pathname === link.url
                  ? "ring-2 ring-green-300 bg-[#282e2c]"
                  : "hover:ring hover:ring-[#575757] hover:bg-[#161f1c] active:scale-95"
              }
            `}
            >
              <Image src={link.icon} alt={link.label} width={18} height={18} />
              {link.url !== "/" && <span>{link.label}</span>}
            </Link>
            {index === 0 && <span className="text-gray-500">|</span>}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
