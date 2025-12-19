
import React, { useEffect } from 'react';
import { Product, Language, Category } from '../types';

interface ProductDetailProps {
  product: Product;
  categories: Category[];
  lang: Language;
  onBack: () => void;
  onContact: (product?: Product) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, categories, lang, onBack, onContact }) => {
  const isAr = lang === 'ar';
  const cat = categories.find(c => c.id === product.categoryId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white py-12 md:py-20 animate-fade-in" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Navigation / Back */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-primary font-bold mb-10 transition-colors group"
        >
          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
            <i className={`fas fa-arrow-${isAr ? 'right' : 'left'} text-xs`}></i>
          </div>
          {isAr ? 'العودة لجميع المنتجات' : 'Back to all products'}
        </button>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Media */}
          <div className="space-y-6">
            <div className="aspect-square bg-gray-50 rounded-[40px] overflow-hidden shadow-2xl border-8 border-gray-50 group">
              <img 
                src={product.image} 
                className="w-full h-full object-contain p-8 transition-transform duration-1000 group-hover:scale-110" 
                alt="" 
              />
            </div>
            
            {/* Spec Highlights */}
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-gray-50 rounded-2xl h-24 flex items-center justify-center border border-gray-100 opacity-40">
                  <i className="fas fa-image text-2xl text-gray-300"></i>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col h-full">
            <div className="mb-8">
              <span className="bg-primary/5 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">
                {cat ? (isAr ? cat.name_ar : cat.name_en) : 'Product Catalog'}
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
                {isAr ? product.title_ar : product.title_en}
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed">
                {isAr ? product.description_ar : product.description_en}
              </p>
            </div>

            {/* Specifications & Features */}
            <div className="space-y-8 mb-12">
              {product.specs && (
                <div>
                  <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-4">
                    {isAr ? 'المواصفات الفنية' : 'Technical Specifications'}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                        <i className="fas fa-microchip text-tertiary"></i>
                        <span className="text-sm font-bold text-gray-700">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {(isAr ? product.features_ar : product.features_en) && (
                <div>
                  <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-4">
                    {isAr ? 'المميزات الرئيسية' : 'Key Features'}
                  </h3>
                  <ul className="space-y-3">
                    {(isAr ? product.features_ar : product.features_en)?.map((feat, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-600 font-bold">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-[10px]">
                          <i className="fas fa-check"></i>
                        </div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="mt-auto flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onContact(product)}
                className="flex-1 bg-primary text-white py-5 rounded-2xl font-black shadow-xl hover:bg-secondary transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <i className="fas fa-file-invoice"></i>
                {isAr ? 'طلب عرض سعر لهذا المنتج' : 'Request Quote for this product'}
              </button>
              
              <a 
                href={`tel:${isAr ? '+966532425777' : '+966532425777'}`}
                className="px-8 bg-gray-100 text-primary py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-gray-200 transition-all"
              >
                <i className="fas fa-headset"></i>
                {isAr ? 'استشارة فنية' : 'Technical Advice'}
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
