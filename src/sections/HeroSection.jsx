
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  ShieldCheck,
  CarFront,
  HeartPulse,
  Plane,
  BriefcaseBusiness,
} from "lucide-react";

import Button from "../components/ui/Button";

function HeroArtwork({ isArabic }) {
  const categories = [
    {
      className: "art-card--motor",
      icon: CarFront,
      label: isArabic ? "تأمين السيارات" : "Motor",
    },
    {
      className: "art-card--medical",
      icon: HeartPulse,
      label: isArabic ? "التأمين الطبي" : "Medical",
    },
    {
      className: "art-card--travel",
      icon: Plane,
      label: isArabic ? "تأمين السفر" : "Travel",
    },
    {
      className: "art-card--business",
      icon: BriefcaseBusiness,
      label: isArabic ? "تأمين الأعمال" : "Business",
    },
  ];

  return (
    <div className="hero-art" aria-hidden="true">
      <div className="art-backdrop" />
      <div className="art-ambient art-ambient--one" />
      <div className="art-ambient art-ambient--two" />

      <div className="sculpture-scene">
        <div className="sculpture-orbit sculpture-orbit--back" />
        <div className="sculpture-orbit sculpture-orbit--front" />

        <div className="sculpture-platform">
          <div className="platform-layer platform-layer--back" />
          <div className="platform-layer platform-layer--middle" />
          <div className="platform-layer platform-layer--top" />
          <div className="platform-inlay" />
        </div>

        <div className="sculpture-shield-wrap">
          <div className="sculpture-shield">
            <div className="shield-glass" />
            <div className="shield-highlight" />
            <div className="shield-check">
              <ShieldCheck size={76} strokeWidth={1.25} />
            </div>
          </div>
          <div className="shield-shadow" />
        </div>

        <div className="sculpture-ribbon" />
        <div className="sculpture-light" />

        {categories.map(({ className, icon: Icon, label }) => (
          <div className={`art-card ${className}`} key={className}>
            <Icon size={25} strokeWidth={1.65} />
            <span>{label}</span>
          </div>
        ))}

        <div className="art-caption">
          <span className="art-caption-dot" />
          <span>
            {isArabic ? "حماية تناسب عالمك" : "Protection, shaped around you"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection({ t, isArabic }) {
  const Arrow = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section className="hero" id="home">
      <div className="hero-layout">
        <div className="hero-copy">
          <div className="eyebrow">
            <span />
            {t.eyebrow}
          </div>

          <h1>
            <span>{t.titleA}</span>
            <span className="accent">{t.titleB}</span>
            <span className="accent">{t.titleC}</span>
          </h1>

          <p className="hero-description">{t.description}</p>

          <div className="hero-actions">
            <Button href="#products">
              <span>{t.explore}</span>
              <Arrow size={19} />
            </Button>

            <a className="text-link" href="#contact">
              <span>{t.contact}</span>
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="hero-trust">
            <div className="hero-trust-item">
              <ShieldCheck size={20} />
              <span>{isArabic ? "حماية موثوقة" : "Trusted protection"}</span>
            </div>

            <div className="hero-trust-item">
              <span className="trust-spark">✳</span>
              <span>{isArabic ? "اختيارات أوضح" : "Clearer choices"}</span>
            </div>

            <div className="hero-trust-item">
              <span className="trust-check">✓</span>
              <span>{isArabic ? "ثقة في كل خطوة" : "Confidence at every step"}</span>
            </div>
          </div>
        </div>

        <HeroArtwork isArabic={isArabic} />
      </div>
    </section>
  );
}
