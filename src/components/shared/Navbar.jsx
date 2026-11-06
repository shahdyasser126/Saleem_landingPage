
import { useState } from "react";
import {
  ArrowUpLeft,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

import Logo from "../ui/Logo";

export default function Navbar({ t, lang, setLang }) {
  const isArabic = lang === "ar";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Arrow = isArabic ? ArrowUpLeft : ArrowUpRight;

  const links = [
    {
      label: t.nav.solutions,
      href: "#products",
    },
    {
      label: isArabic ? "تجربتنا" : "Our Experience",
      href: "#experience",
    },
    {
      label: isArabic ? "الأسئلة الشائعة" : "FAQs",
      href: "#faq",
    },
    {
      label: t.nav.contact,
      href: "#contact",
    },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className="
        sticky top-0 z-50
        border-b border-navy/[0.08]
        bg-ivory/95
        backdrop-blur-xl
        transition-shadow duration-300
      "
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div
        className="
          mx-auto flex min-h-[76px]
          w-[89.5%] max-w-[1440px]
          items-center justify-between
          gap-5
          max-[700px]:min-h-[66px]
          max-[700px]:gap-3
        "
      >
        {/* LOGO */}
        <div className="flex shrink-0 items-center">
          <Logo />
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav
          className="
            hidden items-center
            gap-[clamp(20px,2.7vw,42px)]
            whitespace-nowrap
            min-[1101px]:flex
          "
          aria-label={isArabic ? "القائمة الرئيسية" : "Main navigation"}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                group relative py-2
                text-[14px] font-semibold
                text-navy/75
                transition-colors duration-300
                hover:text-petrol
              "
            >
              {link.label}

              <span
                className="
                  absolute inset-x-0 -bottom-[2px]
                  h-[2px] origin-center
                  scale-x-0 rounded-full
                  bg-petrol
                  transition-transform duration-300
                  group-hover:scale-x-100
                "
              />
            </a>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="flex shrink-0 items-center gap-5 max-[700px]:gap-3">

          {/* LANGUAGE SWITCHER */}
          <div
            dir="ltr"
            className="
              flex items-center gap-2
              rounded-full border border-navy/[0.08]
              bg-white/55 px-3 py-2
              text-[12px]
              max-[700px]:gap-1.5
              max-[700px]:px-2.5
              max-[700px]:py-1.5
              max-[700px]:text-[11px]
            "
            aria-label="Language"
          >
            <button
              type="button"
              className={`
                font-semibold transition-colors duration-200
                ${
                  lang === "en"
                    ? "text-petrol"
                    : "text-slate hover:text-navy"
                }
              `}
              aria-pressed={lang === "en"}
              onClick={() => {
                setLang("en");
                closeMenu();
              }}
            >
              EN
            </button>

            <span className="h-3.5 w-px bg-champagne/70" />

            <button
              type="button"
              className={`
                font-semibold transition-colors duration-200
                ${
                  lang === "ar"
                    ? "text-petrol"
                    : "text-slate hover:text-navy"
                }
              `}
              aria-pressed={lang === "ar"}
              onClick={() => {
                setLang("ar");
                closeMenu();
              }}
            >
              عربي
            </button>
          </div>

          {/* GET STARTED */}
          <a
            href="#contact"
            onClick={closeMenu}
            className="
              inline-flex min-h-[46px]
              items-center justify-center gap-2.5
              whitespace-nowrap rounded-full
              bg-petrol px-5
              text-[13px] font-bold text-white
              shadow-[0_5px_14px_rgba(57,122,120,0.12)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-navy
              hover:shadow-[0_9px_20px_rgba(24,40,63,0.15)]
              max-[700px]:min-h-[40px]
              max-[700px]:gap-1.5
              max-[700px]:px-3
              max-[700px]:text-[11px]
            "
          >
            {t.nav.start}
            <Arrow size={16} strokeWidth={1.9} />
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="
              hidden h-[42px] w-[42px]
              items-center justify-center
              rounded-full
              border border-navy/[0.12]
              bg-white/50 text-navy
              transition-all duration-300
              hover:border-petrol
              hover:bg-petrol hover:text-white
              min-[701px]:max-[1100px]:inline-flex
              max-[700px]:inline-flex
              max-[700px]:h-[38px]
              max-[700px]:w-[38px]
            "
            aria-label={
              isMenuOpen
                ? isArabic
                  ? "إغلاق القائمة"
                  : "Close menu"
                : isArabic
                  ? "فتح القائمة"
                  : "Open menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        id="mobile-navigation"
        className={`
  absolute start-0 top-full z-[100]
  w-full overflow-hidden
  border-b border-navy/10
  bg-[#F6F2EA]
  shadow-[0_18px_35px_rgba(24,40,63,0.14)]
  backdrop-blur-xl
  transition-all duration-300 ease-in-out
  min-[1101px]:hidden
  ${
    isMenuOpen
      ? "visible max-h-[430px] translate-y-0 opacity-100"
      : "invisible max-h-0 -translate-y-2 opacity-0"
  }
`}
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
      >
        <nav
          className="
            mx-auto flex w-[89.5%]
            max-w-[1440px]
            flex-col py-3
          "
          aria-label={isArabic ? "قائمة الهاتف" : "Mobile navigation"}
        >
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              tabIndex={isMenuOpen ? 0 : -1}
              onClick={closeMenu}
              className="
                group flex items-center
                justify-between
                border-b border-navy/[0.08]
                py-4
                text-[14px] font-semibold
                text-navy
                transition-colors duration-300
                last:border-b-0
                hover:text-petrol
              "
            >
              <span className="flex items-center gap-3">
                <span
                  className="
                    font-mono text-[10px]
                    font-semibold tracking-wider
                    text-champagne
                  "
                >
                  0{index + 1}
                </span>

                {link.label}
              </span>

              <Arrow
                size={17}
                className="
                  transition-transform duration-300
                  group-hover:-translate-y-0.5
                "
              />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
