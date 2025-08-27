export type WeaponInfo = {
  name: string;
  imageUrl: string;
  baseStatNum: string;
  baseStatIcon: string;
  subStatNum: string;
  subStatIcon: string;
};

export const weaponMap: Record<string, WeaponInfo> = {
  "Defier's Thorn": {
    name: "Defier's Thorn",
    imageUrl: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Defiers-Thorn.webp",
    baseStatNum: "412",
    baseStatIcon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Attack.webp",
    subStatNum: "72.2%",
    subStatIcon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Health.webp"
  },
  "Blazing Justice": {
    name: "Blazing Justice",
    imageUrl: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Blazing-Justice.webp",
    baseStatNum: "587",
    baseStatIcon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Attack.webp",
    subStatNum: "48.6%",
    subStatIcon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Crit_DMG.webp"
  },
  // add more
};

export function getWeaponInfo(name: string): WeaponInfo | null {
  return weaponMap[name] || null;
}
