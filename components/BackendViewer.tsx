
import React, { useState } from 'react';
import { sqlContent, phpRouter, phpController, jsFrontend } from '../utils/backendCode';
import { Language } from '../types';

interface BackendViewerProps {
  lang: Language;
}

const BackendViewer: React.FC<BackendViewerProps> = ({ lang }) => {
  const [activeFile, setActiveFile] = useState('sql');
  const isAr = lang === 'ar';

  const files = [
    { id: 'sql', name: 'schema.sql', content: sqlContent, desc: 'Database Definitions', type: 'SQL' },
    { id: 'router', name: 'index.php', content: phpRouter, desc: 'REST Entry Point', type: 'PHP' },
    { id: 'controller', name: 'ServiceController.php', content: phpController, desc: 'Business Logic', type: 'PHP' },
    { id: 'js', name: 'apiService.js', content: jsFrontend, desc: 'Frontend Integration', type: 'JS' },
  ];

  const currentFile = files.find(f => f.id === activeFile);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12" dir="ltr">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Info */}
        <div className="w-full lg:w-1/4">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <i className="fas fa-layer-group text-tertiary"></i>
              System Arch
            </h2>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              {isAr 
                ? 'هيكلية النظام الخلفي مصممة بمعايير RESTful لضمان القابلية للتوسع وسهولة الصيانة.' 
                : 'The backend architecture follows RESTful standards for maximum scalability and maintainability.'}
            </p>
            
            <nav className="space-y-2">
              {files.map((file) => (
                <button
                  key={file.id}
                  onClick={() => setActiveFile(file.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all border ${
                    activeFile === file.id
                      ? 'bg-primary text-white border-primary shadow-lg scale-[1.02]'
                      : 'bg-white text-gray-600 border-gray-100 hover:border-tertiary/30'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-mono text-xs opacity-70">{file.type}</span>
                    <i className={`fas ${activeFile === file.id ? 'fa-folder-open' : 'fa-folder'} text-[10px]`}></i>
                  </div>
                  <div className="font-bold text-sm truncate">{file.name}</div>
                  <div className="text-[10px] opacity-60 mt-1">{file.desc}</div>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Code Console */}
        <div className="flex-1 bg-[#0d1117] rounded-2xl shadow-2xl overflow-hidden border border-gray-800">
          <div className="bg-[#161b22] px-6 py-4 border-b border-gray-800 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <span className="text-gray-400 font-mono text-xs ml-4">
                src/backend/{currentFile?.name}
              </span>
            </div>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(currentFile?.content || '');
                alert(isAr ? 'تم النسخ!' : 'Copied to clipboard!');
              }}
              className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
            >
              <i className="far fa-copy"></i>
              {isAr ? 'نسخ' : 'Copy'}
            </button>
          </div>
          
          <div className="p-8 overflow-auto max-h-[600px] font-mono text-sm">
            <pre className="text-gray-300 leading-relaxed whitespace-pre">
              {currentFile?.content}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackendViewer;
