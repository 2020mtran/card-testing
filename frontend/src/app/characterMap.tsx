export type CharacterInfo = {
  name: string;
  type: string;
  typeIcon: string;
  imageUrl: string;
  waveband: string;
  rc1: string;
  rc2: string;
  rc3: string;
  rc4: string;
  rc5: string;
  rc6: string;
  talentStat1: string;
  talentStat2: string;
  normal: string;
  skill: string;
  forte: string;
  liberation: string;
  intro: string;
  passive1: string;
  passive2: string;
  base_hp_90: number;
  base_atk_90: number;
  base_def_90: number;
};

export const characterMap: Record<string, CharacterInfo> = {
  "Cartethyia": {
    name: "Cartethyia",
    type: "Aero",
    typeIcon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Aero.png",
    imageUrl: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Cartethyia_2.webp",
    waveband: "",
    rc1: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Cartethyia-RC-1.png",
    rc2: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Cartethyia-RC-2.png",
    rc3: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Cartethyia-RC-3.png",
    rc4: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Cartethyia-RC-4.png",
    rc5: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Cartethyia-RC-5.png",
    rc6: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Cartethyia-RC-6.png",
    talentStat1: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Crit_Rate.webp",
    talentStat2: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Health.webp",
    normal: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Cartethyia_Basic.png",
    skill: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Cartethyia_Skill.png",
    forte: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Cartethyia_Forte.png",
    liberation: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Cartethyia_Liberation.png",
    intro: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Cartethyia_Intro.png",
    passive1: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Cartethyia_Passive1.png",
    passive2: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Cartethyia_Passive2.png",
    base_hp_90: 14800,
    base_atk_90: 312,
    base_def_90: 611,
  },
  "Zani": {
    name: "Zani",
    type: "Spectro",
    typeIcon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Spectro.png",
    imageUrl: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Zani_2.webp",
    waveband: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Zani_Waveband.webp",
    rc1: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Zani-RC-1.webp",
    rc2: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Zani-RC-2.webp",
    rc3: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Zani-RC-3.webp",
    rc4: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Zani-RC-4.webp",
    rc5: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Zani-RC-5.webp",
    rc6: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Zani-RC-6.webp",
    talentStat1: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Crit_Rate.webp",
    talentStat2: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Attack.webp",
    normal: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Zani_Basic_Atk.png",
    skill: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Zani_Resonance_Skill.png",
    forte: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Zani_Forte_Circuit.png",
    liberation: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Zani_Resonance_Liberation.png",
    intro: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Zani_Intro_Skill.png",
    passive1: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Zani_Passive_Skill1.png",
    passive2: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Zani_Passive_Skill2.png",
    base_hp_90: 10775,
    base_atk_90: 438,
    base_def_90: 1137,
  },
  // add more
};

export function getCharacterInfo(name: string): CharacterInfo | null {
  return characterMap[name] || null;
}
