export type EchoInfo = {
    name: string;
    sets: string[];
    icon: string;
}

export const echoMap: EchoInfo[] = [
    { name: "Capitaneus", sets: ["Eternal Radiance", "Gusts of Welkin", "Flaming Clawprint", "Windward Pilgrimage"], icon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Capitaneus_Icon.webp" },
    { name: "Nightmare: Mourning Aix", sets: ["Eternal Radiance"], icon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Nightmare-Mourning-Aix.webp"},
    { name: "Abyssal Mercator", sets: ["Frosty Resolve", "Eternal Radiance"], icon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Abyssal_Mercator_Icon.webp"},
    { name: "Vitreum Dancer", sets: ["Eternal Radiance", "Empyrean Anthem"], icon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Vitreum_Dancer_Icon.webp" },
    { name: "Rage Against the Statue", sets: ["Eternal Radiance", "Gusts of Welkin"], icon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Rage_Against_The_Statue_Icon.webp" },
    { name: "Aero Prism", sets: ["Eternal Radiance", "Tidebreaking Courage"], icon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Aero-Prism.webp" },
    { name: "Chop Chop Headless", sets: ["Eternal Radiance", "Tidebreaking Courage"], icon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Chop_Chop_Headless_Icon.webp" },
    { name: "Fae Ignis", sets: ["Eternal Radiance", "Midnight Veil", "Dream of the Lost"], icon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Fae_Ignis_Icon.webp" },
    { name: "Diggy Duggy", sets: ["Eternal Radiance", "Tidebreaking Courage"], icon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Diggy_Duggy_Icon.webp" },
    { name: "Frostscrouge Stalker", sets: ["Eternal Radiance", "Midnight Veil"], icon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Frostscrouge_Stalker_Icon.webp" },
    { name: "Golden Junrock", sets: ["Eternal Radiance", "Frosty Resolve"], icon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Golden_Junrock_Icon.webp" },
    { name: "Reminiscence: Fleurdelys", sets: ["Gusts of Welkin", "Windward Pilgrimage"], icon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Fleurdelys_Echo_Icon.webp" },
    { name: "Nightmare: Kelpie", sets: ["Gusts of Welkin", "Windward Pilgrimage"], icon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Nightmare-Kelpie-Icon.webp" },
    { name: "Kerasaur", sets: ["Flaming Clawprint", "Windward Pilgrimage"], icon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Kerasaur-Icon.webp" },
    { name: "Pilgrim's Shell", sets: ["Flaming Clawprint", "Windward Pilgrimage"], icon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Pilgrims-Shell-Icon.webp" },
    { name: "Devotee's Flesh", sets: ["Gusts of Welkin", "Flaming Clawprint", "Windward Pilgrimage"], icon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Devotees-Flesh-Icon.webp" },
    { name: "Fusion Drake", sets: ["Flaming Clawprint", "Windward Pilgrimage"], icon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Fusion-Drake-Icon.webp" },
    { name: "Glacio Drake", sets: ["Gusts of Welkin", "Windward Pilgrimage"], icon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Glacio-Drake-Icon.webp" },
    { name: "Havoc Drake", sets: ["Flaming Clawprint", "Windward Pilgrimage"], icon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Havoc-Drake-Icon.webp" },
    { name: "Sacerdos", sets: ["Gusts of Welkin", "Flaming Clawprint", "Windward Pilgrimage"], icon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Sacerdos-Icon.webp" },
    { name: "Spectro Drake", sets: ["Flaming Clawprint", "Windward Pilgrimage"], icon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Spectro-Drake-Icon.webp" },
    { name: "", sets: ["", ""], icon: "" },
    { name: "", sets: ["", ""], icon: "" },
]

export function getEchoInfo(name: string): EchoInfo | null {
    return echoMap.find(echo => echo.name === name) || null;
}