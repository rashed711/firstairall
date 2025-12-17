
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
  const isAr = lang === 'ar';

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
      <nav className="bg-primary/95 backdrop-blur-md text-white shadow-lg sticky top-0 z-50 border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Brand */}
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer group z-50" 
              onClick={() => handleNavClick('home')}
            >
              {/* LOGO IMAGE - Updated Sizes for better visibility */}
              <div className="w-28 h-12 sm:w-32 sm:h-14 md:w-40 md:h-16 bg-white rounded-lg flex items-center justify-center mr-3 ml-3 transform group-hover:scale-105 transition-all duration-300 shadow-lg p-2">
                 <img src={APP_CONFIG.logo} alt="Logo" className="w-full h-full object-contain" />
              </div>
              
              {/* Brand Text */}
              <div className="hidden sm:flex flex-col items-start justify-center">
                  <span className="font-bold text-lg md:text-xl tracking-wider group-hover:text-white transition-colors duration-300 leading-none">
                    {isAr ? 'فرست اير' : 'First Air'}
                  </span>
                  {/* UPDATED: Contracting text to Red (tertiary) and Bold */}
                  <span className="text-[10px] md:text-xs font-extrabold text-tertiary tracking-[0.15em] mt-1 transition-colors duration-300 uppercase">
                    {isAr ? 'للمقاولات' : 'Contracting'}
                  </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1 lg:gap-6">
              {navLinks.map((link) => (
                <button 
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-2 lg:px-3 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 group ${
                    activeTab === link.id 
                      ? 'text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2 relative z-10">
                     <i className={`fas ${link.icon} text-xs ${activeTab === link.id ? 'text-tertiary' : 'text-gray-400 group-hover:text-tertiary'}`}></i>
                     {isAr ? link.labelAr : link.labelEn}
                  </span>
                  {/* Simple Clean Red Underline for Active State */}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-tertiary transition-all duration-300 ${activeTab === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </button>
              ))}

              <button 
                onClick={() => handleNavClick('backend')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border border-tertiary text-tertiary hover:bg-tertiary hover:text-white transition-all duration-300 transform hover:-translate-y-1 mx-2`}
              >
                <span className="flex items-center gap-1">
                   <i className="fas fa-code"></i>
                   {isAr ? 'المطور' : 'Dev'}
                </span>
              </button>
              
              <div className="border-l border-white/20 h-6 mx-1 opacity-50"></div>

              <button
                onClick={() => setLang(isAr ? 'en' : 'ar')}
                className="flex items-center gap-2 bg-white/5 hover:bg-white hover:text-primary px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 backdrop-blur-sm border border-white/10"
              >
                <i className="fas fa-globe text-accent"></i>
                <span className="uppercase tracking-wider">{isAr ? 'English' : 'عربي'}</span>
              </button>
            </div>
            
            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden flex items-center gap-3 z-50">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-white hover:text-tertiary focus:outline-none transition-colors p-2"
                aria-label="Open menu"
              >
                <i className="fas fa-bars text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu (Drawer) */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div 
        className={`fixed inset-y-0 h-full ${isAr ? 'left-0' : 'right-0'} z-[70] w-[85%] max-w-[300px] bg-primary shadow-2xl transform transition-transform duration-300 cubic-bezier(0.4, 0, 0.2, 1) md:hidden flex flex-col ${
            isMobileMenuOpen ? 'translate-x-0' : (isAr ? '-translate-x-full' : 'translate-x-full')
        }`}
      >
        {/* Sidebar Header */}
        <div className="h-24 flex-shrink-0 flex items-center justify-between px-6 border-b border-white/10 bg-black/20">
           <div className="flex items-center gap-3">
              {/* Mobile Sidebar Logo - Increased size */}
              <div className="w-32 h-14 bg-white rounded-lg flex items-center justify-center p-2 shadow-inner">
                <img src={APP_CONFIG.logo} alt="Logo" className="w-full h-full object-contain" />
              </div>
           </div>
           <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-tertiary hover:text-white transition-all"
              aria-label="Close menu"
           >
              <i className="fas fa-times"></i>
           </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
           {navLinks.map(link => (
              <button
                 key={link.id}
                 onClick={() => handleNavClick(link.id)}
                 className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${
                    activeTab === link.id 
                    ? 'bg-tertiary text-white font-bold shadow-lg translate-x-1' 
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                 }`}
              >
                 <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center transition-colors ${
                    activeTab === link.id ? 'bg-white/20' : 'bg-white/5 group-hover:bg-white/10'
                 }`}>
                   <i className={`fas ${link.icon} text-sm`}></i>
                 </div>
                 <span className="text-base font-medium">{isAr ? link.labelAr : link.labelEn}</span>
              </button>
           ))}
        </div>

        {/* Sidebar Footer */}
        <div className="p-6 border-t border-white/10 bg-black/20 flex-shrink-0">
           <button
              onClick={() => {
                  setLang(isAr ? 'en' : 'ar');
                  setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white hover:text-primary py-3 rounded-xl text-white font-bold transition-all duration-300 border border-white/10"
           >
              <i className="fas fa-globe text-accent"></i>
              <span>{isAr ? 'English' : 'عربي'}</span>
           </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
