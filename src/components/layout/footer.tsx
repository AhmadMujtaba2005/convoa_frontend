"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { theme } from "@/lib/theme";
import { FacebookFilled, LinkedinFilled, XOutlined } from "@ant-design/icons";

const FooterOuter = styled.footer`
  background: ${theme.colors.backgroundElevated};
  border-top: 1px solid ${theme.colors.surfaceBorder};
  padding: 72px 24px 40px;
  font-family: ${theme.fonts.body};
  position: relative;
  z-index: 1;
`;

const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const LogoText = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -1px;
  background: ${theme.colors.brandGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  line-height: 1;
`;

const TopGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid ${theme.colors.surfaceBorder};
  @media (max-width: 900px) { grid-template-columns: 1fr 1fr; gap: 32px; }
  @media (max-width: 580px) { grid-template-columns: 1fr; }
`;

const BrandCol = styled.div`
  display: flex; flex-direction: column; gap: 14px;
`;

const BrandDesc = styled.p`
  color: ${theme.colors.textMuted};
  font-size: 14px; line-height: 1.6; max-width: 280px; margin: 0;
`;

const SocialRow = styled.div`
  display: flex; gap: 12px; margin-top: 4px;
`;

const SocialIcon = styled.a`
  width: 32px; height: 32px; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  color: ${theme.colors.textMuted}; font-size: 15px;
  transition: color 0.2s;
  &:hover { color: ${theme.colors.brandTeal}; }
`;

const ColTitle = styled.h4`
  color: ${theme.colors.textPrimary};
  font-family: ${theme.fonts.heading};
  font-size: 13px; font-weight: 700; margin: 0 0 14px;
  letter-spacing: 0.04em; text-transform: uppercase;
`;

const ColLinks = styled.div`
  display: flex; flex-direction: column; gap: 10px;
`;

const FooterLink = styled(Link)`
  color: ${theme.colors.textMuted};
  text-decoration: none; font-size: 14px; font-weight: 400;
  transition: color 0.2s;
  &:hover { color: ${theme.colors.brandTeal}; }
`;

const BottomRow = styled.div`
  display: flex; align-items: center; justify-content: space-between;
  padding-top: 28px; flex-wrap: wrap; gap: 16px;
`;

const Copyright = styled.p`
  color: ${theme.colors.textDim}; font-size: 13px; margin: 0;
`;

const BottomLinks = styled.div`
  display: flex; gap: 24px;
`;

const BottomLink = styled(Link)`
  color: ${theme.colors.textDim}; text-decoration: none; font-size: 13px;
  transition: color 0.2s;
  &:hover { color: ${theme.colors.brandTeal}; }
`;

export default function Footer() {
  return (
    <FooterOuter>
      <FooterInner>
        <TopGrid>
          <BrandCol>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <LogoText>convoa</LogoText>
            </Link>
            <BrandDesc>
              Convoa is your 24/7 AI voice assistant — answering calls, booking
              appointments, and converting leads while you focus on what matters.
            </BrandDesc>
            <SocialRow>
              <SocialIcon href="#" aria-label="Facebook"><FacebookFilled style={{ fontSize: '18px' }} /></SocialIcon>
              <SocialIcon href="#" aria-label="LinkedIn"><LinkedinFilled style={{ fontSize: '18px' }} /></SocialIcon>
              <SocialIcon href="#" aria-label="X (Twitter)"><XOutlined style={{ fontSize: '16px' }} /></SocialIcon>
            </SocialRow>
          </BrandCol>
          <div>
            <ColTitle>Product</ColTitle>
            <ColLinks>
              <FooterLink href="/features">Features</FooterLink>
              <FooterLink href="/pricing">Pricing</FooterLink>
              <FooterLink href="/contact-us">Contact Us</FooterLink>
            </ColLinks>
          </div>
          <div>
            <ColTitle>Company</ColTitle>
            <ColLinks>
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink href="/terms-of-use">Terms of Service</FooterLink>
            </ColLinks>
          </div>
          <div>
            <ColTitle>Support</ColTitle>
            <ColLinks>
              <FooterLink href="/contact-us">Help Center</FooterLink>
              <FooterLink href="/contact-us">Get in Touch</FooterLink>
            </ColLinks>
          </div>
        </TopGrid>
        <BottomRow>
          <Copyright>© {new Date().getFullYear()} Convoa. All rights reserved.</Copyright>
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
