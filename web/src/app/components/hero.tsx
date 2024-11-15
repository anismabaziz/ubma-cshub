"use client";
import { TypographyH1 } from "@/components/typography/h1";
import { TypographyP } from "@/components/typography/p";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Hero() {
  return (
    <main className="flex min-h-[80vh] items-center">
      <div className="container mx-auto mb-20 flex h-full flex-col items-center justify-center gap-10 px-8 md:mb-0 md:flex-row md:justify-between md:gap-0">
        <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-start">
          <TypographyH1 className="mt-20 text-4xl md:mt-0 lg:text-5xl">
            Welcome to UBMA CShub
          </TypographyH1>
          <div>
            <TypographyP className="font-medium">
              A library that contains all the materials needed for computer
              science students.
            </TypographyP>
            <TypographyP>Created and maintained by students</TypographyP>
          </div>
          <Button className="cursor-pointer" size={"lg"}>
            Explore courses
          </Button>
        </div>
        <Image src={"hero.svg"} width={400} height={400} alt="Computer image" />
      </div>
    </main>
  );
}
