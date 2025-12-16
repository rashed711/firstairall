
import React from 'react';
import ArticleCard from './ArticleCard';
import { Article, Language } from '../types';
import ScrollReveal from './ScrollReveal';

interface ArticlesPageProps {
  articles: Article[];
  lang: Language;
  onArticleClick: (article: Article) => void;
}

const ArticlesPage: React.FC<ArticlesPageProps> = ({ articles, lang, onArticleClick }) => {
  const isAr = lang === 'ar';

  return (
    <div className="py-20 bg-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-down">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
              {isAr ? 'المدونة وآخر الأخبار' : 'Blog & Latest News'}
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
              {isAr 
                ? 'تصفح مقالاتنا المفيدة لتعرف كل ما يخص العمالة المنزلية، الأنظمة، وحقوقك كعميل.'
                : 'Browse our useful articles to know everything about domestic workers, regulations, and your rights as a client.'}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
          {articles.map((article, index) => (
            <ScrollReveal key={article.id} animation="fade-up" delay={index * 150} className="h-full">
              <ArticleCard 
                article={article} 
                lang={lang} 
                onClick={onArticleClick}
                index={0}
              />
            </ScrollReveal>
          ))}
        </div>
        
        {/* Pagination Dummy */}
        <ScrollReveal animation="fade-up" delay={400} className="mt-16 flex justify-center gap-2">
            <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-tertiary hover:text-white transition-colors disabled:opacity-50" disabled>
                <i className={`fas fa-chevron-${isAr ? 'right' : 'left'}`}></i>
            </button>
            <button className="w-10 h-10 rounded-full bg-tertiary text-white font-bold flex items-center justify-center shadow-lg">1</button>
            <button className="w-10 h-10 rounded-full bg-white border border-gray-200 font-bold flex items-center justify-center hover:bg-tertiary hover:text-white transition-colors">2</button>
            <button className="w-10 h-10 rounded-full bg-white border border-gray-200 font-bold flex items-center justify-center hover:bg-tertiary hover:text-white transition-colors">3</button>
            <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-tertiary hover:text-white transition-colors">
                 <i className={`fas fa-chevron-${isAr ? 'left' : 'right'}`}></i>
            </button>
        </ScrollReveal>

      </div>
    </div>
  );
};

export default ArticlesPage;
