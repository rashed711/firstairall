
import React, { useState } from 'react';
import { Language, Service, Product, Article, Settings, Category, MethodologyItem } from '../types';

interface AdminDashboardProps {
  lang: Language;
  services: Service[];
  setServices: React.Dispatch<React.SetStateAction<Service[]>>;
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  articles: Article[];
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
  categories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  methodology: MethodologyItem[];
  setMethodology: React.Dispatch<React.SetStateAction<MethodologyItem[]>>;
  settings: Settings;
  setSettings: React.Dispatch<React.SetStateAction<Settings>>;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({
  lang, services, setServices, products, setProducts, articles, setArticles, categories, setCategories, methodology, setMethodology, settings, setSettings
}) => {
  const isAr = lang === 'ar';
  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'services' | 'products' | 'categories' | 'articles' | 'methodology' | 'settings'>('overview');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState<any>({});
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  // States for dynamic features
  const [newFeatureAr, setNewFeatureAr] = useState('');
  const [newFeatureEn, setNewFeatureEn] = useState('');

  const showToast = (msg: string) => {
    setSaveStatus(msg);
    setTimeout(() => setSaveStatus(null), 3000);
  };

  const handleDelete = (type: string, id: number) => {
    if (!window.confirm(isAr ? 'هل أنت متأكد من الحذف؟' : 'Are you sure you want to delete?')) return;
    if (type === 'services') setServices(prev => prev.filter(s => s.id !== id));
    if (type === 'products') setProducts(prev => prev.filter(p => p.id !== id));
    if (type === 'categories') setCategories(prev => prev.filter(c => c.id !== id));
    if (type === 'articles') setArticles(prev => prev.filter(a => a.id !== id));
    if (type === 'methodology') setMethodology(prev => prev.filter(m => m.id !== id));
    showToast(isAr ? 'تم الحذف بنجاح' : 'Deleted successfully');
  };

  const handleOpenForm = (item: any = null) => {
    if (item) {
      setEditingItem(item);
      setFormData({ 
        ...item,
        features_ar: item.features_ar || [],
        features_en: item.features_en || []
      });
    } else {
      setEditingItem(null);
      if (activeSubTab === 'categories') setFormData({ name_ar: '', name_en: '', parentId: null });
      if (activeSubTab === 'products') setFormData({ title_ar: '', title_en: '', description_ar: '', description_en: '', image: '', categoryId: categories[0]?.id || 0 });
      if (activeSubTab === 'services') setFormData({ title_ar: '', title_en: '', description_ar: '', description_en: '', long_description_ar: '', long_description_en: '', image: '', features_ar: [], features_en: [] });
      if (activeSubTab === 'articles') setFormData({ title_ar: '', title_en: '', content_ar: '', content_en: '', image: '', created_at: new Date().toISOString() });
      if (activeSubTab === 'methodology') setFormData({ title_ar: '', title_en: '', category_ar: '', category_en: '', image: '' });
    }
    setNewFeatureAr('');
    setNewFeatureEn('');
    setIsModalOpen(true);
  };

  const handleSaveItem = (e: React.FormEvent) => {
    e.preventDefault();
    const id = editingItem ? editingItem.id : Date.now();
    const newItem = { ...formData, id };

    if (activeSubTab === 'categories') setCategories(prev => editingItem ? prev.map(c => c.id === id ? newItem : c) : [...prev, newItem]);
    else if (activeSubTab === 'products') setProducts(prev => editingItem ? prev.map(p => p.id === id ? newItem : p) : [...prev, newItem]);
    else if (activeSubTab === 'services') setServices(prev => editingItem ? prev.map(s => s.id === id ? newItem : s) : [...prev, newItem]);
    else if (activeSubTab === 'articles') setArticles(prev => editingItem ? prev.map(a => a.id === id ? newItem : a) : [...prev, newItem]);
    else if (activeSubTab === 'methodology') setMethodology(prev => editingItem ? prev.map(m => m.id === id ? newItem : m) : [...prev, newItem]);

    setIsModalOpen(false);
    showToast(isAr ? 'تم الحفظ بنجاح' : 'Saved successfully');
  };

  const addFeature = (lang: 'ar' | 'en') => {
    const featureText = lang === 'ar' ? newFeatureAr : newFeatureEn;
    if (!featureText.trim()) return;
    const key = lang === 'ar' ? 'features_ar' : 'features_en';
    setFormData({ ...formData, [key]: [...(formData[key] || []), featureText.trim()] });
    if (lang === 'ar') setNewFeatureAr(''); else setNewFeatureEn('');
  };

  const removeFeature = (lang: 'ar' | 'en', index: number) => {
    const key = lang === 'ar' ? 'features_ar' : 'features_en';
    setFormData({ ...formData, [key]: (formData[key] || []).filter((_: any, i: number) => i !== index) });
  };

  const getCurrentData = () => {
    switch(activeSubTab) {
        case 'services': return services;
        case 'products': return products;
        case 'categories': return categories;
        case 'articles': return articles;
        case 'methodology': return methodology;
        default: return [];
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row" dir={isAr ? 'rtl' : 'ltr'}>
      {saveStatus && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] bg-green-600 text-white px-8 py-3 rounded-full shadow-2xl font-bold animate-bounce flex items-center gap-2">
          <i className="fas fa-check-circle"></i> {saveStatus}
        </div>
      )}

      {/* Admin Sidebar */}
      <div className="w-full lg:w-64 bg-primary text-white p-6 space-y-2 shrink-0">
        <h2 className="text-xl font-black mb-10 border-b border-white/10 pb-4 flex items-center gap-3">
            <i className="fas fa-user-shield text-tertiary"></i> {isAr ? 'لوحة الإدارة' : 'Admin Area'}
        </h2>
        {[
          { id: 'overview', label: isAr ? 'نظرة عامة' : 'Overview', icon: 'fa-chart-pie' },
          { id: 'categories', label: isAr ? 'الأقسام' : 'Categories', icon: 'fa-sitemap' },
          { id: 'products', label: isAr ? 'المنتجات' : 'Products', icon: 'fa-box' },
          { id: 'services', label: isAr ? 'الخدمات' : 'Services', icon: 'fa-cogs' },
          { id: 'articles', label: isAr ? 'المقالات' : 'Articles', icon: 'fa-newspaper' },
          { id: 'methodology', label: isAr ? 'المنهجية' : 'Methodology', icon: 'fa-project-diagram' },
          { id: 'settings', label: isAr ? 'الإعدادات' : 'Settings', icon: 'fa-sliders-h' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveSubTab(tab.id as any)}
            className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${activeSubTab === tab.id ? 'bg-tertiary shadow-lg' : 'hover:bg-white/10'}`}
          >
            <i className={`fas ${tab.icon} w-5`}></i>
            <span className="font-bold text-sm">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-black text-primary uppercase">{activeSubTab}</h1>
          {activeSubTab !== 'overview' && activeSubTab !== 'settings' && (
            <button onClick={() => handleOpenForm()} className="bg-primary text-white px-6 py-2 rounded-xl font-bold shadow-lg hover:bg-secondary transition-all">
              + {isAr ? 'إضافة جديد' : 'Add New'}
            </button>
          )}
        </div>

        {/* Dynamic Table */}
        {activeSubTab !== 'overview' && activeSubTab !== 'settings' && (
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            <table className="w-full text-start">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="p-4 text-xs font-black text-gray-400 uppercase text-start">{isAr ? 'العنوان' : 'Title'}</th>
                  <th className="p-4 text-xs font-black text-gray-400 uppercase text-start">{isAr ? 'التصنيف/المعلومات' : 'Info'}</th>
                  <th className="p-4 text-xs font-black text-gray-400 uppercase w-24">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {getCurrentData().map((item: any) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-bold text-primary">{isAr ? (item.title_ar || item.name_ar) : (item.title_en || item.name_en)}</td>
                    <td className="p-4 text-gray-500 text-sm">
                      {activeSubTab === 'products' && categories.find(c => c.id === item.categoryId)?.[isAr ? 'name_ar' : 'name_en']}
                      {activeSubTab === 'categories' && (categories.find(c => c.id === item.parentId)?.[isAr ? 'name_ar' : 'name_en'] || 'Root')}
                      {activeSubTab === 'articles' && item.created_at.split('T')[0]}
                      {activeSubTab === 'methodology' && (isAr ? item.category_ar : item.category_en)}
                      {activeSubTab === 'services' && (isAr ? 'خدمة ميكانيكية' : 'MEP Service')}
                    </td>
                    <td className="p-4 flex gap-2">
                      <button onClick={() => handleOpenForm(item)} className="text-blue-500 hover:scale-125 transition-transform p-2"><i className="fas fa-edit"></i></button>
                      <button onClick={() => handleDelete(activeSubTab, item.id)} className="text-red-500 hover:scale-125 transition-transform p-2"><i className="fas fa-trash"></i></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-zoom-in max-h-[90vh] flex flex-col">
            <div className="bg-primary p-6 text-white flex justify-between items-center shrink-0">
              <h3 className="text-xl font-bold">{editingItem ? 'Edit' : 'Add New'} {activeSubTab}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-white hover:text-tertiary"><i className="fas fa-times text-xl"></i></button>
            </div>
            
            <form onSubmit={handleSaveItem} className="p-8 space-y-6 overflow-y-auto">
              <div className="grid md:grid-cols-2 gap-4">
                {activeSubTab === 'categories' ? (
                  <>
                    <input type="text" value={formData.name_ar} onChange={e => setFormData({...formData, name_ar: e.target.value})} placeholder="Arabic Name" className="w-full p-4 bg-gray-50 rounded-2xl border-none font-bold" required />
                    <input type="text" value={formData.name_en} onChange={e => setFormData({...formData, name_en: e.target.value})} placeholder="English Name" className="w-full p-4 bg-gray-50 rounded-2xl border-none font-bold" required />
                  </>
                ) : (
                  <>
                    <input type="text" value={formData.title_ar} onChange={e => setFormData({...formData, title_ar: e.target.value})} placeholder="Title (AR)" className="w-full p-4 bg-gray-50 rounded-2xl border-none font-bold" required />
                    <input type="text" value={formData.title_en} onChange={e => setFormData({...formData, title_en: e.target.value})} placeholder="Title (EN)" className="w-full p-4 bg-gray-50 rounded-2xl border-none font-bold" required />
                  </>
                )}
              </div>

              {activeSubTab !== 'categories' && (
                <input type="text" value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} placeholder="Image URL" className="w-full p-4 bg-gray-50 rounded-2xl border-none" required />
              )}

              {(activeSubTab === 'methodology') && (
                <div className="grid md:grid-cols-2 gap-4">
                   <input type="text" value={formData.category_ar} onChange={e => setFormData({...formData, category_ar: e.target.value})} placeholder="Category Label (AR) - e.g. Phase 1" className="w-full p-4 bg-gray-50 rounded-2xl border-none" required />
                   <input type="text" value={formData.category_en} onChange={e => setFormData({...formData, category_en: e.target.value})} placeholder="Category Label (EN) - e.g. Phase 1" className="w-full p-4 bg-gray-50 rounded-2xl border-none" required />
                </div>
              )}

              {(activeSubTab === 'services' || activeSubTab === 'products') && (
                <div className="grid md:grid-cols-2 gap-4">
                   <textarea value={formData.description_ar} onChange={e => setFormData({...formData, description_ar: e.target.value})} placeholder="Description (AR)" className="w-full p-4 bg-gray-50 rounded-2xl border-none h-24" required />
                   <textarea value={formData.description_en} onChange={e => setFormData({...formData, description_en: e.target.value})} placeholder="Description (EN)" className="w-full p-4 bg-gray-50 rounded-2xl border-none h-24" required />
                </div>
              )}

              {activeSubTab === 'articles' && (
                <div className="grid md:grid-cols-2 gap-4">
                   <textarea value={formData.content_ar} onChange={e => setFormData({...formData, content_ar: e.target.value})} placeholder="Content (AR)" className="w-full p-4 bg-gray-50 rounded-2xl border-none h-40" required />
                   <textarea value={formData.content_en} onChange={e => setFormData({...formData, content_en: e.target.value})} placeholder="Content (EN)" className="w-full p-4 bg-gray-50 rounded-2xl border-none h-40" required />
                </div>
              )}

              {activeSubTab === 'products' && (
                <select value={formData.categoryId} onChange={e => setFormData({...formData, categoryId: parseInt(e.target.value)})} className="w-full p-4 bg-gray-50 rounded-2xl border-none" required>
                  {categories.map(c => <option key={c.id} value={c.id}>{isAr ? c.name_ar : c.name_en}</option>)}
                </select>
              )}

              {activeSubTab === 'categories' && (
                <select value={formData.parentId || ''} onChange={e => setFormData({...formData, parentId: e.target.value ? parseInt(e.target.value) : null})} className="w-full p-4 bg-gray-50 rounded-2xl border-none">
                  <option value="">No Parent (Root)</option>
                  {categories.filter(c => c.id !== editingItem?.id).map(c => <option key={c.id} value={c.id}>{isAr ? c.name_ar : c.name_en}</option>)}
                </select>
              )}

              {activeSubTab === 'services' && (
                <div className="space-y-4 pt-4 border-t">
                  <h4 className="font-bold text-primary">{isAr ? 'مميزات الخدمة' : 'Features'}</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <div className="flex gap-2">
                          <input type="text" value={newFeatureAr} onChange={e => setNewFeatureAr(e.target.value)} placeholder="ميزة (عربي)" className="flex-1 p-2 bg-gray-100 rounded-lg text-sm" />
                          <button type="button" onClick={() => addFeature('ar')} className="bg-primary text-white w-8 h-8 rounded-lg">+</button>
                       </div>
                       <div className="flex flex-wrap gap-1">
                          {(formData.features_ar || []).map((f: string, i: number) => <span key={i} className="bg-gray-100 px-2 py-1 rounded-md text-[10px] flex items-center gap-1">{f} <button type="button" onClick={() => removeFeature('ar', i)} className="text-red-500 font-bold">×</button></span>)}
                       </div>
                    </div>
                    <div className="space-y-2">
                       <div className="flex gap-2">
                          <input type="text" value={newFeatureEn} onChange={e => setNewFeatureEn(e.target.value)} placeholder="Feature (EN)" className="flex-1 p-2 bg-gray-100 rounded-lg text-sm" />
                          <button type="button" onClick={() => addFeature('en')} className="bg-primary text-white w-8 h-8 rounded-lg">+</button>
                       </div>
                       <div className="flex flex-wrap gap-1">
                          {(formData.features_en || []).map((f: string, i: number) => <span key={i} className="bg-gray-100 px-2 py-1 rounded-md text-[10px] flex items-center gap-1">{f} <button type="button" onClick={() => removeFeature('en', i)} className="text-red-500 font-bold">×</button></span>)}
                       </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-4 pt-6 border-t shrink-0">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-4 bg-gray-100 rounded-2xl font-bold">Cancel</button>
                <button type="submit" className="flex-1 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg hover:bg-secondary transition-all">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
