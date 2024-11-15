"use client";
import { TypographyH1 } from "@/components/typography/h1";
import { Button } from "@/components/ui/button";
import { AlignRight, X } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import DarkMode from "./dark-mode";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="sticky top-0 h-16 w-full border-b bg-transparent backdrop-blur-lg">
      <div className="container mx-auto flex h-full items-center justify-between px-8">
        <Link href={"/home"} className="">
          <TypographyH1>Ubma-Cshub</TypographyH1>
        </Link>
        <DesktopNav />
        <div
          className="cursor-pointer rounded-full p-1 hover:bg-slate-100 dark:hover:bg-white dark:hover:text-black md:hidden"
          onClick={() => {
            setNavOpen(true);
          }}
        >
          <AlignRight />
        </div>
      </div>
      <MobileNav navOpen={navOpen} setNavOpen={setNavOpen} />
    </div>
  );
}

function DesktopNav() {
  return (
    <>
      <nav className="hidden text-gray-600 dark:text-white md:flex md:items-center md:gap-4">
        <Link href="/home" className="hover:underline">
          Home
        </Link>
        <Link href="/courses" className="hover:underline">
          Courses
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </nav>
      <div className="hidden gap-5 md:flex md:items-center">
        <DarkMode />
        <Button variant={"outline"}>Contribute</Button>
      </div>
    </>
  );
}

interface MobileNavProps {
  navOpen: boolean;
  setNavOpen: Dispatch<SetStateAction<boolean>>;
}
function MobileNav({ navOpen, setNavOpen }: MobileNavProps) {
  return (
    <div
      className={`absolute left-0 top-0 h-[100vh] w-full overflow-x-hidden bg-transparent ${navOpen ? "" : "pointer-events-none opacity-0"} transition-opacity`}
    >
      <div
        className={`absolute left-0 top-0 h-screen w-full cursor-pointer bg-black opacity-20 dark:bg-white md:hidden ${
          navOpen ? "" : "hidden"
        }`}
        onClick={() => setNavOpen(false)}
      ></div>
      <div
        className={`absolute right-0 top-0 flex h-screen w-1/2 flex-col gap-10 bg-white px-8 py-4 transition-transform dark:bg-black ${
          navOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="cursor-pointer self-end rounded-full p-1 hover:bg-slate-100 dark:bg-black dark:hover:bg-white dark:hover:text-black md:hidden"
          onClick={() => setNavOpen(false)}
        >
          <X />
        </div>
        <div className="flex flex-col gap-4 self-start text-black dark:text-white">
          <Link href="/home" className="hover:underline">
            Home
          </Link>
          <Link href="/courses" className="hover:underline">
            Courses
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
        <div className="flex flex-col items-start gap-3">
          <Button variant={"outline"}>Contribute</Button>
          <DarkMode />
        </div>
      </div>
    </div>
  );
}
