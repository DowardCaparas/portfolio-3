"use client";

import Image from "next/image";
import { RedirectButtonTypes } from "../lib/types";

const RedirectButton = ({ url, label, image }: RedirectButtonTypes) => {
  const openNewWindow = (path: string) => {
    window.open(path, "_blank");
  };

  return (
    <button
      onClick={() => openNewWindow(url)}
      aria-label={`redirect user to ${url}`}
      className="flex items-center gap-2 text-center p-2 cursor-pointer ring ring-gray-400
        rounded-lg dark:bg-[#323232] bg-gray-200 dark:hover:bg-[#2c2c2c] active:bg-[#181818]
        hover:bg-gray-300" 
    >
      <Image src={image} alt={label} width={25} height={25} className="bg-black rounded-full p-0.5"/>
      <span
        className="text-center text-sm font-medium"
      >
        {label}
      </span>
    </button>
  );
};

export default RedirectButton;
