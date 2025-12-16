import React, { useState } from 'react';
import { sqlContent, phpConfig, phpRead, phpLogin, jsFrontend } from '../utils/backendCode';
import { Language } from '../types';

interface BackendViewerProps {
  lang: Language;
}

const BackendViewer: React.FC<BackendViewerProps> = ({ lang }) => {
  const [activeFile, setActiveFile] = useState('sql');
  const isAr = lang === 'ar';

  const files = [
    { id: 'sql', name: 'setup.sql', content: sqlContent, desc: 'Database Schema & Seeds' },
    { id: 'config', name: 'api/config.php', content: phpConfig, desc: 'DB Connection' },
    { id: 'read', name: 'api/read.php', content: phpRead, desc: 'Read Endpoint' },
    { id: 'login', name: 'api/login.php', content: phpLogin, desc: 'Auth Endpoint' },
    { id: 'js', name: 'main.js', content: jsFrontend, desc: 'Frontend Fetch Snippet' },
  ];

  const currentFile = files.find(f => f.id === activeFile);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12" dir="ltr">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
        <div className="bg-primary text-white p-6 border-b border-secondary">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
            Backend Deliverables
          </h2>
          <p className="text-gray-300 text-sm">
            {isAr 
             ? 'هذه هي الملفات المطلوبة للنظام الخلفي (Backend). يمكنك نسخها واستخدامها.' 
             : 'These are the requested backend system files. You can copy and implement them.'}
          </p>
        </div>

        <div className="flex flex-col md:flex-row min-h-[600px]">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-gray-50 border-r border-gray-200">
            <ul className="flex flex-col">
              {files.map((file) => (
                <li key={file.id}>
                  <button
                    onClick={() => setActiveFile(file.id)}
                    className={`w-full text-left px-4 py-4 text-sm font-medium transition-all border-b border-gray-100 ${
                      activeFile === file.id
                        ? 'bg-white text-primary border-l-4 border-l-tertiary shadow-sm'
                        : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                    }`}
                  >
                    <div className="font-mono text-xs text-tertiary mb-1 font-bold">{file.name}</div>
                    <div className="text-xs opacity-80">{file.desc}</div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Code View */}
          <div className="flex-1 bg-[#1e1e1e] overflow-auto relative">
             <div className="p-6">
                <div className="flex justify-between items-center mb-6 sticky top-0 bg-[#1e1e1e] pb-4 border-b border-gray-700 z-10">
                    <span className="text-gray-400 font-mono text-sm flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500"></span>
                        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                        <span className="w-3 h-3 rounded-full bg-green-500"></span>
                        <span className="ml-2">{currentFile?.name}</span>
                    </span>
                    <button 
                        onClick={() => {navigator.clipboard.writeText(currentFile?.content || '')}}
                        className="bg-tertiary hover:bg-opacity-80 text-white text-xs px-4 py-2 rounded-md transition font-bold flex items-center gap-1"
                    >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                        Copy
                    </button>
                </div>
                <pre className="font-mono text-sm text-gray-300 whitespace-pre-wrap leading-relaxed selection:bg-tertiary selection:text-white">
                    {currentFile?.content}
                </pre>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackendViewer;