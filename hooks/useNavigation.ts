
import { useState, useEffect, useCallback } from 'react';
import { Page, Service, Article } from '../types';
import { mockServices, mockArticles } from '../data/mockData';

export const useNavigation = () => {
  const getInitialStateFromPath = (): { tab: Page; service: Service | null; article: Article | null } => {
    if (typeof window === 'undefined') return { tab: 'home', service: null, article: null };

    const path = window.location.pathname;
    const segments = path.split('/').filter(Boolean);

    // 1. Check for Service Detail (e.g., /service/1)
    if (segments[0] === 'service' && segments[1]) {
        const id = parseInt(segments[1]);
        const service = mockServices.find(s => s.id === id);
        if (service) return { tab: 'service', service: service, article: null };
    }

    // 2. Check for Article Detail (e.g., /article/1)
    if (segments[0] === 'article' && segments[1]) {
        const id = parseInt(segments[1]);
        const article = mockArticles.find(a => a.id === id);
        if (article) return { tab: 'article', service: null, article: article };
    }

    const validPages: Page[] = ['about', 'services', 'products', 'contact', 'articles', 'backend', 'admin', 'home'];
    const pageSegment = segments[0] as Page;
    
    if (validPages.includes(pageSegment)) {
        return { tab: pageSegment, service: null, article: null };
    }

    return { tab: 'home', service: null, article: null };
  };

  const initialState = getInitialStateFromPath();

  const [activeTab, setActiveTab] = useState<Page>(initialState.tab);
  const [selectedService, setSelectedService] = useState<Service | null>(initialState.service);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(initialState.article);
  
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const handlePopState = () => {
      const newState = getInitialStateFromPath();
      setIsLoading(true);
      setShowContent(false);

      setTimeout(() => {
          setActiveTab(newState.tab);
          setSelectedService(newState.service);
          setSelectedArticle(newState.article);
          window.scrollTo(0, 0);
          setIsLoading(false);
          setShowContent(true);
      }, 300);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((tab: string, item?: Article | Service | null) => {
    const targetTab = tab as Page;
    if (targetTab === activeTab && !item) return;

    setIsLoading(true);
    setShowContent(false);

    let newPath = '/';
    if (targetTab === 'home') newPath = '/';
    else if (targetTab === 'service' && item) newPath = `/service/${item.id}`;
    else if (targetTab === 'article' && item) newPath = `/article/${item.id}`;
    else newPath = `/${targetTab}`;

    // Push state to browser history without hash
    window.history.pushState({}, '', newPath);

    setTimeout(() => {
        setActiveTab(targetTab);
        if (targetTab === 'article') setSelectedArticle(item as Article);
        else if (targetTab === 'service') setSelectedService(item as Service);
        else {
            setSelectedArticle(null);
            setSelectedService(null);
        }
        window.scrollTo(0, 0);
        setTimeout(() => {
            setIsLoading(false);
            setShowContent(true);
        }, 300);
    }, 600);
  }, [activeTab]);

  return {
    activeTab,
    selectedService,
    selectedArticle,
    isLoading,
    showContent,
    navigate
  };
};
