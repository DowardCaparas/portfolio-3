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
      className="flex items-center gap-2 text-center p-2 cursor-pointer rounded-lg shadow-md
      dark:bg-[#474747] bg-white dark:hover:bg-[#3b3b3b] active:bg-[#181818] hover:bg-gray-400"
    >
      <Image src="/file.svg" alt="file icon" width={20} height={20} />
      Resume
    </button>
  );
};

export default ResumeButton;
