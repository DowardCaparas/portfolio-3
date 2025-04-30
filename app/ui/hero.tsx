import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="w-full flex flex-col gap-10 justify-center items-center 
    h-full text-center max-md:p-5 mt-14 z-10"
    >
      <span
        className="text-[#ffffff] font-medium border-t border-[#3e9683] 
      rounded-full py-2 px-6 text-sm"
      >
        Learning the craft. Creating with love.
      </span>
      <h1 className="xl:text-6xl md:text-5xl sm:text-4xl text-2xl font-bold xl:leading-18">
        I&apos;m Doward Caparas Aspiring
        <br />
        Full-Stack Web Developer
      </h1>
      <p className="text-lg lg:w-[40%] md:w-[60%] w-[90%] font-medium">
        I build responsive, full-stack web apps with clean code and real-world
        functionality. I&apos;m passionate about learning, problem-solving, and
        bringing ideas to life through code.
      </p>
      <Link
        href="/about"
        className="rounded-lg py-3 px-8 bg-linear-to-b from-[#63e8e1] to-[#29c483]
        hover:opacity-80 active:scale-95 transition duration-300 ease-in font-semibold text-black"
      >
        About me
      </Link>
    </div>
  );
};

export default Hero;
