
import React, { useState } from 'react';
import { Language } from '../types';
import { APP_CONFIG } from '../constants';

interface AdminLoginProps {
  lang: Language;
  onLogin: (success: boolean) => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ lang, onLogin }) => {
  const isAr = lang === 'ar';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      onLogin(true);
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary/5 p-4" dir={isAr ? 'rtl' : 'ltr'}>
      <div className={`max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transition-all ${error ? 'animate-shake' : ''}`}>
        <div className="bg-primary p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
          <div className="relative z-10">
            <div className="w-20 h-20 bg-white rounded-2xl mx-auto p-4 shadow-xl mb-4 flex items-center justify-center">
              <img src={APP_CONFIG.logo} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <h2 className="text-2xl font-black text-white">{isAr ? 'دخول المسؤول' : 'Admin Login'}</h2>
            <p className="text-white/60 text-sm mt-1">{isAr ? 'أدخل بيانات الاعتماد للمتابعة' : 'Enter credentials to proceed'}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-bold flex items-center gap-3 animate-fade-in">
              <i className="fas fa-exclamation-circle"></i>
              {isAr ? 'بيانات الدخول غير صحيحة' : 'Invalid credentials'}
            </div>
          )}

          <div className="space-y-2">
            <label className="text-xs font-black text-gray-500 uppercase tracking-wider">{isAr ? 'اسم المستخدم' : 'Username'}</label>
            <div className="relative">
              <i className="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 rtl:left-auto rtl:right-4"></i>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                className={`w-full py-4 ${isAr ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4'} bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-primary transition-all font-bold`}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black text-gray-500 uppercase tracking-wider">{isAr ? 'كلمة المرور' : 'Password'}</label>
            <div className="relative">
              <i className="fas fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 rtl:left-auto rtl:right-4"></i>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className={`w-full py-4 ${isAr ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4'} bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-primary transition-all font-bold`}
                required
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-tertiary text-white py-4 rounded-xl font-black shadow-lg hover:bg-red-700 transition-all transform active:scale-95"
          >
            {isAr ? 'تسجيل الدخول' : 'Sign In'}
          </button>

          <p className="text-center text-gray-400 text-xs">
            {isAr ? 'بيانات افتراضية: admin / password' : 'Default data: admin / password'}
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
