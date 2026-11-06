
import { ArrowUpRight, ArrowUp } from "lucide-react";
import Logo from "../ui/Logo";
import "./Footer.css";

export default function Footer({ t, lang }) {
  const isArabic = lang === "ar";

  const links = [
    {
      label: t.nav.solutions,
      href: "#products",
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

  return (
    <footer className="saleem-footer" dir={isArabic ? "rtl" : "ltr"}>
      <div className="wrap">
        <div className="footer-main">
          <div className="footer-brand">
            <Logo />

            <h2>
              {isArabic
                ? "رؤية أوضح لحماية تثق بها."
                : "A clearer perspective on protection."}
            </h2>

            <p>
              {isArabic
                ? "اكتشف خياراتك التأمينية، وافهم تفاصيلها، واختر بثقة مع سليم."
                : "Explore your insurance options, understand what matters, and make confident choices with Saleem."}
            </p>
          </div>

          <div className="footer-navigation">
            <span className="footer-label">
              {isArabic ? "استكشف" : "EXPLORE"}
            </span>

            <nav aria-label="Footer navigation">
              {links.map((link) => (
                <a href={link.href} key={link.href}>
                  <span>{link.label}</span>
                  <ArrowUpRight size={16} />
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-connect">
            <span className="footer-label">
              {isArabic ? "تواصل معنا" : "LET'S CONNECT"}
            </span>

            <a href="mailto:hello@saleem.sa" className="footer-email">
              hello@saleem.sa
              <ArrowUpRight size={17} />
            </a>

            <span className="footer-connect-note">
              {isArabic
                ? "نحن هنا لمساعدتك في خطوتك القادمة."
                : "We're here to help with your next step."}
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copyright">
            © {new Date().getFullYear()} Saleem.{" "}
            {isArabic ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </span>

          <span className="footer-tagline">
            {isArabic ? "حماية بوضوح أكبر." : "Protection, with clarity."}
          </span>

          <a href="#top" className="footer-back-top" aria-label="Back to top">
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
