import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-center bg-transparent p-4 text-white">
      <Image src="/intodeep-vector.svg" alt="Logo" width={100} height={100} />
      <div className="flex flex-col gap-0 text-yellow-400">
        <h1 className="ml-4 text-2xl leading-6 font-bold">
          Byte
          <br />
          Knights
        </h1>
        <h2 className="ml-4 text-sm font-light leading-4">FTC Team 27705</h2>
      </div>
    </header>
  );
}
