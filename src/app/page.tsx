import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-linear-to-b from-[#032d64] to-[#15162c] text-white">
      <div className="relative container flex h-screen items-center justify-center px-4 py-16">
        <div className="relative flex w-full max-w-[min(92vw,1200px)] flex-col items-center justify-center sm:flex-row">
          <Image
            src="/intodeep-vector.svg"
            alt="Logo"
            width={600}
            height={500}
            className="z-0 mr-[30%] -mb-[30%] -ml-[5%] h-auto w-[min(65vw,700px)] pl-[0%] sm:-mr-[10%] sm:mb-[10%] sm:ml-[10%] sm:pl-[10%]"
          />
          <div className="z-12 mt-[0%] -mr-[40%] flex flex-col text-right leading-none text-yellow-400 text-shadow-black text-shadow-lg sm:mt-[8%] sm:mr-[20%] md:mr-[15%] md:text-left">
            <h2 className="mx-[1%] text-[clamp(1rem,4.2vw,2rem)]/[120%] font-light tracking-wider">
              WE ARE THE
            </h2>
            <h1 className="font-regular text-[clamp(3.5rem,9vw,8rem)]/[80%] tracking-tighter">
              Byte
              <br />
              Knights
            </h1>
            <h2 className="mx-[1%] text-[clamp(1.25rem,4.2vw,3.6rem)]/[90%] font-light">
              FTC TEAM 27705
            </h2>
          </div>
        </div>
        <ArrowDown
          className="absolute bottom-8 left-1/2 z-50 -translate-x-1/2 animate-bounce text-yellow-400"
          size={32}
        />
      </div>
      {
        /* Stuff to make this scroll */
        Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="my-8 h-24 w-full" />
        ))
      }
    </main>
  );
}
