
import React, { useState, useEffect } from 'react';
import { Language, Settings } from '../types';
import { APP_CONFIG } from '../constants';
import { marqueeItems, countryOrbits, sectorOrbits } from '../data/mockData';

interface HeroProps {
  lang: Language;
  settings: Settings;
  onNavigate: (tab: string) => void;
}

const Hero: React.FC<HeroProps> = ({ lang, settings, onNavigate }) => {
  const isAr = lang === 'ar';
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "https://i.postimg.cc/nhZ20VHd/001.webp",
    "https://i.postimg.cc/8zD4tk13/002.webp",
    "https://i.postimg.cc/6pwcY691/003.webp",
    "https://i.postimg.cc/dVv64Qqx/004.webp"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="relative w-full overflow-hidden bg-primary">
      
      {/* 1. SECTION: MAIN HERO */}
      <div className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            {heroImages.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img src={img} alt="" className={`w-full h-full object-cover ${index === currentImageIndex ? 'animate-ken-burns' : ''}`} />
                <div className={`absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r ${
                    isAr ? 'from-primary/60 via-primary/80 to-primary/95' : 'from-primary/95 via-primary/80 to-primary/60'
                }`}></div>
              </div>
            ))}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full px-4 pt-20">
              <div className={`w-full lg:w-3/5 text-center ${isAr ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-xs font-bold animate-fade-in-down">
                      <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                      {isAr ? 'فرست اير للمقاولات (MEP)' : 'First Air Electromechanical (MEP)'}
                  </div>
                  <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                      {isAr ? settings.site_name_ar : settings.site_name_en}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-200 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10">
                      {isAr ? 'شريككم الهندسي لتنفيذ كبرى المشاريع الكهروميكانيكية بأعلى معايير الجودة.' : 'Your engineering partner for executing major MEP projects with the highest quality standards.'}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <button onClick={() => onNavigate('contact')} className="px-8 py-4 bg-tertiary text-white font-black rounded-full shadow-xl hover:scale-105 transition-all">
                          {isAr ? 'اطلب عرض سعر' : 'Get a Quote'}
                      </button>
                      <button onClick={() => onNavigate('services')} className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black rounded-full hover:bg-white hover:text-primary transition-all">
                          {isAr ? 'خدماتنا' : 'Our Services'}
                      </button>
                  </div>
              </div>
          </div>
      </div>
      
      {/* 2. SECTION: MARQUEE DIVIDER */}
      <div className="relative z-30 h-14 bg-white/5 backdrop-blur-md border-y border-white/10 flex items-center overflow-hidden" dir="ltr">
        <div className={`flex w-max ${isAr ? 'animate-scroll-infinite-reverse' : 'animate-scroll-infinite'}`}>
          {[...Array(2)].map((_, sIdx) => (
            <div key={sIdx} className="flex items-center shrink-0">
              {marqueeItems.map((item, idx) => (
                <div key={idx} className="flex items-center mx-8 gap-3 text-white font-bold text-sm whitespace-nowrap">
                  <i className={`fas ${item.icon} text-accent`}></i>
                  <span>{isAr ? item.textAr : item.textEn}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 3. SECTION: SECTORS & PRESENCE (DATA-DRIVEN) */}
      <div className="relative z-20 bg-gradient-to-b from-primary/95 to-primary py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 pointer-events-none z-0"></div>
          
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
              <div className={`w-full md:w-1/3 text-center ${isAr ? 'md:text-right' : 'md:text-left'} relative z-20`}>
                   <h3 className="text-3xl font-black text-white mb-4">
                       {isAr ? 'قطاعات وتواجد إقليمي' : 'Sectors & Presence'}
                   </h3>
                   <p className="text-gray-300 text-sm leading-relaxed mb-8">
                       {isAr 
                       ? 'نعمل في المملكة العربية السعودية ومصر وسلطنة عمان لخدمة قطاعات حيوية متعددة بكفاءة عالية.' 
                       : 'Operating in KSA, Egypt, and Oman to serve multiple vital sectors with high efficiency.'}
                   </p>
                   <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-white text-xs font-bold">
                       <i className="fas fa-map-marked-alt text-tertiary"></i>
                       {isAr ? 'تغطية جغرافية شاملة' : 'Comprehensive Coverage'}
                   </div>
              </div>

              <div className="w-full md:w-2/3 h-[450px] relative flex items-center justify-center perspective-1000 z-10">
                  <div className="relative flex items-center justify-center transform scale-75 md:scale-100">
                      
                      <div className="w-32 h-32 rounded-full bg-white relative z-40 shadow-[0_0_60px_rgba(50,130,184,0.6)] flex items-center justify-center p-4">
                          <img src={APP_CONFIG.logo} alt="First Air" className="w-full h-full object-contain" />
                          <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl -z-10 animate-pulse"></div>
                      </div>

                      {/* Inner Ring: Sectors (Mapped from mockData) */}
                      <div className="absolute w-[260px] h-[260px] z-30">
                          <div className="absolute inset-0 rounded-full border-2 border-dashed border-tertiary/30 animate-spin-reverse-slower"></div>
                          <div className="absolute inset-0 animate-spin-reverse-slower">
                              {sectorOrbits.map((item, index) => {
                                  const angle = (index / sectorOrbits.length) * 2 * Math.PI;
                                  const x = 50 + 50 * Math.cos(angle);
                                  const y = 50 + 50 * Math.sin(angle);
                                  return (
                                      <div key={index} style={{ left: `${x}%`, top: `${y}%` }} className="absolute -translate-x-1/2 -translate-y-1/2">
                                          <div className="flex flex-col items-center animate-spin-slower">
                                              <div className="w-14 h-14 rounded-full bg-white shadow-lg border border-tertiary/20 flex items-center justify-center text-tertiary hover:scale-110 transition-transform">
                                                  <i className={`fas ${item.icon}`}></i>
                                              </div>
                                              <div className="mt-2 bg-tertiary px-2 py-0.5 rounded-full text-[10px] text-white font-bold whitespace-nowrap shadow-md">
                                                  {isAr ? item.nameAr : item.nameEn}
                                              </div>
                                          </div>
                                      </div>
                                  );
                              })}
                          </div>
                      </div>

                      {/* Outer Ring: Countries (Mapped from mockData) */}
                      <div className="absolute w-[440px] h-[440px] z-20">
                          <div className="absolute inset-0 rounded-full border border-dashed border-accent/30 animate-spin-super-slow"></div>
                          <div className="absolute inset-0 animate-spin-super-slow">
                              {countryOrbits.map((item, index) => {
                                  const angle = (index / countryOrbits.length) * 2 * Math.PI;
                                  const x = 50 + 50 * Math.cos(angle);
                                  const y = 50 + 50 * Math.sin(angle);
                                  return (
                                      <div key={index} style={{ left: `${x}%`, top: `${y}%` }} className="absolute -translate-x-1/2 -translate-y-1/2">
                                          <div className="flex flex-col items-center animate-spin-reverse-super-slow">
                                              <div className="w-16 h-16 rounded-full bg-white shadow-xl border-2 border-accent/20 overflow-hidden hover:scale-110 transition-transform">
                                                  <img src={`https://flagcdn.com/w80/${item.code}.png`} alt="" className="w-full h-full object-cover" />
                                              </div>
                                              <div className="mt-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-accent font-black shadow-lg">
                                                  {isAr ? item.nameAr : item.nameEn}
                                              </div>
                                          </div>
                                      </div>
                                  );
                              })}
                          </div>
                      </div>

                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Hero;
