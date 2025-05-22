import Image from "next/image";
import Hero from "./ui/hero";

export default function Home() {
  return (
    <div className="my-32">
      <div className="absolute inset-0 overflow-hidden -z-10">

        <div className="absolute inset-0 ring ring-gray-300 dark:ring-[#177044] rounded-b-full 
        mx-12 -mt-32 h-[100%] -z-10"></div>
        <div className="absolute inset-0 ring ring-gray-300 dark:ring-[#123c28] rounded-b-full 
        mx-42 -mt-56 h-[100%] -z-10"></div>
      </div>
      <Hero />

      {/* Award Section */}
      <section className="my-28 px-4 md:px-8 lg:px-12 transition">
        <div className="flex flex-col items-center gap-10 text-center">
          <h2 className="text-4xl font-bold">Best Capstone Award 🏆</h2>

          <div className="relative w-full max-w-4xl aspect-[4/3] bg-gray-100 rounded-lg 
          overflow-hidden">
            <Image
              src="/images/BestCapstone.webp"
              alt="Best Capstone Award"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="max-w-4xl md:px-10">
            <p className="text-lg leading-relaxed">
              This was the day we received the{" "}
              <strong>Best Capstone Award</strong> for our project:
              <em className="font-bold mr-1">
                {" "}
                Simian: A Mobile Educational Game for Primary Level in Learning
                Space Science.
              </em>
              It was a moment of celebration, relief, and pride. As the
              programmer of the team, I remembered all the late nights spent
              figuring out how to build the system.
            </p>

            <p className="mt-4 text-lg leading-relaxed">
              We created the game using <strong>Unity3D</strong> and{" "}
              <strong>C#</strong>. It&apos;s a 2D educational game designed to make
              learning about space fun and engaging for kids. The game teaches
              about <em>planets</em>, <em>constellations</em>, <em>galaxies</em>
              , and unique materials found on other worlds. It features three
              mini-games: <strong>Planet Adventure</strong>,
              <strong> Word Puzzle</strong>, and <strong>Sliding Puzzle</strong>
              .
            </p>

            <p className="mt-4 text-lg leading-relaxed">
              None of it would&apos;ve been possible without God&apos;s guidance
              and the support of my teammates. It truly felt like all our hard
              work had paid off.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
