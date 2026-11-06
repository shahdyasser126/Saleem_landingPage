import { useState } from "react";
import { content } from "../data/content";

export function useLanguage() {
  const [lang, setLang] = useState("en");
  return {
    lang,
    setLang,
    isArabic: lang === "ar",
    dir: lang === "ar" ? "rtl" : "ltr",
    t: content[lang]
  };
}
