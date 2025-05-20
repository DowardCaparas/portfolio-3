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
      className="flex items-center gap-2 text-center p-2 cursor-pointer rounded-lg
    bg-black hover:opacity-85 text-white active:scale-95 shadow-md"
    >
      <Image src={image} alt={label} width={18} height={18} />
      <span className="text-center text-sm font-medium">{label}</span>
    </button>
  );
};

export default RedirectButton;
