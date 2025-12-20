
import React, { useState } from 'react';
import { Language } from '../types';
import { APP_CONFIG } from '../constants';

interface FloatingWhatsAppProps {
  lang: Language;
}

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
  
  const config = {
    colorClass: isWA ? 'from-[#128C7E] to-[#25D366]' : 'from-primary to-secondary',
    iconMain: isWA ? 'fab fa-whatsapp' : 'fas fa-phone-alt',
    label: isWA ? (isAr ? 'واتساب' : 'WhatsApp') : (isAr ? 'اتصال' : 'Call')
  };

  const handleAction = (number: string) => {
    window.open(isWA ? `https://wa.me/${number}` : `tel:${number}`, isWA ? '_blank' : '_self');
    onClose();
  };

  return (
    <div className={`relative flex flex-col gap-3 ${isAr ? 'items-start' : 'items-end'}`}>
      <div className={`absolute bottom-full mb-3 flex flex-col gap-2 transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50 pointer-events-none'
      } ${isAr ? 'left-0' : 'right-0'}`}>
          {[
            { id: 'sa', flag: 'sa', num: APP_CONFIG.contact.phones.ksa, name: isAr ? 'السعودية' : 'KSA' },
            { id: 'om', flag: 'om', num: APP_CONFIG.contact.phones.oman, name: isAr ? 'عُمان' : 'Oman' },
            { id: 'eg', flag: 'eg', num: APP_CONFIG.contact.phones.egypt, name: isAr ? 'مصر' : 'Egypt' }
          ].map(c => (
            <button 
                key={c.id}
                onClick={() => handleAction(c.num)}
                className="flex items-center gap-3 bg-white p-2 rounded-full shadow-lg border border-gray-100 hover:bg-gray-50 min-w-[140px]"
                aria-label={`${config.label} ${c.name}`}
            >
                <img src={`https://flagcdn.com/w40/${c.flag}.png`} alt={c.name} width="24" height="18" className="rounded-sm" />
                <span className="text-xs font-bold text-primary">{c.name}</span>
            </button>
          ))}
      </div>

      <button 
          onClick={onToggle}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl bg-gradient-to-tr text-white text-2xl transition-all ${config.colorClass} ${isOpen ? 'rotate-90 scale-90' : 'hover:scale-110 animate-bounce-slow'}`}
          aria-label={isOpen ? "Close menu" : `Open ${config.label} options`}
          aria-expanded={isOpen}
      >
          <i className={isOpen ? 'fas fa-times' : config.iconMain}></i>
      </button>
    </div>
  );
}

const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [openMenu, setOpenMenu] = useState<'none' | 'whatsapp' | 'phone'>('none');

  return (
    <div className={`fixed bottom-6 ${isAr ? 'left-6' : 'right-6'} z-50 flex flex-col gap-4 items-center`}>
        <ContactFab 
            type="phone" 
            lang={lang} 
            isOpen={openMenu === 'phone'} 
            onToggle={() => setOpenMenu(openMenu === 'phone' ? 'none' : 'phone')}
            onClose={() => setOpenMenu('none')}
        />
        <ContactFab 
            type="whatsapp" 
            lang={lang} 
            isOpen={openMenu === 'whatsapp'} 
            onToggle={() => setOpenMenu(openMenu === 'whatsapp' ? 'none' : 'whatsapp')}
            onClose={() => setOpenMenu('none')}
        />
    </div>
  );
};

export default FloatingWhatsApp;
