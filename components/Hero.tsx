
import React, { useState, useEffect } from 'react';
import { Language, Settings } from '../types';
import { APP_CONFIG } from '../constants';
import { marqueeItems } from '../data/mockData';
import ScrollReveal from './ScrollReveal';

interface HeroProps {
  lang: Language;
  settings: Settings;
  onNavigate: (tab: string) => void;
}

const Hero: React.FC<HeroProps> = ({ lang, settings, onNavigate }) => {
  const isAr = lang === 'ar';
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "https://www2.0zz0.com/2025/12/19/17/975794069.jpg",
    "https://www2.0zz0.com/2025/12/19/17/142713849.jpg",
    "https://www2.0zz0.com/2025/12/19/17/493061020.jpg",
    "https://www2.0zz0.com/2025/12/19/17/172688740.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000); 
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="relative w-full overflow-hidden bg-primary no-overflow">
      <div className="relative min-h-[72vh] md:min-h-[82vh] flex flex-col justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-primary">
            {heroImages.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentImageIndex ? 'opacity-80 scale-100' : 'opacity-0 scale-110'
                }`}
              >
                {/* Optimization: High fetch priority for the first image to improve LCP */}
                {/* تم تصحيح fetchPriority هنا لتجنب خطأ TypeScript */}
                <img 
                  src={img} 
                  alt={isAr ? "فيرست اير للمقاولات MEP" : "First Air MEP Contracting"} 
                  fetchPriority={index === 0 ? "high" : "low"}
                  loading={index === 0 ? "eager" : "lazy"}
                  className={`w-full h-full object-cover ${index === currentImageIndex ? 'animate-ken-burns' : ''}`} 
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${isAr ? 'md:bg-gradient-to-l' : 'md:bg-gradient-to-r'} from-primary/70 via-primary/30 to-transparent`}></div>
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
            ))}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full px-4 pt-12 md:pt-20">
              <div className={`w-full lg:w-3/5 text-center ${isAr ? 'lg:text-right' : 'lg:text-left'}`}>
                  <ScrollReveal animation="fade-down" delay={200}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-[10px] md:text-xs font-bold">
                        <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                        {isAr ? 'فرست اير للمقاولات (MEP)' : 'First Air Electromechanical (MEP)'}
                    </div>
                  </ScrollReveal>
                  
                  <ScrollReveal animation="fade-up" delay={400}>
                    <h1 className="text-3xl md:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-2xl">
                        {isAr ? settings.site_name_ar : settings.site_name_en}
                    </h1>
                  </ScrollReveal>

                  <ScrollReveal animation="fade-up" delay={600}>
                    <p className="text-base md:text-xl text-gray-200 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8 md:mb-10 drop-shadow-md font-medium">
                        {isAr ? 'شريككم الهندسي لتنفيذ كبرى المشاريع الكهروميكانيكية بأعلى معايير الجودة العالمية.' : 'Your engineering partner for executing major MEP projects with global quality standards.'}
                    </p>
                  </ScrollReveal>

                  <ScrollReveal animation="fade-up" delay={800}>
                    <div className="flex flex-row gap-2 md:gap-4 justify-center lg:justify-start items-center">
                        <button 
                          onClick={() => onNavigate('contact')} 
                          className="flex-1 sm:flex-none px-3 sm:px-8 md:px-10 py-3 md:py-4 bg-tertiary text-white font-black rounded-full shadow-2xl hover:bg-red-700 hover:scale-105 transition-all text-[10px] xs:text-xs sm:text-base whitespace-nowrap"
                        >
                            {isAr ? 'اطلب عرض سعر' : 'Get a Quote'}
                        </button>
                        <button 
                          onClick={() => onNavigate('services')} 
                          className="flex-1 sm:flex-none px-3 sm:px-8 md:px-10 py-3 md:py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-black rounded-full hover:bg-white hover:text-primary transition-all text-[10px] xs:text-xs sm:text-base whitespace-nowrap"
                        >
                            {isAr ? 'خدماتنا' : 'Our Services'}
                        </button>
                    </div>
                  </ScrollReveal>
              </div>
          </div>
      </div>
      
      <div className="relative z-30 h-16 bg-white/5 backdrop-blur-md border-y border-white/10 flex items-center overflow-hidden w-full no-overflow" dir="ltr">
        <div className={`flex w-max ${isAr ? 'animate-scroll-infinite-reverse' : 'animate-scroll-infinite'}`}>
          {[...Array(2)].map((_, sIdx) => (
            <div key={sIdx} className="flex items-center shrink-0">
              {marqueeItems.map((item, idx) => (
                <div key={idx} className="flex items-center mx-6 md:mx-10 gap-3 md:gap-4 text-white font-bold text-xs md:text-sm whitespace-nowrap">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <i className={`fas ${item.icon} text-accent text-[10px] md:text-xs`} aria-hidden="true"></i>
                  </div>
                  <span>{isAr ? item.textAr : item.textEn}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
