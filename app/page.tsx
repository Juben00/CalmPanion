import Image from "next/image";
import { Button } from "./components/ui/button";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold">Welcome to CalmPanion</h1>
          <p className="text-lg mt-4">Your AI Mental Health Companion App</p>
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
