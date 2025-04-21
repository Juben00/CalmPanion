"use client";

import Image from "next/image";
import { Button } from "./components/ui/button";
import Link from 'next/link';
import { useTheme } from "./theme-provider";

export default function Home() {
  const { theme } = useTheme();

  return (
    <>
      <Image
        src={theme === "dark" ? "/images/JA white.png" : "/images/JA black.png"}
        alt="Logo"
        width={200}
        height={200}
        className="mb-6 md:mb-8 w-[150px] h-auto md:w-[200px]"
        priority
      />
      <h1 className="text-3xl md:text-4xl font-bold text-center">Welcome to CalmPanion</h1>
      <p className="text-base md:text-lg mt-3 md:mt-4 text-center">Your AI Mental Health Companion App</p>
      <p className="text-xs md:text-sm mt-2">Created By: <span className="text-red-500">Kleo</span></p>
      <div className="mt-6 md:mt-8 w-full max-w-xs">
        <Link href={'/dashboard'} className="w-full">
          <Button className="w-full py-3 text-base">Get Started</Button>
        </Link>
      </div>
    </>
  );
}
