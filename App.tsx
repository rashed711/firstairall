
import { useState } from 'react';
import Layout from './components/Layout';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import Portfolio from './components/Portfolio';
import ArticleCard from './components/ArticleCard';
import ArticleDetail from './components/ArticleDetail';
import ServiceDetail from './components/ServiceDetail';
import BackendViewer from './components/BackendViewer';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ArticlesPage from './components/ArticlesPage';
import ContactPage from './components/ContactPage';
import ProductsPage from './components/ProductsPage';
import ScrollReveal from './components/ScrollReveal';
import { useNavigation } from './hooks/useNavigation';
import { mockSettings, mockServices, mockArticles, mockProducts } from './data/mockData';
import { APP_CONFIG } from './constants';
import { Language, Article, Service } from './types';

function App() {
  // Global Language State
  const [lang, setLang] = useState<Language>('ar');
  const isAr = lang === 'ar';

  // Use Custom Hook for Routing & State Management
  const { 
    activeTab, 
    selectedService, 
    selectedArticle, 
    isLoading, 
    showContent, 
    navigate 
  } = useNavigation();

  // Handle Maintenance Mode
  if (APP_CONFIG.MAINTENANCE_MODE) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-white text-center p-4">
        <i className="fas fa-tools text-6xl text-tertiary mb-6 animate-bounce"></i>
        <h1 className="text-4xl font-bold mb-4">{isAr ? 'الموقع تحت الصيانة' : 'Website Under Maintenance'}</h1>
        <p className="text-gray-300">{isAr ? 'نعود إليكم قريباً بشكل أفضل.' : 'We will be back soon.'}</p>
      </div>
    );
  }

  // Helper Wrappers for Navigation to match component props
  const handleArticleClick = (article: Article) => navigate('article', article);
  const handleServiceClick = (service: Service) => navigate('service', service);
  const handleBack = (target: string) => navigate(target);

  // Content Renderer
  const renderContent = () => {
      const contentClass = `transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`;

      switch (activeTab) {
        case 'about':
            return <div className={contentClass}><AboutPage lang={lang} settings={mockSettings} /></div>;
        case 'services':
            return <div className={contentClass}><ServicesPage services={mockServices} lang={lang} onServiceClick={handleServiceClick} /></div>;
        case 'products':
            return <div className={contentClass}><ProductsPage products={mockProducts} lang={lang} onNavigate={navigate} /></div>;
        case 'contact':
            return <div className={contentClass}><ContactPage lang={lang} settings={mockSettings} /></div>;
        case 'articles':
            return <div className={contentClass}><ArticlesPage articles={mockArticles} lang={lang} onArticleClick={handleArticleClick} /></div>;
        case 'backend':
            return <div className={contentClass}><BackendViewer lang={lang} /></div>;
        case 'article':
            return selectedArticle ? (
                <div className={contentClass}>
                    <ArticleDetail article={selectedArticle} lang={lang} onBack={() => handleBack('articles')} />
                </div>
            ) : <div />;
        case 'service':
            return selectedService ? (
                <div className={contentClass}>
                    <ServiceDetail service={selectedService} lang={lang} onBack={() => handleBack('services')} onContact={() => handleBack('contact')} />
                </div>
            ) : <div />;
        case 'home':
        default:
            return (
                <div className={contentClass}>
                  <Hero lang={lang} settings={mockSettings} onNavigate={navigate} />

                  {/* Services Section */}
                  <div className="py-24 bg-white relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                     <div className="absolute bottom-0 right-0 w-96 h-96 bg-tertiary/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

                    <ScrollReveal animation="fade-up">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
                        <div className="text-center">
                          <h2 className="text-sm text-tertiary font-bold tracking-wide uppercase mb-2 flex items-center justify-center gap-2">
                            <span className="w-8 h-[2px] bg-tertiary inline-block"></span>
                            {isAr ? 'خدماتنا' : 'Our Services'}
                            <span className="w-8 h-[2px] bg-tertiary inline-block"></span>
                          </h2>
                          {/* UPDATED SLOGAN HERE */}
                          <h3 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">
                            {isAr ? 'حلول هندسية متكاملة' : 'Integrated Engineering Solutions'}
                          </h3>
                          <p className="max-w-2xl mx-auto text-gray-500">
                               {isAr ? 'نقدم مجموعة واسعة من الخدمات لتلبية جميع احتياجاتك' : 'We offer a wide range of services to meet all your needs'}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {mockServices.map((service, index) => (
                                <ScrollReveal key={service.id} animation="fade-up" delay={index * 150} className="h-full">
                                    <ServiceCard 
                                        service={service} 
                                        lang={lang} 
                                        index={0} // Index handled by ScrollReveal delay
                                        onClick={handleServiceClick}
                                    />
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                      
                    <div className="text-center mt-12 max-w-7xl mx-auto px-4">
                        <ScrollReveal animation="zoom-in" delay={600}>
                          <button 
                          onClick={() => navigate('services')}
                          className="inline-flex items-center gap-2 text-tertiary font-bold hover:text-primary transition-colors border-b-2 border-tertiary pb-1"
                          >
                              {isAr ? 'عرض جميع الخدمات' : 'View All Services'}
                              <i className={`fas fa-arrow-${isAr ? 'left' : 'right'}`}></i>
                          </button>
                        </ScrollReveal>
                    </div>
                  </div>

                  {/* Portfolio Section */}
                  <Portfolio lang={lang} />

                  {/* Blog Section */}
                  <div className="py-24 bg-light relative overflow-hidden">
                     <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                     <div className="absolute -left-20 top-20 text-[200px] text-gray-200 font-black opacity-20 pointer-events-none select-none">BLOG</div>
                     
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                      <ScrollReveal animation="fade-right">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                            <div className="text-center md:text-start">
                              <h2 className="text-4xl font-extrabold text-primary mb-2">
                              {isAr ? 'أحدث المقالات والأخبار' : 'Latest Articles & News'}
                              </h2>
                              <p className="mt-2 text-lg text-gray-500 max-w-2xl">
                              {isAr ? 'ابق على اطلاع دائم بكل ما يخص قطاع المقاولات والأنظمة الجديدة.' : 'Stay updated with everything related to the contracting sector and new regulations.'}
                              </p>
                            </div>
                            <button 
                              onClick={() => navigate('articles')}
                              className="hidden md:flex items-center gap-2 text-white bg-tertiary px-6 py-3 rounded-full font-bold hover:bg-primary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                {isAr ? 'عرض كل المقالات' : 'View All Articles'} <i className={`fas fa-arrow-${isAr ? 'left' : 'right'}`}></i>
                            </button>
                        </div>
                      </ScrollReveal>
                      
                      <div className="grid gap-8 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
                        {mockArticles.map((article, index) => (
                          <ScrollReveal key={article.id} animation="fade-up" delay={index * 200} className="h-full">
                            <ArticleCard 
                              article={article} 
                              lang={lang} 
                              onClick={handleArticleClick}
                              index={0}
                            />
                          </ScrollReveal>
                        ))}
                      </div>
                      
                       <div className="md:hidden mt-10 text-center">
                          <button 
                             onClick={() => navigate('articles')}
                             className="text-white bg-tertiary px-6 py-3 rounded-full font-bold shadow-lg w-full"
                          >
                              {isAr ? 'عرض كل المقالات' : 'View All Articles'}
                          </button>
                      </div>
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