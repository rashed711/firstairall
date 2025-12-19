
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', labelAr: 'الرئيسية', labelEn: 'Home', icon: 'fa-home' },
    { id: 'about', labelAr: 'من نحن', labelEn: 'About', icon: 'fa-info-circle' },
    { id: 'services', labelAr: 'خدماتنا', labelEn: 'Services', icon: 'fa-cogs' },
    { id: 'products', labelAr: 'منتجاتنا', labelEn: 'Products', icon: 'fa-shopping-cart' },
    { id: 'contact', labelAr: 'اتصل بنا', labelEn: 'Contact', icon: 'fa-envelope' },
  ];

  const handleNavClick = (tab: string) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-primary/95 backdrop-blur-md shadow-lg h-16 md:h-20' 
          : 'bg-transparent h-20 md:h-24'
      }`}>
        <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl p-2 shadow-lg group-hover:scale-105 transition-transform">
              <img src={APP_CONFIG.logo} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-black text-lg md:text-xl leading-none">
                {isAr ? APP_CONFIG.siteName.ar : APP_CONFIG.siteName.en}
              </div>
              <div className="text-tertiary font-bold text-[10px] tracking-widest mt-1 uppercase">
                Electromechanical
              </div>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-2 text-sm font-bold transition-all relative group ${
                  activeTab === link.id ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                {isAr ? link.labelAr : link.labelEn}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-tertiary transition-all duration-300 ${
                  activeTab === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
            
            <div className="w-px h-6 bg-white/20 mx-2"></div>

            <button
              onClick={() => setLang(isAr ? 'en' : 'ar')}
              className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-xs font-bold transition-all border border-white/20"
            >
              {isAr ? 'EN' : 'AR'}
            </button>

            <button 
              onClick={() => handleNavClick('backend')}
              className="bg-tertiary text-white px-5 py-2 rounded-xl text-xs font-black shadow-lg hover:bg-red-600 transition-all active:scale-95"
            >
              <i className="fas fa-terminal mr-2 ml-2"></i>
              {isAr ? 'المطور' : 'API'}
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-[60] transition-all duration-500 ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className={`absolute top-0 bottom-0 ${isAr ? 'left-0' : 'right-0'} w-4/5 max-w-xs bg-primary shadow-2xl transition-transform duration-500 ${
          isMobileMenuOpen ? 'translate-x-0' : (isAr ? '-translate-x-full' : 'translate-x-full')
        }`}>
          <div className="p-8 border-b border-white/5 flex justify-between items-center">
            <img src={APP_CONFIG.logo} className="h-10 w-auto bg-white p-1 rounded-md" alt="Logo" />
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white"><i className="fas fa-times"></i></button>
          </div>
          <div className="p-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-start p-4 rounded-xl flex items-center gap-4 transition-all ${
                  activeTab === link.id ? 'bg-tertiary text-white' : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                <i className={`fas ${link.icon}`}></i>
                <span className="font-bold">{isAr ? link.labelAr : link.labelEn}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="h-20 bg-primary"></div>
    </>
  );
};

export default Navbar;
