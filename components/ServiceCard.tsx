
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

  return (
    <article 
        className="group relative bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="h-48 overflow-hidden relative">
        <img 
            src={getServiceImage(service)} 
            alt={isAr ? service.title_ar : service.title_en}
            width="400"
            height="200"
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      
      <div className="p-6 flex flex-col flex-1 text-center items-center">
        <h3 className="text-xl font-bold text-primary mb-3">
            {isAr ? service.title_ar : service.title_en}
        </h3>
        
        <p className="text-sm text-gray-500 line-clamp-3 mb-6">
            {isAr ? service.description_ar : service.description_en}
        </p>

        <button 
            onClick={() => onClick && onClick(service)}
            className="mt-auto inline-flex items-center gap-2 text-tertiary font-bold text-sm hover:text-primary transition-colors"
            aria-label={isAr ? `التفاصيل حول ${service.title_ar}` : `Details about ${service.title_en}`}
        >
            {isAr ? 'عرض التفاصيل' : 'View Details'}
            <i className={`fas fa-arrow-${isAr ? 'left' : 'right'}`}></i>
        </button>
      </div>
    </article>
  );
};

export default ServiceCard;
