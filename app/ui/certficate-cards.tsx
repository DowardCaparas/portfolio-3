import React from "react";
import RedirectButton from "./redirect-button";
import Image from "next/image";
import { CertificateTypes } from "../lib/types";

const CertificateCards = ({
  name,
  organization,
  orglogo,
  url,
  image,
  date,
  skills,
  description,
}: CertificateTypes) => {
  return (
    <div className="flex justify-between max-md:flex-col items-start gap-5 text-sm mt-5 bg-white 
    dark:bg-[#313131] shadow-sm p-5 rounded-lg hover:shadow-gray-400 transition">
       <Image
        src={orglogo}
        alt={organization}
        width={50}
        height={50}
      />
      <div className="inline-grid max-md:text-sm w-full">
        <span className="font-semibold text-lg">{name}</span>
        <span>{organization}</span>
        <span>Issued {date}</span>
        <div className="text-wrap mt-4 mb-3 md:w-[50%]">
          <span className="font-medium">Skills: </span>
          {skills.map((skill, i) => (
            <span key={skill}>
              {skill}
              {i < skills.length - 1 && " · "}
            </span>
          ))}
        </div>
        <div className="inline-grid space-y-2">
          <div className="h-16">
            <Image
              src={image}
              alt={name}
              width={100}
              height={100}
              className="rounded-md h-full"
            />
          </div>
          <span className="md:w-[50%]">{description}</span>
        </div>
      </div>
      <RedirectButton
          url={url}
          label="Show credential"
          image="/arrowup.svg"
        />
    </div>
  );
};

export default CertificateCards;
