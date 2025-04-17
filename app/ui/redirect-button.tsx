"use client";

import Image from "next/image";
import { RedirectButtonTypes } from "../lib/types";
import { usePathname } from "next/navigation";

const RedirectButton = ({ url, label, image }: RedirectButtonTypes) => {
  const openNewWindow = (path: string) => {
    window.open(path, "_blank");
  };

  const pathname = usePathname();

  return (
    <button
      onClick={() => openNewWindow(url)}
      aria-label={`redirect user to ${url}`}
      className="flex items-center gap-2 text-center p-2 cursor-pointer 
        rounded-lg bg-[#323232] hover:bg-[#2c2c2c] active:bg-[#181818]
        transition duration-150 ease-in"
    >
      <Image src={image} alt={label} width={20} height={20} />
      <span
        className={`text-center text-sm font-medium ${
          pathname === "/about" && "max-md:hidden"
        }`}
      >
        {label}
      </span>
    </button>
  );
};

export default RedirectButton;
