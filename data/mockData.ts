
import { Service, Article, Settings, Product } from '../types';

export const mockSettings: Settings = {
  site_name_ar: "فرست اير للمقاولات",
  site_name_en: "First Air Contracting",
  phone: "+966532425777",
  email: "info@firstair-sa.com"
};

// بيانات شريط الأخبار المتحرك (Marquee)
export const marqueeItems = [
  { textAr: "أنظمة تكييف مركزي", textEn: "Central HVAC Systems", icon: "fa-fan" },
  { textAr: "مكافحة حريق", textEn: "Fire Fighting", icon: "fa-fire-extinguisher" },
  { textAr: "أعمال كهروميكانيكية", textEn: "Electromechanical Works", icon: "fa-cogs" },
  { textAr: "أنظمة صحية", textEn: "Plumbing Systems", icon: "fa-faucet" },
  { textAr: "صيانة وتشغيل", textEn: "Operation & Maintenance", icon: "fa-tools" },
  { textAr: "توريد وتركيب", textEn: "Supply & Installation", icon: "fa-truck-loading" },
];

// بيانات المدار الخارجي (الدول)
export const countryOrbits = [
  { code: 'sa', nameAr: 'السعودية', nameEn: 'Saudi Arabia' },
  { code: 'eg', nameAr: 'مصر', nameEn: 'Egypt' },
  { code: 'om', nameAr: 'عمان', nameEn: 'Oman' }, 
  { code: 'ly', nameAr: 'ليبيا', nameEn: 'Libya' },
  { code: 'iq', nameAr: 'العراق', nameEn: 'Iraq' },
];

// بيانات المدار الداخلي (القطاعات)
export const sectorOrbits = [
  { icon: 'fa-hospital', nameAr: 'مستشفيات', nameEn: 'Hospitals' },
  { icon: 'fa-industry', nameAr: 'مصانع', nameEn: 'Factories' },
  { icon: 'fa-building', nameAr: 'مباني إدارية', nameEn: 'Commercial' },
  { icon: 'fa-hotel', nameAr: 'فنادق', nameEn: 'Hotels' },
];

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
  { 
    id: 3, 
    title_ar: "الأعمال الصحية والسباكة", 
    title_en: "Plumbing & Sanitary",
    description_ar: "تأسيس شبكات التغذية والصرف للمباني التجارية والصناعية.",
    description_en: "Establishment of water supply and drainage networks for commercial/industrial buildings.",
    long_description_ar: "تنفيذ شبكات تغذية المياه والصرف الصحي باستخدام أفضل الخامات. خبرة واسعة في محطات المعالجة، شبكات الغازات الطبية للمستشفيات، ونظام تصريف السيول.",
    long_description_en: "Execution of water supply and sewage networks using the best materials. Extensive experience in treatment plants, medical gas networks for hospitals, and storm drainage.",
    features_ar: ["شبكات التغذية والصرف", "الغازات الطبية", "محطات الرفع والمعالجة", "سخانات ومبادلات حرارية"],
    features_en: ["Supply & Drainage Networks", "Medical Gases", "Lifting & Treatment Stations", "Heaters & Hexchangers"]
  }
];

export const mockProducts: Product[] = [
  {
    id: 1,
    title_ar: "وحدات تكييف VRF المتطورة",
    title_en: "Advanced VRF HVAC Units",
    description_ar: "أنظمة تكييف موفرة للطاقة من توريد فرست اير، مثالية للأبراج الإدارية والفنادق.",
    description_en: "Energy-efficient HVAC systems supplied by First Air, ideal for office towers and hotels.",
    image: "https://i.pinimg.com/736x/85/5c/4a/855c4a30e8c8942b0c16999e2e5050f2.jpg",
    specs: ["Inverter Technology", "High COP", "Smart Control"]
  },
  {
    id: 2,
    title_ar: "مضخات حريق معتمدة (UL/FM)",
    title_en: "Certified Fire Pumps (UL/FM)",
    description_ar: "مجموعات مضخات حريق كاملة بقدرات عالية تضمن أمان المنشأة في أصعب الظروف.",
    description_en: "Complete high-capacity fire pump sets ensuring facility safety under toughest conditions.",
    image: "https://i.pinimg.com/736x/41/03/ac/4103ac81a87dd14de2a7fc06d2f8c575.jpg",
    specs: ["UL Listed", "FM Approved", "Diesel/Electric"]
  },
  {
    id: 3,
    title_ar: "لوحات تحكم كهروميكانيكية (MCC)",
    title_en: "Electromechanical Control Panels (MCC)",
    description_ar: "تصنيع وتوريد لوحات التحكم الكهربائية للمحركات وأنظمة التكييف والمضخات.",
    description_en: "Manufacturing and supply of electrical control panels for motors, HVAC, and pumps.",
    image: "https://i.pinimg.com/736x/2c/92/aa/2c92aa0758b6526f89cd671a315c9157.jpg",
    specs: ["Schneider/ABB Parts", "IP65 Rating", "Custom Design"]
  }
];

export const mockArticles: Article[] = [
  { 
    id: 1, 
    title_ar: "دليل فرست اير لأنظمة VRF وترشيد الطاقة", 
    title_en: "First Air Guide to VRF Systems and Energy Efficiency",
    content_ar: "<p>تعتبر أنظمة التدفق المتغير (VRF) التي تقدمها فرست اير للمقاولات ثورة في عالم التكييف المركزي، حيث توفر ما يصل إلى 40% من استهلاك الكهرباء مقارنة بالأنظمة التقليدية. يعتمد هذا النظام على التحكم الذكي في كمية الفريون المتدفقة للوحدات الداخلية بناءً على الحاجة الفعلية لكل غرفة.</p>",
    content_en: "<p>Variable Refrigerant Flow (VRF) systems offered by First Air are a revolution in central HVAC, saving up to 40% of electricity compared to traditional systems. This system relies on smart control of the refrigerant amount flowing to indoor units based on actual needs.</p>",
    created_at: "2025-01-15T10:00:00Z",
    image: "https://i.pinimg.com/1200x/93/e4/c0/93e4c08e57c93b6f31e0f637fff21e5c.jpg"
  },
  { 
    id: 2, 
    title_ar: "أهمية الصيانة الدورية لأنظمة مكافحة الحريق", 
    title_en: "Importance of Periodic Maintenance for Fire Systems",
    content_ar: "<p>في فرست اير، نؤمن أن نظام الحريق غير الخاضع للصيانة هو نظام غير موجود. تشمل خدماتنا الدورية فحص مضخات الحريق، التأكد من ضغط الشبكة، واختبار حساسات الإنذار لضمان استجابة فورية في حالات الطوارئ وفقاً لمعايير NFPA العالمية.</p>",
    content_en: "<p>At First Air, we believe an unmaintained fire system is a non-existent one. Our periodic services include checking fire pumps, ensuring network pressure, and testing alarm sensors to guarantee immediate response in emergencies according to NFPA standards.</p>",
    created_at: "2025-01-20T12:00:00Z",
    image: "https://i.pinimg.com/736x/e6/eb/c6/e6ebc61212fb4a701c3b9f64bd274140.jpg"
  },
  { 
    id: 3, 
    title_ar: "التكنولوجيا الحديثة في تمديدات السباكة الصناعية", 
    title_en: "Modern Technology in Industrial Plumbing Installations",
    content_ar: "<p>تستخدم فرست اير أحدث تقنيات اللحام والربط الميكانيكي في تنفيذ شبكات التغذية والصرف للمصانع الكبرى. نحن نركز على استخدام مواد مقاومة للتآكل وعالية التحمل لضمان عمر افتراضي طويل للمنشأة وتقليل تكاليف الإصلاح المستقبلية.</p>",
    content_en: "<p>First Air utilizes the latest welding and mechanical connection technologies in executing supply and drainage networks for major factories. We focus on using corrosion-resistant, high-durability materials to ensure a long lifespan for the facility.</p>",
    created_at: "2025-01-25T08:30:00Z",
    image: "https://i.pinimg.com/736x/f9/b4/09/f9b4093fa3cfb2175284e5c10d0f3781.jpg"
  },
  { 
    id: 4, 
    title_ar: "فرست اير وتوسعاتها الإقليمية في سلطنة عمان", 
    title_en: "First Air and its Regional Expansion in Oman",
    content_ar: "<p>تماشياً مع رؤية فرست اير للتوسع الإقليمي، نفخر بالإعلان عن تعزيز تواجدنا في سلطنة عمان لتقديم خدمات الـ MEP المتكاملة. نهدف من خلال فرعنا الجديد إلى نقل خبراتنا الهندسية العميقة والمساهمة في النهضة العمرانية التي تشهدها السلطنة.</p>",
    content_en: "<p>In line with First Air's vision for regional expansion, we are proud to announce strengthening our presence in Oman to provide integrated MEP services. Our goal is to transfer our deep engineering expertise to contribute to the urban development in the Sultanate.</p>",
    created_at: "2025-02-01T09:00:00Z",
    image: "https://i.pinimg.com/1200x/ba/45/30/ba45304ddb5286dc0e3b98d4ff94c174.jpg"
  }
];
