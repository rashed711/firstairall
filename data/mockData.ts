
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
  },
  {
    id: 4,
    title_ar: "وحدات مناولة الهواء (AHU)",
    title_en: "Air Handling Units (AHU)",
    description_ar: "وحدات مناولة هواء عالية الجودة لتنقية وتوزيع الهواء في المستشفيات والمصانع.",
    description_en: "High-quality AHUs for air purification and distribution in hospitals and factories.",
    image: "https://i.pinimg.com/736x/de/c3/8c/dec38c3501a5e7834927289568770853.jpg",
    specs: ["HEPA Filtration", "Double Skin", "Silent Operation"]
  }
];

export const mockArticles: Article[] = [
  { 
    id: 1, 
    title_ar: "دليل فرست اير لأنظمة VRF وترشيد الطاقة", 
    title_en: "First Air Guide to VRF Systems and Energy Efficiency",
    content_ar: "<p>تعتبر أنظمة التدفق المتغير (VRF) التي تقدمها فرست اير للمقاولات ثورة في عالم التكييف المركزي، حيث توفر ما يصل إلى 40% من استهلاك الكهرباء مقارنة بالأنظمة التقليدية. تتميز هذه الأنظمة بقدرتها على التحكم في درجات الحرارة لكل غرفة بشكل مستقل.</p>",
    content_en: "<p>Variable Refrigerant Flow (VRF) systems offered by First Air for Contracting are a revolution in central HVAC, saving up to 40% of electricity consumption. These systems feature individual temperature control for each room.</p>",
    created_at: "2025-01-15T10:00:00Z",
    image: "https://i.pinimg.com/1200x/93/e4/c0/93e4c08e57c93b6f31e0f637fff21e5c.jpg"
  },
  { 
    id: 2, 
    title_ar: "معايير NFPA العالمية في مكافحة الحريق", 
    title_en: "Global NFPA Standards in Fire Fighting",
    content_ar: "<p>تلتزم فرست اير للمقاولات بأعلى معايير الجمعية الوطنية للحماية من الحرائق (NFPA). في هذا المقال نناقش كيفية تصميم شبكات الرش الآلي ومضخات الحريق لضمان حماية المنشآت الحيوية والمصانع من المخاطر.</p>",
    content_en: "<p>First Air for Contracting adheres to the highest National Fire Protection Association (NFPA) standards. This article discusses designing automatic sprinkler networks and fire pumps to protect vital facilities.</p>",
    created_at: "2025-02-01T12:00:00Z",
    image: "https://i.pinimg.com/736x/f9/b4/09/f9b4093fa3cfb2175284e5c10d0f3781.jpg"
  },
  { 
    id: 3, 
    title_ar: "أهمية الصيانة الدورية لأنظمة التكييف المركزي", 
    title_en: "Importance of Periodic Maintenance for Central HVAC",
    content_ar: "<p>الصيانة ليست مجرد رفاهية، بل هي ضرورة للحفاظ على عمر المعدات. فريق فرست اير يقدم نصائح حول تنظيف المبادلات الحرارية وفحص غاز الفريون لضمان أداء مثالي وتقليل فواتير الكهرباء.</p>",
    content_en: "<p>Maintenance is a necessity, not a luxury, to preserve equipment lifespan. First Air's team provides tips on cleaning heat exchangers and checking refrigerant for optimal performance.</p>",
    created_at: "2025-02-10T09:30:00Z",
    image: "https://i.pinimg.com/736x/de/9b/33/de9b33bb9ce4bef56fb7849820fdda6f.jpg"
  },
  { 
    id: 4, 
    title_ar: "الغازات الطبية في المستشفيات: تصميم وتنفيذ", 
    title_en: "Medical Gases in Hospitals: Design & Execution",
    content_ar: "<p>تنفيذ شبكات الغازات الطبية يتطلب دقة هندسية متناهية. فرست اير للمقاولات تستعرض خبراتها في توريد وتركيب غاز الأوكسجين والنيتروز للمستشفيات الكبرى في مصر والسعودية وفق أكواد السلامة الدولية.</p>",
    content_en: "<p>Executing medical gas networks requires extreme engineering precision. First Air showcases its expertise in supplying Oxygen and Nitrous gas for major hospitals in Egypt and KSA.</p>",
    created_at: "2025-02-15T14:20:00Z",
    image: "https://i.pinimg.com/736x/2c/92/aa/2c92aa0758b6526f89cd671a315c9157.jpg"
  },
  { 
    id: 5, 
    title_ar: "تحديات تنفيذ الأعمال الكهروميكانيكية في الأبراج", 
    title_en: "Challenges of MEP Execution in High-Rise Buildings",
    content_ar: "<p>تواجه المشاريع الشاهقة تحديات فريدة في ضغط المياه وتوزيع الهواء. نوضح في هذا المقال كيف تتعامل فرست اير مع هذه التحديات باستخدام أنظمة الرفع المتقدمة ولوحات التحكم الذكية.</p>",
    content_en: "<p>High-rise projects face unique challenges in water pressure and air distribution. We explain how First Air handles these challenges using advanced lifting systems and smart control panels.</p>",
    created_at: "2025-03-01T11:00:00Z",
    image: "https://i.pinimg.com/736x/de/c3/8c/dec38c3501a5e7834927289568770853.jpg"
  },
  { 
    id: 6, 
    title_ar: "حلول التهوية الصناعية للمصانع والمخازن", 
    title_en: "Industrial Ventilation Solutions for Factories",
    content_ar: "<p>التهوية الجيدة هي عصب الإنتاج في المصانع. تقدم فرست اير حلولاً تشمل مراوح السحب الضخمة وأنظمة سحب الأدخنة (Smoke Management) لضمان بيئة عمل آمنة وصحية للعمال.</p>",
    content_en: "<p>Good ventilation is the backbone of production in factories. First Air provides solutions including large exhaust fans and smoke management systems for a safe environment.</p>",
    created_at: "2025-03-05T08:00:00Z",
    image: "https://i.postimg.cc/8zD4tk13/002.webp"
  },
  { 
    id: 7, 
    title_ar: "مستقبل المدن الذكية والأنظمة الميكانيكية", 
    title_en: "Future of Smart Cities and Mechanical Systems",
    content_ar: "<p>كيف تندمج أنظمة الـ MEP مع تقنيات إنترنت الأشياء (IoT)؟ فرست اير للمقاولات تطلعكم على مستقبل المباني الذكية التي تدار آلياً بالكامل لتحقيق أقصى درجات الكفاءة.</p>",
    content_en: "<p>How do MEP systems integrate with IoT? First Air for Contracting shows you the future of smart buildings managed fully automatically for maximum efficiency.</p>",
    created_at: "2025-03-10T16:00:00Z",
    image: "https://i.postimg.cc/nhZ20VHd/001.webp"
  },
  { 
    id: 8, 
    title_ar: "فرست اير وتوسعاتها الإقليمية في سلطنة عمان", 
    title_en: "First Air and Regional Expansions in Oman",
    content_ar: "<p>احتفاءً بافتتاح فرعنا الجديد، نستعرض أهم المشاريع القادمة في سلطنة عمان. تهدف فرست اير للمقاولات إلى نقل خبراتها العريقة في قطاع المقاولات الكهروميكانيكية إلى السوق العماني الواعد.</p>",
    content_en: "<p>Celebrating our new branch, we review upcoming projects in Oman. First Air aims to transfer its long expertise in MEP contracting to the promising Omani market.</p>",
    created_at: "2025-03-12T10:00:00Z",
    image: "https://i.postimg.cc/6pwcY691/003.webp"
  }
];

export const mockProductsPlaceholder: Product[] = [];
