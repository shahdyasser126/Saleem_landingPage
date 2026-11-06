
import { products } from "../../data/products";
import { House } from "lucide-react";

export default function ProductNavigation({ lang }) {
  const isArabic = lang === "ar";

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className="
        sticky top-[76px] z-40
        border-b border-navy/10
        bg-[#FBFAF8]/95
        backdrop-blur-md
        max-[700px]:top-[64px]
      "
    >
      <div className="w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <nav
          className="
            mx-auto flex min-h-[46px]
            w-max min-w-full max-w-[1440px]
            items-stretch justify-center
            px-4
            max-[1100px]:justify-start
            max-[700px]:min-h-[42px]
          "
          aria-label="Insurance products"
        >
          {products.map(({ id, icon: Icon, en, ar }) => (
            <a
              href={`#${id}`}
              key={id}
              className="
                inline-flex shrink-0
                items-center justify-center
                gap-2
                border-e border-navy/10
                px-[15px]
                text-[14px] font-medium
                whitespace-nowrap
                text-slate
                transition-colors duration-200
                hover:bg-petrol/5
                hover:text-petrol
                max-[1100px]:px-3
                max-[700px]:gap-[6px]
                max-[700px]:px-[11px]
                max-[700px]:text-[12px]
              "
            >
              <Icon
                className="shrink-0 text-champagne"
                size={19}
                strokeWidth={1.8}
              />

              <span>{isArabic ? ar : en}</span>
            </a>
          ))}

          {/* Home Link */}
          <a
            href="#home"
            className="
              inline-flex shrink-0
              items-center justify-center
              gap-2
              px-[15px]
              text-[14px] font-medium
              whitespace-nowrap
              text-slate
              transition-colors duration-200
              hover:bg-petrol/5
              hover:text-petrol
              max-[1100px]:px-3
              max-[700px]:gap-[6px]
              max-[700px]:px-[11px]
              max-[700px]:text-[12px]
            "
          >
            <House
              className="shrink-0 text-champagne"
              size={19}
              strokeWidth={1.8}
            />

            <span>{isArabic ? "الرئيسية" : "Home"}</span>
          </a>
        </nav>
      </div>
    </div>
  );
}
