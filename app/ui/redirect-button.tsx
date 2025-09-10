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
      className="flex items-center gap-2 text-center p-2 cursor-pointer rounded-md 
    bg-[#c8ffdd] hover:opacity-80 text-black active:scale-95 ring
  ring-[#43ab6b] hover:scale-102"
    >
      <Image src={image} alt={label} width={18} height={18} />
      <span className="text-center text-xs font-bold">{label}</span>
    </button>
  );
};

export default RedirectButton;
