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
                    <p className="text-3xl bg-gradient-to-t from-white to-sk-light-blue text-transparent bg-clip-text">Wuwa.Network</p>
                </Link>
                <Link href="/generator" className="flex flex-row items-center relative">
                    <span className="hidden lg:flex text-3xl bg-gradient-to-t from-white to-sk-light-blue text-transparent bg-clip-text">Generator</span>
                </Link>
            </header>
            <div className="flex flex-col justify-center items-center lg:items-start min-h-screen bg-blurple">
                <div className="absolute inset-0">
                    <div className="h-[120vh] bg-[url(https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/ShorekeeperBackground1.png)] bg-cover bg-center">
                        <div className="h-[120vh] bg-gradient-to-b from-transparent from-90% to-blurple"></div>
                    </div>
                </div>
                <div className="flex flex-col w-[70%] lg:w-[55%] h-[60vh] lg:ml-[7%] -mt-[35%] md:-mt-[15%] relative z-10 items-center lg:items-start gap-5">
                    <p className="text-5xl md:text-6xl lg:text-7xl lg:leading-22 text-center lg:text-start relative z-10 [text-shadow:2px_1px_2px_rgba(0,0,0,0.7)]">Showcase your Wuthering Waves builds with style.</p>
                    <Link href="/generator" className="z-10 w-auto bg-blue-600 text-white px-4 py-2 md:px-12 md:py-4 rounded-xl text-2xl mb-10 text-center whitespace-nowrap">Create a card</Link>
                </div>
            </div>
            <div className="flex flex-col items-center mt-35 lg:mt-15">
                <p className="text-4xl bg-gradient-to-t from-white to-sk-light-blue text-transparent bg-clip-text">Create and share your character's showcase card!</p>
                <Carousel images={slides} autoPlayInterval={5000} />
            </div>
        </div>
)}