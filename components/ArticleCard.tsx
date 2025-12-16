import React from 'react';
import { Article, Language } from '../types';

interface ArticleCardProps {
  article: Article;
  lang: Language;
  onClick: (article: Article) => void;
  index: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, lang, onClick, index }) => {
  const isAr = lang === 'ar';

  return (
    <div 
        onClick={() => onClick(article)}
        className="group flex flex-col rounded-xl shadow-md overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-gray-100 h-full animate-fade-in-up"
        style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="h-52 bg-gray-200 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
         
         {/* Zooming Image */}
         <img 
            src={`https://picsum.photos/seed/${article.id}/800/600`} 
            alt="Article thumbnail" 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
         />
         
         <div className="absolute bottom-4 left-4 right-4 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
             <span className="inline-block px-3 py-1 bg-tertiary/90 backdrop-blur-sm text-white text-xs font-bold rounded-full mb-2 shadow-lg">
                {isAr ? 'مدونة الاستقدام' : 'Blog'}
             </span>
         </div>
         
         {/* Overlay Icon on Hover */}
         <div className="absolute inset-0 flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
             <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/40 transform scale-50 group-hover:scale-100 transition-transform duration-300">
                 <i className="fas fa-book-open"></i>
             </div>
         </div>
      </div>
      
      <div className="flex-1 p-6 flex flex-col relative">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2 leading-tight group-hover:text-tertiary transition-colors duration-300">
              {isAr ? article.title_ar : article.title_en}
          </h3>
          <div 
              className="text-sm text-gray-500 line-clamp-3 mb-4 transition-colors duration-300 group-hover:text-gray-600"
              dangerouslySetInnerHTML={{ __html: isAr ? article.content_ar : article.content_en }}
          />
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
            <time dateTime={article.created_at} className="text-xs text-gray-400 font-medium flex items-center gap-1">
                <i className="far fa-clock"></i>
                {new Date(article.created_at).toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
            <span className="text-tertiary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                {isAr ? 'اقرأ المزيد' : 'Read More'}
                <i className={`fas fa-arrow-${isAr ? 'left' : 'right'} text-xs`}></i>
            </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;