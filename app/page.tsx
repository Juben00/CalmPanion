"use client";

import Image from "next/image";
import { Button } from "./components/ui/button";
import Link from 'next/link';
import { useTheme } from "./theme-provider";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 p-4">
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
      <div className="flex items-center justify-center gap-2 text-xs md:text-sm ">
        <p className="">Created By:</p>
        <span className="text-red-500 flex items-center">Kleo</span>
      </div>
      <div className="mt-6 md:mt-8 w-full max-w-xs">
        <Link href={'/dashboard'} className="w-full">
          <Button className="w-full py-3 text-base">Get Started</Button>
        </Link>
      </div>
    </div>
  );
}
