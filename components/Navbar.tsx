
import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { APP_CONFIG } from '../constants';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, activeTab, setActiveTab }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isAr = lang === 'ar';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', labelAr: 'الرئيسية', labelEn: 'Home' },
    { id: 'about', labelAr: 'من نحن', labelEn: 'About' },
    { id: 'services', labelAr: 'خدماتنا', labelEn: 'Services' },
    { id: 'products', labelAr: 'المنتجات', labelEn: 'Products' },
    { id: 'contact', labelAr: 'اتصل بنا', labelEn: 'Contact' },
  ];

  const handleNavClick = (tab: string) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg h-16 md:h-20' : 'bg-transparent h-20 md:h-24'
      }`} aria-label="Main Navigation">
        <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
          
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('home')} role="link" aria-label="First Air Home">
            <div className="w-20 md:w-28 bg-white rounded-lg p-1 shadow-md">
              <img src={APP_CONFIG.logo} alt="First Air Logo" width="112" height="56" className="w-full h-auto" />
            </div>
            <span className="text-white font-bold text-sm md:text-xl hidden sm:block uppercase tracking-tight">
              {isAr ? APP_CONFIG.siteName.ar : APP_CONFIG.siteName.en}
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-4 py-2 text-sm font-bold transition-colors ${
                  activeTab === link.id ? 'text-white bg-white/10 rounded-lg' : 'text-gray-200 hover:text-white'
                }`}
                aria-current={activeTab === link.id ? 'page' : undefined}
              >
                {isAr ? link.labelAr : link.labelEn}
              </button>
            ))}
            
            <div className="w-px h-6 bg-white/20 mx-3"></div>

            <button
              onClick={() => setLang(isAr ? 'en' : 'ar')}
              className="px-4 py-2 bg-white/10 text-white rounded-lg text-xs font-black border border-white/20 hover:bg-white/20 transition-all"
              aria-label={isAr ? "Switch to English" : "التحويل للغة العربية"}
            >
              {isAr ? 'ENGLISH' : 'العربية'}
            </button>
          </div>

          <div className="flex lg:hidden items-center gap-3">
             <button
              onClick={() => setLang(isAr ? 'en' : 'ar')}
              className="text-white text-xs font-bold px-3 py-2 bg-white/10 rounded-lg border border-white/20"
              aria-label="Change Language"
            >
              {isAr ? 'EN' : 'AR'}
            </button>
            <button 
              className="text-white p-2 text-2xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-[60] transition-opacity duration-300 ${isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className={`absolute top-0 bottom-0 ${isAr ? 'left-0' : 'right-0'} w-3/4 max-w-xs bg-primary shadow-2xl transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : (isAr ? '-translate-x-full' : 'translate-x-full')
        }`}>
          <div className="p-6 border-b border-white/10 flex justify-between items-center">
            <img src={APP_CONFIG.logo} width="80" height="40" className="bg-white p-1 rounded" alt="Logo" />
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white text-2xl" aria-label="Close"><i className="fas fa-times"></i></button>
          </div>
          <div className="p-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-start p-4 rounded-xl font-bold transition-all ${
                  activeTab === link.id ? 'bg-tertiary text-white shadow-lg' : 'text-gray-300'
                }`}
              >
                {isAr ? link.labelAr : link.labelEn}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
