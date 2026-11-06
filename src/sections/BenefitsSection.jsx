import { useState } from "react";
import {
  ShieldCheck,
  Compass,
  Scale,
  ScanEye,
  Headset,
  ArrowDown,
  ArrowUpLeft,
  ArrowUpRight,
  Check,
  Sparkles,
} from "lucide-react";

import "./BenefitsSection.css";

const stepIcons = [Compass, Scale, ScanEye, Headset];

export default function BenefitsSection({ t }) {
  const content = t.benefitsExperience;
  const [activeTab, setActiveTab] = useState("motor");

  if (!content) return null;

  const activeComparison = content.tabs.find(
    (tab) => tab.id === activeTab
  );

  const isArabic = content.dir === "rtl";

  return (
    <section
  id="experience"
  className="saleem-ecosystem"
  dir={content.dir}
  aria-label={content.eyebrow}
>
      {/* ECOSYSTEM INTRO */}
      <div className="ecosystem-container">

        <div className="ecosystem-heading">
          <span className="ecosystem-eyebrow">
            <span className="eyebrow-dot" />
            {content.eyebrow}
          </span>

          <h2>{content.title}</h2>

          <p className="ecosystem-subtitle">
            {content.subtitle}
          </p>

          <p className="ecosystem-description">
            {content.description}
          </p>
        </div>

        {/* 3D ECOSYSTEM VISUAL */}
        <div className="ecosystem-visual">

          <div className="visual-glow" />

          <div className="orbit orbit-one">
            <span className="orbit-point point-one" />
          </div>

          <div className="orbit orbit-two">
            <span className="orbit-point point-two" />
          </div>

          <div className="orbit orbit-three">
            <span className="orbit-point point-three" />
          </div>

          <div className="ecosystem-core">
            <div className="core-inner">
              <div className="core-symbol">
                <ShieldCheck size={43} strokeWidth={1.3} />
              </div>

              <span className="core-wordmark">SALEEM</span>

              <span className="core-caption">
                INSURANCE ECOSYSTEM
              </span>
            </div>
          </div>

          {/* FLOATING NODES */}
          {content.steps.map((step, index) => {
            const Icon = stepIcons[index];

            return (
              <div
                className={`ecosystem-node node-${index + 1}`}
                key={step.number}
              >
                <div className="node-icon">
                  <Icon size={21} strokeWidth={1.6} />
                </div>

                <div className="node-copy">
                  <span className="node-number">
                    {step.number}
                  </span>

                  <strong>{step.title}</strong>

                  <small>{step.label}</small>
                </div>
              </div>
            );
          })}

          <div className="visual-caption">
            <Sparkles size={14} />
            <span>EXPLORE · COMPARE · UNDERSTAND</span>
          </div>
        </div>

        {/* JOURNEY STEPS */}
        <div className="ecosystem-steps">
          {content.steps.map((step, index) => {
            const Icon = stepIcons[index];

            return (
              <div className="ecosystem-step" key={step.number}>
                <span className="step-number">{step.number}</span>

                <Icon size={20} strokeWidth={1.6} />

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.label}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* INTERACTIVE COMPARISON */}
      <div className="comparison-section">
        <div className="comparison-container">

          <div className="comparison-heading">
            <span className="ecosystem-eyebrow">
              <span className="eyebrow-dot" />
              {content.comparisonEyebrow}
            </span>

            <h2>{content.comparisonTitle}</h2>

            <p>{content.comparisonSubtitle}</p>
          </div>

          <div className="comparison-panel">

            <div className="comparison-tabs" role="tablist">
              {content.tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  className={
                    activeTab === tab.id
                      ? "comparison-tab active"
                      : "comparison-tab"
                  }
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {activeComparison && (
              <div
                className="comparison-content"
                role="tabpanel"
                key={activeComparison.id}
              >
                <div className="comparison-info">
                  <span className="comparison-index">
                    0{content.tabs.findIndex(
                      (tab) => tab.id === activeTab
                    ) + 1}
                  </span>

                  <h3>{activeComparison.title}</h3>

                  <p>{activeComparison.description}</p>
                </div>

                <div className="comparison-items">
                  {activeComparison.items.map((item, index) => (
                    <div className="comparison-item" key={item}>
                      <span className="comparison-check">
                        <Check size={15} />
                      </span>

                      <span>{item}</span>

                      <span className="comparison-item-number">
                        0{index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <p className="comparison-note">
              {content.note}
            </p>

          </div>
        </div>
      </div>

      {/* CLOSING MESSAGE */}
      <div className="ecosystem-closing">
        <div className="closing-decoration" />

        <span className="ecosystem-eyebrow">
          {content.closingEyebrow}
        </span>

        <h2>{content.closingTitle}</h2>

        <p>{content.closingSubtitle}</p>

        <div className="closing-line">
          <span />
          <ShieldCheck size={20} />
          <span />
        </div>
      </div>
    </section>
  );
}