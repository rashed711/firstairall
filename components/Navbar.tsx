
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
    { id: 'products', labelAr: 'منتجاتنا', labelEn: 'Products', icon: 'fa-boxes' }, // Added Products
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
      <nav className="bg-primary/95 backdrop-blur-md text-white shadow-lg sticky top-0 z-50 border-b border-secondary transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Brand */}
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer group z-50" 
              onClick={() => handleNavClick('home')}
            >
              {/* LOGO IMAGE */}
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-3 ml-3 transform group-hover:rotate-6 group-hover:scale-105 transition-all duration-300 shadow-lg p-1">
                 <img src={APP_CONFIG.logo} alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-xl sm:text-2xl tracking-wider group-hover:text-tertiary transition-colors duration-300 transform group-hover:translate-x-1">
                {isAr ? 'فرست اير' : 'Al-Rayan'}
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-6 space-x-reverse">
              {navLinks.map((link) => (
                <button 
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                    activeTab === link.id 
                      ? 'text-white after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-tertiary after:animate-pulse' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2">
                     <i className={`fas ${link.icon} text-xs`}></i>
                     {isAr ? link.labelAr : link.labelEn}
                  </span>
                </button>
              ))}

              <button 
                onClick={() => handleNavClick('backend')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border border-tertiary text-tertiary hover:bg-tertiary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-tertiary/50 transform hover:-translate-y-1 ml-2 mr-2`}
              >
                <span className="flex items-center gap-1">
                   <i className="fas fa-code"></i>
                   {isAr ? 'المطور' : 'Dev'}
                </span>
              </button>
              
              <div className="border-l border-secondary h-6 mx-2 opacity-50"></div>

              <button
                onClick={() => setLang(isAr ? 'en' : 'ar')}
                className="flex items-center space-x-2 bg-secondary/50 hover:bg-white hover:text-primary px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 backdrop-blur-sm transform hover:scale-105"
              >
                <i className="fas fa-globe"></i>
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

      {/* Mobile Sidebar Menu (Drawer) - MOVED OUTSIDE NAV TO FIX STACKING CONTEXT ISSUES */}
      
      {/* 1. Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* 2. Drawer Panel */}
      <div 
        className={`fixed inset-y-0 h-full ${isAr ? 'left-0' : 'right-0'} z-[70] w-[85%] max-w-[300px] bg-primary shadow-2xl transform transition-transform duration-300 cubic-bezier(0.4, 0, 0.2, 1) md:hidden flex flex-col ${
            isMobileMenuOpen ? 'translate-x-0' : (isAr ? '-translate-x-full' : 'translate-x-full')
        }`}
      >
        {/* Sidebar Header */}
        <div className="h-20 flex-shrink-0 flex items-center justify-between px-6 border-b border-white/10 bg-black/20">
           <div className="flex items-center gap-3">
              {/* MOBILE LOGO */}
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center p-1">
                <img src={APP_CONFIG.logo} alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-lg text-white tracking-wider">
                {isAr ? 'القائمة' : 'Menu'}
              </span>
           </div>
           <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-red-500 hover:text-white transition-all"
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
                 <span className="text-sm font-medium">{isAr ? link.labelAr : link.labelEn}</span>
                 
                 {/* Active Indicator Dot */}
                 {activeTab === link.id && (
                    <div className={`w-2 h-2 rounded-full bg-white ${isAr ? 'mr-auto' : 'ml-auto'}`}></div>
                 )}
              </button>
           ))}

           <div className="my-4 border-t border-white/10 mx-2"></div>

           <button 
              onClick={() => handleNavClick('backend')}
              className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-yellow-400 hover:bg-yellow-400/10 transition-all group"
           >
              <div className="w-8 h-8 rounded-lg bg-yellow-400/10 flex-shrink-0 flex items-center justify-center group-hover:bg-yellow-400/20">
                 <i className="fas fa-code"></i>
              </div>
              <span className="text-sm font-bold">{isAr ? 'ملفات المبرمج' : 'Developer Files'}</span>
           </button>
        </div>

        {/* Sidebar Footer (Language Switch) */}
        <div className="p-6 border-t border-white/10 bg-black/20 flex-shrink-0">
           <button
              onClick={() => {
                  setLang(isAr ? 'en' : 'ar');
                  setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white hover:text-primary py-3 rounded-xl text-white font-bold transition-all duration-300 border border-white/10"
           >
              <i className="fas fa-globe"></i>
              <span>{isAr ? 'English' : 'عربي'}</span>
           </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;