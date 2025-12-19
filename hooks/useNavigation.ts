
import { useState, useEffect, useCallback } from 'react';
import { Page, Service, Article, Product } from '../types';
import { mockServices, mockArticles, mockProducts } from '../data/mockData';

export const useNavigation = () => {
  const getStateFromPathname = (): { tab: Page; item: any } => {
    if (typeof window === 'undefined') return { tab: 'home', item: null };

    // نستخدم pathname بدلاً من hash
    const path = window.location.pathname;
    const segments = path.split('/').filter(Boolean);

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
  };

  const initialState = getStateFromPathname();
  const [activeTab, setActiveTab] = useState<Page>(initialState.tab);
  const [selectedService, setSelectedService] = useState<Service | null>(initialState.tab === 'service' ? initialState.item : null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(initialState.tab === 'article' ? initialState.item : null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(initialState.tab === 'product' ? initialState.item : null);
  
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(true);

  // الاستماع لتغييرات المسار عند الرجوع أو التقدم في المتصفح
  useEffect(() => {
    const handlePopState = () => {
      const state = getStateFromPathname();
      setActiveTab(state.tab);
      if (state.tab === 'service') setSelectedService(state.item);
      if (state.tab === 'article') setSelectedArticle(state.item);
      if (state.tab === 'product') setSelectedProduct(state.item);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((tab: string, item?: any) => {
    const targetTab = tab as Page;
    setIsLoading(true);
    setShowContent(false);

    let newPath = targetTab === 'home' ? '/' : `/${targetTab}`;
    if (item && (targetTab === 'service' || targetTab === 'article' || targetTab === 'product')) {
        newPath = `/${targetTab}/${item.id}`;
    }

    // تحديث الرابط بدون # باستخدام History API
    window.history.pushState({}, '', newPath);

    setTimeout(() => {
        setActiveTab(targetTab);
        if (targetTab === 'article') setSelectedArticle(item);
        else if (targetTab === 'service') setSelectedService(item);
        else if (targetTab === 'product') setSelectedProduct(item);
        else {
            setSelectedArticle(null);
            setSelectedService(null);
            setSelectedProduct(null);
        }
        window.scrollTo(0, 0);
        setTimeout(() => {
            setIsLoading(false);
            setShowContent(true);
        }, 100);
    }, 400);
  }, []);

  return { activeTab, selectedService, selectedArticle, selectedProduct, isLoading, showContent, navigate };
};
