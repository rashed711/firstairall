
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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', labelAr: 'الرئيسية', labelEn: 'Home', icon: 'fa-home' },
    { id: 'about', labelAr: 'من نحن', labelEn: 'About Us', icon: 'fa-info-circle' },
    { id: 'services', labelAr: 'خدماتنا', labelEn: 'Services', icon: 'fa-concierge-bell' },
    { id: 'products', labelAr: 'منتجاتنا', labelEn: 'Products', icon: 'fa-boxes' },
    { id: 'contact', labelAr: 'اتصل بنا', labelEn: 'Contact', icon: 'fa-envelope' },
  ];

  const handleNavClick = (tab: string) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };
  
  // Lock body scroll when menu is open
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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-primary/95 backdrop-blur-xl shadow-2xl h-16 md:h-20 border-b border-white/10' 
          : 'bg-primary/80 backdrop-blur-md h-20 md:h-24 border-b border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Brand Logo Section */}
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer group z-50 transition-transform duration-300 hover:scale-105" 
              onClick={() => handleNavClick('home')}
            >
              <div className="relative w-24 h-10 sm:w-28 sm:h-12 md:w-36 md:h-14 bg-white rounded-xl flex items-center justify-center shadow-lg p-1.5 overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
                 <img src={APP_CONFIG.logo} alt="Logo" className="w-full h-full object-contain relative z-10" />
              </div>
              
              <div className="hidden lg:flex flex-col items-start justify-center ml-4 mr-4">
                  <span className="font-black text-lg md:text-xl tracking-tight text-white leading-none">
                    {isAr ? 'فرست اير' : 'First Air'}
                  </span>
                  <span className="text-[9px] md:text-[11px] font-black text-tertiary tracking-[0.2em] mt-1 uppercase">
                    {isAr ? 'للمقاولات' : 'Contracting'}
                  </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isActive = activeTab === link.id;
                return (
                  <button 
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`relative px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 overflow-hidden group ${
                      isActive 
                        ? 'text-white' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span className={`absolute inset-0 bg-white/10 transition-transform duration-500 ease-out ${isActive ? 'scale-100 opacity-100' : 'scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100'}`}></span>
                    
                    <span className="flex items-center gap-2 relative z-10">
                       <i className={`fas ${link.icon} text-xs transition-colors duration-300 ${isActive ? 'text-tertiary scale-110' : 'text-gray-400 group-hover:text-tertiary group-hover:scale-110'}`}></i>
                       {isAr ? link.labelAr : link.labelEn}
                    </span>

                    <span className={`absolute bottom-1 left-4 right-4 h-0.5 bg-tertiary rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(230,57,70,0.8)] ${isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-75'}`}></span>
                  </button>
                );
              })}

              <div className="w-px h-8 bg-white/10 mx-2"></div>

              {/* Improved Language Toggle Button */}
              <button
                onClick={() => setLang(isAr ? 'en' : 'ar')}
                className="group relative flex items-center gap-3 px-5 py-2.5 rounded-full overflow-hidden transition-all duration-500 bg-white/5 border border-white/10 hover:bg-white hover:border-white shadow-lg active:scale-95"
              >
                {/* Hover Background Mask */}
                <span className="absolute inset-0 bg-tertiary/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                
                <div className="relative z-10 flex items-center justify-center">
                  <i className={`fas fa-globe text-sm transition-all duration-700 group-hover:rotate-[360deg] ${isAr ? 'text-accent' : 'text-tertiary'} group-hover:text-primary`}></i>
                </div>
                
                <span className="relative z-10 text-[11px] font-black uppercase tracking-widest transition-colors duration-300 text-white group-hover:text-primary">
                  {isAr ? 'English' : 'عربي'}
                </span>
                
                {/* Status Dot */}
                <span className={`relative z-10 w-1.5 h-1.5 rounded-full animate-pulse group-hover:animate-none ${isAr ? 'bg-accent' : 'bg-tertiary'} group-hover:bg-primary`}></span>
              </button>

              <button 
                onClick={() => handleNavClick('backend')}
                className={`ml-2 relative px-5 py-2 rounded-xl text-xs font-black border-2 border-tertiary text-white bg-tertiary/10 hover:bg-tertiary hover:shadow-[0_0_20px_rgba(230,57,70,0.4)] transition-all duration-300 group overflow-hidden`}
              >
                <span className="relative z-10 flex items-center gap-2">
                   <i className="fas fa-code group-hover:rotate-12 transition-transform"></i>
                   {isAr ? 'المطور' : 'Dev'}
                </span>
              </button>
            </div>
            
            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden flex items-center gap-3 z-50">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-tertiary transition-all"
                aria-label="Open menu"
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-20 md:h-24 bg-primary"></div>

      {/* Mobile Sidebar Menu */}
      <div 
        className={`fixed inset-0 bg-black/80 z-[60] transition-opacity duration-500 backdrop-blur-sm md:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div 
        className={`fixed inset-y-0 h-full ${isAr ? 'left-0' : 'right-0'} z-[70] w-[85%] max-w-[320px] bg-primary shadow-[0_0_50px_rgba(0,0,0,0.5)] transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) md:hidden flex flex-col ${
            isMobileMenuOpen ? 'translate-x-0' : (isAr ? '-translate-x-full' : 'translate-x-full')
        }`}
      >
        <div className="p-8 flex-shrink-0 flex items-center justify-between border-b border-white/5 bg-black/10">
           <div className="relative w-32 h-14 bg-white rounded-xl flex items-center justify-center p-2 shadow-xl">
                <img src={APP_CONFIG.logo} alt="Logo" className="w-full h-full object-contain" />
           </div>
           <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-tertiary transition-all"
           >
              <i className="fas fa-times"></i>
           </button>
        </div>

        <div className="flex-1 py-8 px-6 space-y-3 overflow-y-auto">
           {navLinks.map(link => {
              const isActive = activeTab === link.id;
              return (
                <button
                   key={link.id}
                   onClick={() => handleNavClick(link.id)}
                   className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group relative overflow-hidden ${
                      isActive 
                      ? 'bg-tertiary text-white font-bold shadow-lg shadow-tertiary/20' 
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                   }`}
                >
                   <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center transition-colors ${
                      isActive ? 'bg-white/20' : 'bg-white/5 group-hover:bg-white/10'
                   }`}>
                     <i className={`fas ${link.icon} text-base`}></i>
                   </div>
                   <span className="text-lg font-bold">{isAr ? link.labelAr : link.labelEn}</span>
                   {isActive && <div className="absolute right-4 w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>}
                </button>
              );
           })}
        </div>

        <div className="p-8 border-t border-white/5 bg-black/10 flex-shrink-0 space-y-4">
           {/* Improved Mobile Language Button */}
           <button
              onClick={() => {
                  setLang(isAr ? 'en' : 'ar');
                  setIsMobileMenuOpen(false);
              }}
              className="w-full group flex items-center justify-center gap-3 bg-white/5 hover:bg-white hover:text-primary py-4 rounded-2xl text-white font-black transition-all duration-300 border border-white/10 shadow-lg"
           >
              <i className={`fas fa-globe text-lg transition-transform duration-700 group-hover:rotate-180 ${isAr ? 'text-accent' : 'text-tertiary'} group-hover:text-primary`}></i>
              <span>{isAr ? 'English Version' : 'النسخة العربية'}</span>
           </button>
           
           <p className="text-center text-[10px] text-gray-500 uppercase tracking-widest font-bold">
               First Air Contracting &copy; {new Date().getFullYear()}
           </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
