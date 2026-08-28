"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { industryNav } from "@/lib/navConfig";
import { DownOutlined } from "@ant-design/icons";
import { theme } from "@/lib/theme";

import {
  MedicineBoxOutlined, HeartOutlined, ClearOutlined, BugOutlined,
  ToolOutlined, CalculatorOutlined, SafetyCertificateOutlined,
  CalendarOutlined, FileProtectOutlined
} from "@ant-design/icons";

const getIcon = (label: string) => {
  switch (label.toLowerCase()) {
    case 'dental': return <MedicineBoxOutlined />;
    case 'chiropractic': return <HeartOutlined />;
    case 'cleaning': return <ClearOutlined />;
    case 'pest control': return <BugOutlined />;
    case 'hvac': return <ToolOutlined />;
    case 'tax accountant': return <CalculatorOutlined />;
    case 'insurance agents': return <SafetyCertificateOutlined />;
    case 'event planners': return <CalendarOutlined />;
    case 'injury lawyers': return <FileProtectOutlined />;
    default: return <FileProtectOutlined />;
  }
};

/* ── Wing arcs behind nav ── */
const WingArcs = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 200px;
  pointer-events: none;
  z-index: 999;
  overflow: hidden;
`;

const WingArcSvg = () => (
  <svg width="100%" height="200" viewBox="0 0 1440 200" fill="none"
    xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
    <defs>
      <linearGradient id="wingGrad" x1="0" y1="100" x2="1440" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor={theme.colors.brandTeal} />
        <stop offset="1" stopColor={theme.colors.brandTeal} stopOpacity="0.4" />
      </linearGradient>
    </defs>
    <path d="M720 160 Q 360 20 -40 80" stroke="url(#wingGrad)" strokeWidth="1.5" fill="none" opacity="0.12" />
    <path d="M720 160 Q 1080 20 1480 80" stroke="url(#wingGrad)" strokeWidth="1.5" fill="none" opacity="0.12" />
  </svg>
);

const NavOuter = styled.div<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 50%;
  width: calc(100% - 40px);
  max-width: 1200px;
  z-index: 1000;
  border-radius: 22px;
  padding: 0 28px;
  transition: all 0.5s ease-out;

  /* Animation and Glassmorphism */
  transform: translate(-50%, ${p => p.$scrolled ? '16px' : '0px'});
  background: ${p => p.$scrolled ? 'var(--nav-bg)' : 'transparent'};
  border: 1px solid ${p => p.$scrolled ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  box-shadow: ${p => p.$scrolled ? '0 12px 40px rgba(78, 205, 160, 0.08)' : 'none'};
  backdrop-filter: ${p => p.$scrolled ? 'blur(48px) saturate(200%)' : 'none'};
  -webkit-backdrop-filter: ${p => p.$scrolled ? 'blur(48px) saturate(200%)' : 'none'};

  @media(max-width:768px) { padding: 0 16px; width: calc(100% - 24px); }
`;

const NavInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  font-family: ${theme.fonts.heading};
  font-size: 22px;
  font-weight: 700;
  background: ${theme.colors.brandGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;
`;

const NavCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  transform: translateY(2px); /* Optical vertical alignment */
  @media(max-width:768px) { display: none; }
`;

const NLink = styled(Link)`
  color: ${theme.colors.textPrimary};
  text-decoration: none;
  font-family: ${theme.fonts.body};
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;
  &:hover { color: ${theme.colors.brandTeal}; }
`;

const DropWrap = styled.div`
  position: relative;
`;

const DropTrigger = styled.div`
  color: ${theme.colors.textPrimary};
  font-family: ${theme.fonts.body};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 0.2s;
  &:hover { color: ${theme.colors.brandTeal}; }
`;

const MegaMenu = styled.div<{ $visible: boolean }>`
  position: absolute;
  top: calc(100% + 16px);
  left: 50%;
  transform: translateX(-50%) translateY(${p => p.$visible ? '0' : '-10px'});
  background: ${theme.colors.surface};
  border-radius: 16px;
  padding: 24px 28px;
  display: flex;
  opacity: ${p => p.$visible ? 1 : 0};
  visibility: ${p => p.$visible ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  gap: 40px;
  border: 1px solid ${theme.colors.surfaceBorder};
  box-shadow: 0 16px 48px rgba(0,0,0,0.6);
  min-width: 540px;
  z-index: 1001;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 0;
    right: 0;
    height: 20px;
  }
`;

const MCol = styled.div`
  display: flex; flex-direction: column; gap: 12px; flex: 1;
`;

const MColTitle = styled.h4`
  color: ${theme.colors.brandTeal};
  font-family: ${theme.fonts.heading};
  font-size: 13px; font-weight: 700; margin: 0 0 4px;
  letter-spacing: 0.04em; text-transform: uppercase;
`;

const MItem = styled(Link)`
  color: ${theme.colors.textMuted};
  text-decoration: none;
  font-size: 13px;
  display: flex; align-items: center; gap: 10px;
  transition: color 0.2s;
  .anticon { font-size: 15px; opacity: 0.7; color: ${theme.colors.brandTeal}; transition: opacity 0.2s; }
  &:hover { color: ${theme.colors.brandTeal}; .anticon { opacity: 1; } }
`;

const LoginBtn = styled(Link)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px 0 20px;
  height: 36px;
  border-radius: 36px;
  background: transparent;
  border: 2px solid ${theme.colors.brandTeal};
  text-decoration: none;
  overflow: hidden;
  transition: all 0.2s ease;

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    right: -2px;
    bottom: -2px;
    width: 40px;
    border-radius: 36px;
    background: ${theme.colors.brandTeal};
    transition: all 0.5s ease;
    z-index: 0;
  }

  &:hover::before {
    width: calc(100% + 4px);
  }

  span {
    position: relative;
    z-index: 1;
    font-family: ${theme.fonts.body};
    font-size: 14px;
    font-weight: 600;
    color: ${theme.colors.textPrimary};
    transition: color 0.5s ease;
    margin-right: 12px;
  }

  &:hover span {
    color: #000;
  }

  svg {
    position: relative;
    z-index: 1;
    width: 15px;
    height: 10px;
    fill: none;
    stroke: ${theme.colors.brandTeal};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    transform: translateX(-4px);
    transition: all 0.5s ease;
  }

  &:hover svg {
    stroke: #000;
    transform: translateX(0);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const SwallowIcon = styled.button<{ $open: boolean }>`
  border: none;
  background: none;
  margin: 0;
  cursor: pointer;
  font-family: inherit;

  width: 24px;
  height: 24px;
  position: relative;
  display: inline-flex;
  outline: none;
  color: inherit;

  span {
    width: 16px;
    height: 6px;
    position: absolute;
    top: calc(50% - 3px);
    left: calc(50% - 8px);
    transition: transform 0.3s ease;
    transform: ${p => p.$open ? 'translateY(-2px)' : 'translateY(2px)'};
  }

  span:before,
  span:after {
    content: "";
    width: 8px;
    height: 2px;
    background-color: currentColor;
    position: absolute;
    bottom: 0;
    transition: transform 0.3s ease;
  }

  span:before {
    right: 50%;
    border-radius: 2px 0 0 2px;
    transform-origin: ${p => p.$open ? '100% 0' : '100% 100%'};
    transform: ${p => p.$open ? 'rotate(-40deg)' : 'rotate(40deg)'};
  }

  span:after {
    left: 50%;
    border-radius: 0 2px 2px 0;
    transform-origin: ${p => p.$open ? '0 0' : '0 100%'};
    transform: ${p => p.$open ? 'rotate(40deg)' : 'rotate(-40deg)'};
  }
`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    h();
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      {pathname === '/' && (
        <WingArcs><WingArcSvg /></WingArcs>
      )}
      <NavOuter $scrolled={scrolled}>
        <NavInner>
          <LogoLink href="/">convoa</LogoLink>
          <NavCenter>
            <NLink href="/">Home</NLink>
            <NLink href="/features">Features</NLink>
            <NLink href="/pricing">Pricing</NLink>
            <DropWrap
              onMouseEnter={() => setDropdownVisible(true)}
              onMouseLeave={() => setDropdownVisible(false)}
            >
              <DropTrigger>
                Industry
                <SwallowIcon $open={dropdownVisible}>
                  <span></span>
                </SwallowIcon>
              </DropTrigger>
              <MegaMenu $visible={dropdownVisible}>
                {industryNav.map((col) => (
                  <MCol key={col.group}>
                    <MColTitle>{col.group}</MColTitle>
                    {col.items.map((item) => (
                      <MItem key={item.label} href={`/industry${item.href}`}>
                        {getIcon(item.label)}
                        {item.label}
                      </MItem>
                    ))}
                  </MCol>
                ))}
              </MegaMenu>
            </DropWrap>
          </NavCenter>
          <LoginBtn href="https://app.convoa.ai/login">
            <span>Login &nbsp;</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </LoginBtn>
        </NavInner>
      </NavOuter>
    </>
  );
}
