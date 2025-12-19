
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
  // --- Enhanced Hash Parsing Logic ---
  const getInitialStateFromHash = (): { tab: Page; service: Service | null; article: Article | null } => {
    if (typeof window === 'undefined') return { tab: 'home', service: null, article: null };

    // Get hash and remove the '#' character
    const hash = window.location.hash.replace('#', '');
    const segments = hash.split('/').filter(Boolean);

    // 1. Check for Service Detail (e.g., #service/1)
    if (segments[0] === 'service' && segments[1]) {
        const id = parseInt(segments[1]);
        const service = mockServices.find(s => s.id === id);
        if (service) return { tab: 'service', service: service, article: null };
    }

    // 2. Check for Article Detail (e.g., #article/1)
    if (segments[0] === 'article' && segments[1]) {
        const id = parseInt(segments[1]);
        const article = mockArticles.find(a => a.id === id);
        if (article) return { tab: 'article', service: null, article: article };
    }

    // 3. Check for Standard Pages
    const validPages: Page[] = ['about', 'services', 'products', 'contact', 'articles', 'backend', 'home'];
    const pageSegment = segments[0] as Page;
    
    if (validPages.includes(pageSegment)) {
        return { tab: pageSegment, service: null, article: null };
    }

    return { tab: 'home', service: null, article: null };
  };

  const initialState = getInitialStateFromHash();

  const [activeTab, setActiveTab] = useState<Page>(initialState.tab);
  const [selectedService, setSelectedService] = useState<Service | null>(initialState.service);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(initialState.article);
  
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(true);

  // Handle Browser Back/Forward via HashChange
  useEffect(() => {
    const handleHashChange = () => {
      const newState = getInitialStateFromHash();
      
      // Only trigger animation if state actually changed
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

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = useCallback((tab: string, item?: Article | Service | null) => {
    const targetTab = tab as Page;

    // Prevent redundant navigation
    if (targetTab === activeTab && !item) return;

    setIsLoading(true);
    setShowContent(false);

    // Construct Hash String
    let newHash = '#';
    if (targetTab === 'home') newHash = '#home';
    else if (targetTab === 'service' && item) newHash = `#service/${item.id}`;
    else if (targetTab === 'article' && item) newHash = `#article/${item.id}`;
    else newHash = `#${targetTab}`;

    // Update the hash - this triggers hashchange event
    window.location.hash = newHash;

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
