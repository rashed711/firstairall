
import { Service, Article, Settings, Product, Category, MethodologyItem } from '../types';

export const mockSettings: Settings = {
  site_name_ar: "فرست اير للمقاولات",
  site_name_en: "First Air Contracting",
  phone: "+966532425777",
  email: "info@firstair-sa.com",
  phones: { ksa: '+966532425777', egypt: '+201065550024', oman: '+966532425777' },
  addresses: { ar: 'مصر، السعودية، وسلطنة عمان', en: 'Egypt, KSA & Oman' }
};

export const mockCategories: Category[] = [
  { id: 1, name_ar: "أنظمة التكييف HVAC", name_en: "HVAC Systems", parentId: null },
  { id: 2, name_ar: "أنظمة مكافحة الحريق", name_en: "Fire Fighting", parentId: null },
  { id: 3, name_ar: "الأعمال الكهربائية", name_en: "Electrical Works", parentId: null },
  { id: 11, name_ar: "وحدات خارجية VRF", name_en: "VRF Outdoor Units", parentId: 1 },
  { id: 12, name_ar: "وحدات داخلية", name_en: "Indoor Units", parentId: 1 },
  { id: 13, name_ar: "أنظمة الشيلر", name_en: "Chiller Systems", parentId: 1 },
  { id: 21, name_ar: "مضخات حريق معتمدة", name_en: "Certified Fire Pumps", parentId: 2 },
  { id: 22, name_ar: "لوحات إنذار", name_en: "Alarm Panels", parentId: 2 }
];

export const mockServices: Service[] = [
  { 
    id: 1, 
    title_ar: "أنظمة التكييف والتهوية", 
    title_en: "HVAC Systems", 
    description_ar: "تصميم وتنفيذ وصيانة أنظمة التكييف المركزي والـ VRF.",
    description_en: "Design, implementation, and maintenance of HVAC and VRF systems.",
    image: "https://i.postimg.cc/dVv64Qqx/004.webp",
    features_ar: ["دراسة أحمال دقيقة", "تركيب أنظمة الـ VRF", "عقود صيانة دورية"],
    features_en: ["Accurate load study", "VRF System Installation", "Periodic maintenance contracts"]
  },
  { 
    id: 2, 
    title_ar: "مكافحة الحريق والإنذار", 
    title_en: "Fire Fighting & Alarm", 
    description_ar: "أنظمة أمان وحماية متكاملة معتمدة من الدفاع المدني.",
    description_en: "Integrated security and protection systems approved by Civil Defense.",
    image: "https://i.pinimg.com/736x/41/03/ac/4103ac81a87dd14de2a7fc06d2f8c575.jpg",
    features_ar: ["مضخات معتمدة UL/FM", "أنظمة الإطفاء بالغاز", "صيانة أنظمة الإنذار"],
    features_en: ["UL/FM Certified Pumps", "Gas Suppression Systems", "Alarm System Maintenance"]
  },
  { 
    id: 3, 
    title_ar: "الأعمال الكهربائية", 
    title_en: "Electrical Works", 
    description_ar: "تمديد لوحات الجهد المنخفض والمتوسط وأنظمة التيار الخفيف.",
    description_en: "Laying low and medium voltage panels and light current systems.",
    image: "https://i.pinimg.com/1200x/2c/92/aa/2c92aa0758b6526f89cd671a315c9157.jpg",
    features_ar: ["لوحات توزيع رئيسية", "أنظمة التيار الخفيف", "تأسيسات كهربائية متكاملة"],
    features_en: ["Main Distribution Boards", "Light Current Systems", "Complete Electrical Foundation"]
  },
  { 
    id: 4, 
    title_ar: "الأعمال الصحية والسباكة", 
    title_en: "Plumbing & Sanitary Works", 
    description_ar: "تركيب شبكات المياه والصرف الصحي وأنظمة معالجة المياه.",
    description_en: "Installation of water and sewage networks and water treatment systems.",
    image: "https://i.pinimg.com/736x/f9/b4/09/f9b4093fa3cfb2175284e5c10d0f3781.jpg",
    features_ar: ["تمديد شبكات تغذية", "تركيب أنظمة صرف", "مضخات مياه ذكية"],
    features_en: ["Supply network piping", "Drainage system installation", "Smart water pumps"]
  },
  { 
    id: 5, 
    title_ar: "تشغيل وصيانة المنشآت", 
    title_en: "Facility Maintenance & Operations", 
    description_ar: "خدمات الصيانة الوقائية والتصحيحية لكافة الأنظمة الكهروميكانيكية.",
    description_en: "Preventive and corrective maintenance for all MEP systems.",
    image: "https://i.pinimg.com/736x/de/9b/33/de9b33bb9ce4bef56fb7849820fdda6f.jpg",
    features_ar: ["صيانة وقائية دورية", "فرق طوارئ 24/7", "توفير قطع غيار أصلية"],
    features_en: ["Periodic preventive maintenance", "24/7 emergency teams", "Original spare parts supply"]
  },
  { 
    id: 6, 
    title_ar: "حلول الطاقة المتجددة", 
    title_en: "Renewable Energy Solutions", 
    description_ar: "تصميم وتركيب أنظمة الطاقة الشمسية للأغراض السكنية والصناعية.",
    description_en: "Design and installation of solar energy systems for residential and industrial use.",
    image: "https://i.pinimg.com/1200x/15/51/91/1551917cf6023f9bbf9fcb1e03c8ef34.jpg",
    features_ar: ["تركيب ألواح شمسية", "أنظمة تسخين مياه", "حلول ترشيد الطاقة"],
    features_en: ["Solar Panel Installation", "Water Heating Systems", "Energy Saving Solutions"]
  }
];

export const mockProducts: Product[] = [
  {
    id: 1, categoryId: 11, title_ar: "وحدة VRF V6 الخارجية", title_en: "V6 VRF Outdoor Unit",
    description_ar: "وحدات تكييف متطورة توفر كفاءة طاقة عالية وتدعم حتى 64 وحدة داخلية.",
    description_en: "Advanced AC units providing high energy efficiency.",
    image: "https://i.postimg.cc/dVv64Qqx/004.webp",
    features_ar: ["توفير طاقة 45%"], features_en: ["45% Energy Saving"]
  },
  {
    id: 2, categoryId: 21, title_ar: "مجموعة مضخات حريق UL/FM", title_en: "UL/FM Fire Pump Set",
    description_ar: "مجموعة مضخات حريق كاملة (ديزل وكهرباء وجوكي) معتمدة دولياً.",
    description_en: "Complete fire pump set internationally certified.",
    image: "https://i.pinimg.com/736x/41/03/ac/4103ac81a87dd14de2a7fc06d2f8c575.jpg"
  },
  {
    id: 3, categoryId: 12, title_ar: "وحدات كاسيت داخلية", title_en: "Cassette Indoor Units",
    description_ar: "وحدات داخلية مخفية بتصميم عصري توزع الهواء بـ 360 درجة.",
    description_en: "Concealed indoor units with 360-degree distribution.",
    image: "https://i.pinimg.com/1200x/2c/92/aa/2c92aa0758b6526f89cd671a315c9157.jpg"
  },
  {
    id: 4, categoryId: 13, title_ar: "شيلر مبرد بالهواء", title_en: "Air-Cooled Chiller",
    description_ar: "شيلر عالي السعة مخصص للمباني الإدارية والمستشفيات.",
    description_en: "High-capacity chiller for commercial use.",
    image: "google.comhttps://i.postimg.cc/dVv64Qqx/004.webp"
  },
  {
    id: 5, categoryId: 22, title_ar: "لوحة إنذار حريق معنونة", title_en: "Addressable Fire Panel",
    description_ar: "نظام إنذار حريق ذكي يحدد موقع الحريق بدقة عالية.",
    description_en: "Intelligent fire alarm system.",
    image: "https://i.pinimg.com/1200x/de/9b/33/de9b33bb9ce4bef56fb7849820fdda6f.jpg"
  },
  {
    id: 6, categoryId: 3, title_ar: "لوحة توزيع جهد منخفض", title_en: "LV Switchgear",
    description_ar: "لوحات كهربائية مصنعة وفق أرقى المعايير.",
    description_en: "Electrical panels manufactured to high standards.",
    image: "https://i.pinimg.com/1200x/2c/92/aa/2c92aa0758b6526f89cd671a315c9157.jpg"
  },
  {
    id: 7, categoryId: 11, title_ar: "ميني VRF للمنازل", title_en: "Mini VRF for Residential",
    description_ar: "نظام VRF مدمج مثالي للفلل والمساحات المتوسطة.",
    description_en: "Compact VRF system ideal for villas.",
    image: "https://i.pinimg.com/1200x/f9/b4/09/f9b4093fa3cfb2175284e5c10d0f3781.jpg"
  },
  {
    id: 8, categoryId: 1, title_ar: "جهاز تحكم ذكي بالتكييف", title_en: "Smart HVAC Controller",
    description_ar: "جهاز تحكم واي فاي لمراقبة استهلاك الطاقة والتحكم عن بعد.",
    description_en: "Wi-Fi controller for energy monitoring.",
    image: "https://i.pinimg.com/1200x/15/51/91/1551917cf6023f9bbf9fcb1e03c8ef34.jpg"
  },
  {
    id: 9, categoryId: 2, title_ar: "كاشف دخان ليزر", title_en: "Laser Smoke Detector",
    description_ar: "حساسية عالية جداً للحرائق المبكرة في غرف الخوادم.",
    description_en: "Ultra-sensitive smoke detector for server rooms.",
    image: "https://i.pinimg.com/1200x/de/9b/33/de9b33bb9ce4bef56fb7849820fdda6f.jpg"
  },
  {
    id: 10, categoryId: 3, title_ar: "كابلات طاقة مدرعة", title_en: "Armored Power Cables",
    description_ar: "كابلات نحاسية معزولة مخصصة للدفن المباشر والأحمال الشاقة.",
    description_en: "Insulated copper cables for heavy loads.",
    image: "https://i.pinimg.com/736x/4c/83/c3/4c83c3629642f4ad3969a50ee0d6b3c5.jpg"
  }
];

export const mockArticles: Article[] = [
  {
    id: 1, title_ar: "أهمية الصيانة الدورية للتكييف", title_en: "Importance of AC Maintenance",
    content_ar: "الصيانة الدورية تضمن كفاءة الجهاز وتوفير استهلاك الكهرباء بنسبة تصل إلى 30%...",
    content_en: "Regular maintenance ensures efficiency and saves up to 30% energy...",
    created_at: new Date().toISOString(),
    image: "https://i.pinimg.com/1200x/93/e4/c0/93e4c08e57c93b6f31e0f637fff21e5c.jpg"
  },
  {
    id: 2, title_ar: "كيفية اختيار نظام الحريق المناسب", title_en: "Choosing the Right Fire System",
    content_ar: "تختلف أنظمة الحريق بناءً على طبيعة النشاط، فالمطابخ تختلف عن المكاتب...",
    content_en: "Fire systems vary based on activity; kitchens differ from offices...",
    created_at: new Date().toISOString(),
    image: "https://i.pinimg.com/736x/41/03/ac/4103ac81a87dd14de2a7fc06d2f8c575.jpg"
  },
  {
    id: 3, title_ar: "مستقبل الطاقة الشمسية في المقاولات", title_en: "Future of Solar Energy in Contracting",
    content_ar: "أصبحت الطاقة الشمسية جزءاً لا يتجزأ من كود البناء الحديث...",
    content_en: "Solar energy is now an essential part of modern building codes...",
    created_at: new Date().toISOString(),
    image: "https://i.pinimg.com/1200x/15/51/91/1551917cf6023f9bbf9fcb1e03c8ef34.jpg"
  }
];

export const mockMethodology: MethodologyItem[] = [
  {
    id: 1,
    image: "https://i.pinimg.com/736x/5b/44/bf/5b44bfd7a6f27ef80527d0ff4ff6e905.jpg",
    title_ar: "التصميم الهندسي",
    title_en: "Engineering Design",
    category_ar: "مرحلة 1",
    category_en: "Phase 1"
  },
  {
    id: 2,
    image: "https://i.pinimg.com/736x/d2/1b/f5/d21bf584e6caf3813475807377865ba0.jpg",
    title_ar: "التوريد",
    title_en: "Supply",
    category_ar: "مرحلة 2",
    category_en: "Phase 2"
  },
  {
    id: 3,
    image: "https://i.pinimg.com/736x/19/ca/46/19ca46332ab41c162b6433db6a6bd4e1.jpg",
    title_ar: "التركيب",
    title_en: "Installation",
    category_ar: "مرحلة 3",
    category_en: "Phase 3"
  },
  {
    id: 4,
    image: "https://i.pinimg.com/736x/e6/eb/c6/e6ebc61212fb4a701c3b9f64bd274140.jpg",
    title_ar: "الاختبار والتشغيل",
    title_en: "Testing & Commissioning",
    category_ar: "مرحلة 4",
    category_en: "Phase 4"
  },
  {
    id: 5,
    image: "https://i.pinimg.com/1200x/15/51/91/1551917cf6023f9bbf9fcb1e03c8ef34.jpg",
    title_ar: "إدارة المشاريع",
    title_en: "Project Management",
    category_ar: "إشراف",
    category_en: "Supervision"
  },
  {
    id: 6,
    image: "https://i.pinimg.com/1200x/ba/45/30/ba45304ddb5286dc0e3b98d4ff94c174.jpg",
    title_ar: "الصيانة",
    title_en: "Maintenance",
    category_ar: "خدمة",
    category_en: "Service"
  }
];

export const marqueeItems = [
  { icon: 'fa-check', textAr: 'جودة عالمية', textEn: 'Global Quality' },
  { icon: 'fa-clock', textAr: 'التزام بالمواعيد', textEn: 'On-time Delivery' },
  { icon: 'fa-shield-alt', textAr: 'أمان وسلامة', textEn: 'Safety & Security' }
];

export const countryOrbits = [
  { code: 'sa', nameAr: 'السعودية', nameEn: 'KSA' },
  { code: 'eg', nameAr: 'مصر', nameEn: 'Egypt' },
  { code: 'om', nameAr: 'عمان', nameEn: 'Oman' }
];

export const sectorOrbits = [
  { icon: 'fa-hospital', nameAr: 'طبي', nameEn: 'Medical' },
  { icon: 'fa-industry', nameAr: 'صناعي', nameEn: 'Industrial' },
  { icon: 'fa-hotel', nameAr: 'فندقي', nameEn: 'Hospitality' },
  { icon: 'fa-building', nameAr: 'سكني', nameEn: 'Residential' }
];
