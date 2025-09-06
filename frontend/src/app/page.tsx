"use client";

import Link from "next/link";
import React, { useState, useEffect, FC, CSSProperties } from 'react';
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

interface Slide {
    url: string;
}

interface CarouselProps {
    images: Slide[];
    autoPlayInterval?: number;
}

const Carousel: FC<CarouselProps> = ({ images, autoPlayInterval }) => {
    // State to track the current active slide index, typed as a number
    const [ currentSlide, setCurrentSlide ] = useState<number>(0);

    // Function to go to the previous slide
    const goToPrev = (): void => {
        const isFirstSlide = currentSlide === 0;
        const newSlide = isFirstSlide ? images.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlide)
    }

    // Function to go to the next slide
    const goToNext = (): void => {
        const isLastSlide = currentSlide === images.length - 1;
        const newSlide = isLastSlide ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
    }

    // Optional: Add auto-play functionality
    useEffect(() => {
        if (autoPlayInterval) {
            const timer = setInterval(() => {
                goToNext();
            }, autoPlayInterval);
            return () => clearInterval(timer);
        }
    }, [currentSlide, autoPlayInterval, goToNext])

    return (
        <div className="flex flex-col lg:flex-row w-[85%] md:w-[70%] lg:w-[85%] xl:items-center xl:justify-center relative group -mt-10">
            {/* Main container for the slides */}
            <div className="w-full aspect-[9/4] relative flex items-center justify-center">
                {images.map((image, slide) => {
                    const prevSlide = (currentSlide - 1 + images.length) % images.length;
                    const nextSlide = (currentSlide + 1) % images.length;

                    let transform: string = '';
                    let opacity: number = 0;
                    let zIndex: number = 0;
                    let cursor: CSSProperties['cursor'] = 'default';
                    // Determine styles based on slide position relative to the current index
                    if (slide === currentSlide) {
                        transform = 'translateX(0) scale(1)';
                        opacity = 1;
                        zIndex = 10;
                    } else if (slide === prevSlide) {
                        transform = 'translateX(-25%) scale(0.8)';
                        opacity = 0.5;
                        zIndex = 5;
                        cursor = 'pointer';
                    } else if (slide === nextSlide) {
                        transform = 'translateX(25%) scale(0.8)';
                        opacity = 0.5;
                        zIndex = 5;
                        cursor = 'pointer';
                    } else {
                        // Position slides that are further away off-screen
                        const direction = slide < currentSlide ? -1 : 1;
                        transform = `translateX(${direction * 100}%) scale(0.6)`;
                        opacity = 0;
                        zIndex = 0;
                    }

                    const handleClick = (): void => {
                        if (slide === prevSlide) goToPrev();
                        if (slide === nextSlide) goToNext();
                    };

                    const slideStyle: CSSProperties = {
                        position: 'absolute',
                        width: '80%',
                        height: '80%',
                        top: '10%',
                        left: '10%',
                        transition: 'all 500ms ease-in-out',
                        transform,
                        opacity,
                        zIndex,
                        cursor,
                    };

                    return (
                        <div
                        key={slide}
                        style={slideStyle}
                        onClick={handleClick}
                        >
                        <div
                            style={{ backgroundImage: `url(${image.url})` }}
                            className={`w-full h-full rounded-2xl bg-center bg-cover shadow-2xl`}
                        ></div>
                        </div>
                    );
                })}
            </div>

            {/* Left Arrow */}
            {/* <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl z-20 rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 transition-colors">
                <button onClick={goToPrev} aria-label="Previous Image">
                <ChevronLeftIcon />
                </button>
            </div> */}

            {/* Right Arrow */}
            {/* <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl z-20 rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 transition-colors">
                <button onClick={goToNext} aria-label="Next Image">
                <ChevronRightIcon />
                </button>
            </div> */}

            {/* Slide Indicator Dots */}
            {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center py-2 space-x-2 z-20">
                {images.map((_, slideIndex) => (
                <button
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    aria-label={`Go to slide ${slideIndex + 1}`}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentIndex === slideIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                ></button>
                ))}
            </div> */}
        </div>
    )
}

export default function Homepage() {
    const slides: Slide[] = [
        { url: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/CardExample3.png'},
        { url: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/CardExample2.png'},
        { url: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/CardExample1.png'},
    ];

    return (
        <div className="flex flex-col justify-center min-h-screen bg-blurple gap-5">
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
                    <div className="h-[120vh] bg-[url(https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/ShorekeeperBackground1.png)] bg-cover bg-center">
                        <div className="h-[120vh] bg-gradient-to-b from-transparent from-90% to-blurple"></div>
                    </div>
                </div>
                <div className="flex flex-col w-[70%] lg:w-[55%] 3xl:w-[60%] h-[60vh] lg:ml-[7%] -mt-[35%] md:-mt-[15%] relative z-10 items-center lg:items-start gap-5">
                    <p className="text-5xl md:text-6xl lg:text-7xl 3xl:text-8xl lg:leading-22 3xl:leading-27 text-center lg:text-start relative z-10 [text-shadow:2px_1px_2px_rgba(0,0,0,0.7)]">Showcase your Wuthering Waves builds with style.</p>
                    <Link href="/generator" className="z-10 w-auto bg-blue-600 text-white px-4 py-2 3xl:py-6 md:px-12 md:py-4 rounded-xl text-2xl 3xl:text-5xl mb-10 text-center whitespace-nowrap">Create a card</Link>
                </div>
            </div>
            <div className="flex flex-col items-center mt-10 lg:mt-15">
                <p className="mb-10 lg:mb-5 xl:mb-0 text-center text-xl lg:text-4xl bg-gradient-to-t from-white to-sk-light-blue text-transparent bg-clip-text">Create and share your character&apos;s showcase card!</p>
                <Carousel images={slides} autoPlayInterval={5000} />
            </div>
            <div className="flex flex-col w-[88%] self-center bg-navy-blue p-5 xl:p-20 gap-5 lg:gap-10">
                <p className="text-start text-xl lg:text-5xl bg-gradient-to-t from-white to-sk-light-blue text-transparent bg-clip-text">What is Wuwa.Network?</p>
                <p className="text-left lg:text-2xl text-wrap">Wuwa.Network is a tool that allows to make cards for your Wuthering Waves characters to showcase your builds to others.</p>
                <p className="text-start text-xl lg:text-5xl bg-gradient-to-t from-white to-sk-light-blue text-transparent bg-clip-text">How to Use?</p>
                <p className="text-left lg:text-2xl text-wrap">Step 1</p>
                <p className="lg:-mt-5 text-left lg:text-2xl text-wrap">Use WuwaBot on Discord to create a card. This card lacks statistics like total crit rate, crit damage, etc. We are simply using this generated card to be put in a more digestible way. Make sure to download this image from Discord.</p>
                <a href="https://wutheringwaves.kurogames.com/en/main/news/detail/1959" target="_blank" rel="noopener noreferrer" className="lg:-mt-5 text-left lg:text-2xl text-wrap text-sk-light-blue underline">Official Instruction from Kuro Games</a>
                <p className="lg:-mt-5 text-left lg:text-2xl text-wrap">It will look like the below image. Feel free to save the below image if you just want to try out the website!</p>
                <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/KuroExample.jpeg" alt="Example from Kuro Games" className="w-full h-full object-contain lg:object-cover" />
                <p className="text-left lg:text-2xl text-wrap">Step 2</p>
                <p className="lg:-mt-5 text-left lg:text-2xl text-wrap">Upload your card from WuwaBot into this website and click &ldquo;Upload&rdquo;.</p>
                <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/GeneratorPage.png" alt="Generator Page Example" className="w-full h-full object-contain lg:object-cover" />
                <p className="text-left lg:text-2xl text-wrap">Step 3</p>
                <p className="lg:-mt-5 text-left lg:text-2xl text-wrap">Before proceeding, preview the scanned material. Set your resonance chains, weapon rank, and echoes.</p>
                <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/CardPreviewExample.png" alt="Generator Page Example" className="w-full h-full object-contain lg:object-cover" />
            </div>
        </div>
)}