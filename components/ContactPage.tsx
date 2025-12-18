
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
    <div className="bg-gray-50 min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal animation="fade-down">
            <div className="text-center mb-12 md:mb-16">
                <h1 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">{isAr ? 'تواصل معنا' : 'Contact Us'}</h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
                    {isAr 
                    ? 'نحن هنا لخدمتك في جمهورية مصر العربية، المملكة العربية السعودية، وسلطنة عمان.' 
                    : 'We are here to serve you in Egypt, Saudi Arabia, and Oman.'}
                </p>
            </div>
        </ScrollReveal>

        {/* Updated Grid to support 3 columns for 3 branches */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            
            {/* KSA Branch */}
            <ScrollReveal animation="fade-up" delay={0}>
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-tertiary/50 transition-all h-full relative overflow-hidden group">
                    {/* Flag - Fixed Clarity: Fully visible badge */}
                    <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 shadow-md rounded overflow-hidden w-12 md:w-16">
                         <img src="https://flagcdn.com/w160/sa.png" alt="KSA" className="w-full h-auto object-cover opacity-100" />
                    </div>
                    
                    <div className="flex items-center gap-4 mb-6 mt-2">
                        <div className="w-12 h-12 bg-green-600/10 rounded-full flex items-center justify-center text-green-600 text-xl flex-shrink-0">
                            <i className="fas fa-map-marked-alt"></i>
                        </div>
                        <h3 className="font-bold text-primary text-xl">{isAr ? 'فرع السعودية' : 'KSA Branch'}</h3>
                    </div>
                    
                    <div className="space-y-4">
                         <div className="flex items-start gap-3">
                            <i className="fas fa-phone mt-1 text-tertiary"></i>
                            <div>
                                <p className="text-xs text-gray-500 mb-1">{isAr ? 'الهاتف' : 'Phone'}</p>
                                <a href="tel:+966532425777" className="text-gray-800 font-bold hover:text-tertiary dir-ltr block text-left text-sm md:text-base">+966 53 242 5777</a>
                            </div>
                         </div>
                         <div className="flex items-start gap-3">
                            <i className="fas fa-envelope mt-1 text-tertiary"></i>
                            <div>
                                <p className="text-xs text-gray-500 mb-1">{isAr ? 'البريد الإلكتروني' : 'Email'}</p>
                                <a href="mailto:info@firstair-sa.com" className="text-gray-800 font-bold hover:text-tertiary block break-all text-sm md:text-base">info@firstair-sa.com</a>
                            </div>
                         </div>
                         <div className="flex items-start gap-3">
                            <i className="fas fa-location-arrow mt-1 text-tertiary"></i>
                            <div>
                                <p className="text-xs text-gray-500 mb-1">{isAr ? 'العنوان' : 'Address'}</p>
                                <p className="text-gray-800 font-medium text-sm">{isAr ? 'حي الربوة – الرياض' : 'Al-Rabwa Dist – Riyadh'}</p>
                            </div>
                         </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* Egypt Branch */}
            <ScrollReveal animation="fade-up" delay={150}>
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-tertiary/50 transition-all h-full relative overflow-hidden group">
                    {/* Flag - Fixed Clarity */}
                    <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 shadow-md rounded overflow-hidden w-12 md:w-16">
                         <img src="https://flagcdn.com/w160/eg.png" alt="Egypt" className="w-full h-auto object-cover opacity-100" />
                    </div>

                    <div className="flex items-center gap-4 mb-6 mt-2">
                        <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center text-red-600 text-xl flex-shrink-0">
                            <i className="fas fa-map-marked-alt"></i>
                        </div>
                        <h3 className="font-bold text-primary text-xl">{isAr ? 'فرع مصر' : 'Egypt Branch'}</h3>
                    </div>
                    
                    <div className="space-y-4">
                         <div className="flex items-start gap-3">
                            <i className="fas fa-phone mt-1 text-tertiary"></i>
                            <div>
                                <p className="text-xs text-gray-500 mb-1">{isAr ? 'الهاتف' : 'Phone'}</p>
                                <a href="tel:01065550024" className="text-gray-800 font-bold hover:text-tertiary dir-ltr block text-left text-sm md:text-base">01065550024</a>
                            </div>
                         </div>
                         <div className="flex items-start gap-3">
                            <i className="fas fa-envelope mt-1 text-tertiary"></i>
                            <div>
                                <p className="text-xs text-gray-500 mb-1">{isAr ? 'البريد الإلكتروني' : 'Email'}</p>
                                <a href="mailto:info@firstair-eg.com" className="text-gray-800 font-bold hover:text-tertiary block break-all text-sm md:text-base">info@firstair-eg.com</a>
                            </div>
                         </div>
                         <div className="flex items-start gap-3">
                            <i className="fas fa-location-arrow mt-1 text-tertiary"></i>
                            <div>
                                <p className="text-xs text-gray-500 mb-1">{isAr ? 'العنوان' : 'Address'}</p>
                                <p className="text-gray-800 font-medium text-sm">{isAr ? 'الطريق البطيء – المنطقة الصناعية' : 'Ind. Zone – Qalyub'}</p>
                            </div>
                         </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* Oman Branch - ADDED */}
            <ScrollReveal animation="fade-up" delay={300}>
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-tertiary/50 transition-all h-full relative overflow-hidden group">
                    {/* Flag - Fixed Clarity */}
                    <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 shadow-md rounded overflow-hidden w-12 md:w-16">
                         <img src="https://flagcdn.com/w160/om.png" alt="Oman" className="w-full h-auto object-cover opacity-100" />
                    </div>

                    <div className="flex items-center gap-4 mb-6 mt-2">
                        <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center text-red-600 text-xl flex-shrink-0">
                            <i className="fas fa-map-marked-alt"></i>
                        </div>
                        <h3 className="font-bold text-primary text-xl">{isAr ? 'فرع عمان' : 'Oman Branch'}</h3>
                    </div>
                    
                    <div className="space-y-4">
                         <div className="flex items-start gap-3">
                            <i className="fas fa-phone mt-1 text-tertiary"></i>
                            <div>
                                <p className="text-xs text-gray-500 mb-1">{isAr ? 'الهاتف' : 'Phone'}</p>
                                <a href="tel:+966532425777" className="text-gray-800 font-bold hover:text-tertiary dir-ltr block text-left text-sm md:text-base">+966 53 242 5777</a>
                            </div>
                         </div>
                         <div className="flex items-start gap-3">
                            <i className="fas fa-envelope mt-1 text-tertiary"></i>
                            <div>
                                <p className="text-xs text-gray-500 mb-1">{isAr ? 'البريد الإلكتروني' : 'Email'}</p>
                                <a href="mailto:info@firstair-sa.com" className="text-gray-800 font-bold hover:text-tertiary block break-all text-sm md:text-base">info@firstair-sa.com</a>
                            </div>
                         </div>
                         <div className="flex items-start gap-3">
                            <i className="fas fa-location-arrow mt-1 text-tertiary"></i>
                            <div>
                                <p className="text-xs text-gray-500 mb-1">{isAr ? 'العنوان' : 'Address'}</p>
                                <p className="text-gray-800 font-medium text-sm">{isAr ? 'صلالة - سلطنة عمان' : 'Salalah - Oman'}</p>
                            </div>
                         </div>
                    </div>
                </div>
            </ScrollReveal>

        </div>

        {/* Contact Form & Map Section */}
        <div className="grid lg:grid-cols-2 gap-8">
            <ScrollReveal animation="fade-up" delay={200}>
                <div className="bg-white rounded-3xl shadow-xl p-6 md:p-12 border border-gray-100 relative overflow-hidden h-full">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-tertiary"></div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">{isAr ? 'أرسل لنا استفسارك' : 'Send us an inquiry'}</h2>
                    
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">{isAr ? 'الاسم' : 'Name'}</label>
                                {/* text-base on input prevents iOS zoom */}
                                <input type="text" className="w-full px-4 py-3 md:py-4 text-base rounded-xl bg-gray-50 border border-gray-200 focus:border-tertiary focus:ring-2 focus:ring-tertiary/20 outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">{isAr ? 'الهاتف' : 'Phone'}</label>
                                <input type="tel" className="w-full px-4 py-3 md:py-4 text-base rounded-xl bg-gray-50 border border-gray-200 focus:border-tertiary focus:ring-2 focus:ring-tertiary/20 outline-none transition-all" />
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">{isAr ? 'نوع الخدمة المطلوبة' : 'Service Type'}</label>
                            <select className="w-full px-4 py-3 md:py-4 text-base rounded-xl bg-gray-50 border border-gray-200 focus:border-tertiary focus:ring-2 focus:ring-tertiary/20 outline-none transition-all appearance-none">
                                <option>{isAr ? 'أعمال التكييف والتهوية' : 'HVAC Works'}</option>
                                <option>{isAr ? 'مكافحة الحريق' : 'Fire Fighting'}</option>
                                <option>{isAr ? 'أعمال صحية وميكانيكية' : 'Plumbing & Mechanical'}</option>
                                <option>{isAr ? 'صيانة وتشغيل' : 'Maintenance'}</option>
                                <option>{isAr ? 'أخرى' : 'Other'}</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">{isAr ? 'الرسالة' : 'Message'}</label>
                            <textarea rows={4} className="w-full px-4 py-3 md:py-4 text-base rounded-xl bg-gray-50 border border-gray-200 focus:border-tertiary focus:ring-2 focus:ring-tertiary/20 outline-none transition-all"></textarea>
                        </div>

                        <button type="button" className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-tertiary transition-all transform hover:-translate-y-1 text-base md:text-lg">
                            {isAr ? 'إرسال الطلب' : 'Submit Request'}
                        </button>
                    </form>
                </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={300}>
                <div className="rounded-3xl overflow-hidden shadow-lg h-full min-h-[300px] md:min-h-[400px] bg-gray-200 relative group">
                     {/* Simulating a Map focusing on Riyadh for example */}
                    <div className="absolute inset-0 bg-[url('https://www2.0zz0.com/2025/12/17/14/353044167.jpg')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"></div>
                    <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-16 h-16 bg-tertiary text-white rounded-full flex items-center justify-center text-3xl shadow-2xl animate-bounce">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                    </div>
                     <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 flex-wrap px-2">
                        <a 
                            href="https://maps.google.com/?q=Al-Rabwa+Dist+Riyadh" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="bg-white text-primary px-4 py-3 rounded-lg font-bold text-sm shadow-md hover:bg-gray-100 transition flex-1 text-center whitespace-nowrap"
                        >
                            {isAr ? 'السعودية' : 'KSA'}
                        </a>
                        <a 
                            href="https://maps.google.com/?q=Qalyub+Industrial+Zone" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="bg-white text-primary px-4 py-3 rounded-lg font-bold text-sm shadow-md hover:bg-gray-100 transition flex-1 text-center whitespace-nowrap"
                        >
                            {isAr ? 'مصر' : 'Egypt'}
                        </a>
                        <a 
                            href="https://maps.google.com/?q=Salalah+Oman" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="bg-white text-primary px-4 py-3 rounded-lg font-bold text-sm shadow-md hover:bg-gray-100 transition flex-1 text-center whitespace-nowrap"
                        >
                            {isAr ? 'عمان' : 'Oman'}
                        </a>
                    </div>
                </div>
            </ScrollReveal>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
