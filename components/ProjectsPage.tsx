
import React from 'react';
import { MethodologyItem, Language } from '../types';
import ScrollReveal from './ScrollReveal';
import { useNavigation } from '../hooks/useNavigation';

interface ProjectsPageProps {
  methodology: MethodologyItem[];
  lang: Language;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ methodology, lang }) => {
  const isAr = lang === 'ar';
  // استخدم الهوك للتنقل النظيف
  const { navigate } = useNavigation();

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal animation="fade-down">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-primary mb-6">
              {isAr ? 'مشاريعنا ومنهجيتنا' : 'Our Projects & Methodology'}
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-500 leading-relaxed">
              {isAr 
                ? 'استعراض شامل لدورة حياة المشاريع في فرست اير، من التصميم الهندسي وحتى التشغيل والصيانة، مع عرض أبرز المحطات الهندسية.'
                : 'A comprehensive review of project lifecycles at First Air, from engineering design to operations and maintenance, showcasing key milestones.'}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {methodology.map((item, index) => (
            <ScrollReveal key={item.id} animation="fade-up" delay={index * 100}>
              <div className="group relative h-80 rounded-[40px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <img 
                    src={item.image} 
                    alt="" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-80"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <span className="text-tertiary font-black text-[10px] uppercase tracking-widest mb-2">
                        {isAr ? item.category_ar : item.category_en}
                    </span>
                    <h3 className="text-2xl font-black text-white mb-2">
                        {isAr ? item.title_ar : item.title_en}
                    </h3>
                    <div className="w-12 h-1 bg-tertiary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Contact CTA */}
        <ScrollReveal animation="zoom-in" className="mt-20">
            <div className="bg-primary rounded-[50px] p-12 text-center text-white relative overflow-hidden shadow-2xl">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                 <h2 className="text-3xl md:text-4xl font-black mb-6 relative z-10">
                    {isAr ? 'هل لديك مشروع كهروميكانيكي؟' : 'Have an MEP Project?'}
                 </h2>
                 <p className="text-white/60 mb-10 max-w-2xl mx-auto relative z-10">
                    {isAr ? 'فريقنا الهندسي مستعد لتقديم الحلول المتكاملة لمشروعك بأعلى معايير الجودة العالمية.' : 'Our engineering team is ready to provide integrated solutions for your project with global quality standards.'}
                 </p>
                 <button 
                    onClick={() => navigate('contact')}
                    className="inline-block bg-tertiary text-white px-12 py-5 rounded-2xl font-black hover:scale-105 transition-all shadow-xl relative z-10"
                 >
                    {isAr ? 'ابدأ مشروعك معنا الآن' : 'Start Your Project Now'}
                 </button>
            </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default ProjectsPage;
