
import React, { useState, useEffect } from 'react';
import { Language, Settings } from '../types';

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
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", // Construction/Engineering
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", // HVAC/Industrial
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", // Electrical/Pipes
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"  // Architect/Site
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
    { code: 'om', nameAr: 'عمان', nameEn: 'Oman', isFlag: true }, // Corrected "Emad" to "Oman"
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
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${isAr ? 'from-secondary/30 via-primary/70 to-primary/95' : 'from-primary/95 via-primary/70 to-secondary/30'}`}></div>
          </div>
        ))}
      </div>

      {/* FLOATING DECORATIONS */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-tertiary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float z-10 pointer-events-none"></div>
      <div className="absolute bottom-40 right-20 w-48 h-48 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float z-10 pointer-events-none" style={{animationDelay: '2s'}}></div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col justify-center relative z-20 w-full pt-10 pb-8">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
            
            {/* TEXT SECTION */}
            <div className={`w-full lg:w-3/5 text-center ${isAr ? 'lg:text-right' : 'lg:text-left'}`}>
                <div className="inline-block px-4 py-1 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-sm font-bold animate-fade-in-down shadow-lg">
                    🏗️ {isAr ? 'رواد الأعمال الكهروميكانيكية (MEP)' : 'Leaders in Electromechanical Works (MEP)'}
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 animate-fade-in-right drop-shadow-lg">
                    <span className="block">{isAr ? 'فيرست إير' : 'First Air'}</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-tertiary to-white text-3xl sm:text-5xl mt-2">
                        {isAr ? 'للمقاولات الكهروميكانيكية' : 'For Contracting'}
                    </span>
                </h1>

                <p className="mt-4 max-w-lg mx-auto lg:mx-0 text-xl text-gray-100 sm:mt-6 animate-fade-in-up leading-relaxed drop-shadow-md" style={{animationDelay: '0.3s'}}>
                {isAr 
                    ? 'شريكك الهندسي الموثوق لتنفيذ المشاريع الكبرى في مصر والمملكة. نقدم حلولاً متكاملة في التكييف، الحريق، والأنظمة الميكانيكية بأعلى المعايير الدولية.'
                    : 'Your trusted engineering partner for major projects in Egypt & KSA. We provide integrated solutions in HVAC, Fire Fighting, and Mechanical systems with highest international standards.'}
                </p>

                {/* BUTTONS */}
                <div className={`mt-10 flex flex-row flex-wrap gap-4 justify-center ${isAr ? 'lg:justify-start' : 'lg:justify-start'} animate-fade-in-up`} style={{animationDelay: '0.5s'}}>
                    <button
                        onClick={() => onNavigate('contact')}
                        className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-tertiary text-white font-bold rounded-full overflow-hidden shadow-lg hover:shadow-tertiary/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex-1 sm:flex-none justify-center flex"
                    >
                        <span className="relative z-10">{isAr ? 'اطلب عرض سعر' : 'Request Quotation'}</span>
                        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                    </button>
                    
                    <button
                        onClick={() => onNavigate('services')}
                        className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 border border-white/30 text-white font-bold rounded-full backdrop-blur-sm hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1 shadow-md flex-1 sm:flex-none justify-center flex"
                    >
                        {isAr ? 'خدماتنا' : 'Our Services'}
                    </button>
                </div>
            </div>

            {/* STATS/SECTORS SECTION (Right Side) */}
            <div className="w-full lg:w-2/5 relative mt-12 lg:mt-0 flex justify-center animate-fade-in-left" style={{animationDelay: '0.2s'}}>
                <div className="relative z-10 w-full max-w-sm">
                    {/* Stats Card */}
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl mb-6 animate-float">
                        <div className="flex items-center gap-4">
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
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl ml-8 animate-float" style={{animationDelay: '1.5s'}}>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                                <i className="fas fa-shield-alt"></i>
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

      {/* MARQUEE STRIP */}
      <div className="relative z-20 h-14 bg-white/10 backdrop-blur-md border-t border-white/10 flex items-center overflow-hidden" dir="ltr">
        <div className={`flex w-max ${isAr ? 'animate-scroll-infinite-reverse' : 'animate-scroll-infinite'} hover:[animation-play-state:paused]`}>
            {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex items-center shrink-0">
                    {marqueeItems.map((item, index) => (
                        <div key={index} className="flex items-center mx-8 group cursor-pointer">
                            <i className={`fas ${item.icon} text-white text-lg mx-2 transform group-hover:scale-125 transition-transform`}></i>
                            <span className="text-white font-bold text-sm tracking-wide group-hover:text-tertiary transition-colors">
                                {isAr ? item.textAr : item.textEn}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-white/30 mx-8"></span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
      </div>

      {/* Contracting COUNTRIES / SECTORS DOUBLE ORBIT */}
      <div className="relative z-20 bg-gradient-to-b from-primary/95 to-primary border-t border-white/10 py-16 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
              
              {/* Text Description */}
              <div className={`w-full md:w-1/3 text-center ${isAr ? 'md:text-right' : 'md:text-left'} z-10`}>
                   <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                       <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                       <span className="text-tertiary font-bold tracking-widest text-xs uppercase">{isAr ? 'نطاق أعمالنا' : 'OUR SCOPE'}</span>
                   </div>
                   <h3 className="text-3xl font-extrabold text-white mb-3">
                       {isAr ? 'قطاعات وتواجد إقليمي' : 'Sectors & Presence'}
                   </h3>
                   <p className="text-gray-300 text-sm leading-relaxed mb-6">
                       {isAr 
                       ? 'نعمل في المملكة العربية السعودية ومصر لخدمة قطاعات حيوية متعددة بكفاءة عالية.' 
                       : 'Operating in KSA and Egypt to serve multiple vital sectors with high efficiency.'}
                   </p>
                   
                   <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer">
                       <i className="fas fa-map-marked-alt text-tertiary"></i>
                       <span className="text-white text-xs font-bold">{isAr ? 'تغطية جغرافية شاملة' : 'Comprehensive Coverage'}</span>
                   </div>
              </div>

              {/* Dual Orbit Visualization */}
              <div className="w-full md:w-2/3 h-[320px] sm:h-[400px] md:h-[450px] relative flex items-center justify-center perspective-1000 overflow-hidden md:overflow-visible">
                  
                  <div className="relative flex items-center justify-center transform scale-[0.85] sm:scale-75 md:scale-100 origin-center">

                      {/* Central Globe Core */}
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-primary relative z-20 shadow-[0_0_60px_rgba(50,130,184,0.6)] flex items-center justify-center border border-white/20">
                          <div className="absolute inset-0 rounded-full border border-white/10 rotate-45"></div>
                          <div className="absolute inset-0 rounded-full border border-white/10 -rotate-45"></div>
                          <i className="fas fa-industry text-6xl text-white/90 drop-shadow-lg animate-pulse-glow"></i>
                      </div>

                      {/* INNER ORBIT (Sectors) - Counter Clockwise */}
                      <div className="absolute w-[240px] h-[240px] z-10">
                          {/* Dashed Line Ring */}
                          <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-[spin_40s_linear_infinite_reverse]"></div>
                          
                          {/* Rotating Container (Reverse) - Moves the items along the path */}
                          <div className="absolute inset-0 animate-spin-reverse-slower">
                              {innerRingItems.map((item, index) => {
                                  const total = innerRingItems.length;
                                  const angle = (index / total) * 2 * Math.PI;
                                  const radius = 50; 
                                  const left = 50 + radius * Math.cos(angle);
                                  const top = 50 + radius * Math.sin(angle);

                                  return (
                                      <div 
                                        key={index}
                                        style={{ left: `${left}%`, top: `${top}%` }}
                                        className="absolute"
                                      >
                                          {/* Nested Divs to separate Translation (Centering) from Rotation (Counter-Spin) */}
                                          {/* 1. Center the element on its coordinate */}
                                          <div className="transform -translate-x-1/2 -translate-y-1/2">
                                              {/* 2. Counter-rotate to keep content upright (Opposite to Ring Rotation) */}
                                              <div className="flex flex-col items-center justify-center animate-spin-slower">
                                                  
                                                  {/* Icon Card */}
                                                  <div className="w-16 h-16 md:w-14 md:h-14 rounded-full bg-white shadow-lg border-2 border-white overflow-hidden hover:scale-125 transition-transform duration-300 relative z-10 flex items-center justify-center text-primary text-xl">
                                                    <i className={`fas ${item.icon}`}></i>
                                                  </div>
                                                  
                                                  {/* Label */}
                                                  <div className="mt-2 px-2 py-0.5 bg-tertiary/90 backdrop-blur-sm rounded-full shadow-md min-w-[80px] text-center border border-white/20">
                                                      <span className="text-[10px] md:text-[11px] text-white font-bold whitespace-nowrap block">{isAr ? item.nameAr : item.nameEn}</span>
                                                  </div>
                                              
                                              </div>
                                          </div>
                                      </div>
                                  );
                              })}
                          </div>
                      </div>

                      {/* OUTER ORBIT (Countries) - Clockwise */}
                      <div className="absolute w-[420px] h-[420px] z-0">
                          {/* Dashed Line Ring */}
                          <div className="absolute inset-0 rounded-full border border-dashed border-white/10 animate-[spin_60s_linear_infinite]"></div>
                          
                          {/* Rotating Container (Forward) */}
                          <div className="absolute inset-0 animate-spin-super-slow">
                              {outerRingItems.map((item, index) => {
                                  const total = outerRingItems.length;
                                  const angle = (index / total) * 2 * Math.PI;
                                  const radius = 50; 
                                  const left = 50 + radius * Math.cos(angle);
                                  const top = 50 + radius * Math.sin(angle);

                                  return (
                                      <div 
                                        key={index}
                                        style={{ left: `${left}%`, top: `${top}%` }}
                                        className="absolute"
                                      >
                                          {/* Nested Divs for robust counter-rotation */}
                                          <div className="transform -translate-x-1/2 -translate-y-1/2">
                                              <div className="flex flex-col items-center justify-center animate-spin-reverse-super-slow">
                                                  <div className="w-20 h-20 md:w-16 md:h-16 rounded-full bg-white shadow-xl border-[3px] border-white overflow-hidden hover:scale-125 transition-transform duration-300 relative z-10 flex items-center justify-center">
                                                    {item.isFlag ? (
                                                        <img src={`https://flagcdn.com/w80/${item.code}.png`} alt={isAr ? item.nameAr : item.nameEn} className="w-full h-full object-cover" />
                                                    ) : (
                                                        <i className={`fas ${item.icon} text-primary text-2xl`}></i>
                                                    )}
                                                  </div>
                                                  <div className="mt-2 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-full border border-white/20 shadow-lg min-w-[70px] text-center">
                                                      <span className="text-sm md:text-xs text-white font-bold whitespace-nowrap">{isAr ? item.nameAr : item.nameEn}</span>
                                                  </div>
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
