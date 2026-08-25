"use client";

import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { CheckCircleFilled, StarFilled, ArrowRightOutlined } from "@ant-design/icons";
import { theme } from "@/lib/theme";
import { motion, AnimatePresence, useInView } from "framer-motion";

// ─── Interfaces ──────────────────────────────────────────────────────────────
interface Stat { value: string; label: string; }
interface Card { description: string; }
interface Testimonial { quote: string; name: string; location: string; }
interface Solution { title: string; description: string; }
interface Step { step: string; title: string; description: string; image?: string; }

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
  industries: { name: string; image: string }[];
  cta: { heading: string; button: string; subtext: string };
}

// ─── Animations ──────────────────────────────────────────────────────────────
const fadeUp = keyframes`from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}`;
const pulse = keyframes`0%{box-shadow:0 0 0 0 rgba(78,205,160,.25)}70%{box-shadow:0 0 0 14px rgba(78,205,160,0)}100%{box-shadow:0 0 0 0 rgba(78,205,160,0)}`;
const marquee = keyframes`0%{transform:translateX(0)}100%{transform:translateX(-50%)}`;
const floatAnim = keyframes`0%{transform:translateY(0)}100%{transform:translateY(-6px)}`;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// GLOBAL LAYOUT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const Page = styled.div`
  background: ${theme.colors.background};
  color: ${theme.colors.textPrimary};
  font-family: ${theme.fonts.body};
  overflow-x: hidden;
  position: relative;
  z-index: 1;
`;

const Section = styled.section`
  width: 100%;
  padding: 120px 0;
  position: relative;
  @media(max-width:768px){ padding: 64px 0; }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  @media(max-width:768px){ padding: 0 16px; }
`;

// ─── Typography ──────────────────────────────────────────────
const EyebrowWrap = styled.div`
  display: flex; align-items: center; justify-content: center;
  width: 100%; max-width: 600px; margin: 0 auto 24px;
  &::before, &::after {
    content: ''; flex: 1; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.15));
  }
  &::after {
    background: linear-gradient(270deg, transparent, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.15));
  }
`;

const EyebrowPill = styled.span`
  padding: 6px 20px; border-radius: 20px;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.08);
  color: ${theme.colors.textMuted};
  font-family: ${theme.fonts.body};
  font-size: 13px; font-weight: 500;
  margin: 0 16px; white-space: nowrap;
`;

const FunnelGlow = styled.div`
  position: absolute; top: 0; left: 50%; transform: translateX(-50%);
  width: 1000px; height: 400px; pointer-events: none; z-index: 0;
  background: radial-gradient(ellipse at top center, ${theme.colors.brandTeal}40 0%, ${theme.colors.brandTeal}15 50%, transparent 80%);
  mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
`;

const SectionHead = styled.div`
  text-align: center;
  margin-bottom: 56px;
  position: relative;
  z-index: 1;
`;

const H1 = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: clamp(32px, 4.5vw, 56px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: ${theme.colors.textPrimary};
  margin: 0 0 20px;
`;

const H2 = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(26px, 3vw, 42px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: ${theme.colors.textPrimary};
  margin: 0 0 14px;
`;

const H3 = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 20px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: ${theme.colors.textPrimary};
  margin: 0 0 10px;
`;

const Body = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 16px;
  line-height: 1.6;
  color: ${theme.colors.textMuted};
  margin: 0;
`;

const GradientWord = styled.span`
  background: ${theme.colors.brandGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// HERO
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const HeroSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 160px 24px 96px;
  overflow: hidden;
  @media(max-width:768px){ padding: 120px 16px 64px; }
`;

const HeroGlow = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, ${theme.colors.brandTeal}40 0%, ${theme.colors.brandTeal}15 50%, transparent 70%);
  filter: blur(60px);
  pointer-events: none;
  z-index: 0;
`;

const HeroIconBadge = styled.div`
  width: 56px; height: 56px;
  border-radius: 16px;
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.surfaceBorder};
  display: flex; align-items: center; justify-content: center;
  font-size: 24px;
  margin: 0 auto 28px;
  position: relative;
  z-index: 1;
  box-shadow: 0 0 40px ${theme.colors.brandTeal}20;
  animation: ${fadeUp} 0.6s ease-out;
`;

const HeroContent = styled.div`
  position: relative; z-index: 1;
  max-width: 760px;
  animation: ${fadeUp} 0.8s ease-out;
`;

const HeroCTARow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 36px auto 36px;
`;

const SpinAnim = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const GlowingButtonWrap = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  border-radius: 9999px;
  overflow: hidden;
  background: ${theme.colors.surface};
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: all 0.3s ease-out;
  @media(max-width:480px){ width: 100%; }
  
  &:hover {
    box-shadow: 0 10px 15px -3px rgba(78,205,160,0.1);
    transform: translateY(-2px);
  }
  &:active { transform: translateY(0); }
`;

const GlowingBorderBlur = styled.div`
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  filter: blur(4px); opacity: 0.7; transition: opacity 0.3s;
  ${GlowingButtonWrap}:hover & { opacity: 1; }
`;

const GlowingBorderSharp = styled.div`
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  opacity: 1;
`;

const SpinningGradient = styled.div`
  width: 300%; height: 300%;
  animation: ${SpinAnim} 2.5s linear infinite;
  background: conic-gradient(
    from 0deg,
    transparent 40%,
    rgba(78, 205, 160, 0.1) 60%,
    rgba(78, 205, 160, 0.6) 80%,
    rgba(61, 74, 155, 0.9) 95%,
    #3D4A9B 100%
  );
`;

const GlowingButtonInner = styled.button<{ $large?: boolean }>`
  position: relative; z-index: 10;
  display: flex; align-items: center; justify-content: center; gap: 8px;
  width: 100%; 
  height: ${p => p.$large ? '52px' : '48px'}; 
  padding: 0 ${p => p.$large ? '40px' : '28px'};
  border-radius: 9999px; border: none;
  background: ${theme.colors.surface};
  color: ${theme.colors.textPrimary}; font-family: ${theme.fonts.body};
  font-size: ${p => p.$large ? '16px' : '14px'}; 
  font-weight: 700; cursor: pointer;
  white-space: nowrap; transition: background 0.3s;
  ${GlowingButtonWrap}:hover & {
    background: var(--background-elevated);
  }
`;

const GlowingButton = ({ children, style, large }: any) => (
  <GlowingButtonWrap style={style}>
    <GlowingBorderBlur><SpinningGradient /></GlowingBorderBlur>
    <GlowingBorderSharp><SpinningGradient /></GlowingBorderSharp>
    <GlowingButtonInner $large={large}>{children}</GlowingButtonInner>
  </GlowingButtonWrap>
);

const BadgeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 24px;
  max-width: 420px;
  margin: 0 auto 56px;
  @media(max-width:480px){ grid-template-columns: 1fr; }
`;

const Badge = styled.span`
  display: flex; align-items: center; gap: 8px;
  color: ${theme.colors.textMuted}; font-size: 14px;
  font-family: ${theme.fonts.body};
  .anticon { color: ${theme.colors.brandTeal}; font-size: 14px; }
`;

/* ── Background Elements ── */
const HeroBeam = styled.div`
  position: absolute;
  top: 50%; left: 0; right: 0;
  height: 400px; transform: translateY(-50%);
  pointer-events: none; z-index: 0; opacity: 0.9;
`;

const HeroCurvesSvg = () => (
  <svg width="100%" height="400" viewBox="0 0 1440 400" fill="none" preserveAspectRatio="none">
    <defs>
      <linearGradient id="hcGrad" x1="0" y1="0" x2="1440" y2="0">
        <stop offset="0%" stopColor="transparent" />
        <stop offset="30%" stopColor={theme.colors.brandTeal} stopOpacity="0.6" />
        <stop offset="50%" stopColor={theme.colors.brandTeal} stopOpacity="1" />
        <stop offset="70%" stopColor={theme.colors.brandTeal} stopOpacity="0.6" />
        <stop offset="100%" stopColor="transparent" />
      </linearGradient>
    </defs>
    <path d="M0 250 Q 360 150 720 250 T 1440 250" stroke="url(#hcGrad)" strokeWidth="1.5" />
    <path d="M0 250 Q 360 300 720 250 T 1440 250" stroke="url(#hcGrad)" strokeWidth="1.5" opacity="0.8" />
    <path d="M0 250 Q 360 250 720 250 T 1440 250" stroke="url(#hcGrad)" strokeWidth="6" filter="blur(16px)" opacity="0.7" />
  </svg>
);

const SectionBgArc = styled.div`
  position: absolute; top: 0; left: 0; right: 0; height: 250px;
  pointer-events: none; z-index: 0; opacity: 0.8;
`;
const ArcSvg = () => (
  <svg width="100%" height="250" viewBox="0 0 1440 250" fill="none" preserveAspectRatio="xMidYMin slice">
    <defs>
      <linearGradient id="arcGrad" x1="0" y1="0" x2="1440" y2="0">
        <stop offset="0%" stopColor="transparent" />
        <stop offset="30%" stopColor={theme.colors.brandTeal} stopOpacity="0.4" />
        <stop offset="50%" stopColor={theme.colors.brandTeal} stopOpacity="0.9" />
        <stop offset="70%" stopColor={theme.colors.brandTeal} stopOpacity="0.4" />
        <stop offset="100%" stopColor="transparent" />
      </linearGradient>
    </defs>
    <path d="M0 100 Q 720 -20 1440 100" stroke="url(#arcGrad)" strokeWidth="1.5" />
    <path d="M0 100 Q 720 -20 1440 100" stroke="url(#arcGrad)" strokeWidth="6" filter="blur(12px)" opacity="0.8" />
  </svg>
);

const SectionBgHelix = styled.div`
  position: absolute; top: 0; left: 50%; transform: translateX(-50%);
  width: 250px; height: 400px; pointer-events: none; z-index: 0; opacity: 0.8;
`;
const HelixSvg = () => (
  <svg width="250" height="400" viewBox="0 0 250 400" fill="none">
    <defs>
      <linearGradient id="helGrad" x1="0" y1="0" x2="0" y2="400">
        <stop offset="0%" stopColor={theme.colors.brandTeal} stopOpacity="0.9" />
        <stop offset="100%" stopColor="transparent" />
      </linearGradient>
    </defs>
    <path d="M125 0 Q 80 80 125 150 T 125 300 T 125 400" stroke="url(#helGrad)" strokeWidth="1.5" />
    <path d="M125 0 Q 170 80 125 150 T 125 300 T 125 400" stroke="url(#helGrad)" strokeWidth="1.5" opacity="0.8" />
    <path d="M125 0 V 400" stroke="url(#helGrad)" strokeWidth="24" filter="blur(24px)" opacity="0.3" />
  </svg>
);

const SectionBgLines = styled.div`
  position: absolute; top: 0; left: 50%; transform: translateX(-50%);
  width: 500px; height: 400px; pointer-events: none; z-index: 0; opacity: 0.8;
`;
const LinesSvg = () => (
  <svg width="500" height="400" viewBox="0 0 500 400" fill="none">
    <defs>
      <linearGradient id="linesGrad" x1="0" y1="0" x2="0" y2="400">
        <stop offset="0%" stopColor={theme.colors.brandTeal} stopOpacity="0.9" />
        <stop offset="100%" stopColor="transparent" />
      </linearGradient>
    </defs>
    <rect x="249" y="0" width="2" height="400" fill="url(#linesGrad)" />
    <rect x="220" y="0" width="1" height="250" fill="url(#linesGrad)" opacity="0.6" />
    <rect x="280" y="0" width="1" height="250" fill="url(#linesGrad)" opacity="0.6" />
    <rect x="190" y="0" width="1" height="180" fill="url(#linesGrad)" opacity="0.4" />
    <rect x="310" y="0" width="1" height="180" fill="url(#linesGrad)" opacity="0.4" />
    <rect x="150" y="0" width="200" height="400" fill="url(#linesGrad)" filter="blur(40px)" opacity="0.2" />
  </svg>
);

const SectionBgGrid = styled.div`
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  background-position: center top;
  mask-image: radial-gradient(ellipse at center top, black 20%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse at center top, black 20%, transparent 70%);
`;

// ── Dashboard Mockup ──
const DashWrap = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 22px;
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.surfaceBorder};
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  display: flex;
  overflow: hidden;
  animation: ${fadeUp} 1s ease-out 0.15s both;
  position: relative;
  z-index: 2;
  min-height: 380px;
  @media(max-width:768px){ flex-direction: column; width: 100%; min-height: auto; border-radius: 16px; }
`;

const DSide = styled.div`
  width: 56px;
  border-right: 1px solid ${theme.colors.surfaceBorder};
  display: flex; flex-direction: column; align-items: center;
  padding: 20px 0; gap: 20px;
  @media(max-width:768px){ flex-direction: row; width: 100%; border-right: none; border-bottom: 1px solid ${theme.colors.surfaceBorder}; padding: 12px 16px; justify-content: flex-start; }
`;

const DSideIcon = styled.div<{ $active?: boolean }>`
  width: 28px; height: 28px; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 14px;
  background: ${p => p.$active ? `${theme.colors.brandTeal}15` : "transparent"};
  color: ${p => p.$active ? theme.colors.brandTeal : theme.colors.textDim};
`;

const DMain = styled.div`
  flex: 1; padding: 24px 28px;
  display: flex; flex-direction: column; gap: 16px;
  @media(max-width:768px){ padding: 16px; }
`;

const DTopBar = styled.div`
  display: flex; justify-content: space-between; align-items: center;
  padding-bottom: 16px; border-bottom: 1px solid ${theme.colors.surfaceBorder};
`;

const DSearch = styled.div`
  flex: 1; max-width: 200px; height: 30px; border-radius: 8px;
  background: rgba(255,255,255,0.03); border: 1px solid ${theme.colors.surfaceBorder};
  margin: 0 20px;
  @media(max-width:480px){ display: none; }
`;

const DAvatar = styled.div`
  width: 28px; height: 28px; border-radius: 50%;
  background: ${theme.colors.brandGradient};
`;

const DStatRow = styled.div`
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
  @media(max-width:640px){ grid-template-columns: 1fr; }
`;

const DStatCard = styled.div`
  background: rgba(255,255,255,0.02);
  border: 1px solid ${theme.colors.surfaceBorder};
  border-radius: 14px; padding: 18px;
`;

const DStatVal = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 24px; font-weight: 700;
  background: ${theme.colors.brandGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.02em;
`;

const DStatLabel = styled.div`
  font-size: 11px; color: ${theme.colors.textDim}; font-weight: 500;
  letter-spacing: 0.04em; text-transform: uppercase; margin-bottom: 6px;
`;

const DChartCard = styled.div`
  flex: 1; border-radius: 14px;
  background: rgba(255,255,255,0.02);
  border: 1px solid ${theme.colors.surfaceBorder};
  padding: 18px; position: relative; overflow: hidden;
  min-height: 120px;
`;

/* Mini area chart SVG */
const MiniChart = () => (
  <svg width="100%" height="80" viewBox="0 0 400 80" fill="none" preserveAspectRatio="none"
    style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
    <defs>
      <linearGradient id="chartFill" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor={theme.colors.brandTeal} stopOpacity="0.3" />
        <stop offset="1" stopColor={theme.colors.brandIndigo} stopOpacity="0.1" />
      </linearGradient>
      <linearGradient id="chartLine" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor={theme.colors.brandTeal} />
        <stop offset="1" stopColor={theme.colors.brandIndigo} />
      </linearGradient>
    </defs>
    <path d="M0 60 Q 50 40 100 45 T 200 30 T 300 25 T 400 15 V 80 H 0 Z" fill="url(#chartFill)" />
    <path d="M0 60 Q 50 40 100 45 T 200 30 T 300 25 T 400 15" stroke="url(#chartLine)" strokeWidth="2" fill="none" />
  </svg>
);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// STATS / TRUST BAR
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const StatsStrip = styled.div`
  background: ${theme.colors.backgroundElevated};
  border-top: 1px solid ${theme.colors.surfaceBorder};
  border-bottom: 1px solid ${theme.colors.surfaceBorder};
  padding: 48px 0;
`;

const StatsGrid = styled.div`
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
  max-width: 1200px; margin: 0 auto; padding: 0 24px;
  @media(max-width:640px){ grid-template-columns: repeat(2,1fr); }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 34px; font-weight: 700;
  background: ${theme.colors.brandGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.02em; line-height: 1;
  margin-bottom: 8px;
`;

const StatLabel = styled.div`
  font-size: 13px; color: ${theme.colors.textMuted}; font-weight: 500;
  text-transform: uppercase; letter-spacing: 0.06em;
`;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// FEATURE CARDS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const ShowcaseLayout = styled.div`
  display: flex; flex-direction: column; gap: 32px; width: 100%; margin: 0 auto;
  @media(min-width: 900px){ flex-direction: row; gap: 48px; align-items: center; justify-content: center; }
`;

const ShowcaseLeft = styled.div`
  flex: 1; display: flex; flex-direction: column; gap: 24px; justify-content: flex-start;
  @media(min-width: 900px){ gap: 32px; padding: 24px 16px; }
`;

const ShowcaseItem = styled.div`
  display: grid; grid-template-columns: 3px 1fr; gap: 24px; cursor: pointer;
`;

const ProgressBarWrap = styled.div`
  position: relative; width: 100%; height: 100%; min-height: 40px;
  background: ${theme.colors.surfaceBorder}; border-radius: 999px; overflow: hidden;
`;

const fillProgressAnim = keyframes`
  from { height: 0%; } to { height: 100%; }
`;

const ProgressBarActive = styled.div<{ $duration: number }>`
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background: ${theme.colors.brandTeal};
  transform-origin: top;
  animation: ${fillProgressAnim} ${p => p.$duration}s linear forwards;
  ${ShowcaseItem}:hover & { animation-play-state: paused; }
`;

const ShowcaseItemContent = styled.div`
  display: flex; flex-direction: column; justify-content: center; padding: 4px 0;
`;

const ShowcaseItemTitle = styled.h5<{ $active: boolean }>`
  font-size: 17px; font-family: ${theme.fonts.heading}; margin: 0;
  transition: color 0.3s;
  color: ${p => p.$active ? theme.colors.brandTeal : theme.colors.textMuted};
  font-weight: ${p => p.$active ? 700 : 500};
  @media(min-width: 768px){ font-size: 20px; }
  ${ShowcaseItem}:hover & {
    color: ${p => !p.$active ? theme.colors.textPrimary : theme.colors.brandTeal};
  }
`;

const ShowcaseItemDescWrap = styled.div<{ $active: boolean }>`
  overflow: hidden; transition: all 0.4s ease-in-out;
  max-height: ${p => p.$active ? '120px' : '0'};
  opacity: ${p => p.$active ? '1' : '0'};
  margin-top: ${p => p.$active ? '8px' : '0'};
`;

const ShowcaseItemDesc = styled.p`
  font-size: 14px; color: ${theme.colors.textDim}; line-height: 1.6; margin: 0;
`;

const ShowcaseRight = styled.div`
  flex: 1; position: relative; display: flex; align-items: center; justify-content: center;
  min-height: 300px; width: 100%;
  @media(min-width: 768px){ min-height: 400px; }
`;

const SuperpowerShowcase = ({ cards }: { cards: Card[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const showcaseImages = [
    "/images/features/feature3.png",
    "/images/features/feature2.png",
    "/images/features/feature5.png",
    "/images/features/feature4.png",
    "/images/features/feature1.png",
  ];
  const customTitles = [
    "Human-like AI Voice",
    "Smarter AI Assistant",
    "Service Heat Maps",
    "Real-time Analytics",
    "24/7 Operations"
  ];

  const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>, index: number) => {
    if (index === activeIndex) {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }
  };

  return (
    <ShowcaseLayout ref={containerRef}>
      <ShowcaseLeft>
        {cards.map((card, idx) => {
          const isActive = activeIndex === idx && isInView;
          return (
            <ShowcaseItem key={idx} onClick={() => setActiveIndex(idx)}>
              <ProgressBarWrap>
                {isActive && (
                  <ProgressBarActive
                    $duration={4}
                    onAnimationEnd={(e) => handleAnimationEnd(e, idx)}
                  />
                )}
              </ProgressBarWrap>
              <ShowcaseItemContent>
                <ShowcaseItemTitle $active={isActive}>
                  {customTitles[idx] || `Superpower ${idx + 1}`}
                </ShowcaseItemTitle>
                <ShowcaseItemDescWrap $active={isActive}>
                  <ShowcaseItemDesc>{card.description}</ShowcaseItemDesc>
                </ShowcaseItemDescWrap>
              </ShowcaseItemContent>
            </ShowcaseItem>
          );
        })}
      </ShowcaseLeft>
      <ShowcaseRight>
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            src={showcaseImages[activeIndex]}
            alt="Feature Graphic"
            initial={{ opacity: 0, scale: (activeIndex === 1 || activeIndex === 3) ? 1.15 : 0.95 }}
            animate={{ opacity: 1, scale: (activeIndex === 1 || activeIndex === 3) ? 1.25 : 1 }}
            exit={{ opacity: 0, scale: (activeIndex === 1 || activeIndex === 3) ? 1.35 : 1.05 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </AnimatePresence>
      </ShowcaseRight>
    </ShowcaseLayout>
  );
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SOLUTIONS / TABS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const TabRow = styled.div`
  display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 48px;
  justify-content: center;
`;

const Tab = styled.button<{ $active: boolean }>`
  padding: 10px 24px; border-radius: 26px; font-size: 14px;
  font-family: ${theme.fonts.body};
  font-weight: 600; cursor: pointer; transition: all .2s;
  background: ${p => p.$active ? theme.colors.brandGradientText : theme.colors.surface};
  color: ${p => p.$active ? "#fff" : theme.colors.textMuted};
  border: 1px solid ${p => p.$active ? "transparent" : theme.colors.surfaceBorder};
  &:hover { border-color: ${theme.colors.brandTeal}40; }
`;

const SolutionsGrid = styled.div`
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px;
  @media(max-width: 900px){ grid-template-columns: 1fr; }
`;

const SolutionCard = styled.div`
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.surfaceBorder};
  border-radius: 16px;
  overflow: hidden;
  display: flex; flex-direction: column;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(78, 205, 160, 0.1);
  }
`;

const SolutionCardVisual = styled.div`
  aspect-ratio: 5/4;
  background: linear-gradient(135deg, ${theme.colors.brandTeal}08 0%, ${theme.colors.brandIndigo}15 100%);
  position: relative;
  border-bottom: 1px solid ${theme.colors.surfaceBorder};
`;

const SolutionCardBody = styled.div`
  padding: 32px;
  display: flex; flex-direction: column;
  flex: 1;
`;

const SolutionIcon = styled.div`
  width: 64px; height: 64px; border-radius: 18px;
  background: ${theme.colors.brandTeal}15; border: 1px solid ${theme.colors.brandTeal}25;
  display: flex; align-items: center; justify-content: center;
  font-size: 28px; color: ${theme.colors.brandTeal};
`;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// INTEGRATIONS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const IntegSplitLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  @media(max-width: 900px){ grid-template-columns: 1fr; gap: 48px; }
`;

const IntegContentCol = styled.div`
  display: flex; flex-direction: column; text-align: left;
`;

const IntegCluster = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  display: flex; align-items: center; justify-content: center;
`;

const ClusterCenter = styled.div`
  width: 160px; height: 160px;
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.surfaceBorder};
  border-radius: 32px;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
  font-family: ${theme.fonts.heading};
  font-size: 32px; font-weight: 700; letter-spacing: -1px;
  background: linear-gradient(135deg, ${theme.colors.brandTeal}, ${theme.colors.brandIndigo});
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  z-index: 2;
`;

const ClusterApp = styled(motion.div) <{ $top: string; $left: string; $size?: string; $delay?: number }>`
  position: absolute;
  top: ${p => p.$top}; left: ${p => p.$left};
  width: ${p => p.$size || '64px'}; height: ${p => p.$size || '64px'};
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.surfaceBorder};
  border-radius: 16px;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
  font-size: 24px; font-weight: 600; color: #fff;
  z-index: 1;
`;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// STEPS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const StepsRow = styled.div`
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 56px;
  position: relative;
  @media(max-width:768px){ grid-template-columns:1fr; }
`;

const StepCard = styled.div`
  background: ${theme.colors.surface}; border: 1px solid ${theme.colors.surfaceBorder};
  border-radius: 18px; padding: 32px; position: relative;
  transition: border-color .25s, transform .25s;
  &:hover { border-color: ${theme.colors.brandTeal}50; transform: translateY(-4px); }
  @media(max-width:768px){ padding: 24px; }
`;

const StepEyebrow = styled.div`
  font-family: ${theme.fonts.body};
  font-size: 12px; font-weight: 700; letter-spacing: 0.08em;
  text-transform: uppercase; color: ${theme.colors.brandTeal}; margin-bottom: 18px;
`;

const StepTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 20px; font-weight: 700; color: ${theme.colors.textPrimary};
  margin: 0 0 10px; letter-spacing: -0.02em; line-height: 1.1;
`;

/* dashed connector line between step cards (desktop only) */
const StepConnector = styled.div`
  position: absolute; top: 40px; right: -10px; width: 20px; height: 0;
  border-top: 1.5px dashed ${theme.colors.brandTeal}40;
  z-index: 2;
  @media(max-width:768px){ display: none; }
`;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// FOCUS SECTION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const FocusLayout = styled.div`
  display: flex; flex-direction: column; gap: 56px;
`;

const FocusTop = styled.div`
  text-align: center; max-width: 700px; margin: 0 auto;
  display: flex; flex-direction: column; align-items: center;
`;

const FocusCards = styled.div`
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
  @media(max-width:900px){ grid-template-columns: 1fr; }
`;

const IndustryCard = styled.div`
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.surfaceBorder};
  border-radius: 20px;
  padding: 32px 24px;
  display: flex; flex-direction: column; align-items: center; text-align: center;
  transition: all 0.3s;
  position: relative; overflow: hidden;
  &:hover {
    transform: translateY(-4px);
    border-color: ${theme.colors.brandTeal}50;
    box-shadow: 0 10px 30px rgba(78,205,160,0.1);
  }
`;

const IndustryIconWrap = styled.div`
  width: 64px; height: 64px; border-radius: 16px;
  background: linear-gradient(135deg, ${theme.colors.brandTeal}15 0%, ${theme.colors.brandIndigo}15 100%);
  display: flex; align-items: center; justify-content: center;
  font-size: 28px; margin-bottom: 24px;
  border: 1px solid ${theme.colors.brandTeal}20;
`;

const IndustryTitle = styled.h4`
  color: ${theme.colors.textPrimary};
  font-family: ${theme.fonts.heading};
  font-size: 18px; font-weight: 600; margin: 0;
`;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TESTIMONIALS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const TestiGrid = styled.div`
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 56px;
  @media(max-width:900px){ grid-template-columns: repeat(2,1fr); }
  @media(max-width:580px){ grid-template-columns: 1fr; }
`;

const TestiCard = styled.div`
  background: ${theme.colors.backgroundElevated};
  border: 1px solid ${theme.colors.surfaceBorder};
  border-radius: 18px; padding: 28px;
  display: flex; flex-direction: column; gap: 16px;
  transition: border-color .2s, transform .2s;
  &:hover { border-color: ${theme.colors.brandTeal}40; transform: translateY(-3px); }
`;

const Stars = styled.div`
  display: flex; gap: 3px;
  .anticon { color: ${theme.colors.brandTeal}; font-size: 13px; }
`;

const TestiQuote = styled.p`
  color: ${theme.colors.textPrimary}; font-size: 15px; line-height: 1.6;
  margin: 0; flex: 1; font-weight: 400; opacity: 0.9;
`;

const TestiAuthor = styled.div`
  display: flex; align-items: center; gap: 12px;
`;

const TestiAvatar = styled.div`
  width: 36px; height: 36px; border-radius: 50%;
  background: ${theme.colors.brandGradient};
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; color: #fff;
`;

const AuthorName = styled.div`color:${theme.colors.textPrimary};font-weight:600;font-size:14px;`;
const AuthorLoc = styled.div`color:${theme.colors.textDim};font-size:12px;margin-top:2px;`;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// FINAL CTA
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const CtaSection = styled.section`
  padding: 120px 24px;
  @media(max-width:768px){ padding: 64px 16px; }
`;

const CtaBox = styled.div`
  max-width: 1000px; margin: 0 auto;
  background: ${theme.colors.backgroundElevated};
  border: 1px solid ${theme.colors.surfaceBorder};
  border-radius: 24px;
  padding: 56px 48px;
  display: flex; align-items: center; justify-content: space-between;
  gap: 40px;
  @media(max-width:768px){ flex-direction: column; text-align: center; padding: 40px 24px; }
`;



const CtaSub = styled.p`
  color: ${theme.colors.textDim}; font-size: 13px; margin: 10px 0 0;
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
  const solutionImages = [
    "/images/solutions/plumbing.png",
    "/images/solutions/cleaning.png",
    "/images/solutions/dentistry.png"
  ];
  const marqueeItems = [...industries, ...industries, ...industries, ...industries];

  return (
    <Page>
      {/* ── HERO ── */}
      <HeroSection>
        <HeroGlow />
        <HeroIconBadge>🎙️</HeroIconBadge>
        <HeroContent>
          <EyebrowWrap style={{ maxWidth: '400px' }}><EyebrowPill>{hero.eyebrow}</EyebrowPill></EyebrowWrap>
          <H1><GradientWord>{hero.title}</GradientWord></H1>
          <Body style={{ fontSize: "18px", maxWidth: "620px", margin: "0 auto", lineHeight: "1.6" }}>
            {hero.description}
          </Body>
          <HeroCTARow>
            <GlowingButton>{hero.cta}</GlowingButton>
          </HeroCTARow>
          <BadgeGrid>
            {hero.benefits.map((b, i) => (
              <Badge key={i}><CheckCircleFilled />{b}</Badge>
            ))}
          </BadgeGrid>

        </HeroContent>
      </HeroSection>

      {/* ── STATS ── */}
      <StatsStrip>
        <StatsGrid>
          {hero.stats.map((s, i) => (
            <StatItem key={i}>
              <StatValue>{s.value}</StatValue>
              <StatLabel>{s.label}</StatLabel>
            </StatItem>
          ))}
        </StatsGrid>
      </StatsStrip>

      {/* ── FEATURES ── */}
      <Section>
        <SectionBgArc><ArcSvg /></SectionBgArc>
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <SectionHead>
            <EyebrowWrap><EyebrowPill>Built-In AI Superpowers</EyebrowPill></EyebrowWrap>
            <H2>Everything your business needs, powered by AI</H2>
            <Body style={{ maxWidth: "560px", margin: "0 auto" }}>
              Convoa packs a full suite of intelligent tools — no extra apps, no extra cost.
            </Body>
          </SectionHead>
          <SuperpowerShowcase cards={cards} />
        </Container>
      </Section>

      {/* ── SOLUTIONS TABS ── */}
      <Section>
        <SectionBgHelix><HelixSvg /></SectionBgHelix>
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <SectionHead>
            <EyebrowWrap><EyebrowPill>Solutions</EyebrowPill></EyebrowWrap>
            <H2>{solutions.title}</H2>
          </SectionHead>
          <SolutionsGrid>
            {solutions.content.map((s, i) => (
              <SolutionCard key={i}>
                <SolutionCardVisual>
                  <img
                    src={solutionImages[i]}
                    alt={s.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }}
                  />
                </SolutionCardVisual>
                <SolutionCardBody>
                  <H3 style={{ fontSize: "20px", marginBottom: "12px", lineHeight: "1.3" }}>{s.title}</H3>
                  <Body style={{ fontSize: "15px", lineHeight: "1.6", margin: 0 }}>{s.description}</Body>
                </SolutionCardBody>
              </SolutionCard>
            ))}
          </SolutionsGrid>
        </Container>
      </Section>

      {/* ── INTEGRATIONS ── */}
      <Section>
        <FunnelGlow />
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <IntegSplitLayout>
            <IntegContentCol>
              <EyebrowWrap style={{ justifyContent: 'flex-start', marginBottom: '24px' }}>
                <EyebrowPill>{integrations.subtitle}</EyebrowPill>
              </EyebrowWrap>
              <H2 style={{ textAlign: 'left', margin: '0 0 24px 0' }}>{integrations.title}</H2>
              <Body style={{ textAlign: 'left', margin: 0 }}>{integrations.description}</Body>
            </IntegContentCol>

            <IntegCluster>
              <ClusterCenter>convoa</ClusterCenter>
              <ClusterApp $top="15%" $left="20%" $size="72px" initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <span style={{ fontSize: "14px" }}>Cal.com</span>
              </ClusterApp>
              <ClusterApp $top="8%" $left="45%" $size="72px" initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <div style={{ background: "#4285F4", width: "40px", height: "40px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", color: "white" }}>31</div>
              </ClusterApp>
              <ClusterApp $top="12%" $left="70%" $size="80px" initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <span style={{ color: "#0078D4", fontSize: "36px" }}>O</span>
              </ClusterApp>

              <ClusterApp $top="35%" $left="5%" $size="64px" initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                <span style={{ fontSize: "24px" }}>📅</span>
              </ClusterApp>
              <ClusterApp $top="55%" $left="15%" $size="72px" initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
                <span style={{ fontSize: "24px" }}>📚</span>
              </ClusterApp>

              <ClusterApp $top="30%" $left="85%" $size="64px" initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
                <span style={{ fontSize: "24px" }}>⚙️</span>
              </ClusterApp>
              <ClusterApp $top="55%" $left="80%" $size="72px" initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }}>
                <span style={{ fontSize: "24px" }}>📊</span>
              </ClusterApp>

              <ClusterApp $top="80%" $left="30%" $size="64px" initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }}>
                <span style={{ fontSize: "24px" }}>📞</span>
              </ClusterApp>
              <ClusterApp $top="75%" $left="50%" $size="80px" initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.9 }}>
                <div style={{ background: "white", color: "#111", width: "48px", height: "48px", borderRadius: "10px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ fontSize: "10px", fontWeight: 700, color: "#E03C31" }}>JUL</div>
                  <div style={{ fontSize: "16px", fontWeight: 700 }}>17</div>
                </div>
              </ClusterApp>
              <ClusterApp $top="70%" $left="75%" $size="80px" initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.0 }}>
                <span style={{ fontSize: "16px" }}>_zapier</span>
              </ClusterApp>
            </IntegCluster>
          </IntegSplitLayout>
        </Container>
      </Section>

      {/* ── STEPS ── */}
      <Section>
        <SectionBgLines><LinesSvg /></SectionBgLines>
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <SectionHead>
            <EyebrowWrap><EyebrowPill>How It Works</EyebrowPill></EyebrowWrap>
            <H2>{steps.title}</H2>
          </SectionHead>
          <StepsRow>
            {steps.content.map((s, i) => (
              <StepCard key={i}>
                {i < steps.content.length - 1 && <StepConnector />}
                <StepEyebrow>{s.step}</StepEyebrow>
                {s.image && (
                  <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                    <img src={s.image} alt={s.title} style={{ height: '160px', objectFit: 'contain' }} />
                  </div>
                )}
                <StepTitle>{s.title}</StepTitle>
                <Body style={{ fontSize: "15px" }}>{s.description}</Body>
              </StepCard>
            ))}
          </StepsRow>
        </Container>
      </Section>

      {/* ── FOCUS ON YOUR CUSTOMERS ── */}
      <Section>
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <FocusLayout>
            <FocusTop>
              <EyebrowWrap style={{ marginBottom: '24px' }}>
                <EyebrowPill>You. But Better.</EyebrowPill>
              </EyebrowWrap>
              <H2><GradientWord>Focus</GradientWord> On Your Customers</H2>
              <Body style={{ marginTop: "16px" }}>{focus.description}</Body>
            </FocusTop>
            <FocusCards>
              {industries.map((ind, i) => (
                <IndustryCard key={i}>
                  <IndustryIconWrap style={{ background: 'transparent', border: 'none', width: '160px', height: '160px' }}>
                    <img src={ind.image} alt={ind.name} style={{ width: '100%', height: '100%', objectFit: 'contain', transform: 'scale(2.2)' }} />
                  </IndustryIconWrap>
                  <IndustryTitle>{ind.name}</IndustryTitle>
                </IndustryCard>
              ))}
            </FocusCards>
          </FocusLayout>
        </Container>
      </Section>

      {/* ── TESTIMONIALS ── */}
      <Section>
        <SectionBgGrid />
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <SectionHead>
            <EyebrowWrap><EyebrowPill>Reviews</EyebrowPill></EyebrowWrap>
            <H2>Trusted by Businesses Like <GradientWord>Yours</GradientWord></H2>
          </SectionHead>
          <TestiGrid>
            {trustedBy.content.slice(0, 3).map((t, i) => (
              <TestiCard key={i}>
                <Stars>{[1, 2, 3, 4, 5].map(n => <StarFilled key={n} />)}</Stars>
                <TestiQuote>&ldquo;{t.quote}&rdquo;</TestiQuote>
                <TestiAuthor>
                  <TestiAvatar>{t.name.charAt(0)}</TestiAvatar>
                  <div>
                    <AuthorName>{t.name}</AuthorName>
                    <AuthorLoc>{t.location}</AuthorLoc>
                  </div>
                </TestiAuthor>
              </TestiCard>
            ))}
          </TestiGrid>
        </Container>
      </Section>

      {/* ── FINAL CTA ── */}
      <CtaSection>
        <CtaBox>
          <div style={{ flex: 1 }}>
            <H2 style={{ fontSize: "clamp(24px,3vw,36px)", marginBottom: "8px" }}>{cta.heading}</H2>
          </div>
          <div style={{ textAlign: "center" }}>
            <GlowingButton large>
              {cta.button} <ArrowRightOutlined />
            </GlowingButton>
            <CtaSub>{cta.subtext}</CtaSub>
          </div>
        </CtaBox>
      </CtaSection>
    </Page>
  );
}
