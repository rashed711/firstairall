
import { useState, useEffect, useMemo } from 'react';
import Layout from './components/Layout';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import Portfolio from './components/Portfolio';
import ArticleCard from './components/ArticleCard';
import ArticleDetail from './components/ArticleDetail';
import ServiceDetail from './components/ServiceDetail';
import ProductDetail from './components/ProductDetail';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ArticlesPage from './components/ArticlesPage';
import ContactPage from './components/ContactPage';
import ProductsPage from './components/ProductsPage';
import ProjectsPage from './components/ProjectsPage';
import ScrollReveal from './components/ScrollReveal';
import { useNavigation } from './hooks/useNavigation';
import { mockSettings, mockServices, mockArticles, mockProducts, mockCategories, mockMethodology } from './data/mockData';
import { Language, Article, Service, Product, Settings, Category, MethodologyItem } from './types';

function App() {
  const [lang, setLang] = useState<Language>('en');
  const isAr = lang === 'ar';
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // States with Persistence
  const [services, setServices] = useState<Service[]>(() => JSON.parse(localStorage.getItem('fa_services') || JSON.stringify(mockServices)));
  const [products, setProducts] = useState<Product[]>(() => JSON.parse(localStorage.getItem('fa_products') || JSON.stringify(mockProducts)));
  const [articles, setArticles] = useState<Article[]>(() => JSON.parse(localStorage.getItem('fa_articles') || JSON.stringify(mockArticles)));
  const [categories, setCategories] = useState<Category[]>(() => JSON.parse(localStorage.getItem('fa_categories') || JSON.stringify(mockCategories)));
  const [methodology, setMethodology] = useState<MethodologyItem[]>(() => JSON.parse(localStorage.getItem('fa_methodology') || JSON.stringify(mockMethodology)));
  const [settings, setSettings] = useState<Settings>(() => JSON.parse(localStorage.getItem('fa_settings') || JSON.stringify(mockSettings)));

  useEffect(() => {
    localStorage.setItem('fa_services', JSON.stringify(services));
    localStorage.setItem('fa_products', JSON.stringify(products));
    localStorage.setItem('fa_articles', JSON.stringify(articles));
    localStorage.setItem('fa_categories', JSON.stringify(categories));
    localStorage.setItem('fa_methodology', JSON.stringify(methodology));
    localStorage.setItem('fa_settings', JSON.stringify(settings));
  }, [services, products, articles, categories, methodology, settings]);

  const { activeTab, selectedService, selectedArticle, selectedProduct, isLoading, showContent, navigate } = useNavigation();

  // Sorting Logic: Newest First
  const sortedArticles = useMemo(() => [...articles].sort((a, b) => b.id - a.id), [articles]);
  const sortedMethodology = useMemo(() => [...methodology].sort((a, b) => b.id - a.id), [methodology]);
  const sortedProducts = useMemo(() => [...products].sort((a, b) => b.id - a.id), [products]);

  useEffect(() => {
    if (activeTab === 'admin' && !isAuthenticated) navigate('admin-login');
  }, [activeTab, isAuthenticated, navigate]);

  const renderContent = () => {
    const cls = `transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`;

    switch (activeTab) {
      case 'admin-login': return <AdminLogin lang={lang} onLogin={(s) => { if(s){setIsAuthenticated(true); navigate('admin');} }} />;
      case 'admin': return <AdminDashboard lang={lang} services={services} setServices={setServices} products={products} setProducts={setProducts} articles={articles} setArticles={setArticles} categories={categories} setCategories={setCategories} methodology={methodology} setMethodology={setMethodology} settings={settings} setSettings={setSettings} />;
      case 'products': return <div className={cls}><ProductsPage products={sortedProducts} categories={categories} lang={lang} onProductClick={(p) => navigate('product', p)} /></div>;
      case 'product': return selectedProduct ? <ProductDetail product={selectedProduct} categories={categories} lang={lang} onBack={() => navigate('products')} onContact={() => navigate('contact')} /> : <div />;
      case 'services': return <div className={cls}><ServicesPage services={services} lang={lang} onServiceClick={(s) => navigate('service', s)} /></div>;
      case 'service': return selectedService ? <ServiceDetail service={selectedService} lang={lang} onBack={() => navigate('services')} onContact={() => navigate('contact')} /> : <div />;
      case 'articles': return <div className={cls}><ArticlesPage articles={sortedArticles} lang={lang} onArticleClick={(a) => navigate('article', a)} /></div>;
      case 'article': return selectedArticle ? <ArticleDetail article={selectedArticle} lang={lang} onBack={() => navigate('articles')} /> : <div />;
      case 'projects': return <div className={cls}><ProjectsPage methodology={sortedMethodology} lang={lang} /></div>;
      case 'contact': return <div className={cls}><ContactPage lang={lang} settings={settings} /></div>;
      case 'about': return <div className={cls}><AboutPage lang={lang} settings={settings} /></div>;
      case 'home': default:
        return (
          <div className={cls}>
            <Hero lang={lang} settings={settings} onNavigate={navigate} />
            
            {/* Services Section */}
            <div className="py-16 md:py-24 bg-white overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 mb-10 md:mb-16 text-center">
                  <ScrollReveal animation="fade-down">
                    <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">{isAr ? 'خدماتنا الهندسية' : 'Our Engineering Services'}</h2>
                    <div className="w-16 md:w-20 h-1 md:h-1.5 bg-tertiary mx-auto rounded-full"></div>
                  </ScrollReveal>
              </div>
              <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                {services.slice(0, 6).map((s, idx) => (
                  <ScrollReveal key={s.id} animation="fade-up" delay={idx * 150}>
                    <ServiceCard service={s} lang={lang} index={0} onClick={() => navigate('service', s)} />
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Projects Section */}
            <Portfolio 
              lang={lang} 
              methodology={sortedMethodology.slice(0, 6)} 
              isHomePage={true}
              onViewAll={() => navigate('projects')}
            />

            {/* Products Section */}
            <div className="py-16 md:py-24 bg-gray-50 overflow-hidden">
               <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-16 gap-6">
                  <ScrollReveal animation="fade-right">
                    <div className="text-center md:text-start">
                      <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tighter">
                        {isAr ? 'أحدث التقنيات الهندسية' : 'Latest Engineering Tech'}
                      </h2>
                      <p className="text-gray-400 mt-2 font-medium">{isAr ? 'استكشف معدات الـ MEP الأكثر تطوراً' : 'Explore cutting-edge MEP equipment'}</p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal animation="fade-left">
                    <button onClick={() => navigate('products')} className="bg-white px-6 md:px-8 py-3 md:py-4 rounded-2xl text-primary font-black shadow-sm border border-gray-100 hover:bg-primary hover:text-white transition-all flex items-center gap-3 text-sm md:text-base">
                      {isAr ? 'كتالوج المنتجات' : 'Products Catalog'} <i className={`fas fa-arrow-${isAr ? 'left' : 'right'}`}></i>
                    </button>
                  </ScrollReveal>
               </div>
               
               <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                  {sortedProducts.slice(0, 4).map((p, idx) => (
                    <ScrollReveal key={p.id} animation="zoom-in" delay={idx * 150}>
                      <div 
                        onClick={() => navigate('product', p)} 
                        className="group bg-white rounded-[2.5rem] p-4 shadow-sm border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 cursor-pointer h-full flex flex-col"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#f8f9fa] flex items-center justify-center p-4 md:p-8">
                            <img 
                                src={p.image} 
                                className="w-full h-full object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-700" 
                            />
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                                <div className="bg-white text-primary w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-2xl scale-50 group-hover:scale-100 transition-transform">
                                    <i className="fas fa-eye"></i>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:p-5 flex flex-col flex-1">
                            <span className="text-[9px] md:text-[10px] font-black text-tertiary bg-tertiary/5 px-2 md:px-3 py-1 rounded-full uppercase tracking-widest w-fit mb-3">
                                {categories.find(c => c.id === p.categoryId)?.[isAr ? 'name_ar' : 'name_en']}
                            </span>
                            <h4 className="font-black text-primary text-lg md:text-xl truncate group-hover:text-tertiary transition-colors">{isAr ? p.title_ar : p.title_en}</h4>
                            <p className="text-[11px] md:text-xs text-gray-400 font-bold mt-2 line-clamp-2 leading-relaxed">
                                {isAr ? p.description_ar : p.description_en}
                            </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
               </div>
            </div>

            {/* Articles Section */}
            <div className="py-16 md:py-24 bg-white overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 mb-10 md:mb-16 text-center">
                  <ScrollReveal animation="fade-down">
                    <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">{isAr ? 'المدونة الهندسية' : 'Engineering Blog'}</h2>
                    <p className="text-gray-500 text-sm md:text-lg">{isAr ? 'ابقَ على اطلاع بأحدث المقالات والنصائح الهندسية' : 'Stay updated with our latest engineering insights'}</p>
                  </ScrollReveal>
              </div>
              <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                {sortedArticles.slice(0, 3).map((a, idx) => (
                  <ScrollReveal key={a.id} animation="fade-up" delay={idx * 200}>
                    <ArticleCard article={a} lang={lang} index={0} onClick={() => navigate('article', a)} />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <LoadingScreen isLoading={isLoading} lang={lang} />
      <Layout lang={lang} setLang={setLang} activeTab={activeTab} onNavigate={navigate}>
        {renderContent()}
      </Layout>
    </>
  );
}

export default App;
