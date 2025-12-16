
import { useState, useEffect, useCallback } from 'react';
import { Page, Service, Article } from '../types';
import { mockServices, mockArticles } from '../data/mockData';

interface NavigationState {
  activeTab: Page;
  selectedService: Service | null;
  selectedArticle: Article | null;
  isLoading: boolean;
  showContent: boolean;
}

export const useNavigation = () => {
  // --- Enhanced URL Parsing Logic ---
  const getInitialStateFromUrl = (): { tab: Page; service: Service | null; article: Article | null } => {
    if (typeof window === 'undefined') return { tab: 'home', service: null, article: null };

    const path = window.location.pathname;
    const segments = path.split('/').filter(Boolean);

    // 1. Check for Service Detail (e.g., /service/1)
    const serviceIndex = segments.indexOf('service');
    if (serviceIndex !== -1 && segments[serviceIndex + 1]) {
        const id = parseInt(segments[serviceIndex + 1]);
        const service = mockServices.find(s => s.id === id);
        if (service) return { tab: 'service', service: service, article: null };
    }

    // 2. Check for Article Detail (e.g., /article/1)
    const articleIndex = segments.indexOf('article');
    if (articleIndex !== -1 && segments[articleIndex + 1]) {
        const id = parseInt(segments[articleIndex + 1]);
        const article = mockArticles.find(a => a.id === id);
        if (article) return { tab: 'article', service: null, article: article };
    }

    // 3. Check for Standard Pages
    // Valid pages map
    const validPages: Page[] = ['about', 'services', 'products', 'contact', 'articles', 'backend', 'home'];
    
    // Iterate backwards to find the last valid segment that matches a page
    for (let i = segments.length - 1; i >= 0; i--) {
        const segment = segments[i] as Page;
        if (validPages.includes(segment)) {
            return { tab: segment, service: null, article: null };
        }
    }

    return { tab: 'home', service: null, article: null };
  };

  const initialState = getInitialStateFromUrl();

  const [activeTab, setActiveTab] = useState<Page>(initialState.tab);
  const [selectedService, setSelectedService] = useState<Service | null>(initialState.service);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(initialState.article);
  
  // Transitions
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(true);

  // Handle Browser Back/Forward Buttons
  useEffect(() => {
    const handlePopState = () => {
      const newState = getInitialStateFromUrl();
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

  // Safety Timeout
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        setShowContent(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const navigate = useCallback((tab: string, item?: Article | Service | null) => {
    const targetTab = tab as Page;

    // Prevent reloading same state
    if (targetTab === activeTab && !item) return;
    if (targetTab === 'service' && selectedService?.id === (item as Service)?.id) return;
    if (targetTab === 'article' && selectedArticle?.id === (item as Article)?.id) return;

    setIsLoading(true);
    setShowContent(false);

    // Construct URL
    let newUrl = '/';
    if (targetTab === 'home') newUrl = './';
    else if (targetTab === 'service' && item) newUrl = `./service/${item.id}`;
    else if (targetTab === 'article' && item) newUrl = `./article/${item.id}`;
    else newUrl = `./${targetTab}`;

    try {
        const state = { tab: targetTab, itemId: item?.id };
        window.history.pushState(state, '', newUrl);
    } catch (e) {
        console.log('Navigation updated state only (URL update failed)');
    }

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
  }, [activeTab, selectedService, selectedArticle]);

  return {
    activeTab,
    selectedService,
    selectedArticle,
    isLoading,
    showContent,
    navigate
  };
};