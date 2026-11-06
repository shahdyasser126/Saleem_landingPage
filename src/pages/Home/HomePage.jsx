import { useLanguage } from "../../hooks/useLanguage";
import Navbar from "../../components/shared/Navbar";
import ProductNavigation from "../../components/shared/ProductNavigation";
import Footer from "../../components/shared/Footer";
import HeroSection from "../../sections/HeroSection";
import BenefitsSection from "../../sections/BenefitsSection";
import ProductsSection from "../../sections/ProductsSection";
 import FAQSection from "../../sections/FAQSection";
import ContactSection from "../../sections/ContactSection";

export default function HomePage() {
  const { lang, setLang, isArabic, dir, t } = useLanguage();
  return (
    <main dir={dir} className={isArabic ? "app app-ar" : "app"}>
     <Navbar t={t} lang={lang} setLang={setLang} isArabic={isArabic}/>
<ProductNavigation lang={lang}/>
<HeroSection t={t} isArabic={isArabic}/>
<ProductsSection t={t} lang={lang}/>
<BenefitsSection t={t}/>
<FAQSection t={t} />
<ContactSection t={t}/>
<Footer t={t} lang={lang}/>
    </main>
  );
}
