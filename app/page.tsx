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
              "radial-gradient(circle at top, #8b5cf6 0%, #311564 10%, transparent 60%)",
          }}
        ></div>

        <div className="absolute inset-0 border border-[#1F123C] rounded-b-full mx-12 -mt-32 h-[100%] -z-10"></div>
        <div className="absolute inset-0 border border-[#291850] rounded-b-full mx-42 -mt-56 h-[100%] -z-10"></div>
      </div>
      <Hero />
    </>
  );
}
