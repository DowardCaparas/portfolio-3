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
      className="flex items-center gap-2 text-center p-2 cursor-pointer rounded-lg shadow-md
      dark:bg-[#474747] bg-white dark:hover:bg-[#3b3b3b] active:bg-[#181818] hover:bg-gray-400"
    >
      <Image src={image} alt={label} width={25} height={25} />
      <span className="text-center text-sm font-medium">{label}</span>
    </button>
  );
};

export default RedirectButton;
