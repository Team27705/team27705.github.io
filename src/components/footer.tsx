import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#15162c] py-6 pt-12 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center justify-center gap-2 text-sm">
          &copy; {new Date().getFullYear()} The ByteKnights - FTC Team 27705.
          All rights reserved.
          <div>
            Follow us on
            <a href="https://instagram.com/team27705">
              <Image
                src="/icons/instagram.svg"
                width={24}
                height={24}
                alt="Instagram"
                className="ml-2 inline-block"
              />
            </a>
            <a href="https://github.com/Team27705">
              <Image
                src="/icons/github.svg"
                width={24}
                height={24}
                alt="GitHub"
                className="ml-2 inline-block"
              />
            </a>
          </div>
          Built by Issac Liu
        </div>
      </div>
    </footer>
  );
}
