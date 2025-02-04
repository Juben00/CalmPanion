"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ChatModule from '../utils/ChatModule';

const DashboardLayout = () => {
    return (

        <div className='max-h-dvh'>
            <header className="fixed z-50 flex items-center justify-between h-20 px-4 w-full shadow-sm">
                <div className="flex items-center space-x-2">
                    <Link href={'/'}>
                        <Image src="/images/JA black.png" alt="CalmPanion Logo" width={50} height={50} />
                    </Link>
                    <h1 className="text-lg font-bold">CalmPanion</h1>
                </div>
                <p className="text-lg italic">Your AI Mental Health Companion App</p>
            </header>

            <main className=" flex flex-row-reverse justify-center min-h-screen ">
                <div className='w-2/3 flex-1  '>
                    <ChatModule />
                </div>
                <div className='w-1/3 flex flex-col p-4 items-center mt-20  '>
                    <div className='flex flex-col space-y-6 p-10 w-full justify-center  '>
                        <section>
                            <h2 className='text-2xl font-semibold text-center'>About Calmpanion</h2>
                            <p className='text-md mt-2'>Welcome to Calmpanion, your AI-driven chatbot designed to enhance your everyday life through intelligent conversation and support. Powered by Gemini AI, Calmpanion is dedicated to providing thoughtful responses, insightful analysis, and helpful tools tailored to your needs.</p>
                        </section>


                    </div>
                </div >
            </main >
        </div>
    );
};

export default DashboardLayout;