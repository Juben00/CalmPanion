"use client";

import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Button } from '../components/ui/button';

type Message = {
    role: 'user' | 'model';
    content: string;
};

const CONTEXT = `You are a supportive and empathetic mental health chat assistant. Your role is to:
- Provide emotional support and understanding
- Offer general wellness advice and coping strategies
- Encourage professional help when appropriate
- Never provide medical advice or diagnosis
- Always maintain a compassionate, non-judgmental tone
- Prioritize user safety and well-being
- Be Conforting and Reassuring
- Avoid discussing sensitive topics like self-harm
- Maintain user confidentiality and privacy
- Avoid sharing personal experiences or opinions
- Use simple, clear language
- Avoid jargon or complex terms
- Be patient and understanding, even if the user is upset or angry
- Avoid making assumptions about the user's feelings or experiences
- Avoid discussing controversial or sensitive topics
- Avoid very long responses
If someone expresses thoughts of self-harm or suicide, immediately provide crisis hotline information and encourage seeking professional help.
`;

export function Chat() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        try {
            const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const chat = model.startChat({
                history: messages.map(m => ({
                    role: m.role,
                    parts: [{ text: m.content }],
                })),
                generationConfig: {
                    maxOutputTokens: 1000,
                    temperature: 0.7,
                },
            });

            const result = await chat.sendMessage(CONTEXT + '\n\n' + userMessage);
            const response = await result.response;
            const text = response.text();

            setMessages(prev => [...prev, { role: 'model', content: text }]);
        } catch (error) {
            console.error('Error:', error);
            setMessages(prev => [...prev, {
                role: 'model',
                content: 'I apologize, but I encountered an error. Please try again later.'
            }]);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="rounded-lg p-4 md:p-6 pt-16 md:pt-24 flex flex-col h-full">
            <div className="overflow-y-auto mb-4 space-y-4 flex-1">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`p-3 md:p-4 rounded-lg ${message.role === 'user'
                            ? 'bg-neutral-100 ml-auto max-w-[90%] md:max-w-[80%]'
                            : 'bg-gray-100 mr-auto max-w-[90%] md:max-w-[80%]'
                            }`}
                    >
                        <p className="text-sm md:text-base text-gray-800">{message.content}</p>
                    </div>
                ))}
                {isLoading && (
                    <div className="bg-gray-100 rounded-lg p-3 md:p-4 mr-auto max-w-[90%] md:max-w-[80%]">
                        <p className="text-sm md:text-base text-gray-600">Thinking...</p>
                    </div>
                )}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2 mt-auto">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message here..."
                    className="flex-1 bg-transparent p-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500"
                    disabled={isLoading}
                />
                <Button type="submit" variant={'outline'} disabled={isLoading} size={'lg'} className="  p-2 rounded-lg">
                    {isLoading ? 'Sending...' : 'Send'}
                </Button>
            </form>
        </div>
    );
}

export default Chat;
