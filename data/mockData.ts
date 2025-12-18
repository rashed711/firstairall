
import { Service, Article, Settings, Product } from '../types';

export const mockSettings: Settings = {
  site_name_ar: "فرست اير للمقاولات",
  site_name_en: "First Air Contracting",
  phone: "+966532425777",
  email: "info@firstair-sa.com"
};

export const mockServices: Service[] = [
  { 
    id: 1, 
    title_ar: "أنظمة التكييف والتهوية (HVAC)", 
    title_en: "HVAC Systems",
    description_ar: "حلول متكاملة من فرست اير لتصميم وتوريد وتركيب أنظمة التكييف المركزي.",
    description_en: "Integrated solutions for design, supply, and installation of HVAC systems.",
    long_description_ar: "نقدم في فرست اير أحدث حلول التكييف المركزي والتهوية الصناعية للمشاريع الكبرى. تشمل خدماتنا أنظمة الشيلر (Chillers)، وحدات المناولة (AHUs)، وأنظمة VRF المتطورة.",
    long_description_en: "We offer the latest central air conditioning and industrial ventilation solutions for major projects. Our services include Chillers, Air Handling Units (AHUs), and advanced VRF systems.",
    features_ar: ["أنظمة VRF/VRV", "التكييف المركزي (Chillers)", "تصنيع وتركيب الدكت", "تهوية المستودعات والمصانع"],
    features_en: ["VRF/VRV Systems", "Central Cooling (Chillers)", "Duct Fabrication & Install", "Warehouse Ventilation"]
  },
  { 
    id: 2, 
    title_ar: "أنظمة مكافحة الحريق", 
    title_en: "Fire Fighting Systems",
    description_ar: "أنظمة أمان وحماية من الحريق معتمدة من فرست اير وفق أكواد الدفاع المدني.",
    description_en: "Certified fire safety and protection systems per Civil Defense codes.",
    long_description_ar: "سلامة منشأتك هي أولويتنا في فرست اير. نقوم بتصميم وتركيب شبكات مكافحة الحريق بأنواعها: رشاشات المياه، صناديق الحريق، وأنظمة الغازات النظيفة.",
    long_description_en: "Your facility's safety is our priority. We design and install fire fighting networks of all types: Sprinklers, Fire Hose Cabinets, and Clean Agent systems.",
    features_ar: ["شبكات الرش الآلي", "أنظمة الإنذار المبكر", "مضخات الحريق المعتمدة", "صيانة دورية واختبارات"],
    features_en: ["Automatic Sprinkler Systems", "Early Warning Systems", "Certified Fire Pumps", "Periodic Maintenance & Testing"]
  },
  // Other services remain the same or updated similarly...
  { 
    id: 3, 
    title_ar: "الأعمال الصحية والسباكة", 
    title_en: "Plumbing & Sanitary",
    description_ar: "تأسيس شبكات التغذية والصرف للمباني التجارية والصناعية.",
    description_en: "Establishment of water supply and drainage networks for commercial/industrial buildings.",
    long_description_ar: "تنفيذ شبكات تغذية المياه والصرف الصحي باستخدام أفضل الخامات. خبرة واسعة في محطات المعالجة، شبكات الغازات الطبية للمستشفيات، ونظام تصريف السيول.",
    long_description_en: "Execution of water supply and sewage networks using the best materials. Extensive experience in treatment plants, medical gas networks for hospitals, and storm drainage.",
    features_ar: ["شبكات التغذية والصرف", "الغازات الطبية", "محطات الرفع والمعالجة", "سخانات ومبادلات حرارية"],
    features_en: ["Supply & Drainage Networks", "Medical Gases", "Lifting & Treatment Stations", "Heaters & Heat Exchangers"]
  }
];

export const mockArticles: Article[] = [
  { 
    id: 1, 
    title_ar: "أهمية أنظمة VRF في ترشيد الطاقة للمباني التجارية", 
    title_en: "Importance of VRF Systems in Energy Saving for Commercial Buildings",
    content_ar: "<p>تعتبر أنظمة التدفق المتغير (VRF) التي تقدمها فرست اير ثورة في عالم التكييف، حيث توفر ما يصل إلى 40% من استهلاك الكهرباء...</p>",
    content_en: "<p>Variable Refrigerant Flow (VRF) systems are a revolution in HVAC, saving up to 40% of electricity consumption compared to traditional systems...</p>",
    created_at: "2025-01-15T10:00:00Z",
    image: "https://i.pinimg.com/1200x/93/e4/c0/93e4c08e57c93b6f31e0f637fff21e5c.jpg"
  },
  // Other articles...
];

export const mockProducts: Product[] = [
    // Same as before but can include "فرست اير" in descriptions if needed.
];
