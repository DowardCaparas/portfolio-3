"use client";

import React from "react";
import { File } from "lucide-react";

const ResumeButton = () => {
  const openNewWindow = (path: string) => {
    window.open(path, "_blank");
  };

  return (
    <button
      onClick={() => openNewWindow("/files/Dounhuward_Caparas_Resume.pdf")}
      aria-label="open Dounhuward Caparas resume in new window"
        className="flex items-center gap-2 text-center p-2 cursor-pointer rounded-md
    dark:bg-black bg-[#333] hover:opacity-80 text-white active:scale-95 shadow-md ring-2 
    dark:ring-[#333] ring-black hover:scale-102"
    >
      <File size={18}/>
      <span className="text-center text-sm font-medium">Resume</span>
    </button>
  );
};

export default ResumeButton;
