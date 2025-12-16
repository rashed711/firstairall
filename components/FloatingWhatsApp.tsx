import React from 'react';
import { Language } from '../types';

interface FloatingWhatsAppProps {
  phone: string;
  lang: Language;
}

const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ phone, lang }) => {
  const isAr = lang === 'ar';
  
  // Basic formatting: Remove non-digits. 
  // In a real app, you would handle country codes more robustly.
  // Assuming Saudi numbers for this context, replacing leading 0 with 966 if needed.
  let cleanPhone = phone.replace(/[^\d]/g, '');
  if (cleanPhone.startsWith('0')) {
    cleanPhone = '966' + cleanPhone.substring(1);
  }
  
  const whatsappUrl = `https://wa.me/${cleanPhone}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`fixed bottom-8 ${isAr ? 'left-8' : 'right-8'} z-50 group flex items-center gap-4`}
      aria-label="Contact us on WhatsApp"
    >
        {/* Text Label (Hidden by default, slides in on hover) */}
        <div className={`
            bg-white text-primary px-5 py-2.5 rounded-full shadow-xl 
            font-bold text-sm tracking-wide
            transform transition-all duration-300 ease-out
            opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0
            ${isAr ? 'order-2' : 'order-1'}
            hidden md:block border border-gray-100
        `}>
            {isAr ? 'تواصل معنا الآن' : 'Chat with us'}
        </div>

        {/* Button Container */}
        <div className={`relative w-16 h-16 flex items-center justify-center ${isAr ? 'order-1' : 'order-2'}`}>
            {/* Pulse/Ping Animation Ring */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-20 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '1s' }}></span>
            
            {/* Main Icon Button */}
            <div className="relative w-16 h-16 bg-gradient-to-tr from-[#128C7E] to-[#25D366] rounded-full flex items-center justify-center shadow-2xl transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 border-[3px] border-white overflow-hidden">
                {/* Glossy Effect */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white/20 pointer-events-none"></div>
                
                <i className="fab fa-whatsapp text-4xl text-white drop-shadow-md"></i>
            </div>
            
            {/* Red Notification Dot */}
            <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-sm animate-bounce" style={{ animationDuration: '3s' }}></span>
        </div>
    </a>
  );
};

export default FloatingWhatsApp;