
import { useState, useEffect, useCallback } from 'react';
import { Page, Service, Article, Product } from '../types';
import { mockServices, mockArticles, mockProducts } from '../data/mockData';

export const useNavigation = () => {
  const getStateFromPathname = useCallback((): { tab: Page; item: any } => {
    if (typeof window === 'undefined') return { tab: 'home', item: null };

    const path = window.location.pathname;
    const segments = path.split('/').filter(Boolean);

    if (segments.length === 0) return { tab: 'home', item: null };

    if (segments[0] === 'service' && segments[1]) {
        const id = parseInt(segments[1]);
        const found = mockServices.find(s => s.id === id);
        return { tab: 'service' as Page, item: found || null };
    }
    if (segments[0] === 'article' && segments[1]) {
        const id = parseInt(segments[1]);
        const found = mockArticles.find(a => a.id === id);
        return { tab: 'article' as Page, item: found || null };
    }
    if (segments[0] === 'product' && segments[1]) {
        const id = parseInt(segments[1]);
        const found = mockProducts.find(p => p.id === id);
        return { tab: 'product' as Page, item: found || null };
    }

    const validPages: Page[] = ['about', 'services', 'products', 'contact', 'articles', 'projects', 'backend', 'home', 'admin', 'admin-login'];
    const page: Page = validPages.includes(segments[0] as Page) ? (segments[0] as Page) : 'home';
    return { tab: page, item: null };
  }, []);

  const initialState = getStateFromPathname();
  const [activeTab, setActiveTab] = useState<Page>(initialState.tab);
  const [selectedService, setSelectedService] = useState<Service | null>(initialState.tab === 'service' ? initialState.item : null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(initialState.tab === 'article' ? initialState.item : null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(initialState.tab === 'product' ? initialState.item : null);
  
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const handlePopState = () => {
      const state = getStateFromPathname();
      setActiveTab(state.tab);
      setSelectedService(state.tab === 'service' ? state.item : null);
      setSelectedArticle(state.tab === 'article' ? state.item : null);
      setSelectedProduct(state.tab === 'product' ? state.item : null);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [getStateFromPathname]);

  const navigate = useCallback((tab: string, item?: any) => {
    const targetTab = tab as Page;
    setIsLoading(true);
    setShowContent(false);

    let newPath = targetTab === 'home' ? '/' : `/${targetTab}`;
    if (item && (targetTab === 'service' || targetTab === 'article' || targetTab === 'product')) {
        newPath = `/${targetTab}/${item.id}`;
    }

    // محاولة تحديث الرابط بهدوء شديد
    // إذا فشلت (بسبب بيئة المعاينة)، سيستمر التطبيق في العمل وتغيير الصفحة داخلياً
    try {
        if (window.location.pathname !== newPath) {
            window.history.pushState({}, '', newPath);
        }
    } catch (e) {
        // تجاهل الخطأ في بيئة التطوير لضمان عدم توقف السكربت
        console.info("Navigation: Internal state updated (URL update suppressed in this environment).");
    }

    setTimeout(() => {
        setActiveTab(targetTab);
        setSelectedArticle(targetTab === 'article' ? item : null);
        setSelectedService(targetTab === 'service' ? item : null);
        setSelectedProduct(targetTab === 'product' ? item : null);
        
        window.scrollTo({ top: 0, behavior: 'instant' });
        
        setTimeout(() => {
            setIsLoading(false);
            setShowContent(true);
        }, 50);
    }, 400);
  }, [getStateFromPathname]);

  return { activeTab, selectedService, selectedArticle, selectedProduct, isLoading, showContent, navigate };
};
