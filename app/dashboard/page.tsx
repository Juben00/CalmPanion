"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ChatModule from '../utils/ChatModule';
import { useTheme } from "../theme-provider";

const DashboardLayout = () => {
    const { theme } = useTheme();

    return (

        <div className='max-h-dvh bg-gray-100 dark:bg-gray-900'>
            <header className="fixed z-50 flex items-center justify-between h-20 px-1 md:px-4 w-full shadow-sm">
                <div className="flex items-center space-x-2">
                    <Link href={'/'}>
                        <Image
                            src={theme === "dark" ? "/images/JA white.png" : "/images/JA black.png"}
                            alt="CalmPanion Logo"
                            width={50}
                            height={50} />
                    </Link>
                    <h1 className="text-xs md:text-lg font-bold">CalmPanion</h1>
                </div>
                <p className="text-xs md:text-lg italic text-center">Your AI Mental Health Companion App</p>
            </header>

            <main className=" flex flex-row justify-center h-screen">
                <div className='hidden w-1/3 md:flex flex-col p-4 items-center mt-20 justify-center'>
                    <div className='flex flex-col space-y-6 w-full justify-center text-sm md:text-base'>
                        <section>
                            <h2 className='text-2xl font-semibold text-center'>About Calmpanion</h2>
                            <p className='text-md mt-2'>Welcome to Calmpanion, your AI-driven chatbot designed to enhance your everyday life through intelligent conversation and support. Powered by Gemini AI, Calmpanion is dedicated to providing thoughtful responses, insightful analysis, and helpful tools tailored to your needs.</p>
                        </section>
                        <section>
                            <h2 className='text-2xl font-semibold text-center'>Features</h2>
                            <ul className='list-disc list-inside space-y-2'>
                                <li>Personalized conversations</li>
                                <li>Emotional support and guidance</li>
                                <li>Goal setting and tracking</li>
                                <li>Relaxation techniques and meditation</li>
                                <li>AI-driven insights and analysis</li>
                            </ul>
                        </section>
                        <section>
                            <h2 className='text-2xl font-semibold text-center'>Get Started</h2>
                            <p className='text-md mt-2'>Enter a message to start your conversation with Calmpanion. We look forward to helping you on your journey to mental wellness!</p>
                        </section>
                    </div>
                </div >
                <div className='w-2/3 flex-1  '>
                    <ChatModule />
                </div>
            </main >
        </div>
    );
};

export default DashboardLayout;