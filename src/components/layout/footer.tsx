"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";

// ─── Tokens ──────────────────────────────────────────────────────────────────
const BRAND = "#2dd4bf";
const BG = "#0d0b1e";
const BORDER = "rgba(255,255,255,0.07)";
const TEXT_MUTED = "#64748b";
const TEXT_LINK = "#94a3b8";

// ─── Styled Components ────────────────────────────────────────────────────────
const FooterOuter = styled.footer`
  background: ${BG};
  border-top: 1px solid ${BORDER};
  padding: 72px 24px 40px;
  font-family: var(--font-inter), 'Inter', system-ui, sans-serif;
`;

const FooterInner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

const LogoText = styled.div`
  font-size: 32px;
  font-weight: 800;
  letter-spacing: -1.6px;
  background: linear-gradient(90deg, #2dd4bf 0%, #60a5fa 40%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  font-family: inherit;
  line-height: 1;
`;

const TopGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
  padding-bottom: 56px;
  border-bottom: 1px solid ${BORDER};

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

const BrandCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const BrandDesc = styled.p`
  color: ${TEXT_MUTED};
  font-size: 14px;
  line-height: 1.7;
  max-width: 260px;
  margin: 0;
`;

const ColTitle = styled.h4`
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  margin: 0 0 16px;
  letter-spacing: 0.3px;
`;

const ColLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FooterLink = styled(Link)`
  color: ${TEXT_LINK};
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;

  &:hover { color: ${BRAND}; }
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 32px;
  flex-wrap: wrap;
  gap: 16px;
`;

const Copyright = styled.p`
  color: ${TEXT_MUTED};
  font-size: 13px;
  margin: 0;
`;

const BottomLinks = styled.div`
  display: flex;
  gap: 24px;
`;

const BottomLink = styled(Link)`
  color: ${TEXT_MUTED};
  text-decoration: none;
  font-size: 13px;
  transition: color 0.2s;
  &:hover { color: ${BRAND}; }
`;

// ─── Component ────────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <FooterOuter>
      <FooterInner>
        <TopGrid>
          {/* Brand */}
          <BrandCol>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <LogoText>convoa</LogoText>
            </Link>
            <BrandDesc>
              Convoa is your 24/7 AI voice assistant — answering calls, booking
              appointments, and converting leads while you focus on what matters.
            </BrandDesc>
          </BrandCol>

          {/* Product */}
          <div>
            <ColTitle>Product</ColTitle>
            <ColLinks>
              <FooterLink href="/features">Features</FooterLink>
              <FooterLink href="/pricing">Pricing</FooterLink>
              <FooterLink href="/industry/hvac">Industries</FooterLink>
            </ColLinks>
          </div>

          {/* Company */}
          <div>
            <ColTitle>Company</ColTitle>
            <ColLinks>
              <FooterLink href="/contact-us">Contact Us</FooterLink>
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink href="/terms-of-use">Terms of Use</FooterLink>
            </ColLinks>
          </div>

          {/* Support */}
          <div>
            <ColTitle>Support</ColTitle>
            <ColLinks>
              <FooterLink href="/contact-us">Help Center</FooterLink>
              <FooterLink href="/contact-us">Get in Touch</FooterLink>
            </ColLinks>
          </div>
        </TopGrid>

        <BottomRow>
          <Copyright>
            © {new Date().getFullYear()} Convoa. All rights reserved.
          </Copyright>
          <BottomLinks>
            <BottomLink href="/privacy-policy">Privacy</BottomLink>
            <BottomLink href="/terms-of-use">Terms</BottomLink>
            <BottomLink href="/contact-us">Contact</BottomLink>
          </BottomLinks>
        </BottomRow>
      </FooterInner>
    </FooterOuter>
  );
}
