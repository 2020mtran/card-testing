'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect, FC, CSSProperties } from 'react';

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
            <Link href="/" className="flex flex-row items-center gap-0.5 relative">
                <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/WuwaNetworkLogo.png" alt="WuwaNetwork Logo" className="h-12 w-auto translate-y-0.5"/>
                <p className="text-3xl 3xl:text-5xl bg-gradient-to-t from-white to-sk-light-blue text-transparent bg-clip-text">Wuwa.Network</p>
            </Link>
            <Link href="/generator" className="flex flex-row items-center relative">
                <span className="hidden lg:flex text-3xl 3xl:text-5xl bg-gradient-to-t from-white to-sk-light-blue text-transparent bg-clip-text">Generator</span>
            </Link>
            <Link href="/faq" className="flex flex-row items-center relative">
                <span className="hidden lg:flex text-3xl 3xl:text-5xl bg-gradient-to-t from-white to-sk-light-blue text-transparent bg-clip-text">FAQ</span>
            </Link>
            <Link href="/generator" className="flex flex-row items-center relative">
                <span className="hidden lg:flex text-3xl 3xl:text-5xl bg-gradient-to-t from-white to-sk-light-blue text-transparent bg-clip-text">Project Resources</span>
            </Link>
        </header>
        <div className="flex flex-col justify-center items-center lg:items-start min-h-screen bg-blurple">
            <div className="absolute inset-0">
                <div className="h-[120vh] bg-[url(https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/ShorekeeperBackground3.png)] bg-cover bg-center">
                    <div className="h-[120vh] bg-gradient-to-b from-transparent from-90% to-dark-navy"></div>
                </div>
            </div>
            <div className="flex flex-col w-[70%] lg:w-[55%] 3xl:w-[60%] h-[60vh] lg:ml-[7%] -mt-[35%] md:-mt-[15%] relative z-10 items-center lg:items-start gap-5">
                <p className="text-5xl md:text-6xl lg:text-7xl 3xl:text-8xl lg:leading-22 3xl:leading-27 text-center lg:text-start relative z-10 [text-shadow:2px_1px_2px_rgba(0,0,0,0.7)]">Frequently Asked Questions</p>
            </div>
        </div>
        <div className="flex flex-col w-[88%] self-center p-5 xl:p-20 gap-5 lg:gap-10">
            <AccordionItem title="What is the purpose of this site?">
                This website allows users to create downloadable cards to display character data from the game Wuthering Waves. Users can
                show off these cards on any social media platform using the image generated.
            </AccordionItem>
            <AccordionItem title="Why do we need to input an image to generate a card?">
                Kuro Games does not provide an API for me to pull data from unlike other games such as Genshin Impact. The best they give us
                is a card that shows some data, but not the total stats of a character. Ex: total crit rate, crit damage, etc.
            </AccordionItem>
            <AccordionItem title="Is Wuwa.Network affiliated with Wuthering Waves?">
                No. This is simply just a fan-made project.
            </AccordionItem>
            <AccordionItem title="Why does the uploading not work?">
                By the time you are reading this, the website is likely no longer functional. My backend server provider, Hugging Faces,
                will automatically shut down operations if there is a lack of activity. 
            </AccordionItem>
            <AccordionItem title="Is the website complete?">
                The main functionality and purpose of the website has been completed. Due to unfortunate circumstances in my life, I had
                to drop the project after over 3 months in the making. A few features missing include: localstorage saving, accounts, 
                and a graph to show who the most popular characters are. Only a portion of the characters / weapons / echoes 
                fro mthe game are in my site's database as well.
            </AccordionItem>
            <AccordionItem title="What alternative websites to this could I use?">
                Below are two alternative websites that inspired this project. Feel free to compare their designs to my site. You may find
                some similarities.
                <p>
                    <a href="https://wuwaflex.com/" target="_blank" className="text-blue-400 underline">
                    WuwaFlex
                    </a>
                </p>
                <p>
                    <a href="https://www.wuwabuilds.moe/" target="_blank" className="text-blue-400 underline">
                    WuwaBuilds
                    </a>
                </p>
            </AccordionItem>
            <AccordionItem title="Why did you stop the project?">
                Even though this was a dream project for me, I found little value in completing it fully.
                Time, money, and other life circumstances forced my hand despite being so close to the finish line.
                If Kuro Games ever releases a public API for fans to utilize, I may likely come back to fully overhaul and
                complete the project. (Although, it does feel pretty bad that I spent a large portion of time specifically 
                on the Optical Character Reader portion of the site.)
            </AccordionItem>
        </div>
    </div>
)};

