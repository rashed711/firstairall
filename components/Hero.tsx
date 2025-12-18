
import React, { useState, useEffect } from 'react';
import { Language, Settings } from '../types';
import { APP_CONFIG } from '../constants';

interface HeroProps {
  lang: Language;
  settings: Settings;
  onNavigate: (tab: string) => void;
}

interface OrbitItem {
  code?: string;
  nameAr: string;
  nameEn: string;
  isFlag: boolean;
  icon?: string;
}

const Hero: React.FC<HeroProps> = ({ lang, settings, onNavigate }) => {
  const isAr = lang === 'ar';
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Professional Engineering/MEP Images
  const heroImages = [
    "https://i.postimg.cc/nhZ20VHd/001.webp", // Construction/Engineering
    "https://i.postimg.cc/8zD4tk13/002.webp", // HVAC/Industrial
    "https://i.postimg.cc/6pwcY691/003.webp", // Electrical/Pipes
    "https://i.postimg.cc/dVv64Qqx/004.webp"  // Architect/Site
  ];

  // Marquee Content - Technical terms
  const marqueeItems = [
    { textAr: "أنظمة تكييف مركزي", textEn: "Central HVAC Systems", icon: "fa-fan" },
    { textAr: "مكافحة حريق", textEn: "Fire Fighting", icon: "fa-fire-extinguisher" },
    { textAr: "أعمال كهروميكانيكية", textEn: "Electromechanical Works", icon: "fa-cogs" },
    { textAr: "أنظمة صحية", textEn: "Plumbing Systems", icon: "fa-faucet" },
    { textAr: "صيانة وتشغيل", textEn: "Operation & Maintenance", icon: "fa-tools" },
    { textAr: "توريد وتركيب", textEn: "Supply & Installation", icon: "fa-truck-loading" },
    { textAr: "معايير عالمية", textEn: "Global Standards", icon: "fa-certificate" },
  ];

  // Updated Orbit: Countries (Flags)
  const outerRingItems: OrbitItem[] = [
    { code: 'sa', nameAr: 'السعودية', nameEn: 'Saudi Arabia', isFlag: true },
    { code: 'eg', nameAr: 'مصر', nameEn: 'Egypt', isFlag: true },
    { code: 'om', nameAr: 'عمان', nameEn: 'Oman', isFlag: true }, 
    { code: 'ly', nameAr: 'ليبيا', nameEn: 'Libya', isFlag: true },
    { code: 'iq', nameAr: 'العراق', nameEn: 'Iraq', isFlag: true },
  ];

  // Updated Orbit: Sectors (Icons)
  const innerRingItems: OrbitItem[] = [
    { icon: 'fa-hospital', nameAr: 'مستشفيات', nameEn: 'Hospitals', isFlag: false },
    { icon: 'fa-industry', nameAr: 'مصانع', nameEn: 'Factories', isFlag: false },
    { icon: 'fa-building', nameAr: 'مباني إدارية', nameEn: 'Commercial', isFlag: false },
    { icon: 'fa-hotel', nameAr: 'فنادق', nameEn: 'Hotels', isFlag: false },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-primary">
      
      {/* BACKGROUND IMAGE SLIDER */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt={`Slide ${index}`}
              className={`w-full h-full object-cover ${
                index === currentImageIndex ? 'animate-ken-burns' : ''
              }`}
            />
            {/* 
                Gradient Overlay - Controls opacity over images.
            */}
            <div className={`absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r ${
                isAr 
                ? 'from-primary/50 via-primary/70 to-primary/95 md:from-primary/30 md:via-primary/60 md:to-primary/95' 
                : 'from-primary/95 via-primary/70 to-primary/50 md:from-primary/95 md:via-primary/60 md:to-primary/30'
            }`}></div>
          </div>
        ))}
      </div>

      {/* FLOATING DECORATIONS */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-tertiary rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float z-10 pointer-events-none hidden md:block"></div>
      <div className="absolute bottom-40 right-20 w-48 h-48 bg-accent rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float z-10 pointer-events-none hidden md:block" style={{animationDelay: '2s'}}></div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col justify-center relative z-20 w-full pt-20 pb-12 md:pt-10 md:pb-8">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
            
            {/* TEXT SECTION */}
            <div className={`w-full lg:w-3/5 text-center ${isAr ? 'lg:text-right' : 'lg:text-left'} mb-12 lg:mb-0`}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 md:mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-[10px] md:text-sm font-bold animate-fade-in-down shadow-lg mx-auto lg:mx-0">
                    <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                    {isAr ? 'فرست اير للمقاولات (MEP)' : 'Leaders in Electromechanical Works (MEP)'}
                </div>
                
                {/* RESPONSIVE TYPOGRAPHY */}
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-4 md:mb-6 animate-fade-in-right drop-shadow-xl">
                    <span className="block">{isAr ? 'فرست اير' : 'First Air'}</span>
                    <span className="block text-white/90 text-xl sm:text-2xl md:text-4xl lg:text-5xl mt-1 md:mt-2 pb-2">
                        {isAr ? 'للمقاولات' : 'For Contracting'}
                    </span>
                </h1>

                <p className="mt-2 md:mt-4 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base md:text-xl text-gray-200 animate-fade-in-up leading-relaxed drop-shadow-md lg:border-l-4 lg:border-tertiary lg:pl-4 lg:rtl:border-l-0 lg:rtl:border-r-4 lg:rtl:pr-4" style={{animationDelay: '0.3s'}}>
                {isAr 
                    ? 'شريكك الهندسي الموثوق لتنفيذ المشاريع الكبرى في مصر والمملكة وعمان. نقدم حلولاً متكاملة في التكييف، الحريق، والأنظمة الميكانيكية بأعلى المعايير الدولية.'
                    : 'Your trusted engineering partner for major projects in Egypt, KSA & Oman. We provide integrated solutions in HVAC, Fire Fighting, and Mechanical systems with highest international standards.'}
                </p>

                {/* RESPONSIVE BUTTONS */}
                <div className={`mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center ${isAr ? 'lg:justify-start' : 'lg:justify-start'} animate-fade-in-up px-4 sm:px-0`} style={{animationDelay: '0.5s'}}>
                    <button
                        onClick={() => onNavigate('contact')}
                        className="group relative w-full sm:w-auto px-6 py-3 md:py-4 bg-tertiary text-white font-bold rounded-full overflow-hidden shadow-[0_5px_15px_rgba(230,57,70,0.4)] hover:shadow-[0_8px_25px_rgba(230,57,70,0.6)] transition-all duration-300 transform hover:-translate-y-1 active:scale-95 flex justify-center items-center text-sm md:text-base"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                          {isAr ? 'اطلب عرض سعر' : 'Request Quotation'}
                          <i className="fas fa-arrow-right rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform"></i>
                        </span>
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                    </button>
                    
                    <button
                        onClick={() => onNavigate('services')}
                        className="w-full sm:w-auto px-6 py-3 md:py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full backdrop-blur-sm hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1 active:scale-95 shadow-md flex justify-center items-center group text-sm md:text-base"
                    >
                        <span className="transition-colors">{isAr ? 'خدماتنا' : 'Our Services'}</span>
                    </button>
                </div>
            </div>

            {/* STATS SECTION */}
            <div className="w-full lg:w-2/5 relative mt-12 lg:mt-0 flex justify-center animate-fade-in-left hidden lg:flex" style={{animationDelay: '0.2s'}}>
                <div className="relative z-10 w-full max-w-sm">
                    {/* Stats Card */}
                    <div className="bg-white/10 backdrop-blur-xl border-t border-l border-white/20 p-6 rounded-2xl shadow-2xl mb-6 animate-float relative overflow-hidden group">
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-12 h-12 bg-tertiary rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                                <i className="fas fa-project-diagram"></i>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-white">+200</div>
                                <div className="text-sm text-gray-200 font-medium">{isAr ? 'مشروع تم تنفيذه' : 'Projects Completed'}</div>
                            </div>
                        </div>
                    </div>

                    {/* Quality Card */}
                    <div className="bg-white/10 backdrop-blur-xl border-t border-l border-white/20 p-6 rounded-2xl shadow-2xl ml-8 animate-float relative overflow-hidden group" style={{animationDelay: '1.5s'}}>
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                                <i className="fas fa-certificate"></i>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-white">ISO</div>
                                <div className="text-sm text-gray-200 font-medium">{isAr ? 'معايير جودة عالمية' : 'Global Quality Standards'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      {/* ... Rest of component remains the same ... */}
      <div className="relative z-20 h-10 md:h-14 bg-white/5 backdrop-blur-md border-t border-white/10 flex items-center overflow-hidden" dir="ltr">
        <div className={`flex w-max ${isAr ? 'animate-scroll-infinite-reverse' : 'animate-scroll-infinite'} hover:[animation-play-state:paused]`}>
            {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex items-center shrink-0">
                    {marqueeItems.map((item, index) => (
                        <div key={index} className="flex items-center mx-3 md:mx-8 group cursor-pointer">
                            <i className={`fas ${item.icon} text-accent text-sm md:text-lg mx-2 transform group-hover:scale-125 transition-transform`}></i>
                            <span className="text-white font-bold text-[10px] md:text-sm tracking-wide group-hover:text-tertiary transition-colors whitespace-nowrap">
                                {isAr ? item.textAr : item.textEn}
                            </span>
                            <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-white/30 mx-3 md:mx-8"></span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
      </div>

      <div className="relative z-20 bg-gradient-to-b from-primary/95 to-primary border-t border-white/5 py-8 sm:py-16 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className={`w-full md:w-1/3 text-center ${isAr ? 'md:text-right' : 'md:text-left'} z-10`}>
                   <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                       <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                       <span className="text-accent font-bold tracking-widest text-xs uppercase">{isAr ? 'نطاق أعمالنا' : 'OUR SCOPE'}</span>
                   </div>
                   <h3 className="text-xl md:text-3xl font-extrabold text-white mb-2 md:mb-3">
                       {isAr ? 'قطاعات وتواجد إقليمي' : 'Sectors & Presence'}
                   </h3>
                   <p className="text-gray-300 text-sm leading-relaxed mb-4 md:mb-6 max-w-sm mx-auto md:mx-0">
                       {isAr 
                       ? 'نعمل في المملكة العربية السعودية ومصر وسلطنة عمان لخدمة قطاعات حيوية متعددة بكفاءة عالية.' 
                       : 'Operating in KSA, Egypt, and Oman to serve multiple vital sectors with high efficiency.'}
                   </p>
                   <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer group">
                       <i className="fas fa-map-marked-alt text-tertiary group-hover:text-white transition-colors"></i>
                       <span className="text-white text-xs font-bold">{isAr ? 'تغطية جغرافية شاملة' : 'Comprehensive Coverage'}</span>
                   </div>
              </div>
              {/* Dual Orbit Visualization remains the same */}
              <div className="w-full md:w-2/3 h-[240px] sm:h-[400px] md:h-[450px] relative flex items-center justify-center perspective-1000 overflow-hidden md:overflow-visible mt-4 md:mt-0">
                  <div className="relative flex items-center justify-center transform scale-[0.55] sm:scale-75 md:scale-100 origin-center">
                      <div className="w-32 h-32 rounded-full bg-white relative z-20 shadow-[0_0_60px_rgba(50,130,184,0.4)] flex items-center justify-center border border-gray-200 p-3">
                          <img src={APP_CONFIG.logo} alt="First Air Logo" className="w-full h-full object-contain animate-pulse-glow" />
                      </div>
                      <div className="absolute w-[240px] h-[240px] z-10">
                          <div className="absolute inset-0 rounded-full border-2 border-dashed border-tertiary/20 animate-[spin_40s_linear_infinite_reverse]"></div>
                          <div className="absolute inset-0 animate-spin-reverse-slower">
                              {innerRingItems.map((item, index) => {
                                  const total = innerRingItems.length;
                                  const angle = (index / total) * 2 * Math.PI;
                                  const radius = 50; 
                                  const left = 50 + radius * Math.cos(angle);
                                  const top = 50 + radius * Math.sin(angle);
                                  return (
                                      <div key={index} style={{ left: `${left}%`, top: `${top}%` }} className="absolute">
                                          <div className="transform -translate-x-1/2 -translate-y-1/2">
                                              <div className="flex flex-col items-center justify-center animate-spin-slower">
                                                  <div className="w-16 h-16 md:w-14 md:h-14 rounded-full bg-white shadow-lg border-2 border-tertiary/20 flex items-center justify-center text-primary text-xl"><i className={`fas ${item.icon} text-tertiary`}></i></div>
                                                  <div className="mt-2 px-2 py-0.5 bg-tertiary/90 backdrop-blur-sm rounded-full shadow-md min-w-[80px] text-center border border-white/20"><span className="text-[10px] md:text-[11px] text-white font-bold whitespace-nowrap block">{isAr ? item.nameAr : item.nameEn}</span></div>
                                              </div>
                                          </div>
                                      </div>
                                  );
                              })}
                          </div>
                      </div>
                      <div className="absolute w-[420px] h-[420px] z-0">
                          <div className="absolute inset-0 rounded-full border border-dashed border-accent/20 animate-[spin_60s_linear_infinite]"></div>
                          <div className="absolute inset-0 animate-spin-super-slow">
                              {outerRingItems.map((item, index) => {
                                  const total = outerRingItems.length;
                                  const angle = (index / total) * 2 * Math.PI;
                                  const radius = 50; 
                                  const left = 50 + radius * Math.cos(angle);
                                  const top = 50 + radius * Math.sin(angle);
                                  return (
                                      <div key={index} style={{ left: `${left}%`, top: `${top}%` }} className="absolute">
                                          <div className="transform -translate-x-1/2 -translate-y-1/2">
                                              <div className="flex flex-col items-center justify-center animate-spin-reverse-super-slow">
                                                  <div className="w-20 h-20 md:w-16 md:h-16 rounded-full bg-white shadow-xl border-[3px] border-accent/20 overflow-hidden flex items-center justify-center">{item.isFlag ? (<img src={`https://flagcdn.com/w80/${item.code}.png`} alt={isAr ? item.nameAr : item.nameEn} className="w-full h-full object-cover" />) : (<i className={`fas ${item.icon} text-primary text-2xl`}></i>)}</div>
                                                  <div className="mt-2 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-full border border-accent/30 shadow-lg min-w-[70px] text-center"><span className="text-sm md:text-xs text-accent font-bold whitespace-nowrap">{isAr ? item.nameAr : item.nameEn}</span></div>
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
