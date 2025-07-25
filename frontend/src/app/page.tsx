import Image from "next/image";

export default function Home() {
  const leftStats = [
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Health.webp', label: 'HP', value: '16855' },
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Attack.webp', label: 'ATK', value: '2292' },
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Defense.webp', label: 'DEF', value: '1306' },
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Energy_Regen.webp', label: 'Energy Regen', value: '120%' },
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Crit_Rate.webp', label: 'Crit Rate', value: '44.2%' },
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Crit_DMG.webp', label: 'Crit DMG', value: '318.8%' },
  ]

  const rightStats = [
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Basic_Atk_DMG.png', label: 'Basic Atk', value: '0%' },
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Heavy_Atk_DMG.png', label: 'Heavy Atk', value: '17.2%' },
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Resonance_Skill_Bonus.png', label: 'Res. Skill', value: '0%' },
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Resonance_Liberation_Bonus.png', label: 'Res. Liberation', value: '0%' },
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Spectro_DMG_Bonus.webp', label: 'Spectro DMG', value: '82%' },
    { icon: 'https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Healing_Bonus.png', label: 'Healing Bonus', value: '0%' },
  ]

  const leftLen = leftStats.length;
  const rightLen = rightStats.length;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative w-[1214px] h-[541px] rounded-xl overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-[url('/background.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-spectro/35" />
          <Image 
            src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Zani.png"
            alt="Zani"
            layout="fill"
            className="absolute ml-7 mt-15 scale-125 object-contain object-left"
          />
        <div className="flex flex-col absolute h-full bg-divider/80 origin-center left-[25.5%] w-500 gap-3">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="flex flex-row items-end gap-3 mt-6 ml-20">
                <p className="font-lagu-semibold text-shadow-divider text-shadow-lg text-charName text-white leading-none">Zani</p>
                <p className="font-lagu-semibold text-shadow-divider text-shadow-lg text-2xl text-white">• RedAstrals</p>
              </div>
              <div className="flex flex-row items-center gap-1.5">
                <p className="font-lagu-semibold text-shadow-divider text-shadow-lg ml-20 text-2xl text-white">Lv. 90/90</p>
                <Image
                  src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Spectro.png"
                  alt="Spectro Symbol"
                  width={35}
                  height={35}
                  className="h-auto"
                  />
              </div>
            </div>
            <div className="flex flex-row mt-6">
              <Image
                src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Blazing-Justice.webp"
                alt="Blazing Justice"
                width={70}
                height={70}
                className="h-[75px] w-auto"
              />
              <div className="flex flex-col gap-1">
                <p className="font-lagu-semibold text-shadow-divider text-shadow-lg text-xl text-white leading-none">Blazing Justice</p>
                <div className="flex flex-row gap-3.5">
                  <p className="font-lagu-semibold text-shadow-divider text-shadow-lg text-lg text-white leading-none">Lv. 90/90</p>
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
                  <p className="font-lagu-semibold text-shadow-divider text-shadow-lg text-lg text-white leading-none ml-1 mr-3">587</p>
                  <Image 
                    src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Crit_DMG.webp" 
                    alt="Crit DMG Icon" 
                    width={25} 
                    height={25} 
                    className="h-auto"
                  />
                  <p className="font-lagu-semibold text-shadow-divider text-shadow-lg text-lg text-white leading-none ml-1 mr-3">48.6%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row ml-12 items-baseline">
            <div className="flex flex-col gap-2">
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
            <div className="flex flex-col gap-2">
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
            <div className="flex flex-row ml-5 gap-6">
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
                  <span>Lv. 10</span>
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
                  <span>Lv. 10</span>
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
                  <span>Lv. 10</span>
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
                  <span>Lv. 10</span>
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
                  <span>Lv. 10</span>
                  <span>Intro</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-row ml-8 gap-1">
            <div className="flex flex-col gap-1 bg-black/30 p-2">
              <div className="flex flex-row gap-1">
                <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Capitaneus_Icon.webp" alt="Echo 1" className="w-15 h-15"></img>
                <div className="flex flex-col items-end">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Eternal_Radiance.webp" alt="Echo 1 Set" className="w-5 h-5"></img>
                  <p className="text-sm">Spectro DMG</p>
                  <div className="flex flex-row gap-0.5">
                    <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Spectro_DMG_Bonus.webp" alt="Echo 1 Main Stat Icon" className="w-5 h-5"></img>
                    <p className="text-sm">30%</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-0.5">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Crit_DMG.webp" alt="Echo 1 Substat Icon" className="w-5 h-5"></img>
                  <p className="text-sm">Crit DMG</p>
                </div>
                <p className="text-sm">13.8%</p>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-0.5">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Basic_Atk_DMG.png" alt="Echo 1 Substat Icon" className="w-5 h-5"></img>
                  <p className="text-sm">Basic Atk</p>
                </div>
                <p className="text-sm">8.6%</p>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-0.5">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Crit_Rate.webp" alt="Echo 1 Substat Icon" className="w-5 h-5"></img>
                  <p className="text-sm">Crit Rate</p>
                </div>
                <p className="text-sm">7.5%</p>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-0.5">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Defense.webp" alt="Echo 1 Substat Icon" className="w-5 h-5"></img>
                  <p className="text-sm">DEF</p>
                </div>
                <p className="text-sm">60</p>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-0.5">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Attack.webp" alt="Echo 1 Substat Icon" className="w-5 h-5"></img>
                  <p className="text-sm">ATK</p>
                </div>
                <p className="text-sm">8.6%</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 bg-black/30 p-2">
              <div className="flex flex-row gap-1">
                <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Nightmare-Mourning-Aix.webp" alt="Echo 2" className="w-15 h-15"></img>
                <div className="flex flex-col items-end w-[88.75px]">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Eternal_Radiance.webp" alt="Echo 2 Set" className="w-5 h-5"></img>
                  <p className="text-sm">Crit DMG</p>
                  <div className="flex flex-row gap-0.5">
                    <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Crit_DMG.webp" alt="Echo 2 Main Stat Icon" className="w-5 h-5"></img>
                    <p className="text-sm">44%</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-0.5">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Crit_Rate.webp" alt="Echo 2 Substat Icon" className="w-5 h-5"></img>
                  <p className="text-sm">Crit Rate</p>
                </div>
                <p className="text-sm">8.7%</p>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-0.5">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Health.webp" alt="Echo 2 Substat Icon" className="w-5 h-5"></img>
                  <p className="text-sm">HP</p>
                </div>
                <p className="text-sm">540</p>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-0.5">
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Attribute_Attack.webp" alt="Echo 2 Substat Icon" className="w-5 h-5"></img>
                  <p className="text-sm">ATK</p>
                </div>
                <p className="text-sm">8.6%</p>
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
                <div className="flex flex-col items-end">
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
              src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Zani-RC-1.webp" 
              alt="RC 1"
              width={50}
              height={50}
              className="w-[75%] h-auto mt-31"/>
              <Image 
              src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Zani-RC-2.webp" 
              alt="RC 1"
              width={50}
              height={50}
              className="w-[75%] h-auto"/>
              <Image 
              src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Zani-RC-3.webp" 
              alt="RC 1"
              width={50}
              height={50}
              className="w-[75%] h-auto"/>
              <Image 
              src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Zani-RC-4.webp" 
              alt="RC 1"
              width={50}
              height={50}
              className="w-[75%] h-auto"/>
              <Image 
              src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Zani-RC-5.webp" 
              alt="RC 1"
              width={50}
              height={50}
              className="w-[75%] h-auto"/>
              <Image 
              src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Zani-RC-6.webp" 
              alt="RC 1"
              width={50}
              height={50}
              className="w-[75%] h-auto"/>
          </div>
        </div>
      </div>
    </div> // Card Container
  );
}
