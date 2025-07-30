export type CharacterInfo = {
  name: string;
  type: string;
  typeIcon: string;
  imageUrl: string;
  rc1: string;
  rc2: string;
  rc3: string;
  rc4: string;
  rc5: string;
  rc6: string;
};

export const characterMap: Record<string, CharacterInfo> = {
  "Cartethyia": {
    name: "Cartethyia",
    type: "Aero",
    typeIcon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Aero.png",
    imageUrl: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Cartethyia_2.webp",
    rc1: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Cartethyia-RC-1.png",
    rc2: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Cartethyia-RC-2.png",
    rc3: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Cartethyia-RC-3.png",
    rc4: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Cartethyia-RC-4.png",
    rc5: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Cartethyia-RC-5.png",
    rc6: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Cartethyia-RC-6.png",
  },
  "Zani": {
    name: "Zani",
    type: "Spectro",
    typeIcon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Spectro.png",
    imageUrl: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Zani_2.webp",
    rc1: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Zani-RC-1.png",
    rc2: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Zani-RC-2.png",
    rc3: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Zani-RC-3.png",
    rc4: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Zani-RC-4.png",
    rc5: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Zani-RC-5.png",
    rc6: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Zani-RC-6.png",
  },
  // add more
};

export function getCharacterInfo(name: string): CharacterInfo | null {
  return characterMap[name] || null;
}
