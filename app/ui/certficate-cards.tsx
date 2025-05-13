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
    <>
      <div className="flex items-start gap-2 text-sm mt-5">
        <Image
          src={orglogo}
          alt={organization}
          width={50}
          height={50}
          className="border border-[#252525]"
        />
        <div className="inline-grid max-md:text-sm">
          <span className="font-semibold text-lg">{name}</span>
          <span>{organization}</span>
          <span>Issued {date}</span>
          <div className="text-wrap mt-4 mb-3">
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
            <span>{description}</span>
          </div>
        </div>
      </div>
      <div className="ml-14 mt-5">
        <RedirectButton
          url={url}
          label="Show credential"
          image="/arrowup.svg"
        />
      </div>
    </>
  );
};

export default CertificateCards;
