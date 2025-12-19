
import React, { useState, useMemo } from 'react';
import { Product, Category, Language } from '../types';
import ScrollReveal from './ScrollReveal';

interface ProductsPageProps {
  products: Product[];
  categories: Category[];
  lang: Language;
  onProductClick: (product: Product) => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ products, categories, lang, onProductClick }) => {
  const isAr = lang === 'ar';
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [expandedCats, setExpandedCats] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedCats(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const getChildCategoryIds = (parentId: number, cats: Category[]): number[] => {
    const children = cats.filter(c => c.parentId === parentId);
    let ids = children.map(c => c.id);
    children.forEach(c => {
      ids = [...ids, ...getChildCategoryIds(c.id, cats)];
    });
    return ids;
  };

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchSearch = (isAr ? p.title_ar : p.title_en).toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (isAr ? p.description_ar : p.description_en).toLowerCase().includes(searchTerm.toLowerCase());
      
      let matchCat = true;
      if (selectedCategoryId) {
        const childCatIds = [selectedCategoryId, ...getChildCategoryIds(selectedCategoryId, categories)];
        matchCat = childCatIds.includes(p.categoryId);
      }
      
      return matchSearch && matchCat;
    });
  }, [products, searchTerm, selectedCategoryId, categories, isAr]);

  const renderCategoryTree = (parentId: number | null = null, level = 0) => {
    const items = categories.filter(c => c.parentId === parentId);
    if (items.length === 0) return null;

    return (
      <ul className={`${level > 0 ? (isAr ? 'pr-4 border-r border-gray-100' : 'pl-4 border-l border-gray-100') : ''} mt-1 space-y-1`}>
        {items.map(cat => {
          const hasChildren = categories.some(c => c.parentId === cat.id);
          const isExpanded = expandedCats.includes(cat.id);
          const isSelected = selectedCategoryId === cat.id;

          return (
            <li key={cat.id}>
              <div className="flex items-center group">
                {hasChildren && (
                  <button onClick={() => toggleExpand(cat.id)} className="p-1 text-gray-400 hover:text-primary transition-colors">
                    <i className={`fas fa-chevron-${isExpanded ? 'down' : (isAr ? 'left' : 'right')} text-[10px]`}></i>
                  </button>
                )}
                <button 
                  onClick={() => setSelectedCategoryId(cat.id === selectedCategoryId ? null : cat.id)}
                  className={`flex-1 text-start py-2 px-3 rounded-xl text-sm font-bold transition-all ${
                    isSelected ? 'bg-primary text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {isAr ? cat.name_ar : cat.name_en}
                </button>
              </div>
              {(isExpanded || isSelected) && renderCategoryTree(cat.id, level + 1)}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-tertiary font-black text-xs uppercase tracking-[0.3em] mb-2 block">
              {isAr ? 'كتالوج الحلول الهندسية' : 'Engineering Catalog'}
            </span>
            <h1 className="text-4xl font-black text-primary leading-none">
              {isAr ? 'منتجاتنا' : 'Our Products'}
            </h1>
          </div>
          
          <div className="relative w-full md:w-96">
            <input 
              type="text"
              placeholder={isAr ? 'ابحث عن منتج أو تقنية...' : 'Search for products or tech...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full py-4 ${isAr ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4'} bg-white border-none rounded-2xl shadow-sm focus:ring-2 focus:ring-primary transition-all font-bold placeholder:text-gray-300`}
            />
            <i className={`fas fa-search absolute ${isAr ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 text-gray-300`}></i>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <div className="w-full lg:w-72 shrink-0">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-black text-primary uppercase text-xs tracking-widest">{isAr ? 'التصنيفات' : 'Categories'}</h3>
                {selectedCategoryId && (
                  <button onClick={() => setSelectedCategoryId(null)} className="text-[10px] text-tertiary font-bold hover:underline">
                    {isAr ? 'إعادة تعيين' : 'Reset'}
                  </button>
                )}
              </div>
              <nav className="max-h-[60vh] overflow-y-auto custom-scrollbar">
                {renderCategoryTree()}
              </nav>
            </div>
          </div>

          {/* Product Grid - Updated Styling */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map((product, idx) => (
                  <ScrollReveal key={product.id} animation="fade-up" delay={idx * 50}>
                    <div 
                      onClick={() => onProductClick(product)}
                      className="group bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col h-full"
                    >
                      <div className="relative h-64 bg-[#f8f9fa] flex items-center justify-center p-8 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent"></div>
                        <img 
                          src={product.image} 
                          className="w-full h-full object-contain relative z-10 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2" 
                          alt="" 
                        />
                        <div className="absolute top-4 left-4 z-20">
                            <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-black text-primary shadow-sm">
                                {categories.find(c => c.id === product.categoryId)?.[isAr ? 'name_ar' : 'name_en']}
                            </span>
                        </div>
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30">
                            <span className="bg-white text-primary px-6 py-2 rounded-full font-black text-sm transform scale-50 group-hover:scale-100 transition-transform">
                                {isAr ? 'التفاصيل' : 'Details'}
                            </span>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h4 className="text-xl font-black text-primary mb-3 group-hover:text-tertiary transition-colors leading-tight">
                          {isAr ? product.title_ar : product.title_en}
                        </h4>
                        <p className="text-gray-400 text-sm font-medium line-clamp-2 leading-relaxed mb-6">
                          {isAr ? product.description_ar : product.description_en}
                        </p>
                        <div className="mt-auto flex items-center justify-between pt-5 border-t border-gray-50">
                          <span className="text-primary font-black text-xs uppercase tracking-widest flex items-center gap-2">
                            <i className="fas fa-plus-circle text-tertiary"></i>
                            {isAr ? 'المواصفات' : 'Specs'}
                          </span>
                          <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:rotate-[360deg] transition-all duration-500">
                            <i className={`fas fa-arrow-${isAr ? 'left' : 'right'} text-xs`}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-[3rem] p-20 text-center shadow-sm border border-gray-100">
                <i className="fas fa-box-open text-7xl text-gray-100 mb-6"></i>
                <h3 className="text-2xl font-black text-gray-400">{isAr ? 'لا توجد نتائج' : 'No results found'}</h3>
                <p className="text-gray-300 mt-2 font-bold">{isAr ? 'جرب كلمات بحث أخرى أو أقسام مختلفة' : 'Try different keywords or categories'}</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductsPage;
