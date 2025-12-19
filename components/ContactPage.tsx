
import React from 'react';
import { Language, Settings } from '../types';
import ScrollReveal from './ScrollReveal';

interface ContactPageProps {
  lang: Language;
  settings: Settings;
}

const ContactPage: React.FC<ContactPageProps> = ({ lang, settings }) => {
  const isAr = lang === 'ar';

  return (
    <div className="bg-gray-50 min-h-screen py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal animation="fade-down">
            <div className="text-center mb-10 md:mb-16">
                <h1 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">{isAr ? 'تواصل معنا' : 'Contact Us'}</h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-lg px-4">
                    {isAr 
                    ? 'نحن هنا لخدمتك في جمهورية مصر العربية، المملكة العربية السعودية، وسلطنة عمان.' 
                    : 'We are here to serve you in Egypt, Saudi Arabia, and Oman.'}
                </p>
            </div>
        </ScrollReveal>

        {/* Updated Grid for Responsive Branches */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-16">
           
            {/* Egypt Branch */}
            <ScrollReveal animation="fade-up" delay={150}>
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-tertiary/50 transition-all h-full relative overflow-hidden group">
                    <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 shadow-xl rounded-md overflow-hidden w-10 md:w-16 border border-gray-200 z-10">
                         <img src="https://flagcdn.com/w160/eg.png" alt="Egypt" className="w-full h-auto object-cover" />
                    </div>
                    <div className="flex items-center gap-4 mb-6 mt-2">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600/10 rounded-full flex items-center justify-center text-red-600 text-lg md:text-xl flex-shrink-0">
                            <i className="fas fa-map-marked-alt"></i>
                        </div>
                        <h3 className="font-bold text-primary text-lg md:text-xl">{isAr ? 'فرع مصر' : 'Egypt Branch'}</h3>
                    </div>
                    <div className="space-y-4">
                         <div className="flex items-start gap-3">
                            <i className="fas fa-phone mt-1 text-tertiary text-sm"></i>
                            <div>
                                <p className="text-[10px] text-gray-500 mb-1 uppercase tracking-wider">{isAr ? 'الهاتف' : 'Phone'}</p>
                                <a href="tel:01065550024" className="text-gray-800 font-bold hover:text-tertiary dir-ltr block text-start text-sm md:text-base">01065550024</a>
                            </div>
                         </div>
                         <div className="flex items-start gap-3">
                            <i className="fas fa-location-arrow mt-1 text-tertiary text-sm"></i>
                            <div>
                                <p className="text-[10px] text-gray-500 mb-1 uppercase tracking-wider">{isAr ? 'العنوان' : 'Address'}</p>
                                <p className="text-gray-800 font-medium text-xs md:text-sm">{isAr ? 'الطريق البطيء – المنطقة الصناعية' : 'Ind. Zone – Qalyub'}</p>
                            </div>
                         </div>
                    </div>
                </div>
            </ScrollReveal>

             {/* KSA Branch */}
            <ScrollReveal animation="fade-up" delay={0}>
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-tertiary/50 transition-all h-full relative overflow-hidden group">
                    <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 shadow-xl rounded-md overflow-hidden w-10 md:w-16 border border-gray-200 z-10">
                         <img src="https://flagcdn.com/w160/sa.png" alt="KSA" className="w-full h-auto object-cover" />
                    </div>
                    <div className="flex items-center gap-4 mb-6 mt-2">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-green-600/10 rounded-full flex items-center justify-center text-green-600 text-lg md:text-xl flex-shrink-0">
                            <i className="fas fa-map-marked-alt"></i>
                        </div>
                        <h3 className="font-bold text-primary text-lg md:text-xl">{isAr ? 'فرع السعودية' : 'KSA Branch'}</h3>
                    </div>
                    <div className="space-y-4">
                         <div className="flex items-start gap-3">
                            <i className="fas fa-phone mt-1 text-tertiary text-sm"></i>
                            <div>
                                <p className="text-[10px] text-gray-500 mb-1 uppercase tracking-wider">{isAr ? 'الهاتف' : 'Phone'}</p>
                                <a href="tel:+966532425777" className="text-gray-800 font-bold hover:text-tertiary dir-ltr block text-start text-sm md:text-base">+966 53 242 5777</a>
                            </div>
                         </div>
                         <div className="flex items-start gap-3">
                            <i className="fas fa-location-arrow mt-1 text-tertiary text-sm"></i>
                            <div>
                                <p className="text-[10px] text-gray-500 mb-1 uppercase tracking-wider">{isAr ? 'العنوان' : 'Address'}</p>
                                <p className="text-gray-800 font-medium text-xs md:text-sm">{isAr ? 'حي الربوة – الرياض' : 'Al-Rabwa Dist – Riyadh'}</p>
                            </div>
                         </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* Oman Branch */}
            <ScrollReveal animation="fade-up" delay={300}>
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-tertiary/50 transition-all h-full relative overflow-hidden group">
                    <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 shadow-xl rounded-md overflow-hidden w-10 md:w-16 border border-gray-200 z-10">
                         <img src="https://flagcdn.com/w160/om.png" alt="Oman" className="w-full h-auto object-cover" />
                    </div>
                    <div className="flex items-center gap-4 mb-6 mt-2">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600/10 rounded-full flex items-center justify-center text-red-600 text-lg md:text-xl flex-shrink-0">
                            <i className="fas fa-map-marked-alt"></i>
                        </div>
                        <h3 className="font-bold text-primary text-lg md:text-xl">{isAr ? 'فرع عمان' : 'Oman Branch'}</h3>
                    </div>
                    <div className="space-y-4">
                         <div className="flex items-start gap-3">
                            <i className="fas fa-phone mt-1 text-tertiary text-sm"></i>
                            <div>
                                <p className="text-[10px] text-gray-500 mb-1 uppercase tracking-wider">{isAr ? 'الهاتف' : 'Phone'}</p>
                                <a href="tel:+966532425777" className="text-gray-800 font-bold hover:text-tertiary dir-ltr block text-start text-sm md:text-base">+966 53 242 5777</a>
                            </div>
                         </div>
                         <div className="flex items-start gap-3">
                            <i className="fas fa-location-arrow mt-1 text-tertiary text-sm"></i>
                            <div>
                                <p className="text-[10px] text-gray-500 mb-1 uppercase tracking-wider">{isAr ? 'العنوان' : 'Address'}</p>
                                <p className="text-gray-800 font-medium text-xs md:text-sm">{isAr ? 'صلالة - سلطنة عمان' : 'Salalah - Oman'}</p>
                            </div>
                         </div>
                    </div>
                </div>
            </ScrollReveal>

        </div>

        {/* Form & Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
            <ScrollReveal animation="fade-up" delay={200}>
                <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-gray-100 h-full">
                    <h2 className="text-2xl font-bold text-primary mb-8">{isAr ? 'أرسل استفسارك' : 'Send Inquiry'}</h2>
                    <form className="space-y-4 md:space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                            <input type="text" placeholder={isAr ? 'الاسم' : 'Name'} className="w-full px-4 py-3 md:py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-tertiary transition-all text-sm" />
                            <input type="tel" placeholder={isAr ? 'الهاتف' : 'Phone'} className="w-full px-4 py-3 md:py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-tertiary transition-all text-sm" />
                        </div>
                        <textarea rows={4} placeholder={isAr ? 'الرسالة' : 'Message'} className="w-full px-4 py-3 md:py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-tertiary transition-all text-sm"></textarea>
                        <button className="w-full bg-primary text-white font-black py-4 rounded-xl shadow-lg hover:bg-tertiary transition-all text-sm md:text-base uppercase tracking-widest">
                            {isAr ? 'إرسال' : 'Submit'}
                        </button>
                    </form>
                </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={300}>
                <div className="rounded-3xl overflow-hidden shadow-lg h-[300px] md:h-full min-h-[300px] bg-gray-200 relative">
                    <div className="absolute inset-0 bg-[url('https://www2.0zz0.com/2025/12/17/14/353044167.jpg')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-primary/20"></div>
                </div>
            </ScrollReveal>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
