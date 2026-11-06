import {
  CarFront, Truck, BriefcaseMedical, Stethoscope, House,
  Plane, Crown, ShieldCheck, Package
} from "lucide-react";

export const products = [
  { id: "motor", category: "individual", icon: CarFront, en: "Personal Motor Insurance", ar: "تأمين المركبات للأفراد", descriptionEn: "Explore coverage options for your vehicle and the journeys ahead.", descriptionAr: "تعرّف على خيارات تغطية تساعدك على حماية مركبتك في كل رحلة." },
  { id: "fleet", category: "business", icon: Truck, en: "Fleet Motor Insurance", ar: "تأمين أسطول المركبات", descriptionEn: "Insurance options for business fleets and the work they keep moving.", descriptionAr: "حلول تأمينية لأساطيل المركبات التي تدعم أعمالك وحركتها اليومية." },
  { id: "medical", category: "business", icon: BriefcaseMedical, en: "Corporate Medical Insurance", ar: "التأمين الطبي للشركات والمنشآت", descriptionEn: "Explore medical coverage options for your employees and organization.", descriptionAr: "استكشف خيارات التأمين الطبي لموظفي منشأتك واحتياجات أعمالك." },
  { id: "malpractice", category: "business", icon: Stethoscope, en: "Medical Malpractice Insurance", ar: "تأمين الأخطاء الطبية", descriptionEn: "Professional liability coverage options for healthcare practitioners.", descriptionAr: "خيارات تغطية المسؤولية المهنية للممارسين في القطاع الصحي." },
  { id: "domestic", category: "individual", icon: House, en: "Domestic Workers Health & Contractual Insurance", ar: "تأمين العمالة المنزلية – الصحي والتعاقدي", descriptionEn: "Health and contractual coverage options for domestic workers.", descriptionAr: "خيارات تغطية صحية وتعاقدية للعمالة المنزلية." },
  { id: "travel", category: "individual", icon: Plane, en: "Travel Insurance", ar: "تأمين السفر", descriptionEn: "Find coverage options to support you when unexpected events affect your trip.", descriptionAr: "خيارات تغطية تساعدك عند مواجهة ظروف غير متوقعة أثناء السفر." },
  { id: "residency", category: "individual", icon: Crown, en: "Premium Residency Insurance", ar: "تأمين الإقامة المميزة", descriptionEn: "Explore insurance solutions related to premium residency needs.", descriptionAr: "استكشف الحلول التأمينية المرتبطة باحتياجات الإقامة المميزة." },
  { id: "protection", category: "individual", icon: ShieldCheck, en: "Protection & Savings", ar: "تأمين الحماية والادخار", descriptionEn: "Explore protection and savings solutions for long-term planning.", descriptionAr: "استكشف حلول الحماية والادخار للتخطيط على المدى الطويل." },
  { id: "cargo", category: "business", icon: Package, en: "Cargo & Goods in Transit", ar: "تأمين نقل البضائع", descriptionEn: "Coverage options for goods moving by sea, land, or air.", descriptionAr: "خيارات تغطية للبضائع المنقولة بحرًا أو برًا أو جوًا." },
  { id: "home", category: "individual", icon: House, en: "Home Insurance", ar: "تأمين المنازل", descriptionEn: "Explore options to help protect your home and its contents.", descriptionAr: "استكشف خيارات تساعدك على حماية منزلك ومحتوياته." }
];
