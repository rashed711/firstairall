
export interface Category {
  id: number;
  name_ar: string;
  name_en: string;
  parentId: number | null; // null يعني قسم رئيسي
}

export interface Product {
  id: number;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  image: string;
  categoryId: number;
  specs?: string[];
  features_ar?: string[];
  features_en?: string[];
}

export interface Service {
  id: number;
  title_ar: string;
  title_en: string;
  description_ar?: string;
  description_en?: string;
  long_description_ar?: string;
  long_description_en?: string;
  features_ar?: string[];
  features_en?: string[];
  icon?: string;
  image?: string;
}

export interface Article {
  id: number;
  title_ar: string;
  title_en: string;
  content_ar: string;
  content_en: string;
  created_at: string;
  image?: string;
}

export interface MethodologyItem {
  id: number;
  title_ar: string;
  title_en: string;
  category_ar: string;
  category_en: string;
  image: string;
}

export interface Settings {
  site_name_ar: string;
  site_name_en: string;
  phone: string;
  email: string;
  phones: {
    ksa: string;
    egypt: string;
    oman: string;
  };
  addresses: {
    ar: string;
    en: string;
  };
}

export type Language = 'ar' | 'en';

export type Page = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'products'
  | 'contact' 
  | 'articles' 
  | 'projects'
  | 'backend' 
  | 'admin'
  | 'admin-login'
  | 'service' 
  | 'article'
  | 'product';
