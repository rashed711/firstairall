
import React, { useState } from 'react';
import { Language } from '../types';
import { APP_CONFIG } from '../constants';

interface FloatingWhatsAppProps {
  phone?: string; // Optional now as we use APP_CONFIG
  lang: Language;
}

const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isAr = lang === 'ar';
  
  const toggleMenu = () => setIsOpen(!isOpen);

  // Helper to open WhatsApp
  const openWhatsApp = (number: string) => {
    window.open(`https://wa.me/${number}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className={`fixed bottom-8 ${isAr ? 'left-8' : 'right-8'} z-50 flex flex-col items-center gap-4`}>
        
        {/* OPTIONS MENU (Slides up when open) */}
        <div className={`flex flex-col gap-3 transition-all duration-300 transform ${
            isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90 pointer-events-none'
        }`}>
            {/* KSA Option */}
            <button 
                onClick={() => openWhatsApp(APP_CONFIG.contact.phones.ksa)}
                className="flex items-center gap-3 bg-white p-2 pl-3 pr-4 rounded-full shadow-lg border border-gray-100 hover:bg-gray-50 transition-all group min-w-[160px]"
            >
                <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 shadow-sm relative">
                    <img src="https://flagcdn.com/w80/sa.png" alt="KSA" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col items-start">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{isAr ? 'السعودية' : 'KSA Branch'}</span>
                    <span className="text-sm font-bold text-primary group-hover:text-tertiary transition-colors">{isAr ? 'تواصل الآن' : 'Chat Now'}</span>
                </div>
            </button>

            {/* Egypt Option */}
            <button 
                onClick={() => openWhatsApp(APP_CONFIG.contact.phones.egypt)}
                className="flex items-center gap-3 bg-white p-2 pl-3 pr-4 rounded-full shadow-lg border border-gray-100 hover:bg-gray-50 transition-all group min-w-[160px]"
            >
                <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 shadow-sm relative">
                    <img src="https://flagcdn.com/w80/eg.png" alt="Egypt" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col items-start">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{isAr ? 'مصر' : 'Egypt Branch'}</span>
                    <span className="text-sm font-bold text-primary group-hover:text-tertiary transition-colors">{isAr ? 'تواصل الآن' : 'Chat Now'}</span>
                </div>
            </button>
        </div>

        {/* MAIN TOGGLE BUTTON */}
        <div className="flex items-center gap-4">
            {/* Label (Only shows when closed) */}
            <div className={`
                bg-white text-primary px-5 py-2.5 rounded-full shadow-xl 
                font-bold text-sm tracking-wide
                transform transition-all duration-300 ease-out border border-gray-100
                ${isOpen ? 'opacity-0 translate-y-2 pointer-events-none' : 'opacity-100 translate-y-0'}
                hidden md:block
            `}>
                {isAr ? 'تواصل معنا' : 'Contact Us'}
            </div>

            <button 
                onClick={toggleMenu}
                className="relative w-16 h-16 flex items-center justify-center focus:outline-none group"
                aria-label="Toggle Contact Menu"
            >
                {/* Pulse Animation (Only when closed) */}
                {!isOpen && (
                    <>
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-20 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '1s' }}></span>
                    </>
                )}
                
                {/* Main Icon Circle */}
                <div className={`
                    relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl 
                    transform transition-all duration-300 border-[3px] border-white overflow-hidden
                    ${isOpen ? 'bg-tertiary rotate-90' : 'bg-gradient-to-tr from-[#128C7E] to-[#25D366] group-hover:scale-110'}
                `}>
                    {/* Icons Switching */}
                    <i className={`fab fa-whatsapp text-4xl text-white drop-shadow-md absolute transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}></i>
                    <i className={`fas fa-times text-3xl text-white drop-shadow-md absolute transition-all duration-300 ${isOpen ? 'opacity-100 -rotate-90 scale-100' : 'opacity-0 rotate-90 scale-50'}`}></i>
                </div>
            </button>
        </div>
    </div>
  );
};

export default FloatingWhatsApp;
