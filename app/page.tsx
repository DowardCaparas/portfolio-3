import Hero from "./ui/hero";

export default function Home() {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Background Gradient Blob */}
        <div
          className="absolute inset-0 mx-10 rounded-b-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at top, #123c28 0%, transparent 50%)",
          }}
        ></div>

        <div className="absolute inset-0 border border-[#123c28] rounded-b-full mx-12 -mt-32 h-[100%] -z-10"></div>
        <div className="absolute inset-0 border border-[#123c28] rounded-b-full mx-42 -mt-56 h-[100%] -z-10"></div>
      </div>
      <Hero />
    </>
  );
}
