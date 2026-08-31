"use client";

import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "@/lib/theme";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";

const pulseGlow = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.05); }
`;

export const Page = styled.div`
  background: ${theme.colors.background};
  min-height: 100vh;
  font-family: ${theme.fonts.body};
  color: ${theme.colors.textPrimary};
  position: relative;
  overflow: hidden;
  padding-bottom: 80px;
`;

export const BgGlow = styled.div`
  position: fixed;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(ellipse at top, rgba(78,205,160,0.10) 0%, rgba(61,74,155,0.06) 40%, transparent 70%);
  pointer-events: none;
  animation: ${pulseGlow} 8s ease-in-out infinite;
  z-index: 0;
`;

export const GridLines = styled.div`
  display: none;
`;

export const HeroBanner = styled.div`
  position: relative;
  padding: 160px 24px 60px;
  text-align: center;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 20%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0.18) 80%, transparent 100%);
  }
`;

export const HeroGlow = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 400px;
  background: radial-gradient(ellipse at top, rgba(78,205,160,0.12) 0%, rgba(61,74,155,0.06) 40%, transparent 70%);
  pointer-events: none;
`;

export const BadgeRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto 24px;

  &::before, &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${theme.colors.surfaceBorder} 50%, ${theme.colors.surfaceBorder});
  }
  &::after {
    background: linear-gradient(270deg, transparent, ${theme.colors.surfaceBorder} 50%, ${theme.colors.surfaceBorder});
  }
`;

export const Badge = styled.span`
  position: relative;
  padding: 6px 20px;
  border-radius: 20px;
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.surfaceBorder};
  color: ${theme.colors.textMuted};
  font-family: ${theme.fonts.body};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin: 0 16px;

  &::before, &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 4px;
    height: 4px;
    background: ${theme.colors.surfaceBorder};
    transform: translateY(-50%) rotate(45deg);
  }
  &::before { left: -16px; }
  &::after { right: -16px; }
`;

export const HeroTitle = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 700;
  margin: 0 0 16px;
  letter-spacing: -0.02em;
`;

export const HeroSub = styled.p`
  font-size: 16px;
  color: ${theme.colors.textMuted};
  margin: 0 0 24px;
  max-width: 500px;
  margin-inline: auto;
  line-height: 1.6;
`;

export const MetaRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 14px;
  color: ${theme.colors.textDim};
`;

export const MetaDot = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${theme.colors.surfaceBorder};
`;

export const BodyWrap = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 24px;
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 64px;
  position: relative;
  z-index: 1;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const TocWrap = styled.div`
  position: sticky;
  top: 100px;
  align-self: start;
  max-height: calc(100vh - 120px);
  overflow-y: auto;
  padding-right: 16px;
  scrollbar-width: thin;
  scrollbar-color: ${theme.colors.surfaceBorder} transparent;

  @media (max-width: 900px) {
    position: relative;
    top: 0;
    max-height: none;
    border-bottom: 1px solid ${theme.colors.surfaceBorder};
    padding-bottom: 24px;
  }
`;

export const TocTitle = styled.h4`
  font-family: ${theme.fonts.heading};
  font-size: 13px;
  font-weight: 700;
  color: ${theme.colors.textPrimary};
  margin: 0 0 16px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const TocList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TocItem = styled.div<{ $active: boolean }>`
  font-size: 14px;
  color: ${p => (p.$active ? theme.colors.brandTeal : theme.colors.textMuted)};
  cursor: pointer;
  transition: all 0.2s;
  padding-left: 12px;
  border-left: 2px solid ${p => (p.$active ? theme.colors.brandTeal : "transparent")};

  &:hover {
    color: ${theme.colors.textPrimary};
  }
`;

export const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  max-height: calc(100vh - 120px);
  overflow-y: auto;
  padding-right: 16px;
  padding-bottom: 60px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: ${theme.colors.surfaceBorder}; border-radius: 4px; }

  @media (max-width: 900px) {
    max-height: none;
    overflow-y: visible;
    padding-right: 0;
  }
`;

export const SectionCard = styled.section`
  scroll-margin-top: 100px;
`;

export const SectionNum = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 13px;
  font-weight: 700;
  color: ${theme.colors.brandTeal};
  margin-bottom: 8px;
  letter-spacing: 0.05em;
`;

export const H2 = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 16px;
  letter-spacing: -0.01em;
`;

export const H3 = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 18px;
  font-weight: 600;
  margin: 24px 0 12px;
`;

export const P = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: ${theme.colors.textMuted};
  margin: 0 0 16px;
`;

export const Ul = styled.ul`
  margin: 0 0 16px;
  padding-left: 20px;
  color: ${theme.colors.textMuted};
  font-size: 15px;
  line-height: 1.7;
`;

export const Li = styled.li`
  margin-bottom: 8px;
  &::marker { color: ${theme.colors.brandTeal}; }
`;

export const Anchor = styled.a`
  color: ${theme.colors.brandTeal};
  text-decoration: none;
  &:hover { text-decoration: underline; }
`;

export const CtaBar = styled.div`
  margin-top: 60px;
  padding: 40px;
  border-radius: 16px;
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.surfaceBorder};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 32px 20px;
  }
`;

export const CtaText = styled.div`
  position: relative;
  z-index: 1;
`;

export const CtaTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 8px;
`;

export const CtaSub = styled.p`
  font-size: 15px;
  color: ${theme.colors.textMuted};
  margin: 0;
`;

export const CtaBtn = styled(Link)`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 30px;
  background: ${theme.colors.textPrimary};
  color: ${theme.colors.background};
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover { opacity: 0.9; }
`;

export const scrollTo = (id: string, ref?: React.RefObject<HTMLElement | null>) => {
  const el = document.getElementById(id);
  if (el) {
    if (ref && ref.current) {
      const containerTop = ref.current.getBoundingClientRect().top;
      const elTop = el.getBoundingClientRect().top;
      ref.current.scrollTo({
        top: ref.current.scrollTop + (elTop - containerTop) - 40,
        behavior: "smooth"
      });
    } else {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
};

export const useTocActive = (sectionIds: string[], containerRef?: React.RefObject<HTMLElement | null>) => {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] || "");

  useEffect(() => {
    const container = containerRef?.current || window;
    
    const handleScroll = () => {
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = id;
          }
        }
      }
      setActiveId(current);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [sectionIds, containerRef]);

  return activeId;
};
