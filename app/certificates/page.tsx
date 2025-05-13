import React from "react";
import CertificateCards from "../ui/certficate-cards";
import { certificates } from "../lib/constants";

const Certificates = () => {
  return (
    <div className="lg:px-12 md:px-8 px-4 transition my-28">
      <h3 className="md:text-4xl text-2xl font-bold mb-2">My Certficates</h3>
      <span className="md:text-lg">
        I earned all of these certificates from free online courses.
      </span>
      <div className="mt-20 px-5">
        {/* import certificates */}
        {certificates.map((cert) => (
          <div key={cert.name}>
            <CertificateCards
              name={cert.name}
              organization={cert.organization}
              orglogo={cert.orglogo}
              url={cert.url}
              image={cert.image}
              date={cert.date}
              skills={cert.skills}
              description={cert.description}
            />
            <hr className="mt-5 text-[#252525]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
