
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
    description_ar: "حلول متكاملة لتصميم وتوريد وتركيب أنظمة التكييف المركزي.",
    description_en: "Integrated solutions for design, supply, and installation of HVAC systems.",
    long_description_ar: "نقدم أحدث حلول التكييف المركزي والتهوية الصناعية للمشاريع الكبرى. تشمل خدماتنا أنظمة الشيلر (Chillers)، وحدات المناولة (AHUs)، وأنظمة VRF المتطورة. نضمن كفاءة الطاقة وجودة الهواء وفقاً للمعايير العالمية (ASHRAE/SMACNA).",
    long_description_en: "We offer the latest central air conditioning and industrial ventilation solutions for major projects. Our services include Chillers, Air Handling Units (AHUs), and advanced VRF systems. We ensure energy efficiency and air quality according to global standards (ASHRAE/SMACNA).",
    features_ar: ["أنظمة VRF/VRV", "التكييف المركزي (Chillers)", "تصنيع وتركيب الدكت", "تهوية المستودعات والمصانع"],
    features_en: ["VRF/VRV Systems", "Central Cooling (Chillers)", "Duct Fabrication & Install", "Warehouse Ventilation"]
  },
  { 
    id: 2, 
    title_ar: "أنظمة مكافحة الحريق", 
    title_en: "Fire Fighting Systems",
    description_ar: "أنظمة أمان وحماية من الحريق معتمدة وفق أكواد الدفاع المدني.",
    description_en: "Certified fire safety and protection systems per Civil Defense codes.",
    long_description_ar: "سلامة منشأتك هي أولويتنا. نقوم بتصميم وتركيب شبكات مكافحة الحريق بأنواعها: رشاشات المياه (Sprinklers)، صناديق الحريق، وأنظمة الغازات النظيفة (FM200/CO2) لغرف السيرفرات، مع الالتزام التام باشتراطات NFPA.",
    long_description_en: "Your facility's safety is our priority. We design and install fire fighting networks of all types: Sprinklers, Fire Hose Cabinets, and Clean Agent systems (FM200/CO2) for server rooms, strictly adhering to NFPA regulations.",
    features_ar: ["شبكات الرش الآلي", "أنظمة الإنذار المبكر", "مضخات الحريق المعتمدة", "صيانة دورية واختبارات"],
    features_en: ["Automatic Sprinkler Systems", "Early Warning Systems", "Certified Fire Pumps", "Periodic Maintenance & Testing"]
  },
  { 
    id: 3, 
    title_ar: "الأعمال الصحية والسباكة", 
    title_en: "Plumbing & Sanitary",
    description_ar: "تأسيس شبكات التغذية والصرف للمباني التجارية والصناعية.",
    description_en: "Establishment of water supply and drainage networks for commercial/industrial buildings.",
    long_description_ar: "تنفيذ شبكات تغذية المياه والصرف الصحي باستخدام أفضل الخامات (UPVC/PPR). خبرة واسعة في محطات المعالجة، شبكات الغازات الطبية للمستشفيات، وشبكات الري، ونظام تصريف السيول للمشاريع الكبيرة.",
    long_description_en: "Execution of water supply and sewage networks using the best materials (UPVC/PPR). Extensive experience in treatment plants, medical gas networks for hospitals, irrigation networks, and storm drainage for large projects.",
    features_ar: ["شبكات التغذية والصرف", "الغازات الطبية", "محطات الرفع والمعالجة", "سخانات ومبادلات حرارية"],
    features_en: ["Supply & Drainage Networks", "Medical Gases", "Lifting & Treatment Stations", "Heaters & Heat Exchangers"]
  },
  { 
    id: 4, 
    title_ar: "الأعمال الكهربائية", 
    title_en: "Electrical Works",
    description_ar: "حلول الطاقة والتيار الخفيف للمنشآت الذكية.",
    description_en: "Power and low current solutions for smart facilities.",
    long_description_ar: "نغطي كافة الأعمال الكهربائية بدءاً من لوحات التوزيع الرئيسية (MDBs)، الكابلات، الإنارة، وصولاً إلى أنظمة التيار الخفيف (Low Current) مثل كاميرات المراقبة، وأنظمة الصوت، والتحكم الذكي (BMS).",
    long_description_en: "We cover all electrical works starting from Main Distribution Boards (MDBs), cabling, lighting, up to Low Current systems such as CCTV, Sound systems, and Building Management Systems (BMS).",
    features_ar: ["لوحات التوزيع والتحكم", "أنظمة الإنارة الحديثة", "أنظمة التيار الخفيف", "أنظمة إدارة المباني (BMS)"],
    features_en: ["Distribution & Control Panels", "Modern Lighting Systems", "Low Current Systems", "Building Management Systems (BMS)"]
  },
  { 
    id: 5, 
    title_ar: "الصيانة والتشغيل", 
    title_en: "Maintenance & Operation",
    description_ar: "عقود صيانة شاملة لضمان استدامة وكفاءة الأنظمة.",
    description_en: "Comprehensive maintenance contracts ensuring system sustainability and efficiency.",
    long_description_ar: "لا ينتهي دورنا عند التركيب. نقدم عقود صيانة وقائية وعلاجية لأنظمة الكهروميكانيك لضمان عملها بكفاءة قصوى، وتقليل الأعطال المفاجئة، وإطالة عمر المعدات الافتراضي.",
    long_description_en: "Our role doesn't end at installation. We offer preventive and corrective maintenance contracts for electromechanical systems to ensure peak efficiency, minimize sudden breakdowns, and extend equipment lifespan.",
    features_ar: ["صيانة وقائية دورية", "فرق طوارئ 24/7", "قطع غيار أصلية", "تقارير فنية مفصلة"],
    features_en: ["Periodic Preventive Maintenance", "24/7 Emergency Teams", "Genuine Spare Parts", "Detailed Technical Reports"]
  },
];

export const mockProducts: Product[] = [
    {
        id: 1,
        title_ar: "وحدات تكييف مركزي (Chillers)",
        title_en: "Air Cooled Chillers",
        description_ar: "وحدات تبريد مياه عالية الكفاءة للمباني الضخمة والمصانع.",
        description_en: "High efficiency water cooling units for large buildings and factories.",
        image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        specs: ["High EER Rating", "Screw/Scroll Compressors", "Eco-friendly Refrigerant"]
    },
    {
        id: 2,
        title_ar: "مضخات الحريق (Fire Pumps)",
        title_en: "UL/FM Fire Pumps",
        description_ar: "مجموعات مضخات حريق معتمدة UL/FM (ديزل وكهرباء وجوكي).",
        description_en: "UL/FM certified fire pump sets (Diesel, Electric, Jockey).",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        specs: ["UL Listed / FM Approved", "NFPA 20 Compliant", "High Pressure Capacity"]
    },
    {
        id: 3,
        title_ar: "وحدات مناولة الهواء (AHU)",
        title_en: "Air Handling Units (AHU)",
        description_ar: "وحدات معالجة هواء مصممة خصيصاً للمستشفيات والأماكن المعقمة.",
        description_en: "Custom designed air handling units for hospitals and sterile areas.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        specs: ["Double Skin Panel", "Hepa Filters", "Thermal Break Profile"]
    },
    {
        id: 4,
        title_ar: "لوحات التوزيع الكهربائية",
        title_en: "Electrical Panels (MDB)",
        description_ar: "لوحات توزيع رئيسية وفرعية يتم تجميعها وفق أعلى المواصفات.",
        description_en: "Main and sub-distribution boards assembled to highest specs.",
        image: "https://images.unsplash.com/photo-1563968743333-044cef8004c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        specs: ["Schneider/ABB Components", "IP54/IP65 Protection", "Type Tested"]
    },
    {
        id: 5,
        title_ar: "وحدات VRF الخارجية",
        title_en: "VRF Outdoor Units",
        description_ar: "أنظمة تكييف متغيرة التدفق موفرة للطاقة للمباني الإدارية.",
        description_en: "Energy efficient variable refrigerant flow systems for offices.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        specs: ["Inverter Technology", "Long Piping Capability", "Smart Control"]
    }
];

export const mockArticles: Article[] = [
  { 
    id: 1, 
    title_ar: "أهمية أنظمة VRF في ترشيد الطاقة للمباني التجارية", 
    title_en: "Importance of VRF Systems in Energy Saving for Commercial Buildings",
    content_ar: "<p>تعتبر أنظمة التدفق المتغير (VRF) ثورة في عالم التكييف، حيث توفر ما يصل إلى 40% من استهلاك الكهرباء مقارنة بالأنظمة التقليدية...</p>",
    content_en: "<p>Variable Refrigerant Flow (VRF) systems are a revolution in HVAC, saving up to 40% of electricity consumption compared to traditional systems...</p>",
    created_at: "2025-01-15T10:00:00Z",
    image: "https://i.pinimg.com/1200x/93/e4/c0/93e4c08e57c93b6f31e0f637fff21e5c.jpg"
  },
  { 
    id: 2, 
    title_ar: "معايير NFPA لتصميم أنظمة الحريق في المصانع", 
    title_en: "NFPA Standards for Designing Fire Systems in Factories",
    content_ar: "<p>الالتزام بأكواد NFPA ليس رفاهية بل ضرورة. نناقش في هذا المقال الاشتراطات الخاصة بالمصانع والمستودعات ذات الخطورة العالية...</p>",
    content_en: "<p>Adhering to NFPA codes is not a luxury but a necessity. In this article, we discuss requirements for high-hazard factories and warehouses...</p>",
    created_at: "2025-02-01T14:30:00Z",
    image: "https://i.pinimg.com/736x/25/a1/10/25a110ade6f76b6971bbd967cb3c2f73.jpg"
  },
  { 
    id: 3, 
    title_ar: "الأنظمة الميكانيكية في المستشفيات: الغازات الطبية", 
    title_en: "Mechanical Systems in Hospitals: Medical Gases",
    content_ar: "<p>تتطلب المستشفيات دقة متناهية في تصميم شبكات الأكسجين والغازات الطبية. تعرف على المواصفات الفنية وطرق الاختبار...</p>",
    content_en: "<p>Hospitals require extreme precision in designing oxygen and medical gas networks. Learn about technical specs and testing methods...</p>",
    created_at: "2025-02-10T09:15:00Z",
    image: "https://i.pinimg.com/736x/d2/1b/f5/d21bf584e6caf3813475807377865ba0.jpg"
  },
  { 
    id: 4, 
    title_ar: "مستقبل المقاولات في رؤية المملكة 2030", 
    title_en: "Future of Contracting in KSA Vision 2030",
    content_ar: "<p>مع المشاريع العملاقة مثل نيوم والقدية، يتزايد الطلب على حلول MEP المستدامة والذكية التي تواكب تطلعات الرؤية...</p>",
    content_en: "<p>With mega-projects like NEOM and Qiddiya, demand is rising for sustainable and smart MEP solutions aligning with the Vision...</p>",
    created_at: "2025-02-20T11:45:00Z",
    image: "https://i.pinimg.com/736x/d5/af/d0/d5afd04ab7545682463d08c56d06fbe3.jpg"
  },
];
