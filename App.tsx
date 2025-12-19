
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

  // Sorting Logic: Newest First (Descending by ID)
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
            <div className="py-24 bg-white overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
                  <ScrollReveal animation="fade-down">
                    <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">{isAr ? 'خدماتنا الهندسية' : 'Our Engineering Services'}</h2>
                    <div className="w-20 h-1.5 bg-tertiary mx-auto rounded-full"></div>
                  </ScrollReveal>
              </div>
              <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
            <div className="py-24 bg-gray-50 overflow-hidden">
               <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
                  <ScrollReveal animation="fade-right">
                    <div className="text-center md:text-start">
                      <h2 className="text-3xl md:text-4xl font-black text-primary">{isAr ? 'أحدث المنتجات' : 'Latest Products'}</h2>
                      <p className="text-gray-400 mt-2">{isAr ? 'تصفح التكنولوجيا المتوفرة لدينا' : 'Browse our latest available tech'}</p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal animation="fade-left">
                    <button onClick={() => navigate('products')} className="bg-white px-8 py-3 rounded-full text-tertiary font-bold shadow-sm border border-gray-100 hover:bg-tertiary hover:text-white transition-all flex items-center gap-3">
                      {isAr ? 'مشاهدة الكل' : 'View All'} <i className={`fas fa-arrow-${isAr ? 'left' : 'right'}`}></i>
                    </button>
                  </ScrollReveal>
               </div>
               <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
                  {sortedProducts.slice(0, 4).map((p, idx) => (
                    <ScrollReveal key={p.id} animation="zoom-in" delay={idx * 150}>
                      <div onClick={() => navigate('product', p)} className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group h-full flex flex-col">
                        <div className="aspect-square overflow-hidden rounded-2xl mb-6 bg-gray-50 p-6">
                            <img src={p.image} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <h4 className="font-bold text-primary text-lg truncate mb-1">{isAr ? p.title_ar : p.title_en}</h4>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{categories.find(c => c.id === p.categoryId)?.[isAr ? 'name_ar' : 'name_en']}</p>
                      </div>
                    </ScrollReveal>
                  ))}
               </div>
            </div>

            {/* Articles Section */}
            <div className="py-24 bg-white overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
                  <ScrollReveal animation="fade-down">
                    <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">{isAr ? 'المدونة الهندسية' : 'Engineering Blog'}</h2>
                    <p className="text-gray-500 text-lg">{isAr ? 'ابقَ على اطلاع بأحدث المقالات والنصائح الهندسية' : 'Stay updated with our latest engineering insights'}</p>
                  </ScrollReveal>
              </div>
              <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
                {sortedArticles.slice(0, 3).map((a, idx) => (
                  <ScrollReveal key={a.id} animation="fade-up" delay={idx * 200}>
                    <ArticleCard article={a} lang={lang} index={0} onClick={() => navigate('article', a)} />
                  </ScrollReveal>
                ))}
              </div>
              <ScrollReveal animation="fade-up" delay={500}>
                <div className="mt-16 text-center">
                    <button onClick={() => navigate('articles')} className="bg-primary/5 text-primary px-10 py-4 rounded-full font-black hover:bg-primary hover:text-white transition-all shadow-sm">
                        {isAr ? 'تصفح كافة المقالات' : 'Browse All Articles'}
                    </button>
                </div>
              </ScrollReveal>
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
