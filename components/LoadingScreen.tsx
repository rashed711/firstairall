
import React from 'react';
import { Language } from '../types';
import { APP_CONFIG } from '../constants';

interface LoadingScreenProps {
    isLoading: boolean;
    lang: Language;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading, lang }) => {
    const isAr = lang === 'ar';

    return (
        <div 
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0F2C59] transition-all duration-700 ${
                isLoading ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
            }`}
        >
            {/* Background Ambient Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3282B8] rounded-full blur-[150px] opacity-10 animate-pulse"></div>
            </div>

            <div className="relative">
                {/* Ripple Effect Circles - Updated to Soft Red */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#E63946]/30 rounded-full animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-[#E63946]/10 rounded-full animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '0.5s' }}></div>

                {/* Rotating Rings Container */}
                <div className="relative w-56 h-56 flex items-center justify-center">
                     {/* Outer Ring (Red) */}
                    <div className="absolute inset-0 border-t-4 border-r-4 border-[#E63946] rounded-full animate-[spin_1.5s_linear_infinite] shadow-[0_0_25px_rgba(230,57,70,0.5)]"></div>
                    
                    {/* Middle Ring (White, Reverse) */}
                    <div className="absolute inset-4 border-b-4 border-l-4 border-white/40 rounded-full animate-[spin_2.5s_linear_infinite_reverse]"></div>
                    
                    {/* Inner Static Ring Decoration */}
                    <div className="absolute inset-10 border border-white/10 rounded-full"></div>

                    {/* Logo Center - Updated to Circular Design */}
                    <div className="w-32 h-32 md:w-36 md:h-36 bg-white rounded-full shadow-[0_0_40px_rgba(230,57,70,0.4)] flex items-center justify-center relative z-10 animate-pulse p-4 border-4 border-white/20 overflow-hidden">
                         <img src={APP_CONFIG.logo} alt="Logo" className="w-full h-full object-contain" />
                    </div>
                </div>
            </div>

            {/* Text Section */}
            <div className="mt-12 text-center relative z-10">
                <div className="flex items-center justify-center gap-2 bg-white/5 px-8 py-3 rounded-full backdrop-blur-sm border border-white/10 mx-auto w-fit shadow-lg">
                    <span className="text-[#E63946] text-base font-bold tracking-widest uppercase">
                        {isAr ? 'جاري التجهيز' : 'PROCESSING'}
                    </span>
                    <div className="flex gap-1 items-end h-5 pb-1">
                         <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
                         <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></span>
                         <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
