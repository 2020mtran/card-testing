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
        <div className="flex flex-col absolute h-full bg-divider/80 origin-center left-[25.5%] w-500 gap-4">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="flex flex-row items-end gap-3 mt-6 ml-20">
                <p className="font-lagu-semibold text-shadow-divider text-shadow-lg text-charName text-white leading-none">Zani</p>
                <p className="font-lagu-semibold text-shadow-divider text-shadow-lg text-2xl text-white">• RedAstrals</p>
              </div>
              <div className="flex flex-row items-center gap-1.5">
                <p className="font-lagu-semibold text-shadow-divider text-shadow-lg ml-20 text-2xl text-white">Lv. 90/90</p>
                <Image
                  src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Wuthering-Waves-Spectro.png"
                  alt="Spectro Symbol"
                  width={40}
                  height={40}
                  className="h-auto"
                  />
              </div>
            </div>
            <div className="flex flex-row mt-6">
              <Image
                src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Blazing-Justice.webp"
                alt="Blazing Justice"
                width={80}
                height={80}
                className="h-[80px] w-auto"
              />
              <div className="flex flex-col gap-1">
                <p className="font-lagu-semibold text-shadow-divider text-shadow-lg text-xl text-white leading-none">Blazing Justice</p>
                <div className="flex flex-row gap-3.5">
                  <p className="font-lagu-semibold text-shadow-divider text-shadow-lg text-lg text-white leading-none">Lv. 90/90</p>
                  <p className="font-lagu-semibold text-shadow-divider text-shadow-lg text-xl text-white leading-none">R1</p>
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
          <div className="flex flex-row ml-12">
            <div className="flex flex-col gap-2 ">
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
            <div className="flex flex-row ml-5 gap-7">
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
                  <img src="https://ele2dh89lzgqriuh.public.blob.vercel-storage.com/Icon_Zani_Resonance_Liberation.png" alt="Zani Resonance Liberation" className="-rotate-45 invert w-9 h-9"></img>
                </div>
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
