
import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';
import ScrollReveal from './ScrollReveal';

// Helper Component for Counting Animation
const AnimatedCounter = ({ end, duration = 2000, prefix = '', suffix = '' }: { end: number, duration?: number, prefix?: string, suffix?: string }) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Only run once
                }
            },
            { threshold: 0.5 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Ease out quart function for smooth professional feel
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            
            setCount(Math.floor(easeProgress * end));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [isVisible, end, duration]);

    return (
        <span ref={elementRef} dir="ltr" className="inline-block tabular-nums">
            {prefix}{count}{suffix}
        </span>
    );
};

interface PortfolioProps {
  lang: Language;
}

const Portfolio: React.FC<PortfolioProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const items = [
    {
      id: 1,
      image: "https://i.pinimg.com/736x/5b/44/bf/5b44bfd7a6f27ef80527d0ff4ff6e905.jpg",
      titleAr: "التصميم الهندسي",
      titleEn: "Engineering Design",
      categoryAr: "مرحلة 1",
      categoryEn: "Phase 1"
    },
    {
      id: 2,
      image: "https://i.pinimg.com/736x/d2/1b/f5/d21bf584e6caf3813475807377865ba0.jpg",
      titleAr: "التوريد",
      titleEn: "Supply",
      categoryAr: "مرحلة 2",
      categoryEn: "Phase 2"
    },
    {
      id: 3,
      image: "https://i.pinimg.com/736x/19/ca/46/19ca46332ab41c162b6433db6a6bd4e1.jpg",
      titleAr: "التركيب",
      titleEn: "Installation",
      categoryAr: "مرحلة 3",
      categoryEn: "Phase 3"
    },
    {
      id: 4,
      image: "https://i.pinimg.com/736x/e6/eb/c6/e6ebc61212fb4a701c3b9f64bd274140.jpg",
      titleAr: "الاختبار والتشغيل",
      titleEn: "Testing & Commissioning",
      categoryAr: "مرحلة 4",
      categoryEn: "Phase 4"
    },
    {
        id: 5,
        image: "https://i.pinimg.com/1200x/15/51/91/1551917cf6023f9bbf9fcb1e03c8ef34.jpg",
        titleAr: "إدارة المشاريع",
        titleEn: "Project Management",
        categoryAr: "إشراف",
        categoryEn: "Supervision"
      },
      {
        id: 6,
        image: "https://i.pinimg.com/1200x/ba/45/30/ba45304ddb5286dc0e3b98d4ff94c174.jpg",
        titleAr: "الصيانة",
        titleEn: "Maintenance",
        categoryAr: "خدمة",
        categoryEn: "Service"
      }
  ];

  return (
    <div className="pt-[5px] pb-[5px] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stats Strip - Reduced bottom margin to mb-6 */}
        <ScrollReveal animation="fade-up" delay={100} className="w-full mb-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-6 text-center shadow-sm">
                <div className="group border-b md:border-b-0 md:border-l border-gray-200 pb-3 md:pb-0 last:border-0 md:last:border-l-0 rtl:md:border-l-0 rtl:md:border-r">
                    <div className="text-3xl md:text-4xl font-black text-secondary mb-1 group-hover:text-tertiary transition-colors">
                        <AnimatedCounter end={100} suffix="%" />
                    </div>
                    <div className="text-xs text-gray-500 font-bold">{isAr ? 'التزام بالمواصفات' : 'Specs Compliance'}</div>
                </div>
                <div className="group border-b md:border-b-0 md:border-l border-gray-200 pb-3 md:pb-0 last:border-0 md:last:border-l-0 rtl:md:border-l-0 rtl:md:border-r">
                    <div className="text-3xl md:text-4xl font-black text-secondary mb-1 group-hover:text-tertiary transition-colors">
                        <AnimatedCounter end={50} prefix="+" />
                    </div>
                    <div className="text-xs text-gray-500 font-bold">{isAr ? 'مشروع ضخم' : 'Mega Projects'}</div>
                </div>
                <div className="group">
                    <div className="text-3xl md:text-4xl font-black text-secondary mb-1 group-hover:text-tertiary transition-colors">
                        <AnimatedCounter end={3} suffix={isAr ? ' فروع' : ' Branches'} />
                    </div>
                    <div className="text-xs text-gray-500 font-bold">{isAr ? 'تغطية إقليمية' : 'Regional Coverage'}</div>
                </div>
            </div>
        </ScrollReveal>

        {/* Section Header - Reduced bottom margin to mb-8 */}
        <ScrollReveal animation="fade-down">
            <div className="text-center mb-8">
                <h2 className="text-xs text-tertiary font-bold tracking-wide uppercase mb-1 flex items-center justify-center gap-2">
                    <span className="w-6 h-[2px] bg-tertiary inline-block"></span>
                    {isAr ? 'منهجية العمل' : 'Our Methodology'}
                    <span className="w-6 h-[2px] bg-tertiary inline-block"></span>
                </h2>
                <h3 className="text-2xl md:text-4xl font-extrabold text-primary mb-2">
                    {isAr ? 'دورة حياة المشروع' : 'Project Lifecycle'}
                </h3>
                <p className="max-w-2xl mx-auto text-gray-500 text-xs md:text-sm">
                    {isAr 
                    ? 'نتبع في فرست اير منهجية دقيقة تبدأ من التصميم وحتى التشغيل والصيانة لضمان أعلى مستويات الجودة.' 
                    : 'We follow a precise methodology at First Air starting from design to commissioning and maintenance to ensure highest quality.'}
                </p>
            </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
                <ScrollReveal 
                    key={item.id} 
                    animation="zoom-in" 
                    delay={index * 100} 
                    className="h-full"
                >
                    <div 
                        className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
                    >
                        {/* Image */}
                        <img 
                            src={item.image} 
                            alt={isAr ? item.titleAr : item.titleEn} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                        
                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <span className="text-tertiary text-[10px] font-bold uppercase tracking-wider mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                {isAr ? item.categoryAr : item.categoryEn}
                            </span>
                            <h4 className="text-white text-lg font-bold mb-1">
                                {isAr ? item.titleAr : item.titleEn}
                            </h4>
                            <div className="h-1 w-12 bg-tertiary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </div>
                        
                        {/* Icon Overlay */}
                        <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-90 text-xs">
                            <i className="fas fa-plus"></i>
                        </div>
                    </div>
                </ScrollReveal>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
