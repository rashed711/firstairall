
import React from 'react';
import { Language, Settings } from '../types';
import ScrollReveal from './ScrollReveal';

interface AboutPageProps {
  lang: Language;
  settings: Settings;
}

const AboutPage: React.FC<AboutPageProps> = ({ lang, settings }) => {
  const isAr = lang === 'ar';

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <div className="relative bg-primary py-16 md:py-24 text-white overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
             <ScrollReveal animation="fade-down">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{isAr ? 'من نحن' : 'About Us'}</h1>
                <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    {isAr ? 'First Air: شريكك الهندسي الموثوق للأعمال الكهروميكانيكية.' : 'First Air: Your trusted engineering partner for MEP works.'}
                </p>
             </ScrollReveal>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Main Story */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16 md:mb-20">
            <div className="w-full lg:w-1/2">
                <ScrollReveal animation="fade-right">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-tertiary/20 rounded-xl transform rotate-3"></div>
                        <img 
                            src="https://i.pinimg.com/1200x/24/63/81/246381c237c6fa0e851ea3130d4f40a4.jpg" 
                            alt="Engineering Team" 
                            className="relative rounded-xl shadow-2xl w-full"
                        />
                    </div>
                </ScrollReveal>
            </div>
            <div className="w-full lg:w-1/2">
                <ScrollReveal animation="fade-left" delay={200}>
                    <h2 className="text-xs md:text-sm font-bold text-tertiary uppercase tracking-wider mb-2">{isAr ? 'عن الشركة' : 'Company Profile'}</h2>
                    <h3 className="text-2xl md:text-4xl font-extrabold text-primary mb-6 leading-tight">{isAr ? 'خبرة ممتدة في السوق المصري والسعودي' : 'Extensive Experience in Egyptian & Saudi Markets'}</h3>
                    
                    <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-lg">
                        <p>
                            {isAr 
                            ? 'First Air for Contracting هي شركة متخصصة في مقاولات الأعمال الكهروميكانيكية (MEP)، تمتلك خبرة تنفيذية ممتدة، وتعمل حاليًا من خلال فروعها في جمهورية مصر العربية والمملكة العربية السعودية وسلطنة عمان على تنفيذ مشروعات كبرى وفق أعلى المعايير الهندسية الدولية.'
                            : 'First Air for Contracting is specialized in MEP works, with extensive executive experience, currently operating through its branches in Egypt, KSA, and Oman to execute major projects according to the highest international engineering standards.'}
                        </p>
                        <p>
                            {isAr
                            ? 'تقدّم الشركة حلولًا متكاملة تشمل التصميم، التوريد، التركيب، الاختبار والتشغيل لأنظمة التكييف المركزي (HVAC)، التهوية، أنظمة مكافحة الحريق، وأعمال السباكة والأنظمة الميكانيكية، مع تركيز خاص على المشروعات ذات الطبيعة المعقدة.'
                            : 'We provide integrated solutions including design, supply, installation, testing, and commissioning for HVAC, Fire Fighting, Plumbing, and Mechanical systems, focusing on complex projects.'}
                        </p>
                         <p>
                            {isAr
                            ? 'نعتمد على فرق فنية وهندسية مؤهلة، ومنهجيات عمل دقيقة تضمن الكفاءة التشغيلية، الاعتمادية، والالتزام الصارم بالجداول الزمنية.'
                            : 'We rely on qualified technical and engineering teams, and precise methodologies ensuring operational efficiency, reliability, and strict adherence to schedules.'}
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6 mt-8">
                        <div className="border-l-4 border-tertiary pl-4 rtl:border-l-0 rtl:border-r-4 rtl:pr-4">
                            <span className="block text-3xl md:text-4xl font-bold text-primary mb-1">+3</span>
                            <span className="text-sm text-gray-500">{isAr ? 'فروع إقليمية' : 'Regional Branches'}</span>
                        </div>
                        <div className="border-l-4 border-tertiary pl-4 rtl:border-l-0 rtl:border-r-4 rtl:pr-4">
                            <span className="block text-3xl md:text-4xl font-bold text-primary mb-1">MEP</span>
                            <span className="text-sm text-gray-500">{isAr ? 'تخصص دقيق' : 'Specialization'}</span>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20">
            <ScrollReveal animation="fade-up" className="h-full">
                <div className="bg-gray-50 p-6 md:p-10 rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow h-full">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center text-primary text-xl md:text-2xl shadow-md mb-6">
                        <i className="fas fa-rocket"></i>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">{isAr ? 'تواجدنا في الخليج' : 'Presence in GCC'}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {isAr
                        ? 'تواصل First Air نقل خبراتها إلى سوق الخليج (السعودية وعمان) الذي يشهد نموًا متسارعًا، مساهمةً في تنفيذ أنظمة MEP استراتيجية، مع الالتزام الكامل بمعايير الجودة والسلامة وتوطين الخبرات.'
                        : 'First Air continues to transfer its expertise to the rapidly growing GCC market (KSA & Oman), contributing to strategic MEP systems, with full commitment to quality, safety, and localization.'}
                    </p>
                </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={200} className="h-full">
                <div className="bg-primary text-white p-6 md:p-10 rounded-3xl border border-primary hover:shadow-xl transition-shadow h-full">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white text-xl md:text-2xl shadow-md mb-6">
                        <i className="fas fa-handshake"></i>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{isAr ? 'فلسفتنا' : 'Our Philosophy'}</h3>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {isAr
                        ? 'تتموضع First Air كشريك هندسي وتنفيذي طويل المدى، وليس مجرد مقاول تنفيذ، حيث تركز على تقديم حلول مخصصة تلبي المتطلبات الفنية والتشغيلية لكل مشروع، وتحقق قيمة مستدامة لعملائها في مصر والمملكة وعمان.'
                        : 'First Air positions itself as a long-term engineering partner, not just a contractor, focusing on providing customized solutions meeting technical requirements and creating sustainable value for clients in Egypt, KSA, and Oman.'}
                    </p>
                </div>
            </ScrollReveal>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-16">
            <ScrollReveal animation="fade-up">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">{isAr ? 'قطاعات الأعمال' : 'Business Sectors'}</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {[
                    { icon: 'fa-hospital', titleAr: 'القطاع الطبي', titleEn: 'Medical Sector', textAr: 'مستشفيات، مصانع أدوية، ومراكز طبية.', textEn: 'Hospitals, Pharma factories, and Medical centers.' },
                    { icon: 'fa-industry', titleAr: 'القطاع الصناعي', titleEn: 'Industrial Sector', textAr: 'مصانع، مستودعات، وورش مركزية.', textEn: 'Factories, Warehouses, and Central workshops.' },
                    { icon: 'fa-hotel', titleAr: 'القطاع الفندقي والتجاري', titleEn: 'Hospitality & Commercial', textAr: 'فنادق، مولات تجارية، ومباني إدارية.', textEn: 'Hotels, Malls, and Office buildings.' }
                ].map((item, idx) => (
                    <ScrollReveal key={idx} animation="zoom-in" delay={idx * 150} className="h-full">
                        <div className="p-6 md:p-8 rounded-2xl bg-white shadow-lg hover:-translate-y-2 transition-transform duration-300 border border-gray-50 h-full">
                            <div className="w-14 h-14 mx-auto bg-tertiary/10 rounded-full flex items-center justify-center text-tertiary text-2xl mb-4">
                                <i className={`fas ${item.icon}`}></i>
                            </div>
                            <h4 className="text-xl font-bold text-primary mb-2">{isAr ? item.titleAr : item.titleEn}</h4>
                            <p className="text-gray-500 text-sm md:text-base">{isAr ? item.textAr : item.textEn}</p>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
