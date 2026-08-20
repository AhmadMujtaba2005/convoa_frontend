"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { industryNav } from "@/lib/navConfig";
import { DownOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import {
  MedicineBoxOutlined,
  HeartOutlined,
  ClearOutlined,
  BugOutlined,
  ToolOutlined,
  CalculatorOutlined,
  SafetyCertificateOutlined,
  CalendarOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";

const getIcon = (label: string) => {
  switch (label.toLowerCase()) {
    case "dental": return <MedicineBoxOutlined />;
    case "chiropractic": return <HeartOutlined />;
    case "cleaning": return <ClearOutlined />;
    case "pest control": return <BugOutlined />;
    case "hvac": return <ToolOutlined />;
    case "tax accountant": return <CalculatorOutlined />;
    case "insurance agents": return <SafetyCertificateOutlined />;
    case "event planners": return <CalendarOutlined />;
    case "injury lawyers": return <FileProtectOutlined />;
    default: return <FileProtectOutlined />;
  }
};

// ─── Tokens ──────────────────────────────────────────────────────────────────
const BRAND = "#2dd4bf";
const BRAND_GRADIENT = "linear-gradient(90deg, #2dd4bf 0%, #60a5fa 40%, #8b5cf6 100%)";
const BG_NAV = "rgba(13, 11, 30, 0.85)";
const BORDER = "rgba(255,255,255,0.07)";
const TEXT_MUTED = "#94a3b8";

// ─── Styled Components ────────────────────────────────────────────────────────
const NavOuter = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(${p => p.$scrolled ? '24px' : '0'});
  z-index: 1000;
  width: 100%;
  max-width: 1240px;
  padding: 0 24px;
  transition: transform 0.5s ease-out;

  @media (max-width: 900px) {
    transform: translateX(-50%) translateY(${p => p.$scrolled ? '16px' : '0'});
  }
`;

const NavInner = styled.nav<{ $scrolled: boolean }>`
  background: ${p => p.$scrolled ? 'rgba(10, 8, 26, 0.85)' : 'transparent'};
  backdrop-filter: ${p => p.$scrolled ? 'blur(24px) saturate(200%)' : 'none'};
  border: 1px solid ${p => p.$scrolled ? 'rgba(255, 255, 255, 0.06)' : 'transparent'};
  border-radius: 20px;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px 0 28px;
  box-shadow: ${p => p.$scrolled ? '0 24px 48px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.05)' : 'none'};
  transition: all 0.5s ease-out;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  text-decoration: none;
`;

const LogoText = styled.div`
  font-size: 30px;
  font-weight: 800;
  letter-spacing: -1.6px;
  background: linear-gradient(90deg, #2dd4bf 0%, #60a5fa 40%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  font-family: inherit;
  line-height: 1;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
  justify-content: center;

  @media (max-width: 900px) { display: none; }
`;

const NavLink = styled(Link)`
  color: ${TEXT_MUTED};
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  padding: 8px 14px;
  border-radius: 8px;
  transition: color 0.2s, background 0.2s;
  font-family: inherit;

  &:hover {
    color: #fff;
    background: rgba(255,255,255,0.06);
  }
`;

const DropTrigger = styled.div`
  color: ${TEXT_MUTED};
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 14px;
  border-radius: 8px;
  transition: color 0.2s, background 0.2s;
  font-family: inherit;

  &:hover {
    color: #fff;
    background: rgba(255,255,255,0.06);
  }

  .anticon { font-size: 10px; transition: transform 0.2s; }
  &:hover .anticon { transform: rotate(180deg); }
`;

const MegaMenu = styled.div<{ $visible: boolean }>`
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: rgba(13, 11, 30, 0.98);
  backdrop-filter: blur(24px);
  border-radius: 16px;
  padding: 28px 32px;
  display: ${p => (p.$visible ? "flex" : "none")};
  gap: 48px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255,255,255,0.07);
  min-width: 580px;
`;

const MegaCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`;

const MegaColTitle = styled.h3`
  color: ${BRAND};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin: 0 0 4px;
  font-family: inherit;
`;

const MegaItem = styled(Link)`
  color: ${TEXT_MUTED};
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 0;
  transition: color 0.2s;
  font-family: inherit;

  .anticon { font-size: 16px; opacity: 0.7; }

  &:hover {
    color: #fff;
    .anticon { opacity: 1; color: ${BRAND}; }
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;

  @media (max-width: 900px) { 
    .login-btn { display: none; }
  }
`;

const LoginBtn = styled(Link)`
  color: ${TEXT_MUTED};
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 8px;
  transition: color 0.2s;
  font-family: inherit;

  &:hover { color: #fff; }
`;

const GetStartedBtn = styled(Link)`
  background: ${BRAND_GRADIENT};
  box-shadow: 0 8px 24px rgba(45, 212, 191, 0.3);
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  padding: 10px 24px;
  border-radius: 14px;
  transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
  font-family: inherit;
  white-space: nowrap;

  &:hover {
    opacity: 0.95;
    transform: translateY(-1px);
    box-shadow: 0 12px 24px rgba(45, 212, 191, 0.35);
  }
`;

const HamburgerBtn = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  padding: 4px;

  @media (max-width: 900px) { display: flex; align-items: center; }
`;

const MobileMenu = styled.div<{ $open: boolean }>`
  position: absolute;
  top: calc(100% + 12px);
  left: 24px;
  right: 24px;
  border-radius: 16px;
  display: ${p => p.$open ? "flex" : "none"};
  flex-direction: column;
  gap: 4px;
  padding: 16px 24px 24px;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(13, 11, 30, 0.95);
  backdrop-filter: blur(24px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.5);

  @media (min-width: 901px) { display: none; }
`;

const MobileNavLink = styled(Link)`
  color: ${TEXT_MUTED};
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  padding: 12px 8px;
  border-bottom: 1px solid ${BORDER};
  font-family: inherit;
  &:hover { color: #fff; }
`;

// ─── Component ────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavOuter $scrolled={scrolled || mobileOpen}>
      <NavInner $scrolled={scrolled || mobileOpen}>
        <Logo href="/">
          <LogoText>convoa</LogoText>
        </Logo>

        {/* Desktop Links */}
        <NavLinks>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/features">Features</NavLink>
          <NavLink href="/pricing">Pricing</NavLink>

          <div
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
            style={{ position: "relative" }}
          >
            <DropTrigger>
              Industry <DownOutlined />
            </DropTrigger>
            <MegaMenu $visible={dropdownVisible}>
              {industryNav.map(col => (
                <MegaCol key={col.group}>
                  <MegaColTitle>{col.group}</MegaColTitle>
                  {col.items.map(item => (
                    <MegaItem key={item.label} href={`/industry${item.href}`}>
                      {getIcon(item.label)}
                      {item.label}
                    </MegaItem>
                  ))}
                </MegaCol>
              ))}
            </MegaMenu>
          </div>
        </NavLinks>

        {/* Actions */}
        <NavActions>
          <LoginBtn href="/login" className="login-btn">Login</LoginBtn>
          <GetStartedBtn href="/">Get Started</GetStartedBtn>
          <HamburgerBtn onClick={() => setMobileOpen(o => !o)}>
            {mobileOpen ? <CloseOutlined /> : <MenuOutlined />}
          </HamburgerBtn>
        </NavActions>
      </NavInner>

      {/* Mobile Menu */}
      <MobileMenu $open={mobileOpen}>
        <MobileNavLink href="/" onClick={() => setMobileOpen(false)}>Home</MobileNavLink>
        <MobileNavLink href="/features" onClick={() => setMobileOpen(false)}>Features</MobileNavLink>
        <MobileNavLink href="/pricing" onClick={() => setMobileOpen(false)}>Pricing</MobileNavLink>
        <MobileNavLink href="/contact-us" onClick={() => setMobileOpen(false)}>Contact</MobileNavLink>
        <div style={{ paddingTop: "12px" }}>
          <GetStartedBtn href="/" onClick={() => setMobileOpen(false)}>Get Started</GetStartedBtn>
        </div>
      </MobileMenu>
    </NavOuter>
  );
}
