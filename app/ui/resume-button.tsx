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
      className="p-2 bg-gray-200 text-black font-medium rounded-lg
      flex items-center gap-2 cursor-pointer hover:bg-gray-300 active:bg-gray-400
      ring ring-gray-400"
    >
      <Image src="/file.svg" alt="file icon" width={20} height={20} />
      Resume
    </button>
  );
};

export default ResumeButton;
