
import React, { useState } from 'react';
import { Language } from '../types';
import { APP_CONFIG } from '../constants';

interface FloatingWhatsAppProps {
  lang: Language;
}

// 1. Reusable Sub-Component for the Action Button & Menu
interface ContactFabProps {
  type: 'whatsapp' | 'phone';
  lang: Language;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const ContactFab: React.FC<ContactFabProps> = ({ type, lang, isOpen, onToggle, onClose }) => {
  const isAr = lang === 'ar';
  const isWA = type === 'whatsapp';
  
  // Configuration based on type
  const config = {
    colorClass: isWA ? 'from-[#128C7E] to-[#25D366]' : 'from-primary to-secondary',
    shadowClass: isWA ? 'shadow-[#25D366]/40' : 'shadow-secondary/40',
    iconMain: isWA ? 'fab fa-whatsapp' : 'fas fa-phone-alt',
    actionLabelAr: isWA ? 'تواصل معنا' : 'اتصل بنا',
    actionLabelEn: isWA ? 'Chat Us' : 'Call Us',
    itemActionAr: isWA ? 'محادثة' : 'اتصال',
    itemActionEn: isWA ? 'Chat' : 'Call',
    pulseColor: isWA ? 'bg-[#25D366]' : 'bg-secondary',
  };

  const handleAction = (number: string) => {
    if (isWA) {
      window.open(`https://wa.me/${number}`, '_blank');
    } else {
      window.open(`tel:${number}`, '_self');
    }
    onClose();
  };

  return (
    <div className={`relative flex flex-col gap-4 ${isAr ? 'items-start' : 'items-end'}`}>
      
      {/* MENU (Slides up) */}
      {/* تم إضافة محاذاة ديناميكية هنا (left-0 أو right-0) لضمان بقاء القائمة داخل الشاشة */}
      <div className={`absolute bottom-full mb-3 flex flex-col gap-2 transition-all duration-300 transform origin-bottom ${
          isAr ? 'left-0' : 'right-0'
      } ${
          isOpen ? 'opacity-100 translate-y-0 scale-100 visible' : 'opacity-0 translate-y-8 scale-90 invisible pointer-events-none'
      }`}>
          {/* KSA Option */}
          <button 
              onClick={() => handleAction(APP_CONFIG.contact.phones.ksa)}
              className="flex items-center gap-3 bg-white p-1.5 pl-2 pr-3 rounded-full shadow-xl border border-gray-100 hover:bg-gray-50 transition-all group min-w-[130px] md:min-w-[170px]"
          >
              <div className="w-7 h-7 md:w-10 md:h-10 rounded-full overflow-hidden border border-gray-200 shadow-sm relative shrink-0">
                  <img src="https://flagcdn.com/w80/sa.png" alt="KSA" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col items-start overflow-hidden">
                  <span className="text-[7px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider truncate w-full">{isAr ? 'السعودية' : 'KSA'}</span>
                  <span className={`text-[10px] md:text-sm font-bold transition-colors ${isWA ? 'text-[#128C7E]' : 'text-primary'}`}>
                      {isAr ? config.itemActionAr : config.itemActionEn}
                  </span>
              </div>
          </button>

          {/* Oman Option */}
          <button 
              onClick={() => handleAction(APP_CONFIG.contact.phones.oman)}
              className="flex items-center gap-3 bg-white p-1.5 pl-2 pr-3 rounded-full shadow-xl border border-gray-100 hover:bg-gray-50 transition-all group min-w-[130px] md:min-w-[170px]"
          >
              <div className="w-7 h-7 md:w-10 md:h-10 rounded-full overflow-hidden border border-gray-200 shadow-sm relative shrink-0">
                  <img src="https://flagcdn.com/w80/om.png" alt="Oman" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col items-start overflow-hidden">
                  <span className="text-[7px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider truncate w-full">{isAr ? 'عمان' : 'Oman'}</span>
                  <span className={`text-[10px] md:text-sm font-bold transition-colors ${isWA ? 'text-[#128C7E]' : 'text-primary'}`}>
                      {isAr ? config.itemActionAr : config.itemActionEn}
                  </span>
              </div>
          </button>

          {/* Egypt Option */}
          <button 
              onClick={() => handleAction(APP_CONFIG.contact.phones.egypt)}
              className="flex items-center gap-3 bg-white p-1.5 pl-2 pr-3 rounded-full shadow-xl border border-gray-100 hover:bg-gray-50 transition-all group min-w-[130px] md:min-w-[170px]"
          >
              <div className="w-7 h-7 md:w-10 md:h-10 rounded-full overflow-hidden border border-gray-200 shadow-sm relative shrink-0">
                  <img src="https://flagcdn.com/w80/eg.png" alt="Egypt" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col items-start overflow-hidden">
                  <span className="text-[7px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider truncate w-full">{isAr ? 'مصر' : 'Egypt'}</span>
                  <span className={`text-[10px] md:text-sm font-bold transition-colors ${isWA ? 'text-[#128C7E]' : 'text-primary'}`}>
                      {isAr ? config.itemActionAr : config.itemActionEn}
                  </span>
              </div>
          </button>
      </div>

      {/* BUTTON CONTAINER */}
      <div className={`flex items-center gap-4 ${isAr ? 'flex-row' : 'flex-row-reverse'}`}>
          {/* Text Label (Hidden on Mobile) */}
          <div className={`
              bg-white text-gray-700 px-4 py-1.5 rounded-full shadow-lg border border-gray-100
              font-bold text-xs tracking-wide whitespace-nowrap
              transform transition-all duration-300 ease-out
              ${isOpen ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}
              hidden md:block
          `}>
              {isAr ? config.actionLabelAr : config.actionLabelEn}
          </div>

          <button 
              onClick={onToggle}
              className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center focus:outline-none group z-20"
              aria-label={isWA ? 'WhatsApp' : 'Call'}
          >
              {/* Pulse Animation (Only when closed) */}
              {!isOpen && (
                  <span className={`absolute inline-flex h-full w-full rounded-full opacity-30 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] ${config.pulseColor}`}></span>
              )}
              
              {/* Main Icon Circle */}
              <div className={`
                  relative w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg 
                  transform transition-all duration-300 border-[2px] md:border-[3px] border-white overflow-hidden bg-gradient-to-tr
                  ${config.colorClass} ${config.shadowClass}
                  ${isOpen ? 'rotate-90 scale-90 grayscale' : 'rotate-0 scale-100 group-hover:scale-110'}
              `}>
                  {/* Icon Switching */}
                  <i className={`${config.iconMain} text-xl md:text-4xl text-white drop-shadow-md absolute transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}></i>
                  <i className={`fas fa-times text-lg md:text-3xl text-white drop-shadow-md absolute transition-all duration-300 ${isOpen ? 'opacity-100 -rotate-90 scale-100' : 'opacity-0 rotate-90 scale-50'}`}></i>
              </div>
          </button>
      </div>
    </div>
  );
}

// 2. Main Parent Component
const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  
  // Track which menu is open ('none', 'whatsapp', 'phone')
  const [openMenu, setOpenMenu] = useState<'none' | 'whatsapp' | 'phone'>('none');

  const toggleMenu = (menu: 'whatsapp' | 'phone') => {
    if (openMenu === menu) {
      setOpenMenu('none');
    } else {
      setOpenMenu(menu);
    }
  };

  return (
    <div className={`fixed bottom-4 md:bottom-6 ${isAr ? 'left-4 md:left-6' : 'right-4 md:right-6'} z-50 flex flex-col gap-2 md:gap-3 pointer-events-none ${isAr ? 'items-start' : 'items-end'}`}>
        {/* Phone Button (Top) */}
        <div className={`pointer-events-auto relative transition-all duration-200 ${openMenu === 'phone' ? 'z-50' : 'z-30'}`}>
            <ContactFab 
                type="phone" 
                lang={lang} 
                isOpen={openMenu === 'phone'} 
                onToggle={() => toggleMenu('phone')}
                onClose={() => setOpenMenu('none')}
            />
        </div>

        {/* WhatsApp Button (Bottom) */}
        <div className={`pointer-events-auto relative transition-all duration-200 ${openMenu === 'whatsapp' ? 'z-50' : 'z-40'}`}>
            <ContactFab 
                type="whatsapp" 
                lang={lang} 
                isOpen={openMenu === 'whatsapp'} 
                onToggle={() => toggleMenu('whatsapp')}
                onClose={() => setOpenMenu('none')}
            />
        </div>

    </div>
  );
};

export default FloatingWhatsApp;
