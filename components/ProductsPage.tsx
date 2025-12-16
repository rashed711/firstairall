
import React from 'react';
import { Product, Language } from '../types';
import ScrollReveal from './ScrollReveal';

interface ProductsPageProps {
  products: Product[];
  lang: Language;
  onNavigate: (tab: string) => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ products, lang, onNavigate }) => {
  const isAr = lang === 'ar';

  return (
    <div className="py-20 bg-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal animation="fade-down">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
              {isAr ? 'منتجاتنا الهندسية' : 'Our Engineering Products'}
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
              {isAr 
                ? 'نورد ونركب أفضل المعدات والأنظمة الكهروميكانيكية من أرقى العلامات التجارية العالمية لضمان الكفاءة والاستدامة.'
                : 'We supply and install top-tier electromechanical equipment from world-class brands to ensure efficiency and sustainability.'}
            </p>
          </div>
        </ScrollReveal>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} animation="fade-up" delay={index * 100} className="h-full">
               <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
                  {/* Image Container */}
                  <div className="h-64 relative overflow-hidden bg-gray-100">
                      <div className="absolute inset-0 bg-primary/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                      <img 
                        src={product.image} 
                        alt={isAr ? product.title_ar : product.title_en}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4 z-20">
                          <span className="bg-tertiary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                              {isAr ? 'تــوريد وتركيب' : 'Supply & Install'}
                          </span>
                      </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-tertiary transition-colors">
                          {isAr ? product.title_ar : product.title_en}
                      </h3>
                      <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                           {isAr ? product.description_ar : product.description_en}
                      </p>
                      
                      {/* Specs Tags */}
                      {product.specs && (
                          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                              {product.specs.map((spec, i) => (
                                  <span key={i} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded border border-gray-200">
                                      {spec}
                                  </span>
                              ))}
                          </div>
                      )}

                      <button 
                        onClick={() => onNavigate('contact')}
                        className="w-full mt-auto border-2 border-primary text-primary font-bold py-2 rounded-xl hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2"
                      >
                          <i className="fas fa-file-contract"></i>
                          {isAr ? 'طلب عرض سعر' : 'Request Quotation'}
                      </button>
                  </div>
               </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
         <ScrollReveal animation="zoom-in" delay={300} className="mt-20">
            <div className="bg-primary rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                 <div className="relative z-10">
                     <h2 className="text-2xl font-bold text-white mb-4">
                         {isAr ? 'نضمن لك الجودة والضمان' : 'We Guarantee Quality & Warranty'}
                     </h2>
                     <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                         {isAr ? 'جميع المنتجات التي نقوم بتوريدها تأتي بضمان الوكيل المعتمد مع خدمات ما بعد البيع والصيانة.' : 'All products we supply come with authorized agent warranty along with after-sales service and maintenance.'}
                     </p>
                     <button onClick={() => onNavigate('contact')} className="bg-tertiary text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-primary transition-all shadow-lg transform hover:-translate-y-1">
                         {isAr ? 'تواصل مع المبيعات' : 'Contact Sales'}
                     </button>
                 </div>
            </div>
         </ScrollReveal>

      </div>
    </div>
  );
};

export default ProductsPage;