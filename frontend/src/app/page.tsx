'use client';

import Image from "next/image";
import { useState } from 'react';
import { getCharacterInfo } from "./characterMap";
import { getWeaponInfo } from "./weaponMap";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [ocrData, setOcrData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const character = getCharacterInfo(ocrData?.character || "");
  const weapon = getWeaponInfo(ocrData?.weaponName || "");
  
  const leftStats = [
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Health.webp', label: 'HP', value: '16855' },
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Attack.webp', label: 'ATK', value: '2292' },
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Defense.webp', label: 'DEF', value: '1306' },
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Energy_Regen.webp', label: 'Energy Regen', value: '120%' },
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Crit_Rate.webp', label: 'Crit. Rate', value: '44.2%' },
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Crit_DMG.webp', label: 'Crit. DMG', value: '318.8%' },
  ]

  const rightStats = [
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Basic_Atk_DMG.png', label: 'Basic Atk', value: '17.2%' },
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Heavy_Atk_DMG.png', label: 'Heavy Atk', value: '30%' },
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Resonance_Skill_Bonus.png', label: 'Res. Skill', value: '0%' },
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Resonance_Liberation_Bonus.png', label: 'Res. Liberation', value: '0%' },
    { icon: `${character && character.typeIcon}`, label: `${character && character.type} DMG`, value: '82%' },
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Healing_Bonus.png', label: 'Healing Bonus', value: '0%' },
  ]

  const leftLen = leftStats.length;
  const rightLen = rightStats.length;

  const typeToBgClass: Record<string, string> = {
  Spectro: "bg-spectro/35",
  Aero: "bg-aero/35",
  Havoc: "bg-havoc/35",
  // etc...
};

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

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
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

      {ocrData && character && weapon && (
        // <pre className="mt-4 p-4 bg-gray-100 text-black rounded overflow-auto text-sm">
        //   {JSON.stringify(ocrData, null, 2)}
        // </pre>
      // )}
      <div className="relative w-[1214px] h-[541px] rounded-xl overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-[url('/background.jpg')] bg-cover bg-center"></div>
        <div className={`absolute inset-0 ${typeToBgClass[character.type] || "bg-gray-500/35"}`} />
          <Image 
            src={character.imageUrl}
            alt={ocrData.character}
            layout="fill"
            className="absolute -ml-3 mt-15 scale-125 object-contain object-left"
          />
        <div className="flex flex-col absolute h-full bg-divider/80 origin-center left-[25.5%] w-500 gap-3">
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
                  <p className="font-lagu-semibold text-shadow-divider text-shadow-lg text-lg text-white leading-none">R1</p>
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
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Crit_Rate.webp" alt="Crit Rate" className="invert w-7 h-7"></img>
                </div>
                <div className="h-6 w-[3px] bg-white/20" />
                <div className="w-9 h-9 flex justify-center items-center bg-white rounded-full border-3 border-black/30">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Crit_Rate.webp" alt="Crit Rate" className="invert w-7 h-7"></img>
                </div>                
                <div className="h-6 w-[3px] bg-white/20 mb-2" />
                <div className="w-11 h-11 rotate-45 border-3 border-black/30 bg-white flex items-center justify-center">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Zani_Basic_Atk.png" alt="Zani Basic Attack" className="-rotate-45 invert w-9 h-9"></img>
                </div>
                <p className="flex flex-col leading-tight text-center mt-3 text-xs">
                  <span>Lv. {ocrData.basicAtkLvl && ocrData.basicAtkLvl.match(/\d+/)?.[0]}</span>
                  <span>Normal</span>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="w-9 h-9 flex justify-center items-center bg-white rounded-full border-3 border-black/30">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Attack.webp" alt="Atk" className="invert w-6 h-6"></img>
                </div>
                <div className="h-6 w-[3px] bg-white/20" />
                <div className="w-9 h-9 flex justify-center items-center bg-white rounded-full border-3 border-black/30">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Attack.webp" alt="Atk" className="invert w-6 h-6"></img>
                </div>                
                <div className="h-6 w-[3px] bg-white/20 mb-2" />
                <div className="w-11 h-11 rotate-45 border-3 border-black/30 bg-white flex items-center justify-center">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Zani_Resonance_Skill.png" alt="Zani Skill" className="-rotate-45 invert w-9 h-9"></img>
                </div>
                <p className="flex flex-col leading-tight text-center mt-3 text-xs">
                  <span>Lv. {ocrData.skillLvl && ocrData.skillLvl.match(/\d+/)?.[0]}</span>
                  <span>Skill</span>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="w-11 h-11 border-3 border-black/30 bg-white flex items-center justify-center">
                  <div className="w-7 h-7 rotate-45 border-3 border-black/30 bg-white flex items-center justify-center">
                    <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Zani_Passive_Skill2.png" alt="Zani Passive Skill" className="-rotate-45 invert w-6 h-6"></img>
                  </div>  
                </div>
                <div className="h-4 w-[3px] bg-white/20" />
                <div className="w-11 h-11 border-3 border-black/30 bg-white flex items-center justify-center">
                  <div className="w-7 h-7 rotate-45 border-3 border-black/30 bg-white flex items-center justify-center">
                    <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Zani_Passive_Skill1.png" alt="Zani Passive Skill" className="-rotate-45 invert w-6 h-6"></img>
                  </div>  
                </div>
                <div className="h-4 w-[3px] bg-white/20 mb-2" />
                <div className="w-11 h-11 rotate-45 border-3 border-black/30 bg-white flex items-center justify-center">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Zani_Forte_Circuit.png" alt="Zani Forte Circuit" className="-rotate-45 invert w-9 h-9"></img>
                </div>
                <p className="flex flex-col leading-tight text-center mt-3 text-xs">
                  <span>Lv. {ocrData.forteCircuitLvl && ocrData.forteCircuitLvl.match(/\d+/)?.[0]}</span>
                  <span>Forte</span>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center w-[44px]">
                <div className="w-9 h-9 flex justify-center items-center bg-white rounded-full border-3 border-black/30">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Attack.webp" alt="Atk" className="invert w-6 h-6"></img>
                </div>
                <div className="h-6 w-[3px] bg-white/20" />
                <div className="w-9 h-9 flex justify-center items-center bg-white rounded-full border-3 border-black/30">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Attack.webp" alt="Atk" className="invert w-6 h-6"></img>
                </div>                
                <div className="h-6 w-[3px] bg-white/20 mb-2" />
                <div className="w-11 h-11 rotate-45 border-3 border-black/30 bg-white flex items-center justify-center">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Zani_Resonance_Liberation.png" alt="Zani Resonance Liberation" className="-rotate-45 invert w-9 h-9"></img>
                </div>
                <p className="flex flex-col leading-tight text-center mt-3 text-xs">
                  <span>Lv. {ocrData.ultimateLvl && ocrData.ultimateLvl.match(/\d+/)?.[0]}</span>
                  <span>Liberation</span>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="w-9 h-9 flex justify-center items-center bg-white rounded-full border-3 border-black/30">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Crit_Rate.webp" alt="Crit Rate" className="invert w-7 h-7"></img>
                </div>
                <div className="h-6 w-[3px] bg-white/20" />
                <div className="w-9 h-9 flex justify-center items-center bg-white rounded-full border-3 border-black/30">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Crit_Rate.webp" alt="Crit Rate" className="invert w-7 h-7"></img>
                </div>                
                <div className="h-6 w-[3px] bg-white/20 mb-2" />
                <div className="w-11 h-11 rotate-45 border-3 border-black/30 bg-white flex items-center justify-center">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Zani_Intro_Skill.png" alt="Zani Basic Attack" className="-rotate-45 invert w-9 h-9"></img>
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
                <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Capitaneus_Icon.webp" alt="Echo 1" className="w-15 h-15"></img>
                <div className="flex flex-col items-end w-[88.75px]">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Eternal_Radiance.webp" alt="Echo 1 Set" className="w-5 h-5"></img>
                  <p className="text-sm">{ocrData.echo1MainStat}</p>
                  <div className="flex flex-row gap-0.5">
                    <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Spectro_DMG_Bonus.webp" alt="Echo 1 Main Stat Icon" className="w-5 h-5"></img>
                    <p className="text-sm">{ocrData.echo1MainStatNum}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-0.5">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Crit_DMG.webp" alt="Echo 1 Substat Icon" className="w-5 h-5"></img>
                  <p className="text-sm">{ocrData.echo1FirstSubstat}</p>
                </div>
                <p className="text-sm">{ocrData.echo1FirstSubstatNum}</p>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-0.5">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Basic_Atk_DMG.png" alt="Echo 1 Substat Icon" className="w-5 h-5"></img>
                  <p className="text-sm">{ocrData.echo1SecondSubstat}</p>
                </div>
                <p className="text-sm">{ocrData.echo1SecondSubstatNum}</p>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-0.5">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Crit_Rate.webp" alt="Echo 1 Substat Icon" className="w-5 h-5"></img>
                  <p className="text-sm">{ocrData.echo1ThirdSubstat}</p>
                </div>
                <p className="text-sm">{ocrData.echo1ThirdSubstatNum}</p>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-0.5">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Defense.webp" alt="Echo 1 Substat Icon" className="w-5 h-5"></img>
                  <p className="text-sm">{ocrData.echo1FourthSubstat}</p>
                </div>
                <p className="text-sm">{ocrData.echo1FourthSubstatNum}</p>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-0.5">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Attack.webp" alt="Echo 1 Substat Icon" className="w-5 h-5"></img>
                  <p className="text-sm">{ocrData.echo1FifthSubstat}</p>
                </div>
                <p className="text-sm">{ocrData.echo1FifthSubstatNum}</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 bg-black/30 p-2">
              <div className="flex flex-row gap-1">
                <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Nightmare-Mourning-Aix.webp" alt="Echo 2" className="w-15 h-15"></img>
                <div className="flex flex-col items-end w-[88.75px]">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Eternal_Radiance.webp" alt="Echo 2 Set" className="w-5 h-5"></img>
                  <p className="text-sm">{ocrData.echo2MainStat}</p>
                  <div className="flex flex-row gap-0.5">
                    <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Crit_DMG.webp" alt="Echo 2 Main Stat Icon" className="w-5 h-5"></img>
                    <p className="text-sm">{ocrData.echo2MainStatNum}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-0.5">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Crit_Rate.webp" alt="Echo 2 Substat Icon" className="w-5 h-5"></img>
                  <p className="text-sm">{ocrData.echo2FirstSubstat}</p>
                </div>
                <p className="text-sm">{ocrData.echo2FirstSubstatNum}</p>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-0.5">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Health.webp" alt="Echo 2 Substat Icon" className="w-5 h-5"></img>
                  <p className="text-sm">{ocrData.echo2SecondSubstat}</p>
                </div>
                <p className="text-sm">{ocrData.echo2SecondSubstatNum}</p>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-0.5">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Attack.webp" alt="Echo 2 Substat Icon" className="w-5 h-5"></img>
                  <p className="text-sm">{ocrData.echo2ThirdSubstat}</p>
                </div>
                <p className="text-sm">{ocrData.echo2ThirdSubstatNum}</p>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-0.5">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Crit_DMG.webp" alt="Echo 2 Substat Icon" className="w-5 h-5"></img>
                  <p className="text-sm">Crit DMG%</p>
                </div>
                <p className="text-sm">25%</p>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-0.5">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Heavy_Atk_DMG.png" alt="Echo 2 Substat Icon" className="w-5 h-5"></img>
                  <p className="text-sm">Heavy ATK</p>
                </div>
                <p className="text-sm">8.6%</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 bg-black/30 p-2">
              <div className="flex flex-row gap-1">
                <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Vitreum_Dancer_Icon.webp" alt="Echo 3" className="w-15 h-15"></img>
                <div className="flex flex-col items-end w-[88.75px]">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Eternal_Radiance.webp" alt="Echo 3 Set" className="w-5 h-5"></img>
                  <p className="text-sm">Spectro DMG</p>
                  <div className="flex flex-row gap-0.5">
                    <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Spectro_DMG_Bonus.webp" alt="Echo 3 Main Stat Icon" className="w-5 h-5"></img>
                    <p className="text-sm">30%</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-0.5">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Crit_DMG.webp" alt="Echo 3 Substat Icon" className="w-5 h-5"></img>
                  <p className="text-sm">Crit DMG</p>
                </div>
                <p className="text-sm">18.6%</p>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-0.5">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Health.webp" alt="Echo 3 Substat Icon" className="w-5 h-5"></img>
                  <p className="text-sm">HP</p>
                </div>
                <p className="text-sm">470</p>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-0.5">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Crit_Rate.webp" alt="Echo 3 Substat Icon" className="w-5 h-5"></img>
                  <p className="text-sm">Crit Rate</p>
                </div>
                <p className="text-sm">8.1%</p>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-0.5">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Defense.webp" alt="Echo 3 Substat Icon" className="w-5 h-5"></img>
                  <p className="text-sm">DEF</p>
                </div>
                <p className="text-sm">50</p>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-0.5">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Heavy_Atk_DMG.png" alt="Echo 3 Substat Icon" className="w-5 h-5"></img>
                  <p className="text-sm">Heavy ATK</p>
                </div>
                <p className="text-sm">9.4%</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 bg-black/30 p-2">
              <div className="flex flex-row gap-1">
                <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Aero-Prism.webp" alt="Echo 4" className="w-15 h-15"></img>
                <div className="flex flex-col items-end w-[88.75px]">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Eternal_Radiance.webp" alt="Echo 4 Set" className="w-5 h-5"></img>
                  <p className="text-sm">ATK</p>
                  <div className="flex flex-row gap-0.5">
                    <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Attack.webp" alt="Echo 4 Main Stat Icon" className="w-5 h-5"></img>
                    <p className="text-sm">18%</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-0.5">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Energy_Regen.webp" alt="Echo 4 Substat Icon" className="w-5 h-5"></img>
                  <p className="text-sm">Energy</p>
                </div>
                <p className="text-sm">10.8%</p>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-0.5">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Crit_DMG.webp" alt="Echo 4 Substat Icon" className="w-5 h-5"></img>
                  <p className="text-sm">Crit DMG</p>
                </div>
                <p className="text-sm">16.2%</p>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-0.5">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Attack.webp" alt="Echo 4 Substat Icon" className="w-5 h-5"></img>
                  <p className="text-sm">Atk</p>
                </div>
                <p className="text-sm">40</p>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-0.5">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Crit_Rate.webp" alt="Echo 4 Substat Icon" className="w-5 h-5"></img>
                  <p className="text-sm">Crit Rate</p>
                </div>
                <p className="text-sm">6.9%</p>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-0.5">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Basic_Atk_DMG.png" alt="Echo 4 Substat Icon" className="w-5 h-5"></img>
                  <p className="text-sm">Basic Atk</p>
                </div>
                <p className="text-sm">8.6%</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 bg-black/30 p-2">
              <div className="flex flex-row gap-1">
                <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Fae_Ignis_Icon.webp" alt="Echo 5" className="w-15 h-15"></img>
                <div className="flex flex-col items-end w-[88.75px]">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Eternal_Radiance.webp" alt="Echo 5 Set" className="w-5 h-5"></img>
                  <p className="text-sm">ATK</p>
                  <div className="flex flex-row gap-0.5">
                    <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Attack.webp" alt="Echo 5 Main Stat Icon" className="w-5 h-5"></img>
                    <p className="text-sm">18%</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-0.5">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Crit_DMG.webp" alt="Echo 5 Substat Icon" className="w-5 h-5"></img>
                  <p className="text-sm">Crit DMG</p>
                </div>
                <p className="text-sm">12.6%</p>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-0.5">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Energy_Regen.webp" alt="Echo 5 Substat Icon" className="w-5 h-5"></img>
                  <p className="text-sm">Energy</p>
                </div>
                <p className="text-sm">9.2%</p>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-0.5">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Health.webp" alt="Echo 5 Substat Icon" className="w-5 h-5"></img>
                  <p className="text-sm">HP</p>
                </div>
                <p className="text-sm">510</p>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-0.5">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Defense.webp" alt="Echo 5 Substat Icon" className="w-5 h-5"></img>
                  <p className="text-sm">DEF</p>
                </div>
                <p className="text-sm">60</p>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-0.5">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Attack.webp" alt="Echo 5 Substat Icon" className="w-5 h-5"></img>
                  <p className="text-sm">ATK</p>
                </div>
                <p className="text-sm">8.6%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[-35px] bottom-[-50px] left-[21.5%] w-[65px]">
          <div className="flex flex-col items-center gap-3 h-[150%] bg-divider transform rotate-6 origin-center">
            <Image 
              src={character.rc1}
              alt="RC 1"
              width={50}
              height={50}
              className="w-[75%] h-auto mt-31"/>
              <Image 
              src={character.rc2}
              alt="RC 2"
              width={50}
              height={50}
              className="w-[75%] h-auto"/>
              <Image 
              src={character.rc3} 
              alt="RC 3"
              width={50}
              height={50}
              className="w-[75%] h-auto"/>
              <Image 
              src={character.rc4}
              alt="RC 4"
              width={50}
              height={50}
              className="w-[75%] h-auto"/>
              <Image 
              src={character.rc5}
              alt="RC 5"
              width={50}
              height={50}
              className="w-[75%] h-auto"/>
              <Image 
              src={character.rc6}
              alt="RC 6"
              width={50}
              height={50}
              className="w-[75%] h-auto"/>
          </div>
        </div>
      </div>)}
    </div> // Card Container
  );
}
