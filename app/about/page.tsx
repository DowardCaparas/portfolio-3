import Image from "next/image";
import {
  accomplishments,
  certificates,
  socials,
  technicalSkills,
} from "../lib/constants";
import RedirectButton from "../ui/redirect-button";
import ResumeButton from "../ui/resume-button";
import CertificateCards from "../ui/certficate-cards";
import Link from "next/link";

const slicedCertificateArray = certificates.slice(0, 3);

const About = () => (
  <div className="lg:px-12 md:px-8 px-4 transition my-14">
    <div className="grid md:grid-cols-3 grid-cols-1">
      {/* Sidebar */}
      <aside>
        <div className="sticky top-20 flex flex-col items-center gap-6">
          <Image
            src="/images/Doward.webp"
            alt="Doward Caparas"
            width={160}
            height={160}
            className="rounded-full bg-[#000918] border border-[#3F3F3F]"
          />
          <span className="font-medium">Asia/Philippines</span>
          <div className="flex items-center gap-2">
            {["English", "Filipino"].map((lang) => (
              <span
                key={lang}
                className="border border-[#3F3F3F] rounded-full px-4 py-1 text-sm"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </aside>

      {/* Content */}
      <div className="col-span-2 max-md:mt-10">
        <div className="flex flex-col max-md:text-center max-md:items-center">
          <div className="inline-grid space-y-2 mb-6">
            <h1 className="font-bold lg:text-6xl md:text-5xl text-4xl">
              Doward Caparas
            </h1>
            <span className="lg:text-3xl text-2xl text-[#898989] font-medium">
              Web Developer
            </span>
          </div>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <RedirectButton
                key={s.name}
                url={s.url}
                label={s.name}
                image={s.icon}
              />
            ))}
          </div>
        </div>
        <div className="mt-5 flex max-md:justify-center">
          <ResumeButton />
        </div>
        <p className="font-medium md:text-lg mt-14 mb-20 text-justify max-md:px-4">
          👋 Hey there! I&apos;m an aspiring Full Stack Web Developer with a
          strong focus on building clean, responsive, and dynamic web
          applications. I&apos;m currently diving deep into the world of React
          and Next.js, creating sleek front-end interfaces and powerful back-end
          solutions. Always learning, always building—excited about turning
          ideas into real-world applications.
        </p>

        <div className="flex flex-col gap-12">
          {/* Experience */}
          <Section title="Experience">
            <div className="max-md:px-4">
              <div className="flex max-lg:flex-col lg:justify-between lg:items-center gap-4 -mt-7">
                <div className="inline-grid">
                  <span className="font-semibold md:text-xl text-lg">
                    P.IMES
                  </span>
                  <span className="text-sm text-[#08B876] font-medium">
                    Systems and Facility Management Dept. -Intern
                  </span>
                </div>
                <span className="text-[#acacac] font-medium text-sm">
                  Oct 2023 - Dec 2023
                </span>
              </div>
              <ul>
                {accomplishments.map((item) => (
                  <li
                    key={item}
                    className="relative pl-6 mt-5 font-medium before:content-[''] 
                    before:absolute before:left-0 before:top-2 before:w-2 before:h-2 
                    before:rounded-full before:bg-[#08B876] max-md:text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          {/* Technical Skills */}
          <Section title="Technical Skills">
            <div className="inline-grid space-y-8 bg-[#151515] border-2 border-[#252525] px-5 py-7 md:rounded-xl -mt-7">
              {technicalSkills.map((group) => (
                <div key={group.category} className="inline-grid space-y-2">
                  <span className="font-medium md:text-lg">
                    {group.category}
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    {group.skills.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 bg-[#222222] 
                        border-2 border-[#252525] p-4 rounded-xl"
                      >
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={25}
                          height={25}
                        />
                        <span className="text-sm">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Education */}
          <Section title="Education">
            <div className="flex items-start gap-2 -mt-7 max-md:px-4">
              <Image
                src="/images/cvsu.webp"
                alt="cvsu logo"
                width={50}
                height={100}
              />
              <div className="inline-grid space-y-2 max-md:text-sm">
                <span className="font-semibold md:text-lg">
                  Cavite State University - Naic Campus
                </span>
                <span>Bachelor&apos;s degree, Information Technology</span>
                <span className="text-[#acacac]">Sep 2019 - Feb 2024</span>
                <span>GPA: 1.63</span>
              </div>
            </div>
          </Section>

          {/* Certification */}
          <Section title="Certifications">
            {/* import certificates */}
            <div className="inline-grid bg-[#151515] border-2 border-[#252525] pt-5 md:rounded-xl -mt-7">
              <div className="px-5">
                {/* import certificates */}
                {slicedCertificateArray.map((cert) => (
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
              <Link
                href="/certificates"
                className="text-center hover:bg-[#3F3F3F] active:bg-[#2c2c2c] py-3 transition-colors
                    duration-300 ease-in font-medium rounded-b-lg"
              >
                Show all {certificates.length} certifications{" "}
              </Link>
            </div>
          </Section>
        </div>
      </div>
    </div>
  </div>
);

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <>
    <h3 className="lg:text-4xl md:text-3xl text-2xl font-bold max-md:px-4">
      {title}
    </h3>
    {children}
  </>
);

export default About;
