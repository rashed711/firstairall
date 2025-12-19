
import React, { useState, useEffect, useRef } from 'react';
import { Language, MethodologyItem } from '../types';
import ScrollReveal from './ScrollReveal';

const AnimatedCounter = ({ end, duration = 2000, prefix = '', suffix = '' }: { end: number, duration?: number, prefix?: string, suffix?: string }) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );
        if (elementRef.current) observer.observe(elementRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        let startTime: number | null = null;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeProgress * end));
            if (progress < 1) window.requestAnimationFrame(step);
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
  methodology: MethodologyItem[];
  isHomePage?: boolean;
  onViewAll?: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ lang, methodology, isHomePage, onViewAll }) => {
  const isAr = lang === 'ar';

  return (
    <div className="py-16 bg-white overflow-hidden w-full no-overflow">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Stats Strip - Responsive Fix */}
        <ScrollReveal animation="fade-up" delay={100} className="w-full mb-12">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center shadow-sm">
                <div className="group border-b md:border-b-0 md:border-l border-gray-200 pb-6 md:pb-0 last:border-0 md:last:border-l-0 rtl:md:border-l-0 rtl:md:border-r">
                    <div className="text-3xl md:text-5xl font-black text-secondary mb-2 group-hover:text-tertiary transition-colors">
                        <AnimatedCounter end={100} suffix="%" />
                    </div>
                    <div className="text-[10px] md:text-sm text-gray-500 font-bold uppercase tracking-widest">{isAr ? 'التزام بالمواصفات' : 'Specs Compliance'}</div>
                </div>
                <div className="group border-b md:border-b-0 md:border-l border-gray-200 pb-6 md:pb-0 last:border-0 md:last:border-l-0 rtl:md:border-l-0 rtl:md:border-r">
                    <div className="text-3xl md:text-5xl font-black text-secondary mb-2 group-hover:text-tertiary transition-colors">
                        <AnimatedCounter end={50} prefix="+" />
                    </div>
                    <div className="text-[10px] md:text-sm text-gray-500 font-bold uppercase tracking-widest">{isAr ? 'مشروع ضخم' : 'Mega Projects'}</div>
                </div>
                <div className="group">
                    <div className="text-3xl md:text-5xl font-black text-secondary mb-2 group-hover:text-tertiary transition-colors">
                        <AnimatedCounter end={3} suffix={isAr ? ' فروع' : ' Branches'} />
                    </div>
                    <div className="text-[10px] md:text-sm text-gray-500 font-bold uppercase tracking-widest">{isAr ? 'تغطية إقليمية' : 'Regional Coverage'}</div>
                </div>
            </div>
        </ScrollReveal>

        {/* Section Header */}
        <ScrollReveal animation="fade-down">
            <div className="text-center mb-10 md:mb-12">
                <h3 className="text-2xl md:text-5xl font-extrabold text-primary mb-4">
                    {isAr ? 'منهجية تنفيذ المشاريع' : 'Project Methodology'}
                </h3>
                <p className="max-w-2xl mx-auto text-gray-500 text-xs md:text-base px-2">
                    {isAr 
                    ? 'نتبع في فرست اير منهجية دقيقة تبدأ من التصميم وحتى التشغيل والصيانة لضمان أعلى مستويات الجودة.' 
                    : 'We follow a precise methodology at First Air starting from design to commissioning and maintenance to ensure highest quality.'}
                </p>
            </div>
        </ScrollReveal>

        {/* Gallery Grid - Responsive Fix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {methodology.map((item, index) => (
                <ScrollReveal 
                    key={item.id} 
                    animation="zoom-in" 
                    delay={index * 100} 
                    className="h-full"
                >
                    <div className="group relative h-64 md:h-72 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500">
                        <img 
                            src={item.image} 
                            alt={isAr ? item.title_ar : item.title_en} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <span className="text-tertiary text-[9px] md:text-[10px] font-bold uppercase tracking-wider mb-1">
                                {isAr ? item.category_ar : item.category_en}
                            </span>
                            <h4 className="text-white text-lg md:text-xl font-bold">
                                {isAr ? item.title_ar : item.title_en}
                            </h4>
                        </div>
                    </div>
                </ScrollReveal>
            ))}
        </div>

        {isHomePage && methodology.length >= 6 && (
            <div className="mt-12 md:mt-16 text-center">
                <button 
                    onClick={onViewAll}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-black shadow-xl hover:bg-tertiary transition-all text-sm md:text-base"
                >
                    {isAr ? 'مشاهدة كافة المشاريع' : 'View All Projects'}
                    <i className={`fas fa-arrow-${isAr ? 'left' : 'right'}`}></i>
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
