export type EchoInfo = {
    name: string;
    sets: string[];
    icon: string;
}

export const echoMap: EchoInfo[] = [
    { name: "Capitaneus", sets: ["Eternal Radiance", "Gusts of Welkin", "Flaming Clawprint", "Windward Pilgrimage"], icon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Capitaneus_Icon.webp" },
    { name: "Nightmare: Mourning Aix", sets: ["Eternal Radiance"], icon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Nightmare-Mourning-Aix.webp"},
    { name: "Abyssal Mercator", sets: ["Frosty Resolve", "Eternal Radiance"], icon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Vitreum_Dancer_Icon.webp"},
    { name: "Vitreum Dancer", sets: ["Eternal Radiance", "Empyrean Anthem"], icon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Vitreum_Dancer_Icon.webp" },
    { name: "Aero Prism", sets: ["Eternal Radiance", "Tidebreaking Courage"], icon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Aero-Prism.webp" },
    { name: "Fae Ignis", sets: ["Eternal Radiance", "Midnight Veil", "Dream of the Lost"], icon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Fae_Ignis_Icon.webp" },
    { name: "", sets: ["", ""], icon: "" },
    { name: "", sets: ["", ""], icon: "" },
    { name: "", sets: ["", ""], icon: "" },
]

export function getEchoInfo(name: string): EchoInfo | null {
    return echoMap.find(echo => echo.name === name) || null;
}