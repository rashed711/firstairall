
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
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] bg-green-600 text-white px-8 py-3 rounded-full shadow-2xl font-bold animate-bounce flex items-center gap-2 text-sm">
          <i className="fas fa-check-circle"></i> {saveStatus}
        </div>
      )}

      {/* Admin Sidebar - Optimized for Mobile (Horizontal scroll on mobile) */}
      <div className="w-full lg:w-64 bg-primary text-white p-4 lg:p-6 lg:space-y-2 shrink-0 flex lg:flex-col overflow-x-auto lg:overflow-x-visible">
        <h2 className="hidden lg:flex text-xl font-black mb-10 border-b border-white/10 pb-4 items-center gap-3">
            <i className="fas fa-user-shield text-tertiary"></i> {isAr ? 'الإدارة' : 'Admin'}
        </h2>
        <div className="flex lg:flex-col gap-2 min-w-max lg:min-w-0">
            {[
              { id: 'overview', label: isAr ? 'نظرة' : 'Overview', icon: 'fa-chart-pie' },
              { id: 'categories', label: isAr ? 'الأقسام' : 'Cats', icon: 'fa-sitemap' },
              { id: 'products', label: isAr ? 'المنتجات' : 'Prods', icon: 'fa-box' },
              { id: 'services', label: isAr ? 'الخدمات' : 'Servs', icon: 'fa-cogs' },
              { id: 'articles', label: isAr ? 'المقالات' : 'Arts', icon: 'fa-newspaper' },
              { id: 'methodology', label: isAr ? 'المشاريع' : 'Proj', icon: 'fa-project-diagram' },
              { id: 'settings', label: isAr ? 'الإعدادات' : 'Sets', icon: 'fa-sliders-h' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id as any)}
                className={`flex items-center gap-2 lg:gap-3 p-3 lg:p-4 rounded-xl transition-all whitespace-nowrap ${activeSubTab === tab.id ? 'bg-tertiary shadow-lg' : 'hover:bg-white/10'}`}
              >
                <i className={`fas ${tab.icon} w-5`}></i>
                <span className="font-bold text-xs lg:text-sm">{tab.label}</span>
              </button>
            ))}
        </div>
      </div>

      <div className="flex-1 p-4 md:p-8 overflow-hidden">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h1 className="text-xl md:text-2xl font-black text-primary uppercase">{activeSubTab}</h1>
          {activeSubTab !== 'overview' && activeSubTab !== 'settings' && (
            <button onClick={() => handleOpenForm()} className="w-full sm:w-auto bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-secondary transition-all text-sm">
              + {isAr ? 'إضافة جديد' : 'Add New'}
            </button>
          )}
        </div>

        {/* Dynamic Table with Horizontal Scroll for Mobile */}
        {activeSubTab !== 'overview' && activeSubTab !== 'settings' && (
          <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            <div className="overflow-x-auto">
                <table className="w-full text-start min-w-[500px]">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="p-4 text-[10px] md:text-xs font-black text-gray-400 uppercase text-start">{isAr ? 'العنوان' : 'Title'}</th>
                      <th className="p-4 text-[10px] md:text-xs font-black text-gray-400 uppercase text-start">{isAr ? 'المعلومات' : 'Info'}</th>
                      <th className="p-4 text-[10px] md:text-xs font-black text-gray-400 uppercase w-24">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {getCurrentData().map((item: any) => (
                      <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-primary text-sm">{isAr ? (item.title_ar || item.name_ar) : (item.title_en || item.name_en)}</td>
                        <td className="p-4 text-gray-500 text-xs">
                          {activeSubTab === 'products' && categories.find(c => c.id === item.categoryId)?.[isAr ? 'name_ar' : 'name_en']}
                          {activeSubTab === 'categories' && (categories.find(c => c.id === item.parentId)?.[isAr ? 'name_ar' : 'name_en'] || 'Root')}
                          {activeSubTab === 'articles' && item.created_at.split('T')[0]}
                          {activeSubTab === 'methodology' && (isAr ? item.category_ar : item.category_en)}
                          {activeSubTab === 'services' && (isAr ? 'خدمة ميكانيكية' : 'MEP Service')}
                        </td>
                        <td className="p-4 flex gap-2">
                          <button onClick={() => handleOpenForm(item)} className="text-blue-500 p-2"><i className="fas fa-edit"></i></button>
                          <button onClick={() => handleDelete(activeSubTab, item.id)} className="text-red-500 p-2"><i className="fas fa-trash"></i></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            </div>
          </div>
        )}
      </div>

      {/* Modal - Improved for Mobile */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-2 sm:p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative w-full max-w-2xl bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden animate-zoom-in max-h-[95vh] flex flex-col">
            <div className="bg-primary p-5 text-white flex justify-between items-center shrink-0">
              <h3 className="font-bold">{editingItem ? 'Edit' : 'Add'} {activeSubTab}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-white"><i className="fas fa-times"></i></button>
            </div>
            
            <form onSubmit={handleSaveItem} className="p-4 sm:p-8 space-y-4 md:space-y-6 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeSubTab === 'categories' ? (
                  <>
                    <input type="text" value={formData.name_ar} onChange={e => setFormData({...formData, name_ar: e.target.value})} placeholder="Arabic Name" className="w-full p-3 md:p-4 bg-gray-50 rounded-xl border-none font-bold text-sm" required />
                    <input type="text" value={formData.name_en} onChange={e => setFormData({...formData, name_en: e.target.value})} placeholder="English Name" className="w-full p-3 md:p-4 bg-gray-50 rounded-xl border-none font-bold text-sm" required />
                  </>
                ) : (
                  <>
                    <input type="text" value={formData.title_ar} onChange={e => setFormData({...formData, title_ar: e.target.value})} placeholder="Title (AR)" className="w-full p-3 md:p-4 bg-gray-50 rounded-xl border-none font-bold text-sm" required />
                    <input type="text" value={formData.title_en} onChange={e => setFormData({...formData, title_en: e.target.value})} placeholder="Title (EN)" className="w-full p-3 md:p-4 bg-gray-50 rounded-xl border-none font-bold text-sm" required />
                  </>
                )}
              </div>
              <input type="text" value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} placeholder="Image URL" className="w-full p-3 md:p-4 bg-gray-50 rounded-xl border-none text-sm" required />
              
              <div className="flex gap-4 pt-6 border-t shrink-0">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-3 md:py-4 bg-gray-100 rounded-xl font-bold text-sm">Cancel</button>
                <button type="submit" className="flex-1 py-3 md:py-4 bg-primary text-white rounded-xl font-bold shadow-lg text-sm">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
