"use client";

import Image from "next/image";
import { RedirectButtonTypes } from "../lib/types";

const RedirectButton = ({
  url,
  label,
  image,
}: RedirectButtonTypes) => {
  const openNewWindow = (path: string) => {
    window.open(path, "_blank");
  };

  return (
    <button
      onClick={() => openNewWindow(url)}
      aria-label={`redirect user to ${url}`}
      className="flex items-center gap-2 px-4 text-center py-2 cursor-pointer 
        rounded-lg bg-[#323232] hover:bg-[#2c2c2c] active:bg-[#181818]
        transition duration-150 ease-in"
    >
      <Image src={image} alt={label} width={25} height={25} />
      <span className="text-center">{label}</span>
    </button>
  );
};

export default RedirectButton;
