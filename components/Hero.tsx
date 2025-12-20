
import React, { useState, useEffect } from 'react';
import { Language, Settings } from '../types';
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
    }, 7000); 
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative w-full overflow-hidden bg-primary" aria-label="Hero Section">
      <div className="relative h-[80vh] md:h-[90vh] flex flex-col justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-primary">
            {heroImages.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? 'opacity-70' : 'opacity-0'
                }`}
              >
                <img 
                  src={img} 
                  alt={isAr ? "مشاريع فرست إير للمقاولات" : "First Air Contracting Projects"} 
                  fetchPriority={index === 0 ? "high" : "low"}
                  loading={index === 0 ? "eager" : "lazy"}
                  width="1920"
                  height="1080"
                  className={`w-full h-full object-cover ${index === currentImageIndex ? 'animate-ken-burns' : ''}`} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
              </div>
            ))}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-10">
              <div className={`w-full lg:w-3/5 text-center ${isAr ? 'lg:text-right' : 'lg:text-left'}`}>
                  <ScrollReveal animation="fade-down">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-xs font-bold">
                        <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                        {isAr ? 'رواد المقاولات الكهروميكانيكية' : 'Leaders in MEP Contracting'}
                    </div>
                  </ScrollReveal>
                  
                  <ScrollReveal animation="fade-up" delay={200}>
                    <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                        {isAr ? settings.site_name_ar : settings.site_name_en}
                    </h1>
                  </ScrollReveal>

                  <ScrollReveal animation="fade-up" delay={400}>
                    <p className="text-lg md:text-xl text-gray-100 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10 font-medium">
                        {isAr 
                          ? 'ننفذ مشاريع التكييف والكهرباء والسباكة وأنظمة الحريق بأعلى معايير الجودة العالمية.' 
                          : 'Executing HVAC, Electrical, Plumbing, and Fire Systems with top international quality standards.'}
                    </p>
                  </ScrollReveal>

                  <ScrollReveal animation="fade-up" delay={600}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button 
                          onClick={() => onNavigate('contact')} 
                          className="px-8 py-4 bg-tertiary text-white font-bold rounded-xl shadow-xl hover:bg-red-700 transition-all text-base"
                          aria-label={isAr ? "اطلب عرض سعر الآن" : "Request a quote now"}
                        >
                            {isAr ? 'اطلب عرض سعر' : 'Get a Quote'}
                        </button>
                        <button 
                          onClick={() => onNavigate('services')} 
                          className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-xl hover:bg-white hover:text-primary transition-all text-base"
                          aria-label={isAr ? "استكشف خدماتنا" : "Explore our services"}
                        >
                            {isAr ? 'خدماتنا' : 'Our Services'}
                        </button>
                    </div>
                  </ScrollReveal>
              </div>
          </div>
      </div>
      
      {/* Optimized Marquee */}
      <div className="relative z-30 h-14 bg-white/5 backdrop-blur-md border-y border-white/10 flex items-center overflow-hidden" dir="ltr">
        <div className={`flex w-max ${isAr ? 'animate-scroll-infinite-reverse' : 'animate-scroll-infinite'}`}>
          {[...Array(2)].map((_, sIdx) => (
            <div key={sIdx} className="flex items-center">
              {marqueeItems.map((item, idx) => (
                <div key={idx} className="flex items-center mx-8 gap-3 text-white font-bold text-sm whitespace-nowrap">
                  <i className={`fas ${item.icon} text-accent`} aria-hidden="true"></i>
                  <span>{isAr ? item.textAr : item.textEn}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
