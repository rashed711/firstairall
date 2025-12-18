
import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { APP_CONFIG } from '../constants';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  activeTab: string;
  onNavigate: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, activeTab, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isAr = lang === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', labelAr: 'الرئيسية', labelEn: 'Home', icon: 'fa-home' },
    { id: 'about', labelAr: 'من نحن', labelEn: 'About Us', icon: 'fa-info-circle' },
    { id: 'services', labelAr: 'خدماتنا', labelEn: 'Services', icon: 'fa-concierge-bell' },
    { id: 'products', labelAr: 'منتجاتنا', labelEn: 'Products', icon: 'fa-boxes' },
    { id: 'articles', labelAr: 'المدونة', labelEn: 'Blog', icon: 'fa-newspaper' },
    { id: 'contact', labelAr: 'اتصل بنا', labelEn: 'Contact', icon: 'fa-envelope' },
  ];

  const handleNavClick = (tab: string) => {
    onNavigate(tab);
    setIsMobileMenuOpen(false);
  };
  
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        scrolled 
          ? 'bg-primary/95 backdrop-blur-xl shadow-2xl h-16 md:h-20 border-b border-white/10' 
          : 'bg-primary/80 backdrop-blur-md h-20 md:h-24 border-b border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer group z-50 transition-transform duration-300 hover:scale-105" 
              onClick={() => handleNavClick('home')}
            >
              <div className="relative w-24 h-10 md:w-36 md:h-14 bg-white rounded-xl flex items-center justify-center shadow-lg p-1.5 overflow-hidden">
                 <img src={APP_CONFIG.logo} alt="Logo" className="w-full h-full object-contain relative z-10" />
              </div>
              <div className="hidden lg:flex flex-col items-start justify-center ml-4 mr-4 text-white">
                  <span className="font-black text-xl leading-none">{isAr ? 'فرست اير' : 'First Air'}</span>
                  <span className="text-[10px] font-black text-tertiary tracking-[0.2em] mt-1 uppercase">{isAr ? 'للمقاولات' : 'Contracting'}</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeTab === link.id;
                return (
                  <button 
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`relative px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                      isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span className={`absolute inset-0 bg-white/10 rounded-xl transition-all ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-75 group-hover:opacity-100'}`}></span>
                    <span className="relative z-10 flex items-center gap-2">
                       <i className={`fas ${link.icon} text-xs ${isActive ? 'text-tertiary' : 'text-gray-500'}`}></i>
                       {isAr ? link.labelAr : link.labelEn}
                    </span>
                  </button>
                );
              })}
              <div className="w-px h-8 bg-white/10 mx-2"></div>
              <button
                onClick={() => setLang(isAr ? 'en' : 'ar')}
                className="px-4 py-2 rounded-full border border-white/20 text-white text-xs font-black hover:bg-white hover:text-primary transition-all uppercase"
              >
                {isAr ? 'English' : 'عربي'}
              </button>
              <button onClick={() => handleNavClick('admin')} className="ml-2 text-white/50 hover:text-tertiary transition-colors"><i className="fas fa-lock"></i></button>
            </div>
            
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(true)} className="text-white text-2xl p-2"><i className="fas fa-bars"></i></button>
            </div>
          </div>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 bg-black/90 z-[70] transition-opacity duration-500 backdrop-blur-sm md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div 
        className={`fixed inset-y-0 ${isAr ? 'left-0' : 'right-0'} z-[80] w-[80%] bg-[#0c1a33] shadow-2xl transform transition-transform duration-500 md:hidden flex flex-col ${
            isMobileMenuOpen ? 'translate-x-0' : (isAr ? '-translate-x-full' : 'translate-x-full')
        }`}
      >
        <div className="p-8 border-b border-white/5 flex justify-between items-center">
            <div className="w-32 h-14 bg-white rounded-xl flex items-center justify-center p-2"><img src={APP_CONFIG.logo} alt="" className="w-full h-full object-contain" /></div>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white text-2xl"><i className="fas fa-times"></i></button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-2">
            {navLinks.map(link => (
                <button
                   key={link.id}
                   onClick={() => handleNavClick(link.id)}
                   className={`w-full flex items-center gap-4 px-6 py-5 rounded-2xl text-lg font-black transition-all ${
                      activeTab === link.id ? 'bg-tertiary text-white shadow-xl shadow-tertiary/20' : 'text-gray-400 hover:bg-white/5'
                   }`}
                >
                   <i className={`fas ${link.icon} w-8`}></i> {isAr ? link.labelAr : link.labelEn}
                </button>
            ))}
        </div>
        <div className="p-8 border-t border-white/5 space-y-4">
            <button onClick={() => { setLang(isAr ? 'en' : 'ar'); setIsMobileMenuOpen(false); }} className="w-full py-4 bg-white/5 text-white rounded-2xl font-black border border-white/10">{isAr ? 'English Version' : 'النسخة العربية'}</button>
            <button onClick={() => handleNavClick('admin')} className="w-full text-center text-gray-500 text-xs font-bold uppercase tracking-widest"><i className="fas fa-lock mr-2"></i> Area restricted to admins</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
