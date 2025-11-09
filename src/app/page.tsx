import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-linear-to-b from-[#032d64] to-[#15162c] text-white">
      <div className="container flex items-center justify-center px-4 py-16">
        <div className="relative flex w-full max-w-[min(92vw,1200px)] flex-col items-center justify-center sm:flex-row">
          <Image
            src="/intodeep-vector.svg"
            alt="Logo"
            width={600}
            height={500}
            className="z-0 mr-[30%] -mb-[30%] h-auto w-[min(65vw,600px)] sm:-mr-[10%] sm:mb-[15%]"
          />
          <div className="z-12 mt-[0%] -mr-[20%] flex flex-col text-right leading-none text-yellow-400 text-shadow-black text-shadow-lg sm:mt-[5%] sm:mr-[0%] sm:text-left">
            <h2 className="mx-1.5 text-[clamp(1rem,4.2vw,2rem)] font-light tracking-tight">
              WE ARE THE
            </h2>
            <h1 className="text-[clamp(3.5rem,9vw,8rem)] leading-[0.9] font-bold">
              Byte
              <br />
              Knights
            </h1>
            <h2 className="mx-1.5 text-[clamp(1.25rem,4.2vw,3.6rem)] font-light tracking-tight">
              FTC TEAM 27705
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}
