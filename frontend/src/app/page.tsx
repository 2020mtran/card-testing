import Link from "next/link";

export default function Homepage() {
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
        </div>
    )
}