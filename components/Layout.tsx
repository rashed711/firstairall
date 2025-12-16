
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import FloatingWhatsApp from './FloatingWhatsApp';
import { Language } from '../types';
import { APP_CONFIG } from '../constants';

interface LayoutProps {
    children: ReactNode;
    lang: Language;
    setLang: (lang: Language) => void;
    activeTab: string;
    onNavigate: (tab: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, lang, setLang, activeTab, onNavigate }) => {
    const isAr = lang === 'ar';

    return (
        <div className={`min-h-screen bg-light ${isAr ? 'font-sans' : 'font-sans'}`} dir={isAr ? 'rtl' : 'ltr'}>
            
            <Navbar 
                lang={lang} 
                setLang={setLang} 
                activeTab={activeTab === 'article' || activeTab === 'service' ? 'services' : activeTab}
                setActiveTab={onNavigate}
            />

            <main className="min-h-screen">
                {children}
            </main>

            {/* Global Footer */}
            <div className="bg-primary text-white pt-16 pb-8 border-t-8 border-tertiary relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-start mb-12">
                        <div className="flex flex-col items-center md:items-start animate-fade-in-up">
                                <div className="flex items-center gap-3 mb-6">
                                    {/* FOOTER LOGO */}
                                    <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform p-2">
                                        <img src={APP_CONFIG.logo} alt="Logo" className="w-full h-full object-contain" />
                                    </div>
                                    <span className="text-2xl font-bold">{isAr ? APP_CONFIG.siteName.ar : APP_CONFIG.siteName.en}</span>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed max-w-xs mb-6">
                                    {isAr ? 'خيارك الأول للعمالة المنزلية والمهنية. نلتزم بأعلى معايير الجودة والمصداقية.' : 'Your first choice for domestic and professional workers. We adhere to the highest standards of quality and credibility.'}
                                </p>
                                
                                <div className="flex gap-4">
                                    <a href={APP_CONFIG.socials.facebook} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all transform hover:-translate-y-1"><i className="fab fa-facebook-f"></i></a>
                                    <a href={APP_CONFIG.socials.twitter} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-all transform hover:-translate-y-1"><i className="fab fa-twitter"></i></a>
                                    <a href={APP_CONFIG.socials.instagram} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-all transform hover:-translate-y-1"><i className="fab fa-instagram"></i></a>
                                    <a href={APP_CONFIG.socials.whatsapp} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all transform hover:-translate-y-1"><i className="fab fa-whatsapp"></i></a>
                                </div>
                        </div>
                        
                        <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                            <h3 className="text-xl font-bold mb-6 text-white relative inline-block">
                                {isAr ? 'روابط سريعة' : 'Quick Links'}
                                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-tertiary rounded-full"></span>
                            </h3>
                            <ul className="space-y-4 text-gray-300">
                                <li><button onClick={() => onNavigate('home')} className="hover:text-tertiary hover:translate-x-2 transition-all block flex items-center gap-2"><i className="fas fa-chevron-right text-xs"></i> {isAr ? 'الرئيسية' : 'Home'}</button></li>
                                <li><button onClick={() => onNavigate('services')} className="hover:text-tertiary hover:translate-x-2 transition-all block flex items-center gap-2"><i className="fas fa-chevron-right text-xs"></i> {isAr ? 'خدماتنا' : 'Services'}</button></li>
                                <li><button onClick={() => onNavigate('about')} className="hover:text-tertiary hover:translate-x-2 transition-all block flex items-center gap-2"><i className="fas fa-chevron-right text-xs"></i> {isAr ? 'من نحن' : 'About Us'}</button></li>
                                <li><button onClick={() => onNavigate('contact')} className="hover:text-tertiary hover:translate-x-2 transition-all block flex items-center gap-2"><i className="fas fa-chevron-right text-xs"></i> {isAr ? 'اتصل بنا' : 'Contact'}</button></li>
                            </ul>
                        </div>
                        
                        <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                                <h3 className="text-xl font-bold mb-6 text-white relative inline-block">
                                    {isAr ? 'معلومات التواصل' : 'Contact Info'}
                                    <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-tertiary rounded-full"></span>
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-center justify-center md:justify-start gap-4 text-gray-300 group hover:text-white transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-tertiary/20 flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-white transition-all">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <span className="text-lg">{APP_CONFIG.contact.phone}</span>
                                    </div>
                                    <div className="flex items-center justify-center md:justify-start gap-4 text-gray-300 group hover:text-white transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-tertiary/20 flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-white transition-all">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <span className="text-lg">{APP_CONFIG.contact.email}</span>
                                    </div>
                                    <div className="flex items-center justify-center md:justify-start gap-4 text-gray-300 group hover:text-white transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-tertiary/20 flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-white transition-all">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <span className="text-lg">{isAr ? APP_CONFIG.contact.address.ar : APP_CONFIG.contact.address.en}</span>
                                    </div>
                                </div>
                        </div>
                    </div>
                    
                    <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
                        <p>&copy; {new Date().getFullYear()} {isAr ? APP_CONFIG.siteName.ar : APP_CONFIG.siteName.en}. All rights reserved.</p>
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white transition-colors">{isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}</a>
                            <a href="#" className="hover:text-white transition-colors">{isAr ? 'الشروط والأحكام' : 'Terms & Conditions'}</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <FloatingWhatsApp phone={APP_CONFIG.contact.phone} lang={lang} />
        </div>
    );
};

export default Layout;