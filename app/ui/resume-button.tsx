"use client";

import Image from "next/image";
import React from "react";

const ResumeButton = () => {
  const openNewWindow = (path: string) => {
    window.open(path, "_blank");
  };

  return (
    <button
      onClick={() => openNewWindow("/files/Dounhuward_Caparas_Resume.pdf")}
      aria-label="open Dounhuward Caparas resume in new window"
      className="px-4 py-2 bg-white text-black font-medium rounded-lg transition 
      flex items-center gap-2 shadow-md shadow-green-300 hover:shadow-none 
      hover:bg-gray-200 active:scale-95  cursor-pointer"
    >
      <Image src="/file.svg" alt="file icon" width={20} height={20} />
      Resume
    </button>
  );
};

export default ResumeButton;
