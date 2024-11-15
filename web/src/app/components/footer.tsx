import { TypographyH2 } from "@/components/typography/h2";
import { TypographyP } from "@/components/typography/p";
import { GraduationCap, Linkedin, Github } from "lucide-react";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="border-t-2">
      <div className="container mx-auto p-8 flex flex-col md:flex-row gap-5 md:gap-20">
        <div>
          <Link href={"/"} className="flex items-center gap-3 mb-4">
            <TypographyH2>Ubma-Cshub</TypographyH2>
            <GraduationCap size={32} />
          </Link>
          <TypographyP>
            All cs materials for ubma students in one place
          </TypographyP>
        </div>
        <div>
          <TypographyH2 className="mb-4">Links</TypographyH2>
          <nav className="text-gray-600 flex flex-col gap-4 dark:text-white">
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
        </div>
        <div>
          <TypographyH2 className="mb-4">Contact Us</TypographyH2>
          <nav className="flex gap-3">
            <Linkedin className="cursor-pointer" />
            <Github className="cursor-pointer" />
          </nav>
        </div>
      </div>
      <div className="border-t-2 px-4 grid place-items-center h-16">
        <TypographyP>Copyright ubma-cshub</TypographyP>
      </div>
    </div>
  );
}
