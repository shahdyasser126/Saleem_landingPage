
import { useMemo, useState } from "react";
import {
  ArrowUpLeft,
  ArrowUpRight,
  MoveUpRight,
} from "lucide-react";
import { products } from "../data/products";

export default function ProductsSection({ t, lang }) {
  const isArabic = lang === "ar";
  const [activeFilter, setActiveFilter] = useState("all");

  const Arrow = isArabic ? ArrowUpLeft : ArrowUpRight;

  const filters = [
    { id: "all", label: t.productsAll },
    { id: "individual", label: t.productsIndividuals },
    { id: "business", label: t.productsBusiness },
  ];

  const visibleProducts = useMemo(
    () =>
      activeFilter === "all"
        ? products
        : products.filter(
            (product) => product.category === activeFilter
          ),
    [activeFilter]
  );

  const renderCard = (product) => {
    const Icon = product.icon;
    const title = isArabic ? product.ar : product.en;

    const description = isArabic
      ? product.descriptionAr
      : product.descriptionEn;

    const number = String(
      products.findIndex((item) => item.id === product.id) + 1
    ).padStart(2, "0");

    return (
      <article
        id={product.id}
        key={product.id}
        className="
          group relative flex min-h-[285px] flex-col
          overflow-hidden rounded-[26px]
          border border-navy/[0.07]
          bg-white/90 p-5
          text-navy
          shadow-[0_8px_24px_rgba(24,40,63,0.045)]
          transition-all duration-300
          hover:-translate-y-1
          hover:border-petrol/20
          hover:shadow-[0_16px_34px_rgba(24,40,63,0.09)]
          sm:min-h-[300px] sm:p-6
        "
      >
        {/* Soft Card Detail */}
        <div
          className="
            pointer-events-none absolute -bottom-12 -end-10
            h-32 w-32 rounded-full
            bg-sage/10 blur-[1px]
            transition-transform duration-500
            group-hover:scale-125
          "
        />

        {/* Number & Icon */}
        <div className="relative z-10 flex items-start justify-between">
          <span className="
            font-mono text-base font-semibold
            tracking-wide text-champagne
          ">
            {number}
          </span>

          <span
            className="
              flex h-[58px] w-[58px] shrink-0
              items-center justify-center
              rounded-full
              border border-[#E8E5DC]
              bg-[#F3F3ED]
              text-petrol
              shadow-[0_4px_12px_rgba(24,40,63,0.05)]
              transition-all duration-300
              group-hover:scale-105
              group-hover:bg-[#EAF1ED]
            "
          >
            <Icon size={27} strokeWidth={1.8} />
          </span>
        </div>

        {/* Card Content */}
        <div
          className={`
            relative z-10 mt-7
            ${isArabic ? "text-right" : "text-left"}
          `}
        >
          <h3
            className={`
              text-[17px] font-bold
              leading-[1.55] text-navy
              sm:text-[18px]
              ${isArabic ? "font-arabic" : ""}
            `}
          >
            {title}
          </h3>

          <p
            className={`
              mt-2 text-[13px] font-medium
              leading-[1.8] text-slate
              sm:text-sm
              ${isArabic ? "font-arabic" : ""}
            `}
          >
            {description}
          </p>
        </div>

        {/* Explore Link */}
        <a
          href="#contact"
          aria-label={`${t.productsExploreLabel}: ${title}`}
          className={`
            relative z-10 mt-auto inline-flex w-fit
            items-center gap-2 pt-6
            text-[13px] font-bold text-petrol
            transition-colors duration-300
            hover:text-navy
            ${isArabic ? "font-arabic" : ""}
          `}
        >
          <span>{t.productCardCta}</span>
          <Arrow
            size={16}
            strokeWidth={1.9}
            className="
              transition-transform duration-300
              group-hover:-translate-y-0.5
            "
          />
        </a>
      </article>
    );
  };

  return (
    <section
      id="products"
      className="
        relative isolate overflow-hidden
        bg-[#F6F2EA]
        py-20 sm:py-24 lg:py-28
      "
    >
      {/* Background Decorations */}
      <div
        className="
          pointer-events-none absolute -start-48 top-20 -z-10
          h-[420px] w-[420px]
          rounded-full bg-sage/[0.12] blur-3xl
        "
      />

      <div
        className="
          pointer-events-none absolute -end-48 bottom-10 -z-10
          h-[380px] w-[380px]
          rounded-full bg-champagne/[0.10] blur-3xl
        "
      />

      {/* Subtle Decorative Lines */}
      <div
        className="
          pointer-events-none absolute end-0 top-[38%] -z-10
          h-[1px] w-24 bg-champagne/30
        "
      />

      <div className="mx-auto w-[89.5%] max-w-[1440px]">

        {/* Editorial Header */}
        <div
          className={`
            grid gap-7
            border-b border-navy/[0.12]
            pb-9 sm:pb-11
            lg:grid-cols-[1.15fr_0.85fr]
            lg:items-center lg:gap-12
            ${isArabic ? "lg:grid-cols-[0.85fr_1.15fr]" : ""}
          `}
        >
          {/* Main Heading */}
          <div className={isArabic ? "lg:order-2" : ""}>
            <div
              className={`
                mb-5 flex items-center gap-3
                text-[10px] font-bold uppercase
                tracking-[0.22em] text-petrol
                sm:text-xs
                ${isArabic ? "font-arabic tracking-normal" : ""}
              `}
            >
              <span className="h-px w-9 bg-champagne" />
              <span>{t.productsEyebrow}</span>
            </div>

            <h2
              className={`
                max-w-3xl text-[34px] font-semibold
                leading-[1.25] tracking-[-0.04em]
                text-navy sm:text-5xl
                lg:text-[56px]
                ${
                  isArabic
                    ? "font-arabic leading-[1.5] tracking-normal"
                    : ""
                }
              `}
            >
              {t.productsTitle}
            </h2>
          </div>

          {/* Description & Count */}
          <div
            className={`
              flex flex-col justify-center gap-6
              lg:border-s lg:border-champagne/70
              lg:ps-10
              ${isArabic ? "lg:order-1 lg:border-s-0 lg:border-e lg:pe-10 lg:ps-0" : ""}
            `}
          >
            <p
              className={`
                max-w-xl text-sm leading-8
                text-slate sm:text-base
                ${isArabic ? "font-arabic text-[15px] sm:text-base" : ""}
              `}
            >
              {t.productsSub}
            </p>

            <div className="flex items-center gap-3">
              <span
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-full border border-champagne/60
                  bg-white/70 font-mono text-base
                  font-semibold text-petrol
                "
              >
                {String(products.length).padStart(2, "0")}
              </span>

              <span
                className={`
                  text-xs font-semibold leading-6 text-navy
                  sm:text-sm
                  ${isArabic ? "font-arabic" : ""}
                `}
              >
                {t.productsCount}
              </span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col items-center gap-5 py-8 sm:py-9">
          <div className="flex w-full items-center justify-center gap-3">
            <span className="hidden h-px flex-1 bg-champagne/60 sm:block" />

            <div
              className="flex flex-wrap items-center justify-center gap-2"
              role="group"
              aria-label={
                isArabic ? "تصفية المنتجات" : "Filter products"
              }
            >
              {filters.map((filter) => {
                const selected = activeFilter === filter.id;

                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setActiveFilter(filter.id)}
                    aria-pressed={selected}
                    className={`
                      rounded-full px-5 py-3
                      text-xs font-bold
                      transition-all duration-200
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-petrol
                      focus-visible:ring-offset-2
                      sm:px-6 sm:text-sm
                      ${
                        selected
                          ? "bg-petrol text-white shadow-[0_7px_18px_rgba(57,122,120,0.20)]"
                          : "border border-navy/[0.10] bg-white/65 text-navy hover:border-petrol/40 hover:bg-white hover:text-petrol"
                      }
                      ${isArabic ? "font-arabic" : ""}
                    `}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>

            <span className="hidden h-px flex-1 bg-champagne/60 sm:block" />
          </div>

          <p
            className={`
              text-[11px] font-medium tracking-wide
              text-slate sm:hidden
              ${isArabic ? "font-arabic" : ""}
            `}
          >
            {visibleProducts.length} / {products.length}
          </p>
        </div>

        {/* Products Grid */}
        <div
          className="
            grid grid-cols-1 gap-4
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-5
            xl:gap-4
          "
        >
          {visibleProducts.map(renderCard)}
        </div>

        {/* Bottom Section */}
        <div
          className="
            relative mt-10 flex flex-col gap-5
            overflow-hidden rounded-[26px]
            border border-sage/20
            bg-[#E9EFEB]/80
            px-6 py-6
            sm:flex-row sm:items-center
            sm:justify-between sm:px-8
          "
        >
          <div
            className="
              pointer-events-none absolute -end-10 -top-20
              h-48 w-48 rounded-full
              border border-champagne/30
            "
          />

          <p
            className={`
              relative z-10 max-w-2xl
              text-xs leading-7 text-slate sm:text-sm
              ${isArabic ? "font-arabic" : ""}
            `}
          >
            {t.productsNote}
          </p>

          <a
            href="#contact"
            className={`
              relative z-10 inline-flex w-fit
              shrink-0 items-center gap-2
              text-sm font-bold text-petrol
              transition-colors hover:text-navy
              ${isArabic ? "font-arabic" : ""}
            `}
          >
            {t.productsContactLink}
            <MoveUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
