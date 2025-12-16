
import React, { useEffect } from 'react';
import { Service, Language } from '../types';
import { getServiceImage } from '../utils/helpers';

interface ServiceDetailProps {
  service: Service;
  lang: Language;
  onBack: () => void;
  onContact: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, lang, onBack, onContact }) => {
  const isAr = lang === 'ar';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = isAr ? (service.features_ar || []) : (service.features_en || []);

  return (
    <div className="bg-light min-h-screen animate-fade-in" dir={isAr ? 'rtl' : 'ltr'}>
      
      {/* Hero Banner */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-primary/60 z-10"></div>
        <img 
            src={getServiceImage(service.id)} 
            alt={isAr ? service.title_ar : service.title_en}
            className="w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button 
                onClick={onBack}
                className="absolute top-8 w-fit bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-full hover:bg-white/40 transition-colors flex items-center gap-2 font-bold mb-8"
            >
                <i className={`fas fa-arrow-${isAr ? 'right' : 'left'}`}></i> {isAr ? 'العودة للخدمات' : 'Back to Services'}
            </button>
            
            <span className="text-tertiary font-bold tracking-widest uppercase mb-2 animate-fade-in-up">
                {isAr ? 'خدماتنا المتميزة' : 'Our Premium Services'}
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                {isAr ? service.title_ar : service.title_en}
            </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <h2 className="text-2xl font-bold text-primary mb-6 border-b border-gray-100 pb-4">
                        {isAr ? 'تفاصيل الخدمة' : 'Service Details'}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {isAr 
                            ? (service.long_description_ar || service.description_ar) 
                            : (service.long_description_en || service.description_en)}
                    </p>
                    
                    <h3 className="text-xl font-bold text-primary mb-4 mt-8">
                        {isAr ? 'مميزات الخدمة' : 'Key Features'}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-tertiary/30 transition-colors">
                                <div className="w-8 h-8 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary flex-shrink-0">
                                    <i className="fas fa-check"></i>
                                </div>
                                <span className="text-gray-700 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ or Additional Info Placeholder */}
                <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary text-2xl shadow-md flex-shrink-0">
                            <i className="fas fa-question"></i>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-primary mb-2">
                                {isAr ? 'هل لديك استفسارات؟' : 'Have Questions?'}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {isAr 
                                ? 'فريق خدمة العملاء لدينا جاهز للإجابة على جميع استفساراتك المتعلقة بهذه الخدمة.' 
                                : 'Our customer support team is ready to answer all your inquiries regarding this service.'}
                            </p>
                            <button 
                                onClick={onContact}
                                className="text-tertiary font-bold hover:underline"
                            >
                                {isAr ? 'تواصل معنا الآن' : 'Contact Us Now'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                    {/* Booking Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border-t-8 border-tertiary animate-fade-in-left">
                        <h3 className="text-2xl font-bold text-primary mb-2">{isAr ? 'اطلب الخدمة' : 'Request Service'}</h3>
                        <p className="text-gray-500 text-sm mb-6">
                            {isAr ? 'املأ النموذج البسيط وسنتواصل معك فوراً.' : 'Fill out the simple form and we will contact you immediately.'}
                        </p>
                        
                        <div className="space-y-4">
                            <button 
                                onClick={onContact}
                                className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-lg hover:bg-secondary transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                            >
                                <i className="fas fa-paper-plane"></i>
                                {isAr ? 'تقديم طلب الآن' : 'Submit Request Now'}
                            </button>
                            
                            <a 
                                href="tel:0500000000"
                                className="w-full bg-white border-2 border-primary text-primary py-4 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                            >
                                <i className="fas fa-phone-alt"></i>
                                {isAr ? 'اتصال مباشر' : 'Call Directly'}
                            </a>
                        </div>
                        
                        <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                            <p className="text-xs text-gray-400">
                                {isAr ? 'نضمن لك السرية التامة لبياناتك' : 'We guarantee full confidentiality of your data'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
