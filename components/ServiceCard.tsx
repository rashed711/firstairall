
import React from 'react';
import { Service, Language } from '../types';
import { getServiceImage } from '../utils/helpers';

interface ServiceCardProps {
  service: Service;
  lang: Language;
  index?: number;
  onClick?: (service: Service) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, lang, index = 0, onClick }) => {
  const isAr = lang === 'ar';

  const handleClick = () => {
    if (onClick) {
        onClick(service);
    }
  };

  return (
    <div 
        dir={isAr ? 'rtl' : 'ltr'}
        className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-visible h-full flex flex-col transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl text-center w-full animate-fade-in-up"
        style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Decorative Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      
      {/* Top Accent Line */}
      <div className={`absolute top-0 w-full h-1 bg-gradient-to-r from-secondary to-tertiary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-2xl ${isAr ? 'right-0 origin-right' : 'left-0 origin-left'}`}></div>

      <div className="p-6 relative z-10 flex flex-col items-center h-full">
        
        {/* Complex Image Container with Motion Effects */}
        <div className="mb-6 relative inline-flex justify-center items-center cursor-pointer" onClick={handleClick}>
             
             {/* 1. Pulsing/Expanding Outer Glow (Always Visible) */}
             <div className="absolute inset-0 bg-tertiary/10 rounded-full scale-125 animate-pulse-glow"></div>
             
             {/* 2. Spinning Dashed Border (Always Visible) */}
             <div className="absolute -inset-2 border-2 border-dashed border-tertiary/30 rounded-full animate-[spin_10s_linear_infinite]"></div>

             {/* 3. Main Image Wrapper */}
             <div className="w-28 h-28 rounded-full border-4 border-white shadow-xl overflow-hidden relative z-10 transform transition-all duration-500 group-hover:rotate-3 group-hover:border-tertiary/20">
                
                {/* Shine Effect Overlay */}
                <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-full">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-[150%] group-hover:animate-shimmer"></div>
                </div>
                
                <img 
                    src={getServiceImage(service.id)} 
                    alt={isAr ? service.title_ar : service.title_en}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>
        </div>
        
        <div className="flex-1 w-full flex flex-col items-center cursor-pointer" onClick={handleClick}>
            {/* Title */}
            <h3 className="text-xl font-extrabold text-primary mb-3 group-hover:text-tertiary transition-colors duration-300 transform group-hover:scale-105">
                {isAr ? service.title_ar : service.title_en}
            </h3>
            
            <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3 max-w-xs text-center group-hover:text-gray-600 transition-colors">
                {isAr 
                    ? (service.description_ar || 'نقدم هذه الخدمة بمعايير احترافية تضمن رضاكم التام وتوفير الوقت.')
                    : (service.description_en || 'We provide this service with professional standards ensuring satisfaction.')}
            </p>
        </div>

        {/* Action Button */}
        <button 
            onClick={handleClick}
            className={`mt-auto flex items-center justify-center text-tertiary font-bold transition-all duration-300 ${isAr ? 'group-hover:-translate-x-2' : 'group-hover:translate-x-2'}`}
        >
            <span className="text-xs uppercase tracking-wider group-hover:text-primary transition-colors">{isAr ? 'عرض التفاصيل' : 'View Details'}</span>
            <div className={`w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mx-2 group-hover:bg-tertiary group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md transform group-hover:scale-110`}>
                 <i className={`fas fa-arrow-${isAr ? 'left' : 'right'} text-xs`}></i>
            </div>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
