import Image from "next/image";
import { accomplishments, socials, technicalSkills } from "../lib/constants";
import RedirectButton from "../ui/redirect-button";

const About = () => {
  return (
    <div className="lg:px-24 md:px-16 sm:px-8 px-4 transition-all duration-150 ease-in my-32">
      <div className="grid md:grid-cols-3 grid-cols-1">
        <div>
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
              <span className="border border-[#3F3F3F] rounded-full px-4 py-1 text-sm">
                English
              </span>
              <span className="border border-[#3F3F3F] rounded-full px-4 py-1 text-sm">
                Filipino
              </span>
            </div>
          </div>
        </div>
        {/* Details */}
        <div className="col-span-2 max-md:mt-10">
         <div className="flex flex-col max-md:text-center max-md:items-center">
         <div className="inline-grid space-y-2 mb-6">
            <h1 className="font-bold lg:text-6xl md:text-5xl text-4xl">Doward Caparas</h1>
            <span className="lg:text-3xl text-2xl text-[#898989] font-medium">Web Developer</span>
          </div>
          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <RedirectButton
                key={social.name}
                url={social.url}
                label={social.name}
                image={social.icon}
              />
            ))}
          </div>
         </div>
          <p className="font-medium md:text-lg mt-14 mb-20 text-justify">
            👋 Hey there! I&apos;m an aspiring Full Stack Web Developer with a
            strong focus on building clean, responsive, and dynamic web
            applications. I&apos;m currently diving deep into the world of React
            and Next.js, creating sleek front-end interfaces and powerful
            back-end solutions. Always learning, always building—excited about
            turning ideas into real-world applications.
          </p>
          <div className="flex flex-col gap-12">
            {/* Experience */}
            <>
              <h3 className="lg:text-4xl md:text-3xl text-2xl font-bold">Experience</h3>
              <div>
                <div className="flex max-lg:flex-col lg:justify-between lg:items-center gap-4 -mt-7">
                  <div className="inline-grid">
                    <span className="font-semibold md:text-xl text-lg">P.IMES</span>
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
            </>
            {/* Tech stack */}
            <>
              <h3 className="lg:text-4xl md:text-3xl text-2xl font-bold">Technical Skills</h3>
              <div
                className="inline-grid space-y-8 bg-[#151515] border-2 border-[#252525] px-5 py-7 rounded-xl
              -mt-7"
              >
                {technicalSkills.map((skill) => (
                  <div key={skill.category} className="inline-grid space-y-2">
                    <span className="font-medium md:text-lg">
                      {skill.category}
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      {skill.skills.map((tech) => (
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
            </>
            {/* Education */}
            <>
              <h3 className="lg:text-4xl md:text-3xl text-2xl font-bold">Education</h3>
              <div className="flex items-start gap-4 -mt-7">
                <Image src="/images/cvsu.webp" alt="cvsu logo" width={50} height={100}/>
                <div className="inline-grid space-y-2 max-md:text-sm">
                  <span className="font-semibold md:text-lg">Cavite State University - Naic Campus</span>
                  <span>Bachelor&apos;s degree, Information Technology</span>
                  <span className="text-[#acacac]">Sep 2019 - Feb 2024</span>
                  <span>GPA: 1.63</span>
                </div>
              </div>
            </>
            {/* Certification */}
            <>
              <h3 className="lg:text-4xl md:text-3xl text-2xl font-bold">Certification</h3>
              <div
                className="inline-grid space-y-8 bg-[#151515] border-2 border-[#252525] px-5 py-7 rounded-xl
              -mt-7"
              >
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
