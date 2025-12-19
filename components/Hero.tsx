
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

  // صور عالية الجودة متخصصة في المقاولات الكهروميكانيكية
  const heroImages = [
    "https://www2.0zz0.com/2025/12/19/17/975794069.jpg", // تكييف مركزي وأنظمة صناعية
    "https://www2.0zz0.com/2025/12/19/17/142713849.jpg", // لوحات تحكم كهربائية
    "https://www2.0zz0.com/2025/12/19/17/493061020.jpg", // تصميمات هندسية ومعمارية
    "https://www2.0zz0.com/2025/12/19/17/172688740.jpg"  // مباني حديثة ضخمة
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000); 
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="relative w-full overflow-hidden bg-primary">
      
      {/* 1. SECTION: MAIN HERO */}
      <div className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-primary">
            {heroImages.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentImageIndex ? 'opacity-80 scale-120' : 'opacity-0 scale-120'
                }`}
              >
                <img src={img} alt="" className={`w-full h-full object-cover ${index === currentImageIndex ? 'animate-ken-burns' : ''}`} />
                
                {/* Overlay معدل: الأغمق خلف النص دائماً */}
               <div className={`absolute inset-0 bg-gradient-to-b transition-all duration-700 ${
    isAr 
    ? 'md:bg-gradient-to-l from-primary/40 via-primary/5 to-transparent' // أغمق قليلاً على اليمين في العربي (خفيف)
    : 'md:bg-gradient-to-r from-primary/40 via-primary/5 to-transparent' // أغمق قليلاً على اليسار في الإنجليزي (خفيف)
}`}></div>
                
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            ))}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full px-4 pt-20">
              <div className={`w-full lg:w-3/5 text-center ${isAr ? 'lg:text-right' : 'lg:text-left'} animate-fade-in`}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-xs font-bold animate-fade-in-down">
                      <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                      {isAr ? 'فرست اير للمقاولات (MEP)' : 'First Air Electromechanical (MEP)'}
                  </div>
                  <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-2xl">
                      {isAr ? settings.site_name_ar : settings.site_name_en}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-200 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10 drop-shadow-md font-medium">
                      {isAr ? 'شريككم الهندسي لتنفيذ كبرى المشاريع الكهروميكانيكية بأعلى معايير الجودة العالمية.' : 'Your engineering partner for executing major MEP projects with global quality standards.'}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <button onClick={() => onNavigate('contact')} className="px-10 py-4 bg-tertiary text-white font-black rounded-full shadow-2xl hover:bg-red-700 hover:scale-105 transition-all">
                          {isAr ? 'اطلب عرض سعر' : 'Get a Quote'}
                      </button>
                      <button onClick={() => onNavigate('services')} className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-black rounded-full hover:bg-white hover:text-primary transition-all">
                          {isAr ? 'خدماتنا' : 'Our Services'}
                      </button>
                  </div>
              </div>
          </div>
      </div>
      
      {/* 2. SECTION: MARQUEE DIVIDER */}
      <div className="relative z-30 h-16 bg-white/5 backdrop-blur-md border-y border-white/10 flex items-center overflow-hidden" dir="ltr">
        <div className={`flex w-max ${isAr ? 'animate-scroll-infinite-reverse' : 'animate-scroll-infinite'}`}>
          {[...Array(2)].map((_, sIdx) => (
            <div key={sIdx} className="flex items-center shrink-0">
              {marqueeItems.map((item, idx) => (
                <div key={idx} className="flex items-center mx-10 gap-4 text-white font-bold text-sm whitespace-nowrap">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <i className={`fas ${item.icon} text-accent`}></i>
                  </div>
                  <span>{isAr ? item.textAr : item.textEn}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 3. SECTION: SECTORS & PRESENCE */}
      <div className="relative z-20 bg-gradient-to-b from-primary/95 to-primary py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 pointer-events-none z-0"></div>
          
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
              <div className={`w-full md:w-1/3 text-center ${isAr ? 'md:text-right' : 'md:text-left'} relative z-20`}>
                   <h3 className="text-4xl font-black text-white mb-6">
                       {isAr ? 'قطاعات وتواجد إقليمي' : 'Sectors & Presence'}
                   </h3>
                   <p className="text-gray-300 text-lg leading-relaxed mb-10">
                       {isAr 
                       ? 'نفخر بتواجدنا القوي في المملكة العربية السعودية ومصر وسلطنة عمان لخدمة القطاعات الحيوية بأحدث التقنيات.' 
                       : 'Operating across KSA, Egypt, and Oman to serve vital sectors with cutting-edge technology.'}
                   </p>
                   <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm text-white text-xs font-bold">
                       <i className="fas fa-globe-americas text-accent animate-spin-slow"></i>
                       {isAr ? 'تغطية جغرافية متكاملة' : 'Complete Geographical Coverage'}
                   </div>
              </div>

              <div className="w-full md:w-2/3 h-[500px] relative flex items-center justify-center perspective-1000 z-10">
                  <div className="relative flex items-center justify-center transform scale-90 md:scale-110">
                      
                      <div className="w-36 h-36 rounded-full bg-white relative z-40 shadow-[0_0_80px_rgba(50,130,184,0.4)] flex items-center justify-center p-6">
                          <img src={APP_CONFIG.logo} alt="First Air" className="w-full h-full object-contain" />
                          <div className="absolute inset-0 bg-accent/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
                      </div>

                      {/* Inner Ring: Sectors */}
                      <div className="absolute w-[300px] h-[300px] z-30">
                          <div className="absolute inset-0 rounded-full border-2 border-dashed border-tertiary/40 animate-spin-reverse-slower"></div>
                          <div className="absolute inset-0 animate-spin-reverse-slower">
                              {sectorOrbits.map((item, index) => {
                                  const angle = (index / sectorOrbits.length) * 2 * Math.PI;
                                  const x = 50 + 50 * Math.cos(angle);
                                  const y = 50 + 50 * Math.sin(angle);
                                  return (
                                      <div key={index} style={{ left: `${x}%`, top: `${y}%` }} className="absolute -translate-x-1/2 -translate-y-1/2">
                                          <div className="flex flex-col items-center animate-spin-slower">
                                              <div className="w-16 h-16 rounded-2xl bg-white shadow-2xl border border-tertiary/20 flex items-center justify-center text-tertiary hover:scale-125 hover:rotate-6 transition-all">
                                                  <i className={`fas ${item.icon} text-lg`}></i>
                                              </div>
                                              <div className="mt-3 bg-tertiary/90 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] text-white font-bold whitespace-nowrap shadow-lg">
                                                  {isAr ? item.nameAr : item.nameEn}
                                              </div>
                                          </div>
                                      </div>
                                  );
                              })}
                          </div>
                      </div>

                      {/* Outer Ring: Countries */}
                      <div className="absolute w-[500px] h-[500px] z-20">
                          <div className="absolute inset-0 rounded-full border border-dashed border-accent/40 animate-spin-super-slow"></div>
                          <div className="absolute inset-0 animate-spin-super-slow">
                              {countryOrbits.map((item, index) => {
                                  const angle = (index / countryOrbits.length) * 2 * Math.PI;
                                  const x = 50 + 50 * Math.cos(angle);
                                  const y = 50 + 50 * Math.sin(angle);
                                  return (
                                      <div key={index} style={{ left: `${x}%`, top: `${y}%` }} className="absolute -translate-x-1/2 -translate-y-1/2">
                                          <div className="flex flex-col items-center animate-spin-reverse-super-slow">
                                              <div className="w-20 h-20 rounded-full bg-white p-1 shadow-2xl border-2 border-accent/30 overflow-hidden hover:scale-125 transition-all cursor-help">
                                                  <img src={`https://flagcdn.com/w160/${item.code}.png`} alt="" className="w-full h-full object-cover rounded-full" />
                                              </div>
                                              <div className="mt-3 bg-primary/80 backdrop-blur-lg px-4 py-1.5 rounded-full text-xs text-accent font-black shadow-2xl border border-accent/20">
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
