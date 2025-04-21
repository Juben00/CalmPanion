"use client";

import Image from "next/image";
import { Button } from "./components/ui/button";
import Link from 'next/link';
import { useTheme } from "./theme-provider";

export default function Home() {
  const { theme } = useTheme();

  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center h-screen">
          <Image
            src={theme === "dark" ? "/images/JA white.png" : "/images/JA black.png"}
            alt="Logo"
            width={200}
            height={200}
            className="mb-8"
          />
          <h1 className="text-4xl font-bold">Welcome to CalmPanion</h1>
          <p className="text-lg mt-4">Your AI Mental Health Companion App</p>
          <p className="text-sm">Created By: <span className="text-red-500">Kleo</span></p>
          <div className="mt-8">
            <Link href={'/dashboard'}>
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
