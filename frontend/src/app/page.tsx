'use client';

import Image from "next/image";
import { useState } from 'react';
import { getCharacterInfo, CharacterInfo } from "./characterMap";
import { getWeaponInfo } from "./weaponMap";
import { getStatIcon } from "./statMap";
import { Field, Label, Radio, RadioGroup, Menu, MenuButton, MenuItem, MenuItems, Checkbox, Listbox, ListboxOption, ListboxOptions, ListboxButton } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpDownIcon, CheckIcon } from '@heroicons/react/20/solid'
import { getEchoInfo, EchoInfo, echoMap } from "./echoMap";

const options = [
    {set: "Eternal Radiance", icon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Eternal_Radiance.webp"}, 
    {set: "Windward Pilgrimage", icon: "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Windward_Pilgrimage.webp"},
]

type Echo = {
  name: string;
  icon: string;
};

type EchoDropdownProps = {
  index: number;
  selectedEcho: Echo | null;
  echoes: Echo[];
  handleEchoChange: (slotIndex: number, newEchoName: string) => void;
};

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [ocrData, setOcrData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const character = getCharacterInfo(ocrData?.character || "");
  const weapon = getWeaponInfo(ocrData?.weaponName || "");
  const [selectedSet, setSelectedSet] = useState(options[0]);
  // const [selectedEchoes, setSelectedEchoes] = useState<EchoInfo[]>([]);
  const [selectedEchoes, setSelectedEchoes] = useState<(EchoInfo | null)[]>(Array(5).fill(null));

  const typeToBgClass: Record<string, string> = {
    Spectro: "bg-spectro/35",
    Aero: "bg-aero/35",
    Havoc: "bg-havoc/35",
  };

  const echo1Substats = ocrData ? [
    { label: ocrData.echo1FirstSubstat, value: ocrData.echo1FirstSubstatNum },
    { label: ocrData.echo1SecondSubstat, value: ocrData.echo1SecondSubstatNum },
    { label: ocrData.echo1ThirdSubstat, value: ocrData.echo1ThirdSubstatNum },
    { label: ocrData.echo1FourthSubstat, value: ocrData.echo1FourthSubstatNum },
    { label: ocrData.echo1FifthSubstat, value: ocrData.echo1FifthSubstatNum },
  ] : [];

  const echo2Substats = ocrData ? [
    { label: ocrData.echo2FirstSubstat, value: ocrData.echo2FirstSubstatNum },
    { label: ocrData.echo2SecondSubstat, value: ocrData.echo2SecondSubstatNum },
    { label: ocrData.echo2ThirdSubstat, value: ocrData.echo2ThirdSubstatNum },
    { label: ocrData.echo2FourthSubstat, value: ocrData.echo2FourthSubstatNum },
    { label: ocrData.echo2FifthSubstat, value: ocrData.echo2FifthSubstatNum },
  ] : [];

  const echo3Substats = ocrData ? [
    { label: ocrData.echo3FirstSubstat, value: ocrData.echo3FirstSubstatNum },
    { label: ocrData.echo3SecondSubstat, value: ocrData.echo3SecondSubstatNum },
    { label: ocrData.echo3ThirdSubstat, value: ocrData.echo3ThirdSubstatNum },
    { label: ocrData.echo3FourthSubstat, value: ocrData.echo3FourthSubstatNum },
    { label: ocrData.echo3FifthSubstat, value: ocrData.echo3FifthSubstatNum },
  ] : [];

  const echo4Substats = ocrData ? [
    { label: ocrData.echo4FirstSubstat, value: ocrData.echo4FirstSubstatNum },
    { label: ocrData.echo4SecondSubstat, value: ocrData.echo4SecondSubstatNum },
    { label: ocrData.echo4ThirdSubstat, value: ocrData.echo4ThirdSubstatNum },
    { label: ocrData.echo4FourthSubstat, value: ocrData.echo4FourthSubstatNum },
    { label: ocrData.echo4FifthSubstat, value: ocrData.echo4FifthSubstatNum },
  ] : [];

  const echo5Substats = ocrData ? [
    { label: ocrData.echo5FirstSubstat, value: ocrData.echo5FirstSubstatNum },
    { label: ocrData.echo5SecondSubstat, value: ocrData.echo5SecondSubstatNum },
    { label: ocrData.echo5ThirdSubstat, value: ocrData.echo5ThirdSubstatNum },
    { label: ocrData.echo5FourthSubstat, value: ocrData.echo5FourthSubstatNum },
    { label: ocrData.echo5FifthSubstat, value: ocrData.echo5FifthSubstatNum },
  ] : [];

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);
    setLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:8000/ocr', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('OCR request failed');
      }

      const data = await response.json();
      setOcrData(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const STAT_TYPES = {
    hp: ["hp"],
    atk: ["atk"],
    def: ["def"],
    critRate: ["crit rate"],
    critDmg: ["crit dmg"],
    energy: ["energy"],
    basicAtk: ["basic atk"],
    heavyAtk: ["heavy atk"],
    resSkill: ["res skill"],
    resLiberation: ["res liberation"],
    elemental: ["spectro dmg", "aero dmg"],
    healing: ["healing bonus"]
  }

  type ElementType = "aero" | "spectro";

  const totalStats: { 
    flat: { hp: number; atk: number; def: number };
    percent: { hp: number; atk: number; def: number };
    total_hp: number;
    total_atk: number;
    total_def: number;
    critRate: number;
    critDmg: number;
    energy: number;
    healing: number;
    elemental: Record<ElementType, number>;
    talent: { basic: number; heavy: number; skill: number; liberation: number };
  } = {
    flat: { hp: 0, atk: 0, def: 0 },
    percent: { hp: 0, atk: 0, def: 0 },
    total_hp: 0,
    total_atk: 0,
    total_def: 0,
    critRate: 5,
    critDmg: 150,
    energy: 100,
    elemental: {
      aero: 0,
      spectro: 0,
    },
    healing: 0,
    talent: { basic: 0, heavy: 0, skill: 0, liberation: 0, }
  }

  function normalizeLabel(label: string): string {
    return label.toLowerCase().replace(/\./g, "").trim();
  }

  function isPercentage(value: string): boolean {
    return value.includes("%");
  }

  function applySubstat(label: string, value: string) {
    const statLabel = normalizeLabel(label);
    const numericValue = parseFloat(value.replace("%", ""));

    if (STAT_TYPES.hp.includes(statLabel)) {
      isPercentage(value) ? totalStats.percent.hp += numericValue : totalStats.flat.hp += numericValue;
    } else if (STAT_TYPES.atk.includes(statLabel)) {
      isPercentage(value) ? totalStats.percent.atk += numericValue : totalStats.flat.atk += numericValue;
    } else if (STAT_TYPES.def.includes(statLabel)) {
      isPercentage(value) ? totalStats.percent.def += numericValue : totalStats.flat.def += numericValue;
    } else if (STAT_TYPES.energy.includes(statLabel)) {
      isPercentage(value) ? totalStats.energy += numericValue : totalStats.energy += numericValue;
    } else if (STAT_TYPES.critRate.includes(statLabel)) {
      totalStats.critRate += numericValue
    } else if (STAT_TYPES.critDmg.includes(statLabel)) {
      totalStats.critDmg += numericValue
    } else if (STAT_TYPES.basicAtk.includes(statLabel)) {
      totalStats.talent.basic += numericValue
    } else if (STAT_TYPES.heavyAtk.includes(statLabel)) {
      totalStats.talent.heavy += numericValue
    } else if (STAT_TYPES.resSkill.includes(statLabel)) {
      totalStats.talent.skill += numericValue
    } else if (STAT_TYPES.resLiberation.includes(statLabel)) {
      totalStats.talent.liberation += numericValue
    } 
  }

  function applyMainStat(label: string, value: string, character: CharacterInfo) {
    const statLabel = normalizeLabel(label);
    const numericValue = parseFloat(value.replace("%", ""));

    if (STAT_TYPES.hp.includes(statLabel)) {
      totalStats.percent.hp += numericValue
      totalStats.flat.hp += 2280
    } else if (STAT_TYPES.atk.includes(statLabel)) {
      totalStats.percent.atk += numericValue
      totalStats.flat.hp += 2280
    } else if (STAT_TYPES.def.includes(statLabel)) {
      totalStats.percent.def += numericValue
      totalStats.flat.hp += 2280
    } else if (STAT_TYPES.energy.includes(statLabel)) {
      totalStats.energy += numericValue
      totalStats.flat.atk += 150
    } else if (STAT_TYPES.critRate.includes(statLabel)) {
      totalStats.critRate += numericValue
      totalStats.flat.atk += 150
    } else if (STAT_TYPES.critDmg.includes(statLabel)) {
      totalStats.critDmg += numericValue
      totalStats.flat.atk += 150
    } else if (STAT_TYPES.elemental.includes(statLabel)) {
        const type = character.type.toLowerCase() as ElementType;

        if (statLabel.toLowerCase().includes(type)) {
          totalStats.elemental[type] += numericValue;
        }
      totalStats.flat.atk += 100
    }
  }

  const allSubStats = ocrData ? [
    { label: ocrData.echo1FirstSubstat, value: ocrData.echo1FirstSubstatNum },
    { label: ocrData.echo1SecondSubstat, value: ocrData.echo1SecondSubstatNum },
    { label: ocrData.echo1ThirdSubstat, value: ocrData.echo1ThirdSubstatNum },
    { label: ocrData.echo1FourthSubstat, value: ocrData.echo1FourthSubstatNum },
    { label: ocrData.echo1FifthSubstat, value: ocrData.echo1FifthSubstatNum },
    
    { label: ocrData.echo2FirstSubstat, value: ocrData.echo2FirstSubstatNum },
    { label: ocrData.echo2SecondSubstat, value: ocrData.echo2SecondSubstatNum },
    { label: ocrData.echo2ThirdSubstat, value: ocrData.echo2ThirdSubstatNum },
    { label: ocrData.echo2FourthSubstat, value: ocrData.echo2FourthSubstatNum },
    { label: ocrData.echo2FifthSubstat, value: ocrData.echo2FifthSubstatNum },

    { label: ocrData.echo3FirstSubstat, value: ocrData.echo3FirstSubstatNum },
    { label: ocrData.echo3SecondSubstat, value: ocrData.echo3SecondSubstatNum },
    { label: ocrData.echo3ThirdSubstat, value: ocrData.echo3ThirdSubstatNum },
    { label: ocrData.echo3FourthSubstat, value: ocrData.echo3FourthSubstatNum },
    { label: ocrData.echo3FifthSubstat, value: ocrData.echo3FifthSubstatNum },

    { label: ocrData.echo4FirstSubstat, value: ocrData.echo4FirstSubstatNum },
    { label: ocrData.echo4SecondSubstat, value: ocrData.echo4SecondSubstatNum },
    { label: ocrData.echo4ThirdSubstat, value: ocrData.echo4ThirdSubstatNum },
    { label: ocrData.echo4FourthSubstat, value: ocrData.echo4FourthSubstatNum },
    { label: ocrData.echo4FifthSubstat, value: ocrData.echo4FifthSubstatNum },

    { label: ocrData.echo5FirstSubstat, value: ocrData.echo5FirstSubstatNum },
    { label: ocrData.echo5SecondSubstat, value: ocrData.echo5SecondSubstatNum },
    { label: ocrData.echo5ThirdSubstat, value: ocrData.echo5ThirdSubstatNum },
    { label: ocrData.echo5FourthSubstat, value: ocrData.echo5FourthSubstatNum },
    { label: ocrData.echo5FifthSubstat, value: ocrData.echo5FifthSubstatNum },
  ] : [] ;

  const allMainStats = ocrData ? [
    { label: ocrData.echo1MainStat, value: ocrData.echo1MainStatNum },
    { label: ocrData.echo2MainStat, value: ocrData.echo2MainStatNum },
    { label: ocrData.echo3MainStat, value: ocrData.echo3MainStatNum },
    { label: ocrData.echo4MainStat, value: ocrData.echo4MainStatNum },
    { label: ocrData.echo5MainStat, value: ocrData.echo5MainStatNum },
  ] : [] ;

  allSubStats.forEach(stat => {
    if (stat.label && stat.value) {
      applySubstat(stat.label, stat.value);
    }
  });

  allMainStats.forEach(stat => {
    if (stat.label && stat.value && character) {
      applyMainStat(stat.label, stat.value, character);
    }
  });

  function calculate_total_hp() {
    if (character) {
      // console.log(character.base_hp_90)
      // console.log(1 + totalStats.percent.hp / 100)
      // console.log(totalStats.flat.hp)
      let totalHP = character.base_hp_90 * (1 + totalStats.percent.hp / 100) + totalStats.flat.hp;
      // console.log(totalHP)
      totalStats.total_hp = Math.round(totalHP)
    }
  }

  if (weapon?.subStatIcon =="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Health.webp") {
    totalStats.percent.hp += parseFloat(weapon.subStatNum) + 12
  }

  if (character?.talentStat1 == "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Health.webp" || character?.talentStat2 == "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Health.webp") {
    totalStats.percent.hp += 12
  }

  function calculate_total_atk() {
    if (character && weapon) {
      // console.log(character.base_atk_90)
      // console.log(1 + totalStats.percent.atk / 100)
      // console.log(totalStats.flat.atk)
      // console.log(weapon.baseStatNum)
      let totalATK = (character.base_atk_90 + parseFloat(weapon?.baseStatNum)) * (1 + totalStats.percent.atk / 100) + totalStats.flat.atk
      totalStats.total_atk = Math.round(totalATK)
    }
  }

  if (character?.talentStat1 == "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Attack.webp" || character?.talentStat2 == "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Attack.webp") {
    totalStats.percent.atk += 12
  }

  if (weapon?.name == "Blazing Justice") {
    totalStats.percent.atk += 12
    totalStats.critDmg += 48.6
  }

  function calculate_total_def() {
    if (character) {
      let totalDEF = (character.base_def_90) * (1 + totalStats.percent.def / 100) + totalStats.flat.def
      totalStats.total_def = Math.round(totalDEF)
    }
  }

  if (character?.talentStat1 == "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Crit_Rate.webp" || character?.talentStat2 == "https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Crit_Rate.webp") {
    totalStats.critRate += 8
  }

  calculate_total_hp();
  calculate_total_atk();
  calculate_total_def();

  totalStats.critRate = Math.round(totalStats.critRate * 10) / 10
  totalStats.critDmg = Math.round(totalStats.critDmg * 10) / 10

  const leftStats = [
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Health.webp', label: 'HP', value: totalStats.total_hp },
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Attack.webp', label: 'ATK', value: totalStats.total_atk },
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Defense.webp', label: 'DEF', value: totalStats.total_def },
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Energy_Regen.webp', label: 'Energy Reg.', value: `${totalStats.energy}%` },
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Crit_Rate.webp', label: 'Crit. Rate', value: `${totalStats.critRate}%` },
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Crit_DMG.webp', label: 'Crit. DMG', value: `${totalStats.critDmg}%` },
  ]

  const type = character?.type.toLowerCase() as "aero" | "spectro";

  const rightStats = [
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Basic_Atk_DMG.png', label: 'Basic Atk', value: `${totalStats.talent.basic}%` },
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Heavy_Atk_DMG.png', label: 'Heavy Atk', value: `${totalStats.talent.heavy}%` },
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Resonance_Skill_Bonus.png', label: 'Res. Skill', value: `${totalStats.talent.skill}%` },
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Resonance_Liberation_Bonus.png', label: 'Liberation', value: `${totalStats.talent.liberation}%` },
    { icon: `${character && character.typeIcon}`, label: `${character && character.type} DMG`, value: `${totalStats.elemental[type]}%` },
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Healing_Bonus.png', label: 'Healing Bonus', value: '0%' },
  ]

  const leftLen = leftStats.length;
  const rightLen = rightStats.length;

  const echoesForSelectedSet = selectedSet ? echoMap.filter(e => e.sets.includes(selectedSet.set)) : [];

  const handleEchoChange = (slotIndex: number, echoName: string) => {
    const echo = echoesForSelectedSet.find(e => e.name === echoName) || null;
    setSelectedEchoes(prev => {
      const updated = [...prev];
      updated[slotIndex] = echo;
      return updated;
    });
  };

  function EchoDropdown({ index, selectedEcho, echoes, handleEchoChange }: EchoDropdownProps) {
    return (
      <Listbox
        value={selectedEcho?.name || ""}
        onChange={(value) => handleEchoChange(index, value)}
      >
        <div className="relative w-60">
          <ListboxButton className="relative w-full cursor-pointer rounded border bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-sk-light-blue sm:text-sm">
            <span className="block truncate text-black">
              {selectedEcho?.name || "None"}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </ListboxButton>

          <ListboxOptions className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            <ListboxOption key="none" value="" className={"text-black ml-2"}>
              None
            </ListboxOption>

            {echoes.map((echo) => (
              <ListboxOption key={echo.name} value={echo.name} className={"flex gap-1 text-black"}>
                <img src={echo.icon} alt={echo.name} className="ml-2 w-6 h-6 inline-block mr-2" />
                {echo.name}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    );
  }

  const [ RC, setRC ] = useState<number>(0);
  const resonanceChains = [
    character?.rc1,
    character?.rc2,
    character?.rc3,
    character?.rc4,
    character?.rc5,
    character?.rc6,
  ]

  const [ WR, setWR ] = useState<number>(1);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-blurple gap-5 py-10">
      <div className="flex flex-col mt-5">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="mb-2"
        />
        <button
          onClick={handleUpload}
          className="bg-blue-600 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Upload'}
        </button>
      </div>
      {character && weapon && (
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-row w-[70%]">
            <div className="flex flex-col items-center">
              <div className="flex flex-row gap-2">
                <img src={character.typeIcon} alt="Character Type" className="w-12 h-12"/>
                <p className="font-lagu-semibold text-shadow-divider text-shadow-lg text-charName text-white leading-none">{ocrData.character}</p>
              </div>
              <div className="relative overflow-hidden h-[100%] w-full">
                <Image src={character.imageUrl} alt="Character Portrait" width={1000} height={860} className="w-auto pt-10 scale-125 object-cover object-top"/>
                <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-blurple/100 to-blurple/0 pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-1/8 h-full bg-gradient-to-r from-blurple/100 to-transparent pointer-events-none" />
                <div className="absolute top-0 right-0 w-1/6 h-full bg-gradient-to-l from-blurple/100 to-transparent pointer-events-none" />
              </div>
              <p className="font-lagu-semibold text-3xl text-white leading-none">Level {ocrData.level}/90</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div className="flex flex-row items-center">
                <Image src={character.waveband} alt="Character Waveband" width={100} height={100} className="w-[22%] aspect-square" />
                <div className="flex flex-col flex-grow gap-1">
                  <label htmlFor="resonance" className="font-medium text-wrap">
                    Resonance Chains: {String(RC)}/6
                  </label>
                  <input
                    id="resonance"
                    type="range"
                    min={0}
                    max={6}
                    value={String(RC)}
                    onChange={(e) => setRC(Number(e.target.value))}
                    className="w-full accent-sk-light-blue"
                  />
                </div>
                <Image src={weapon?.imageUrl} alt="Character Weapon Icon" width={100} height={100} className="w-[20%] aspect-square" />
                <div className="flex flex-col gap-1">
                  <p className="font-lagu-semibold text-md text-white leading-none">{weapon.name}</p>
                  <label htmlFor="weapon" className="font-medium">
                    Rank: {String(WR)}/5
                  </label>
                  <input
                    id="resonance"
                    type="range"
                    min={1}
                    max={5}
                    value={String(WR)}
                    onChange={(e) => setWR(Number(e.target.value))}
                    className="w-full accent-sk-light-blue"
                  />
                  <p className="font-lagu-semibold text-md text-white leading-none">Level {ocrData.weaponLvl}/90</p>
                </div>
              </div>
              <div className="flex flex-row justify-center flex-1 h-full ">
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="w-[40%] aspect-square flex justify-center items-center bg-white rounded-full border-3 border-black/30">
                    <img src={character.talentStat1} alt="Talent Stat 1" className="invert w-[90%]"></img>
                  </div>
                  <div className="h-[10%] w-[3%] bg-white/20" />
                  <div className="w-[40%] aspect-square flex justify-center items-center bg-white rounded-full border-3 border-black/30">
                    <img src={character.talentStat1} alt="Talent Stat 1" className="invert w-[90%]"></img>
                  </div>                
                  <div className="h-[10%] w-[3%] bg-white/20 mb-2" />
                  <div className="w-[45%] aspect-square rotate-45 border-3 border-black/30 bg-white flex items-center justify-center">
                    <img src={character.normal} alt="Normal Attack" className="-rotate-45 invert w-[90%]"></img>
                  </div>
                  <p className="flex flex-col leading-tight text-center mt-3 text-xs">
                    <span>Lv. {ocrData.basicAtkLvl && ocrData.basicAtkLvl.match(/\d+/)?.[0]}</span>
                    <span>Normal</span>
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center mb-5">
                  <div className="w-[40%] aspect-square flex justify-center items-center bg-white rounded-full border-3 border-black/30">
                    <img src={character.talentStat2} alt="Talent Stat 2" className="invert w-[87%]"></img>
                  </div>
                  <div className="h-[10%] w-[3%] bg-white/20" />
                  <div className="w-[40%] aspect-square flex justify-center items-center bg-white rounded-full border-3 border-black/30">
                    <img src={character.talentStat2} alt="Talent Stat 2" className="invert w-[87%]"></img>
                  </div>                
                  <div className="h-[10%] w-[3%] bg-white/20 mb-2" />
                  <div className="w-[45%] aspect-square rotate-45 border-3 border-black/30 bg-white flex items-center justify-center">
                    <img src={character.skill} alt="Skill" className="-rotate-45 invert w-[90%]"></img>
                  </div>
                  <p className="flex flex-col leading-tight text-center mt-3 text-xs">
                    <span>Lv. {ocrData.skillLvl && ocrData.skillLvl.match(/\d+/)?.[0]}</span>
                    <span>Skill</span>
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center pb-10">
                  <div className="w-[45%] aspect-square border-3 border-black/75 bg-white flex items-center justify-center">
                    <div className="w-[100%] aspect-square rotate-45 border-3 border-black/70 bg-white flex items-center justify-center">
                      <img src={character.passive2} alt="Passive Skill 2" className="-rotate-45 invert w-[90%]"></img>
                    </div>  
                  </div>
                  <div className="h-4 w-[3px] bg-white/20" />
                  <div className="w-[45%] aspect-square border-3 border-black/75 bg-white flex items-center justify-center">
                    <div className="w-[100%] aspect-square rotate-45 border-3 border-black/70 bg-white flex items-center justify-center">
                      <img src={character.passive1} alt="Passive Skill 1" className="-rotate-45 invert w-[90%]"></img>
                    </div>  
                  </div>
                  <div className="h-4 w-[3px] bg-white/20 mb-2" />
                  <div className="w-[45%] aspect-square rotate-45 border-3 border-black/30 bg-white flex items-center justify-center">
                    <img src={character.forte} alt="Forte Circuit" className="-rotate-45 invert w-[90%]"></img>
                  </div>
                  <p className="flex flex-col leading-tight text-center mt-3 text-xs">
                    <span>Lv. {ocrData.forteCircuitLvl && ocrData.forteCircuitLvl.match(/\d+/)?.[0]}</span>
                    <span>Forte</span>
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center mb-5">
                  <div className="w-[40%] aspect-square flex justify-center items-center bg-white rounded-full border-3 border-black/30">
                    <img src={character.talentStat2} alt="Talent Stat 2" className="invert w-[87%]"></img>
                  </div>
                  <div className="h-[10%] w-[3%] bg-white/20" />
                  <div className="w-[40%] aspect-square flex justify-center items-center bg-white rounded-full border-3 border-black/30">
                    <img src={character.talentStat2} alt="Talent Stat 2" className="invert w-[87%]"></img>
                  </div>                
                  <div className="h-[10%] w-[3%] bg-white/20 mb-2" />
                  <div className="w-[45%] rotate-45 border-3 border-black/30 bg-white flex items-center justify-center">
                    <img src={character.liberation} alt="Resonance Liberation" className="-rotate-45 invert w-[90%]"></img>
                  </div>
                  <p className="flex flex-col leading-tight text-center mt-3 text-xs">
                    <span>Lv. {ocrData.ultimateLvl && ocrData.ultimateLvl.match(/\d+/)?.[0]}</span>
                    <span>Liberation</span>
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-[40%] aspect-square flex justify-center items-center bg-white rounded-full border-3 border-black/30">
                    <img src={character.talentStat1} alt="Talent Stat 1" className="invert w-[90%]"></img>
                  </div>
                  <div className="h-[10%] w-[3%] bg-white/20" />
                  <div className="w-[40%] aspect-square flex justify-center items-center bg-white rounded-full border-3 border-black/30">
                    <img src={character.talentStat1} alt="Talent Stat 1" className="invert w-[90%]"></img>
                  </div>                
                  <div className="h-[10%] w-[3%] bg-white/20 mb-2" />
                  <div className="w-[45%] rotate-45 border-3 border-black/30 bg-white flex items-center justify-center">
                    <img src={character.intro} alt="Intro Skill" className="-rotate-45 invert w-[90%]"></img>
                  </div>
                  <p className="flex flex-col leading-tight text-center mt-3 text-xs">
                    <span>Lv. {ocrData.introSkillLvl && ocrData.introSkillLvl.match(/\d+/)?.[0]}</span>
                    <span>Intro</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
            <RadioGroup value={selectedSet} onChange={setSelectedSet} aria-label="Echo Set Selection">
              <div className="flex flex-row gap-4">
                {options.map((option) => (
                  <Field key={option.set} className="flex items-center gap-2">
                    <Radio            value={option}
                      className="group flex size-5 items-center justify-center rounded-full border bg-white data-checked:bg-blue-400"
                    >
                      <span className="invisible size-2 rounded-full bg-white group-data-checked:visible" />
                    </Radio>
                    <Label>{option.set}</Label>
                    <img src={option.icon} alt={option.set} className="w-5 h-5" />
                  </Field>
                ))}
              </div>
            </RadioGroup>
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold self-center">
                Select Echoes for {selectedSet.set}
              </h2>
              <div className="flex flex-row gap-5">
                {selectedEchoes.map((selectedEcho, index) => (
                  <EchoDropdown
                    key={index}
                    index={index}
                    selectedEcho={selectedEcho}
                    echoes={echoesForSelectedSet}
                    handleEchoChange={handleEchoChange}
                  />
                ))}
              </div>
            </div>
        </div>
      )}
      {ocrData && character && weapon && (
      <div className="relative w-[1214px] h-[541px] rounded-xl overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-[url('/background.jpg')] bg-cover bg-center"></div>
        <div className={`absolute inset-0 ${typeToBgClass[character.type] || "bg-gray-500/35"}`} />
        <Image 
          src={character.imageUrl}
          alt={ocrData.character}
          layout="fill"
          className="absolute -ml-3 mt-15 scale-125 object-contain object-left"
        />
        <div className="flex flex-col absolute h-full bg-divider/80 origin-center left-[25.5%] w-[74.5%] gap-3">
          <div className="flex flex-row gap-2">
            <div className="flex flex-col">
              <div className="flex flex-row items-end gap-3 mt-6 ml-20">
                <p className="font-lagu-semibold text-shadow-divider text-shadow-lg text-charName text-white leading-none">{ocrData.character}</p>
                <p className="font-lagu-semibold text-shadow-divider text-shadow-lg text-2xl text-white">• {ocrData.playerID}</p>
              </div>
              <div className="flex flex-row items-center gap-1.5">
                <p className="font-lagu-semibold text-shadow-divider text-shadow-lg ml-20 text-2xl text-white">Lv. {ocrData.level}/90</p>
                <Image
                  src={character.typeIcon}
                  alt={character.type}
                  width={35}
                  height={35}
                  className="h-auto"
                  />
              </div>
            </div>
            <div className="flex flex-row mt-6 gap-1">
              <Image
                src={weapon.imageUrl}
                alt={ocrData.weaponName}
                width={70}
                height={70}
                className="h-[75px] w-auto"
              />
              <div className="flex flex-col gap-1">
                <p className="font-lagu-semibold text-shadow-divider text-shadow-lg text-xl text-white leading-none">{weapon.name}</p>
                <div className="flex flex-row gap-3.5">
                  <p className="font-lagu-semibold text-shadow-divider text-shadow-lg text-lg text-white leading-none">Lv. {ocrData.weaponLvl}/90</p>
                  <p className="font-lagu-semibold text-shadow-divider text-shadow-lg text-lg text-white leading-none">Rank {WR}</p>
                </div>
                <div className="flex flex-row items-center">
                  <Image 
                    src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Attack.webp" 
                    alt="Atk Icon" 
                    width={25} 
                    height={25} 
                    className="h-auto"
                  />
                  <p className="font-lagu-semibold text-shadow-divider text-shadow-lg text-lg text-white leading-none ml-1 mr-3">{weapon.baseStatNum}</p>
                  <Image 
                    src={weapon.subStatIcon}
                    alt="Weapon Substat Icon"
                    width={25} 
                    height={25} 
                    className="h-auto"
                  />
                  <p className="font-lagu-semibold text-shadow-divider text-shadow-lg text-lg text-white leading-none ml-1 mr-3">{weapon.subStatNum}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center gap-0.5 flex-grow justify-center">
              <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/WuwaNetworkLogo.png" alt="WuwaNetwork Logo" className="w-10 h-10"/>
              <p className="text-lg bg-gradient-to-t from-white to-sk-light-blue text-transparent bg-clip-text">Wuwa.Network</p>
            </div>
          </div>
          <div className="flex flex-row ml-12 items-start">
            <div className="flex flex-col -mt-1 gap-2">
              {leftStats.map(({ icon, label, value }, i) => (
                <div
                  key={label}
                  className="flex items-center gap-3"
                  style={{ marginLeft: `${(leftLen - i - 1) * 4}px`, marginRight: `${i * 4}px`  }}
                >
                  <img src={icon} alt={label} className="w-7 h-7 flex-shrink-0"/>
                  <p className="text-lg whitespace-nowrap">{label}</p>
                  <div className="flex-1 rounded-full h-[2px] bg-white opacity-20 min-w-1"></div>
                  <p className="text-lg text-right whitespace-nowrap">{value}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col -mt-1 gap-2">
              {rightStats.map(({ icon, label, value }, i) => (
                <div
                  key={label}
                  className="flex items-center gap-3"
                  style={{ marginLeft: `${(leftLen - i - 1) * 4}px`, marginRight: `${i * 4}px`  }}
                >
                  <img src={icon} alt={label} className="w-7 h-7 flex-shrink-0"/>
                  <p className="text-lg whitespace-nowrap">{label}</p>
                  <div className="flex-1 rounded-full h-[2px] bg-white opacity-20 min-w-1"></div>
                  <p className="text-lg text-right whitespace-nowrap">{value}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-row ml-5 gap-6 h-[200px]">
              <div className="flex flex-col items-center justify-center">
                <div className="w-9 h-9 flex justify-center items-center bg-white rounded-full border-3 border-black/30">
                  <img src={character.talentStat1} alt="Talent Stat 1" className="invert w-7 h-7"></img>
                </div>
                <div className="h-6 w-[3px] bg-white/20" />
                <div className="w-9 h-9 flex justify-center items-center bg-white rounded-full border-3 border-black/30">
                  <img src={character.talentStat1} alt="Talent Stat 1" className="invert w-7 h-7"></img>
                </div>                
                <div className="h-6 w-[3px] bg-white/20 mb-2" />
                <div className="w-11 h-11 rotate-45 border-3 border-black/30 bg-white flex items-center justify-center">
                  <img src={character.normal} alt="Normal Attack" className="-rotate-45 invert w-9 h-9"></img>
                </div>
                <p className="flex flex-col leading-tight text-center mt-3 text-xs">
                  <span>Lv. {ocrData.basicAtkLvl && ocrData.basicAtkLvl.match(/\d+/)?.[0]}</span>
                  <span>Normal</span>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="w-9 h-9 flex justify-center items-center bg-white rounded-full border-3 border-black/30">
                  <img src={character.talentStat2} alt="Talent Stat 2" className="invert w-6 h-6"></img>
                </div>
                <div className="h-6 w-[3px] bg-white/20" />
                <div className="w-9 h-9 flex justify-center items-center bg-white rounded-full border-3 border-black/30">
                  <img src={character.talentStat2} alt="Talent Stat 2" className="invert w-6 h-6"></img>
                </div>                
                <div className="h-6 w-[3px] bg-white/20 mb-2" />
                <div className="w-11 h-11 rotate-45 border-3 border-black/30 bg-white flex items-center justify-center">
                  <img src={character.skill} alt="Skill" className="-rotate-45 invert w-9 h-9"></img>
                </div>
                <p className="flex flex-col leading-tight text-center mt-3 text-xs">
                  <span>Lv. {ocrData.skillLvl && ocrData.skillLvl.match(/\d+/)?.[0]}</span>
                  <span>Skill</span>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="w-11 h-11 border-3 border-black/30 bg-white flex items-center justify-center">
                  <div className="w-7 h-7 rotate-45 border-3 border-black/30 bg-white flex items-center justify-center">
                    <img src={character.passive2} alt="Passive Skill 2" className="-rotate-45 invert w-6 h-6"></img>
                  </div>  
                </div>
                <div className="h-4 w-[3px] bg-white/20" />
                <div className="w-11 h-11 border-3 border-black/30 bg-white flex items-center justify-center">
                  <div className="w-7 h-7 rotate-45 border-3 border-black/30 bg-white flex items-center justify-center">
                    <img src={character.passive1} alt="Passive Skill 1" className="-rotate-45 invert w-6 h-6"></img>
                  </div>  
                </div>
                <div className="h-4 w-[3px] bg-white/20 mb-2" />
                <div className="w-11 h-11 rotate-45 border-3 border-black/30 bg-white flex items-center justify-center">
                  <img src={character.forte} alt="Forte Circuit" className="-rotate-45 invert w-9 h-9"></img>
                </div>
                <p className="flex flex-col leading-tight text-center mt-3 text-xs">
                  <span>Lv. {ocrData.forteCircuitLvl && ocrData.forteCircuitLvl.match(/\d+/)?.[0]}</span>
                  <span>Forte</span>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center w-[44px]">
                <div className="w-9 h-9 flex justify-center items-center bg-white rounded-full border-3 border-black/30">
                  <img src={character.talentStat2} alt="Talent Stat 2" className="invert w-6 h-6"></img>
                </div>
                <div className="h-6 w-[3px] bg-white/20" />
                <div className="w-9 h-9 flex justify-center items-center bg-white rounded-full border-3 border-black/30">
                  <img src={character.talentStat2} alt="Talent Stat 2" className="invert w-6 h-6"></img>
                </div>                
                <div className="h-6 w-[3px] bg-white/20 mb-2" />
                <div className="w-11 h-11 rotate-45 border-3 border-black/30 bg-white flex items-center justify-center">
                  <img src={character.liberation} alt="Resonance Liberation" className="-rotate-45 invert w-9 h-9"></img>
                </div>
                <p className="flex flex-col leading-tight text-center mt-3 text-xs">
                  <span>Lv. {ocrData.ultimateLvl && ocrData.ultimateLvl.match(/\d+/)?.[0]}</span>
                  <span>Liberation</span>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="w-9 h-9 flex justify-center items-center bg-white rounded-full border-3 border-black/30">
                  <img src={character.talentStat1} alt="Talent Stat 1" className="invert w-7 h-7"></img>
                </div>
                <div className="h-6 w-[3px] bg-white/20" />
                <div className="w-9 h-9 flex justify-center items-center bg-white rounded-full border-3 border-black/30">
                  <img src={character.talentStat1} alt="Talent Stat 1" className="invert w-7 h-7"></img>
                </div>                
                <div className="h-6 w-[3px] bg-white/20 mb-2" />
                <div className="w-11 h-11 rotate-45 border-3 border-black/30 bg-white flex items-center justify-center">
                  <img src={character.intro} alt="Intro Skill" className="-rotate-45 invert w-9 h-9"></img>
                </div>
                <p className="flex flex-col leading-tight text-center mt-3 text-xs">
                  <span>Lv. {ocrData.introSkillLvl && ocrData.introSkillLvl.match(/\d+/)?.[0]}</span>
                  <span>Intro</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-row ml-8 gap-1">
            <div className="flex flex-col gap-1 bg-black/30 p-2">
              <div className="flex flex-row gap-1">
                <img src={selectedEchoes[0]?.icon} alt="Echo 1" className="w-15 h-15"></img>
                <div className="flex flex-col items-end w-[88.75px]">
                  <img src={selectedSet.icon} alt="Echo 1 Set" className="w-5 h-5"></img>
                  <p className="text-sm">{ocrData.echo1MainStat}</p>
                  <div className="flex flex-row gap-0.5">
                    {getStatIcon(ocrData.echo1MainStat) && (
                      <img src={getStatIcon(ocrData.echo1MainStat)!} alt="Echo 1 Main Stat Icon" className="w-5 h-5"></img> 
                    )}
                    <p className="text-sm">{ocrData.echo1MainStatNum}</p>
                  </div> 
                </div>
              </div>
              {echo1Substats.map((substat, index) => {
                const iconSrc = getStatIcon(substat.label);

                return (
                  <div key={index} className="flex flex-row justify-between">
                    <div className="flex flex-row gap-0.5">
                      {iconSrc && (
                        <img src={iconSrc} alt="Substat Icon" className="w-5 h-5" />
                      )}
                      <p className="text-sm">{substat.label}</p>
                    </div>
                    <p className="text-sm">{substat.value}</p>
                  </div>
                )
              })}
            </div>
  
            <div className="flex flex-col gap-1 bg-black/30 p-2">
              <div className="flex flex-row gap-1">
                <img src={selectedEchoes[1]?.icon} alt="Echo 2" className="w-15 h-15"></img>
                <div className="flex flex-col items-end w-[88.75px]">
                  <img src={selectedSet.icon} alt="Echo 2 Set" className="w-5 h-5"></img>
                  <p className="text-sm">{ocrData.echo2MainStat}</p>
                  <div className="flex flex-row gap-0.5">
                    {getStatIcon(ocrData.echo2MainStat) && (
                      <img src={getStatIcon(ocrData.echo2MainStat)!} alt="Echo 2 Main Stat Icon" className="w-5 h-5"></img> 
                    )}
                    <p className="text-sm">{ocrData.echo2MainStatNum}</p>
                  </div>
                </div>
              </div>
              {echo2Substats.map((substat, index) => {
                const iconSrc = getStatIcon(substat.label);

                return (
                  <div key={index} className="flex flex-row justify-between">
                    <div className="flex flex-row gap-0.5">
                      {iconSrc && (
                        <img src={iconSrc} alt="Substat Icon" className="w-5 h-5" />
                      )}
                      <p className="text-sm">{substat.label}</p>
                    </div>
                    <p className="text-sm">{substat.value}</p>
                  </div>
                )
              })}
            </div>
            <div className="flex flex-col gap-1 bg-black/30 p-2">
              <div className="flex flex-row gap-1">
                <img src={selectedEchoes[2]?.icon} alt="Echo 3" className="w-15 h-15"></img>
                <div className="flex flex-col items-end w-[88.75px]">
                  <img src={selectedSet.icon} alt="Echo 3 Set" className="w-5 h-5"></img>
                  <p className="text-sm">{ocrData.echo3MainStat}</p>
                  <div className="flex flex-row gap-0.5">
                    {getStatIcon(ocrData.echo3MainStat) && (
                      <img src={getStatIcon(ocrData.echo3MainStat)!} alt="Echo 3 Main Stat Icon" className="w-5 h-5"></img> 
                    )}
                    <p className="text-sm">{ocrData.echo3MainStatNum}</p>
                  </div>
                </div>
              </div>
              {echo3Substats.map((substat, index) => {
                const iconSrc = getStatIcon(substat.label);

                return (
                  <div key={index} className="flex flex-row justify-between">
                    <div className="flex flex-row gap-0.5">
                      {iconSrc && (
                        <img src={iconSrc} alt="Substat Icon" className="w-5 h-5" />
                      )}
                      <p className="text-sm">{substat.label}</p>
                    </div>
                    <p className="text-sm">{substat.value}</p>
                  </div>
                )
              })}
            </div>
            <div className="flex flex-col gap-1 bg-black/30 p-2">
              <div className="flex flex-row gap-1">
                <img src={selectedEchoes[3]?.icon} alt="Echo 4" className="w-15 h-15"></img>
                <div className="flex flex-col items-end w-[88.75px]">
                  <img src={selectedSet.icon} alt="Echo 4 Set" className="w-5 h-5"></img>
                  <p className="text-sm">{ocrData.echo4MainStat}</p>
                  <div className="flex flex-row gap-0.5">
                    {getStatIcon(ocrData.echo4MainStat) && (
                      <img src={getStatIcon(ocrData.echo4MainStat)!} alt="Echo 4 Main Stat Icon" className="w-5 h-5"></img> 
                    )}
                    <p className="text-sm">{ocrData.echo4MainStatNum}</p>
                  </div>
                </div>
              </div>
              {echo4Substats.map((substat, index) => {
                const iconSrc = getStatIcon(substat.label);

                return (
                  <div key={index} className="flex flex-row justify-between">
                    <div className="flex flex-row gap-0.5">
                      {iconSrc && (
                        <img src={iconSrc} alt="Substat Icon" className="w-5 h-5" />
                      )}
                      <p className="text-sm">{substat.label}</p>
                    </div>
                    <p className="text-sm">{substat.value}</p>
                  </div>
                )
              })}
            </div>
            <div className="flex flex-col gap-1 bg-black/30 p-2">
              <div className="flex flex-row gap-1">
                <img src={selectedEchoes[4]?.icon} alt="Echo 5" className="w-15 h-15"></img>
                <div className="flex flex-col items-end w-[88.75px]">
                  <img src={selectedSet.icon} alt="Echo 5 Set" className="w-5 h-5"></img>
                  <p className="text-sm">{ocrData.echo5MainStat}</p>
                  <div className="flex flex-row gap-0.5">
                    {getStatIcon(ocrData.echo5MainStat) && (
                      <img src={getStatIcon(ocrData.echo5MainStat)!} alt="Echo 5 Main Stat Icon" className="w-5 h-5"></img> 
                    )}
                    <p className="text-sm">{ocrData.echo5MainStatNum}</p>
                  </div>
                </div>
              </div>
              {echo5Substats.map((substat, index) => {
                const iconSrc = getStatIcon(substat.label);

                return (
                  <div key={index} className="flex flex-row justify-between">
                    <div className="flex flex-row gap-0.5">
                      {iconSrc && (
                        <img src={iconSrc} alt="Substat Icon" className="w-5 h-5" />
                      )}
                      <p className="text-sm">{substat.label}</p>
                    </div>
                    <p className="text-sm">{substat.value}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="absolute top-[-35px] bottom-[-50px] left-[21.5%] w-[65px]">
          <div className="flex flex-col items-center gap-3 h-[150%] bg-divider transform rotate-6 origin-center">
            <div className="mt-31"/>
            {resonanceChains.map((src, index) => {
              return (
                <Image
                  key={index}  
                  src={String(src)}
                  alt={`Resonance Chain ${index + 1}`}
                  width={50}
                  height={50}
                  className={`w-[75%] h-auto ${index < RC ? 'opacity-100' : 'opacity-40'}`}
                />
              )
            })}
          </div>
        </div>
      </div>)}
    </div> // Card Container
  );
}