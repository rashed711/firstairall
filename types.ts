
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
}

export interface Product {
  id: number;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  image: string;
  specs?: string[];
}

export interface Article {
  id: number;
  title_ar: string;
  title_en: string;
  content_ar: string;
  content_en: string;
  created_at: string;
}

export interface Settings {
  site_name_ar: string;
  site_name_en: string;
  phone: string;
  email: string;
}

export type Language = 'ar' | 'en';

// Define strict Page types for routing safety
export type Page = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'products'
  | 'contact' 
  | 'articles' 
  | 'backend' 
  | 'service' 
  | 'article';