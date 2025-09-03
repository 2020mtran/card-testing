export const statIconMap: Record<string, string> = {
  "HP": "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Health.webp",
  "ATK": "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Attack.webp",
  "DEF": "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Defense.webp",
  "Energy": "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Energy_Regen.webp",
  "Crit. Rate": "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Crit_Rate.webp",
  "Crit. DMG": "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Crit_DMG.webp",
  "Basic Atk": "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Basic_Atk_DMG.png",
  "Heavy Atk": "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Heavy_Atk_DMG.png",
  "Res. Skill": "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Resonance_Skill_Bonus.png",
  "Res. Lib.": "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Resonance_Liberation_Bonus.png",
  "Spectro DMG": "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Spectro.png",
  "Aero DMG": "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Aero.png",
  "Healing Bonus": "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Healing_Bonus.png",
  // Add more as needed
};

export function getStatIcon(label: string): string | null {
  return statIconMap[label] || null;
}