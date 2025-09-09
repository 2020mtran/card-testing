'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import Image from "next/image";

function AccordionItem({ title, children }: { title: string, children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b">
        <button
            className="w-full text-left py-3 font-semibold text-lg flex justify-between items-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
        >
            {title}
            <span>{isOpen ? "−" : "+"}</span>
        </button>

        <AnimatePresence initial={false}>
            {isOpen && (
            <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
            >
                <div className="p-3 text-gray-300">{children}</div>
            </motion.div>
            )}
        </AnimatePresence>
        </div>
    );
}

export default function FaqPage() {

    return (
    <div className="flex flex-col justify-center min-h-screen bg-dark-navy gap-5">
        <header className="w-full flex flex-row relative z-10 pb-2 px-[7%] gap-10">
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-header/25 via-85% to-transparent"></div>
            <div className='flex flex-row relative gap-10 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-transparent overflow-y-hidden scrollbar-custom'>
                <Link href="/" className="flex flex-row items-center gap-0.5 relative pr-10 lg:pr-0">
                    <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/WuwaNetworkLogo.png" alt="WuwaNetwork Logo" className="h-12 w-auto translate-y-0.5"/>
                    <p className="text-3xl 3xl:text-5xl bg-gradient-to-t from-white to-sk-light-blue text-transparent bg-clip-text">Wuwa.Network</p>
                </Link>
                <Link href="/generator" className="flex flex-row items-center relative">
                    <span className="text-3xl 3xl:text-5xl bg-gradient-to-t from-white to-sk-light-blue text-transparent bg-clip-text">Generator</span>
                </Link>
                <Link href="/faq" className="flex flex-row items-center relative">
                    <span className="text-3xl 3xl:text-5xl bg-gradient-to-t from-white to-sk-light-blue text-transparent bg-clip-text">FAQ</span>
                </Link>
                <Link href="/projectresources" className="flex flex-row items-center relative">
                    <span className="text-3xl 3xl:text-5xl bg-gradient-to-t from-white to-sk-light-blue text-transparent bg-clip-text">Project Resources</span>
                </Link>
            </div>
        </header>
        <div className="flex flex-col justify-center items-center lg:items-start min-h-screen bg-blurple">
            <div className="absolute inset-0">
                <div className="h-[120vh] bg-[url(https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/ShorekeeperBackground4.png)] bg-cover bg-center">
                    <div className="h-[120vh] bg-gradient-to-b from-transparent from-90% to-dark-navy"></div>
                </div>
            </div>
            <div className="flex flex-col w-[70%] lg:w-[55%] 3xl:w-[60%] h-[60vh] lg:ml-[7%] -mt-[35%] md:-mt-[15%] relative z-10 items-center lg:items-start gap-5">
                <p className="text-5xl md:text-6xl lg:text-7xl 3xl:text-8xl lg:leading-22 3xl:leading-27 text-center lg:text-start relative z-10 [text-shadow:2px_1px_2px_rgba(0,0,0,0.7)]">Project Resources / Behind The Scenes</p>
            </div>
        </div>
        <div className="flex flex-col w-[88%] self-center p-5 xl:p-20 gap-5 lg:gap-10 lg:mt-5 xl:mt-0 2xl:mt-7">
            <AccordionItem title="Wuwa.Network's Project Tracker">
                Here is a spreadsheet containing every day&apos;s work that went into making this website over the past 3 months.
                <p>
                    <a href="https://docs.google.com/spreadsheets/d/1CVIARUBRQBQxzWjXX57w3AFasDGw1PworzyQ8EyQp5Y/edit?usp=sharing" target="_blank" className="text-blue-400 underline">
                    Wuwa.Network Progress Tracker
                    </a>
                </p>
            </AccordionItem>
            <AccordionItem title="Prototypes that did not make the final cut">
                <div className='flex flex-col xl:flex-row gap-5 justify-center items-center'>
                    <div className='flex flex-col gap-5 text-center'>
                        Locally-saved Card Storage Page
                        <Image
                            src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/SavedBuildsPage.png"
                            alt="Saved Builds Page"
                            width={600}     // pick a real number
                            height={400}    // pick a real number
                            className="rounded-lg shadow-md object-contain"
                        />
                    </div>
                    <div className='flex flex-col gap-5 text-center'>
                        Resonator Popularity Page
                        <Image
                            src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/PopularityPage.png"
                            alt="Saved Builds Page"
                            width={600}     // pick a real number
                            height={400}    // pick a real number
                            className="rounded-lg shadow-md object-contain"
                        />
                    </div>
                </div>
                
            </AccordionItem>
            <AccordionItem title="Wuwa.Network Trello">
                This Trello page contains all the changes and future changes that were planned to be in the final product.
                <p>
                    <a href="https://trello.com/b/i6sCiYMd/wuwanetwork" target="_blank" className="text-blue-400 underline">
                    Wuwa.Network Trello
                    </a>
                </p>
            </AccordionItem>
            <AccordionItem title="Tester Credits">
                A few people from my online community on Discord helped out with testing the primary features of the website.
                Huge thank you to them for taking the time to test my site! 
            </AccordionItem>
            <AccordionItem title="Hosting Sites">
                Website Hosting: Vercel | Backend Server Hosting: Hugging Face
            </AccordionItem>
        </div>
    </div>
)};

