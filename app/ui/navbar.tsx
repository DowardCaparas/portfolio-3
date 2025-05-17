"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./theme-toggle";
import { NavLinksTypes } from "../lib/types";
import {
  CircleUserRound,
  House,
  LayoutPanelLeft,
  FileText,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const navLinks: NavLinksTypes[] = [
  {
    label: "Home",
    url: "/",
    icon: House,
  },
  {
    label: "About",
    url: "/about",
    icon: CircleUserRound,
  },
  {
    label: "Certificates",
    url: "/certificates",
    icon: FileText,
  },
  {
    label: "Projects",
    url: "/projects",
    icon: LayoutPanelLeft,
  },
];

const NavBar = () => {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav
        className="ring ring-gray-300 dark:ring-[#3F3F3F] dark:bg-[#0A0A0A] 
        bg-gray-100 p-4 mx-auto gap-2 fixed top-0 z-30 right-0 left-0 
        flex justify-between items-center"
      >
        <h3 className="font-bold text-2xl">Doward</h3>

        <div className="flex gap-2 max-md:hidden">
          {navLinks.map((link, index) => (
            <div key={link.label} className="flex gap-2 items-center">
              <Link
                href={link.url}
                className={`text-sm py-1.5 px-3 rounded-lg flex gap-1 items-center
                  transition duration-150 ease-out 
                  ${
                    pathname === link.url
                      ? "ring-2 ring-green-300 dark:bg-[#282e2c]"
                      : `hover:ring hover:ring-[#575757] dark:hover:bg-[#161f1c] 
                      active:scale-95 hover:bg-gray-200`
                  }
                `}
              >
                <link.icon size={18} />
                {link.url !== "/" && (
                  <span className="font-medium">{link.label}</span>
                )}
              </Link>
              {index === 0 && <span className="text-gray-500">|</span>}
            </div>
          ))}
        </div>

        <div className="max-md:hidden">
          <ThemeToggle />
        </div>

        <button
          onClick={() => setIsModalOpen((prev) => !prev)}
          className="cursor-pointer z-40 hidden max-md:block"
        >
          {isModalOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Nav Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] bg-gray-100 dark:bg-[#0A0A0A] 
          shadow-lg transform z-20 transition-transform duration-300 ease-in-out hidden
          max-md:block
          ${isModalOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col p-6 pt-24 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.url}
              onClick={() => setIsModalOpen(false)}
              className={`flex items-center gap-3 text-sm font-medium p-2 rounded-lg
                ${
                  pathname === link.url
                    ? "ring-2 ring-green-300 dark:bg-[#282e2c]"
                    : `hover:ring hover:ring-[#575757] dark:hover:bg-[#161f1c] 
                    hover:bg-gray-200`
                }
              `}
            >
              <link.icon size={20} />
              {link.label}
            </Link>
          ))}

          <div className="mt-4">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Overlay for closing the panel */}
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10
          hidden max-md:block"
          onClick={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default NavBar;
