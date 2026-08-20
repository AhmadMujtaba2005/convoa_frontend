"use client";

import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { CheckCircleFilled, StarFilled, ArrowRightOutlined } from "@ant-design/icons";

const BRAND = "#2dd4bf"; // Primary brand color (Teal)
const BRAND_DIM = "rgba(45, 212, 191, 0.12)";
const BRAND_BORDER = "rgba(45, 212, 191, 0.25)";
const BRAND_GRADIENT = "linear-gradient(90deg, #2dd4bf 0%, #60a5fa 40%, #8b5cf6 100%)";
const BG = "#0d0b1e";
const CARD_BG = "rgba(255,255,255,0.03)";
const CARD_BORDER = "rgba(255,255,255,0.07)";
const TEXT_MUTED = "#94a3b8";
const TEXT_DIM = "#64748b";

// ─── Interfaces ──────────────────────────────────────────────────────────────
interface Stat { value: string; label: string; }
interface Card { description: string; }
interface Testimonial { quote: string; name: string; location: string; }
interface Solution { title: string; description: string; }
interface Step { step: string; title: string; description: string; }

interface Props {
  hero: {
    eyebrow: string; title: string; description: string; cta: string;
    benefits: string[]; stats: Stat[];
  };
  cards: Card[];
  trustedBy: { title: string; content: Testimonial[] };
  solutions: { title: string; content: Solution[] };
  integrations: { subtitle: string; title: string; description: string };
  steps: { title: string; content: Step[] };
  focus: { title: string; description: string };
  industries: string[];
  cta: { heading: string; button: string; subtext: string };
}

// ─── Animations ──────────────────────────────────────────────────────────────
const fadeUp = keyframes`from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}`;
const pulse = keyframes`0%{box-shadow:0 0 0 0 rgba(45,212,191,.35)}70%{box-shadow:0 0 0 18px rgba(45,212,191,0)}100%{box-shadow:0 0 0 0 rgba(45,212,191,0)}`;
const shimmer = keyframes`0%{background-position:200% 0}100%{background-position:-200% 0}`;
const scroll = keyframes`0%{transform:translateX(0)}100%{transform:translateX(-50%)}`;

// ─── Shared Layout ────────────────────────────────────────────────────────────
const Page = styled.div`
  background: ${BG};
  color: #fff;
  font-family: var(--font-inter), 'Inter', system-ui, sans-serif;
  overflow-x: hidden;
`;

const Section = styled.section<{ $padTop?: string; $padBot?: string }>`
  width: 100%;
  padding-top: ${p => p.$padTop ?? "96px"};
  padding-bottom: ${p => p.$padBot ?? "96px"};
  position: relative;
`;

const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Pill = styled.span`
  display: inline-block;
  padding: 4px 14px;
  border-radius: 20px;
  background: ${BRAND_DIM};
  border: 1px solid ${BRAND_BORDER};
  color: ${BRAND};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const H1 = styled.h1`
  font-size: clamp(40px, 5.5vw, 72px);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -2px;
  color: #fff;
  margin: 0 0 20px;
`;

const H2 = styled.h2`
  font-size: clamp(28px, 3.5vw, 48px);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -1px;
  color: #fff;
  margin: 0 0 16px;
`;

const H3 = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  margin: 0 0 10px;
`;

const Body = styled.p`
  font-size: 17px;
  line-height: 1.7;
  color: ${TEXT_MUTED};
  margin: 0;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${CARD_BORDER};
`;

// ─── Section Glow ────────────────────────────────────────────────────────────
const Glow = styled.div<{ $top?: string; $left?: string; $right?: string; $size?: string; $opacity?: string }>`
  position: absolute;
  top: ${p => p.$top ?? "50%"};
  left: ${p => p.$left ?? "auto"};
  right: ${p => p.$right ?? "auto"};
  width: ${p => p.$size ?? "600px"};
  height: ${p => p.$size ?? "600px"};
  background: radial-gradient(circle, rgba(45,212,191,${p => p.$opacity ?? "0.08"}) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
  transform: translate(${p => p.$left ? "-50%" : "50%"}, -50%);
`;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 1. HERO
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 140px 24px 80px;
  overflow: hidden;
  background: radial-gradient(ellipse 80% 60% at 50% -10%, rgba(45,212,191,0.15) 0%, transparent 65%),
              radial-gradient(ellipse 60% 40% at 20% 80%, rgba(45,212,191,0.05) 0%, transparent 60%),
              ${BG};
`;

const HeroStars = styled.div`
  position: absolute; inset: 0; pointer-events: none;
  background-image:
    radial-gradient(1px 1px at 15% 20%, rgba(255,255,255,0.6), transparent),
    radial-gradient(1px 1px at 80% 15%, rgba(255,255,255,0.5), transparent),
    radial-gradient(2px 2px at 60% 50%, rgba(255,255,255,0.3), transparent),
    radial-gradient(1px 1px at 35% 75%, rgba(255,255,255,0.4), transparent),
    radial-gradient(1px 1px at 90% 65%, rgba(255,255,255,0.3), transparent);
  background-size: 500px 400px;
`;

const HeroContent = styled.div`
  position: relative; z-index: 1;
  max-width: 820px;
  animation: ${fadeUp} 0.8s ease-out;
`;

const HeroInputRow = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255,255,255,0.04);
  border: 1px solid ${CARD_BORDER};
  border-radius: 14px;
  padding: 6px 6px 6px 20px;
  max-width: 480px;
  margin: 40px auto 48px;
  backdrop-filter: blur(12px);
`;

const EmailInput = styled.input`
  flex: 1; background: transparent; border: none; outline: none;
  color: #fff; font-size: 15px;
  &::placeholder { color: ${TEXT_DIM}; }
`;

const CtaBtn = styled.button`
  background: ${BRAND};
  border: none;
  height: 46px;
  padding: 0 28px;
  border-radius: 10px;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  transition: opacity .2s, transform .2s;
  animation: ${pulse} 3s infinite;
  &:hover { opacity: .88; transform: translateY(-1px); }
`;

const BenefitRow = styled.div`
  display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;
`;

const Benefit = styled.span`
  display: flex; align-items: center; gap: 7px;
  color: #cbd5e1; font-size: 14px;
  .anticon { color: ${BRAND}; font-size: 15px; }
`;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 2. STATS BAR
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const StatsBar = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: ${CARD_BORDER};
  border: 1px solid ${CARD_BORDER};
  border-radius: 16px;
  overflow: hidden;
  @media(max-width:640px){ grid-template-columns: repeat(2,1fr); }
`;

const StatCell = styled.div`
  background: ${CARD_BG};
  padding: 32px 24px;
  text-align: center;
  backdrop-filter: blur(8px);
`;

const StatValue = styled.div`
  font-size: 36px;
  font-weight: 800;
  color: ${BRAND};
  line-height: 1;
  margin-bottom: 8px;
`;

const StatLabel = styled.div`
  font-size: 13px;
  color: ${TEXT_MUTED};
  text-transform: uppercase;
  letter-spacing: .8px;
  font-weight: 600;
`;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 2.5 HERO MOCKUP
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const MockupContainer = styled.div`
  margin: 64px auto 0; max-width: 1040px; width: 100%; aspect-ratio: 16/9;
  background: rgba(13, 11, 30, 0.7);
  border: 1px solid rgba(255,255,255,0.08); border-radius: 16px;
  backdrop-filter: blur(20px);
  box-shadow: 0 30px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(45,212,191,0.15);
  display: flex; overflow: hidden;
  animation: ${fadeUp} 1s ease-out 0.2s both;
  z-index: 2; position: relative;
`;

const MockupSidebar = styled.div`
  width: 260px; border-right: 1px solid rgba(255,255,255,0.05); padding: 24px;
  display: flex; flex-direction: column; gap: 16px; text-align: left;
`;

const MockupItem = styled.div<{ $active?: boolean }>`
  height: 36px; border-radius: 8px;
  background: ${p => p.$active ? "rgba(45,212,191,0.15)" : "transparent"};
  border: 1px solid ${p => p.$active ? "rgba(45,212,191,0.3)" : "transparent"};
  display: flex; align-items: center; padding: 0 12px;
  color: ${p => p.$active ? BRAND : TEXT_MUTED}; font-size: 14px; font-weight: 500; gap: 12px;
`;

const MockupMain = styled.div`
  flex: 1; padding: 32px; display: flex; flex-direction: column; gap: 24px; text-align: left;
`;

const MockupHeader = styled.div`
  display: flex; justify-content: space-between; align-items: center;
  border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 24px;
`;

const MockupCardRow = styled.div`
  display: grid; grid-template-columns: 1.5fr 1fr; gap: 24px;
`;

const MockupCard = styled.div`
  background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05);
  border-radius: 12px; padding: 24px; display: flex; flex-direction: column; gap: 16px;
`;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 3. FEATURE CARDS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  @media(max-width:900px){ grid-template-columns: repeat(2,1fr); }
  @media(max-width:580px){ grid-template-columns: 1fr; }
`;

const FeatureCard = styled.div<{ $wide?: boolean }>`
  background: ${CARD_BG};
  border: 1px solid ${CARD_BORDER};
  border-radius: 16px;
  padding: 32px;
  position: relative;
  overflow: hidden;
  transition: border-color .25s, transform .25s;
  ${p => p.$wide && "grid-column: span 2;"}
  &:hover {
    border-color: ${BRAND_BORDER};
    transform: translateY(-3px);
  }
  &::before {
    content:'';
    position: absolute; top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, ${BRAND}, transparent);
    opacity: 0;
    transition: opacity .25s;
  }
  &:hover::before { opacity: 1; }
`;

const CardDot = styled.div`
  width: 36px; height: 36px; border-radius: 10px;
  background: ${BRAND_DIM}; border: 1px solid ${BRAND_BORDER};
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 20px;
  &::after { content:''; width:10px; height:10px; border-radius:50%; background:${BRAND}; }
`;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 4. SOLUTIONS / TABS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const TabRow = styled.div`
  display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 48px;
`;

const Tab = styled.button<{ $active: boolean }>`
  padding: 10px 24px; border-radius: 30px; font-size: 14px;
  font-weight: 600; cursor: pointer; transition: all .2s;
  background: ${p => p.$active ? BRAND : CARD_BG};
  color: ${p => p.$active ? "#fff" : TEXT_MUTED};
  border: 1px solid ${p => p.$active ? BRAND : CARD_BORDER};
  &:hover { border-color: ${BRAND}; color: ${p => p.$active ? "#fff" : BRAND}; }
`;

const SolutionContent = styled.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center;
  @media(max-width:768px){ grid-template-columns:1fr; gap:32px; }
`;

const SolutionVisual = styled.div`
  aspect-ratio: 4/3; border-radius: 20px;
  background: linear-gradient(135deg, rgba(45,212,191,0.08) 0%, rgba(59,54,138,0.15) 100%);
  border: 1px solid ${CARD_BORDER};
  display: flex; align-items: center; justify-content: center;
  position: relative; overflow: hidden;
  &::after {
    content:''; position:absolute; inset:0;
    background: radial-gradient(circle at 30% 40%, rgba(45,212,191,0.15) 0%, transparent 60%);
  }
`;

const SolutionIcon = styled.div`
  width: 72px; height: 72px; border-radius: 20px;
  background: ${BRAND_DIM}; border: 1px solid ${BRAND_BORDER};
  display: flex; align-items: center; justify-content: center;
  font-size: 32px; color: ${BRAND}; position: relative; z-index:1;
`;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 5. INTEGRATIONS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const IntegrationGrid = styled.div`
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 48px;
  @media(max-width:768px){ grid-template-columns: repeat(2,1fr); }
`;

const IntegCard = styled.div`
  background: ${CARD_BG}; border: 1px solid ${CARD_BORDER};
  border-radius: 14px; padding: 24px; text-align: center;
  transition: border-color .2s, transform .2s;
  &:hover { border-color: ${BRAND_BORDER}; transform: translateY(-2px); }
`;

const IntegIcon = styled.div`
  width: 48px; height: 48px; border-radius: 12px;
  background: ${BRAND_DIM}; margin: 0 auto 12px;
  display: flex; align-items: center; justify-content: center;
  font-size: 22px; color: ${BRAND};
`;

const IntegLabel = styled.div`
  font-size: 13px; color: ${TEXT_MUTED}; font-weight: 500;
`;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 6. STEPS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const StepsGrid = styled.div`
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 56px;
  @media(max-width:768px){ grid-template-columns:1fr; }
`;

const StepCard = styled.div`
  background: ${CARD_BG}; border: 1px solid ${CARD_BORDER};
  border-radius: 16px; padding: 36px 28px; position: relative; overflow: hidden;
  transition: border-color .25s, transform .25s;
  &:hover { border-color: ${BRAND_BORDER}; transform: translateY(-3px); }
`;

const StepNumber = styled.div`
  font-size: 11px; font-weight: 700; letter-spacing: 1.5px;
  text-transform: uppercase; color: ${BRAND}; margin-bottom: 20px;
`;

const StepTitle = styled.h3`
  font-size: 22px; font-weight: 700; color: #fff; margin: 0 0 12px;
`;

const ConnectorLine = styled.div`
  position: absolute; top: 48px; right: -12px; width: 24px; height: 1px;
  background: ${BRAND_BORDER}; z-index: 2;
`;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 7. FOCUS SECTION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const FocusSection = styled.section`
  position: relative; padding: 96px 24px; overflow: hidden;
  background: radial-gradient(ellipse 60% 50% at 50% 50%, rgba(45,212,191,0.07) 0%, transparent 70%),
              ${BG};
`;

const FocusGrid = styled.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center;
  max-width: 1120px; margin: 0 auto;
  @media(max-width:768px){ grid-template-columns:1fr; gap:40px; }
`;

const FocusVisual = styled.div`
  aspect-ratio: 1; border-radius: 24px; position: relative; overflow: hidden;
  background: ${CARD_BG}; border: 1px solid ${CARD_BORDER};
  display: flex; align-items: center; justify-content: center;
  &::before {
    content:''; position:absolute; inset:0;
    background: radial-gradient(circle at 50% 50%, rgba(45,212,191,0.15) 0%, transparent 60%);
  }
`;

const FocusRing = styled.div<{ $size: string; $opacity: string }>`
  position: absolute; border-radius: 50%;
  width: ${p => p.$size}; height: ${p => p.$size};
  border: 1px solid rgba(45,212,191,${p => p.$opacity});
`;

const FocusCore = styled.div`
  width: 80px; height: 80px; border-radius: 24px;
  background: ${BRAND_DIM}; border: 1px solid ${BRAND_BORDER};
  display: flex; align-items: center; justify-content: center;
  font-size: 36px; color: ${BRAND}; position: relative; z-index:1;
`;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 8. INDUSTRIES MARQUEE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const MarqueeTrack = styled.div`
  overflow: hidden; width: 100%; padding: 8px 0;
`;

const MarqueeInner = styled.div`
  display: flex; gap: 16px; width: max-content;
  animation: ${scroll} 18s linear infinite;
`;

const IndustryTag = styled.span`
  padding: 10px 24px; border-radius: 30px;
  background: ${CARD_BG}; border: 1px solid ${CARD_BORDER};
  color: ${TEXT_MUTED}; font-size: 14px; font-weight: 500;
  white-space: nowrap;
`;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 9. TESTIMONIALS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const TestiGrid = styled.div`
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 56px;
  @media(max-width:900px){ grid-template-columns: repeat(2,1fr); }
  @media(max-width:580px){ grid-template-columns: 1fr; }
`;

const TestiCard = styled.div`
  background: ${CARD_BG}; border: 1px solid ${CARD_BORDER};
  border-radius: 16px; padding: 28px; display: flex; flex-direction: column; gap: 16px;
  transition: border-color .2s, transform .2s;
  &:hover { border-color: ${BRAND_BORDER}; transform: translateY(-3px); }
`;

const Stars = styled.div`
  display: flex; gap: 3px;
  .anticon { color: ${BRAND}; font-size: 13px; }
`;

const TestiQuote = styled.p`
  color: #e2e8f0; font-size: 15px; line-height: 1.65; margin: 0; flex: 1;
`;

const TestiAuthor = styled.div``;
const AuthorName = styled.div`color:#fff;font-weight:600;font-size:14px;`;
const AuthorLoc = styled.div`color:${TEXT_DIM};font-size:13px;margin-top:2px;`;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 10. CTA BANNER
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const CtaBanner = styled.section`
  position: relative; padding: 96px 24px; text-align: center; overflow: hidden;
  background: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(45,212,191,0.1) 0%, transparent 70%), ${BG};
`;

const CtaCard = styled.div`
  max-width: 680px; margin: 0 auto; position: relative; z-index:1;
`;

const BigCtaBtn = styled.button`
  background: ${BRAND}; border: none; height: 56px; padding: 0 48px;
  border-radius: 12px; color: #fff; font-size: 17px; font-weight: 700;
  cursor: pointer; transition: opacity .2s, transform .2s;
  animation: ${pulse} 3s infinite;
  margin-top: 36px;
  display: inline-flex; align-items: center; gap: 10px;
  &:hover { opacity: .88; transform: translateY(-2px); }
`;

const CtaSubtext = styled.p`
  color: ${TEXT_DIM}; font-size: 13px; margin-top: 14px;
`;

// ─── Integration icon helpers ─────────────────────────────────────────────────
const INTEG_ITEMS = [
  { icon: "📅", label: "Scheduling" },
  { icon: "📞", label: "Phone Systems" },
  { icon: "🔗", label: "CRM Tools" },
  { icon: "📊", label: "Analytics" },
  { icon: "🛒", label: "E-Commerce" },
  { icon: "💬", label: "Messaging" },
  { icon: "🏥", label: "Healthcare" },
  { icon: "⚙️", label: "Automation" },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function HomePageTemplate({
  hero, cards, trustedBy, solutions, integrations, steps, focus, industries, cta,
}: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const active = solutions.content[activeTab];

  // Duplicate industries for seamless scroll
  const marqueeItems = [...industries, ...industries, ...industries, ...industries];

  return (
    <Page>
      {/* ── 1. HERO ── */}
      <HeroSection>
        <HeroStars />
        <HeroContent>
          <Pill>{hero.eyebrow}</Pill>
          <H1>{hero.title}</H1>
          <Body style={{ fontSize: "18px", maxWidth: "620px", margin: "0 auto" }}>
            {hero.description}
          </Body>
          <HeroInputRow>
            <EmailInput placeholder="Enter your email" />
            <CtaBtn>{hero.cta}</CtaBtn>
          </HeroInputRow>
          <BenefitRow>
            {hero.benefits.map((b, i) => (
              <Benefit key={i}><CheckCircleFilled />{b}</Benefit>
            ))}
          </BenefitRow>


        </HeroContent>
      </HeroSection>

      {/* ── 2. STATS BAR ── */}
      <Section $padTop="0" $padBot="80px">
        <Container>
          <StatsBar>
            {hero.stats.map((s, i) => (
              <StatCell key={i}>
                <StatValue>{s.value}</StatValue>
                <StatLabel>{s.label}</StatLabel>
              </StatCell>
            ))}
          </StatsBar>
        </Container>
      </Section>

      <Divider />

      {/* ── 3. FEATURE CARDS ── */}
      <Section>
        <Glow $top="50%" $left="50%" $size="700px" $opacity="0.06" />
        <Container style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <Pill>Built-In AI Superpowers</Pill>
            <H2>Everything your business needs, powered by AI</H2>
            <Body style={{ maxWidth: "560px", margin: "0 auto" }}>
              Convoa packs a full suite of intelligent tools — no extra apps, no extra cost.
            </Body>
          </div>
          <CardGrid>
            {cards.map((card, i) => (
              <FeatureCard key={i} $wide={i === cards.length - 1 && cards.length % 3 !== 0}>
                <CardDot />
                <Body style={{ fontSize: "16px", lineHeight: "1.65" }}>{card.description}</Body>
              </FeatureCard>
            ))}
          </CardGrid>
        </Container>
      </Section>

      <Divider />

      {/* ── 4. SOLUTIONS TABS ── */}
      <Section>
        <Container>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <Pill>Solutions</Pill>
            <H2>{solutions.title}</H2>
          </div>
          <TabRow>
            {solutions.content.map((s, i) => (
              <Tab key={i} $active={activeTab === i} onClick={() => setActiveTab(i)}>
                {s.title.split(" ").slice(0, 3).join(" ")}…
              </Tab>
            ))}
          </TabRow>
          <SolutionContent>
            <div>
              <H3 style={{ fontSize: "26px", marginBottom: "16px" }}>{active.title}</H3>
              <Body style={{ fontSize: "17px" }}>{active.description}</Body>
              <div style={{ marginTop: "32px", display: "flex", alignItems: "center", gap: "8px", color: BRAND, fontWeight: 600, cursor: "pointer" }}>
                Learn more <ArrowRightOutlined />
              </div>
            </div>
            <SolutionVisual>
              <SolutionIcon>🤖</SolutionIcon>
            </SolutionVisual>
          </SolutionContent>
        </Container>
      </Section>

      <Divider />

      {/* ── 5. INTEGRATIONS ── */}
      <Section>
        <Glow $top="50%" $right="0" $size="500px" $opacity="0.07" />
        <Container style={{ position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: "600px" }}>
            <Pill>{integrations.subtitle}</Pill>
            <H2>{integrations.title}</H2>
            <Body>{integrations.description}</Body>
          </div>
          <IntegrationGrid>
            {INTEG_ITEMS.map((item, i) => (
              <IntegCard key={i}>
                <IntegIcon>{item.icon}</IntegIcon>
                <IntegLabel>{item.label}</IntegLabel>
              </IntegCard>
            ))}
          </IntegrationGrid>
        </Container>
      </Section>

      <Divider />

      {/* ── 6. STEPS ── */}
      <Section>
        <Container>
          <div style={{ textAlign: "center" }}>
            <Pill>How It Works</Pill>
            <H2>{steps.title}</H2>
          </div>
          <StepsGrid>
            {steps.content.map((s, i) => (
              <StepCard key={i} style={{ position: "relative" }}>
                {i < steps.content.length - 1 && <ConnectorLine />}
                <StepNumber>{s.step}</StepNumber>
                <StepTitle>{s.title}</StepTitle>
                <Body style={{ fontSize: "15px" }}>{s.description}</Body>
              </StepCard>
            ))}
          </StepsGrid>
        </Container>
      </Section>

      <Divider />

      {/* ── 7. FOCUS ── */}
      <FocusSection>
        <FocusGrid>
          <FocusVisual>
            <FocusRing $size="280px" $opacity="0.2" />
            <FocusRing $size="190px" $opacity="0.3" />
            <FocusRing $size="110px" $opacity="0.4" />
            <FocusCore>💼</FocusCore>
          </FocusVisual>
          <div>
            <Pill>You. But Better.</Pill>
            <H2>{focus.title}</H2>
            <Body style={{ fontSize: "17px", marginTop: "8px" }}>{focus.description}</Body>
          </div>
        </FocusGrid>
      </FocusSection>

      <Divider />

      {/* ── 8. INDUSTRIES MARQUEE ── */}
      <Section $padTop="64px" $padBot="64px">
        <Container>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <Pill>Who We Serve</Pill>
            <H2 style={{ fontSize: "28px" }}>Powering businesses across industries</H2>
          </div>
        </Container>
        <MarqueeTrack>
          <MarqueeInner>
            {marqueeItems.map((ind, i) => (
              <IndustryTag key={i}>{ind}</IndustryTag>
            ))}
          </MarqueeInner>
        </MarqueeTrack>
      </Section>

      <Divider />

      {/* ── 9. TESTIMONIALS ── */}
      <Section>
        <Glow $top="50%" $left="50%" $size="800px" $opacity="0.05" />
        <Container style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "8px" }}>
            <Pill>Reviews</Pill>
            <H2>{trustedBy.title}</H2>
          </div>
          <TestiGrid>
            {trustedBy.content.map((t, i) => (
              <TestiCard key={i}>
                <Stars>{[1,2,3,4,5].map(n => <StarFilled key={n} />)}</Stars>
                <TestiQuote>"{t.quote}"</TestiQuote>
                <TestiAuthor>
                  <AuthorName>{t.name}</AuthorName>
                  <AuthorLoc>{t.location}</AuthorLoc>
                </TestiAuthor>
              </TestiCard>
            ))}
          </TestiGrid>
        </Container>
      </Section>

      <Divider />

      {/* ── 10. CTA BANNER ── */}
      <CtaBanner>
        <CtaCard>
          <Pill>Get Started</Pill>
          <H2 style={{ fontSize: "clamp(28px,4vw,52px)" }}>{cta.heading}</H2>
          <BigCtaBtn>
            {cta.button} <ArrowRightOutlined />
          </BigCtaBtn>
          <CtaSubtext>{cta.subtext}</CtaSubtext>
        </CtaCard>
      </CtaBanner>
    </Page>
  );
}
