"use client";

import React from "react";
import styled, { keyframes } from "styled-components";
import { ArrowRightOutlined } from "@ant-design/icons";
import { theme } from "@/lib/theme";
import { motion } from "framer-motion";
import { HeroCanvas } from "@/components/ui/HeroCanvas";
import { featuresHero, featuresList, featuresCta } from "./features";

// Shared Styles
const Page = styled.div`
  background: ${theme.colors.background};
  color: ${theme.colors.textPrimary};
  font-family: ${theme.fonts.body};
  overflow-x: hidden;
  position: relative;
  z-index: 1;
  padding-bottom: 120px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  @media(max-width:768px){ padding: 0 16px; }
`;

const SectionHead = styled.div`
  text-align: center;
  margin-bottom: 56px;
  position: relative;
  z-index: 1;
`;

const EyebrowWrap = styled.div`
  display: flex; align-items: center; justify-content: center;
  width: 100%; max-width: 600px; margin: 0 auto 24px;
  &::before, &::after {
    content: ''; flex: 1; height: 1px;
    background: linear-gradient(90deg, transparent, ${theme.colors.surfaceBorder} 50%, ${theme.colors.surfaceBorder});
  }
  &::after {
    background: linear-gradient(270deg, transparent, ${theme.colors.surfaceBorder} 50%, ${theme.colors.surfaceBorder});
  }
`;

const EyebrowPill = styled.span`
  position: relative;
  padding: 6px 20px; border-radius: 20px;
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.surfaceBorder};
  color: ${theme.colors.textMuted};
  font-family: ${theme.fonts.body};
  font-size: 12px; font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin: 0 24px; white-space: nowrap;

  &::before, &::after {
    content: ''; position: absolute; top: 50%;
    width: 6px; height: 6px; background: ${theme.colors.textMuted};
    transform: translateY(-50%) rotate(45deg);
  }
  &::before { left: -24px; }
  &::after { right: -24px; }
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

const Body = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 16px;
  line-height: 1.6;
  color: ${theme.colors.textMuted};
  margin: 0 auto;
  max-width: 700px;
`;

const GradientWord = styled.span`
  background: ${theme.colors.brandGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HeroSection = styled.section`
  text-align: center;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroGlow = styled.div`
  position: absolute; top: -100px; left: 50%; transform: translateX(-50%);
  width: 1000px; height: 500px; pointer-events: none; z-index: 0;
  background: radial-gradient(ellipse at top center, rgba(78, 205, 160, 0.15) 0%, transparent 70%);
`;

// Feature Sections

const FeatureRow = styled.div<{ $reverse?: boolean }>`
  display: flex;
  flex-direction: ${p => p.$reverse ? 'row-reverse' : 'row'};
  align-items: center;
  gap: 64px;
  padding: 100px 0;
  border-bottom: 1px solid ${theme.colors.surfaceBorder};
  
  &:last-child {
    border-bottom: none;
  }

  @media(max-width: 900px) {
    flex-direction: column;
    padding: 64px 0;
    gap: 40px;
  }
`;

const FeatureContent = styled.div`
  flex: 0.8;
`;

const FeatureVisual = styled.div`
  flex: 1.2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FeatureEyebrow = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 20px;
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.surfaceBorder};
  color: ${theme.colors.textMuted};
  font-family: ${theme.fonts.body};
  font-size: 13px; font-weight: 500;
  white-space: nowrap;
  margin-left: 24px;
  margin-bottom: 24px;

  &::before, &::after {
    content: ''; position: absolute; top: 50%;
    width: 6px; height: 6px; background: ${theme.colors.textMuted};
    transform: translateY(-50%) rotate(45deg);
  }
  &::before { left: -24px; }
  &::after { right: -24px; }
`;

const FeatureImage = styled.img`
  width: 100%;
  max-width: 650px;
  height: auto;
  object-fit: contain;
`;

const AppScreenshot = styled.div`
  border-radius: 16px;
  background: #0d0d12;
  border: 1px solid rgba(255, 255, 255, 0.06);
  overflow: hidden;
  display: flex;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4);
  width: 100%;
  max-width: 800px;
  
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
  }
`;

const FeatureTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(28px, 3vw, 40px);
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 24px;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: ${theme.colors.textMuted};
  margin: 0 0 32px;
`;

const GlowingButton = styled.a`
  background: ${theme.colors.brandTeal};
  color: #000;
  border: none;
  border-radius: 30px;
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(78, 205, 160, 0.4);
  text-decoration: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(78, 205, 160, 0.6);
  }
`;


// Full Width Feature Section
const FullWidthFeature = styled.div`
  width: 100%;
  position: relative;
  margin: 100px 0;
  min-height: 550px;
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-image: url('/images/features/feature_human_dark.jpg');
  box-shadow: 0 24px 48px rgba(0,0,0,0.4);
`;

const FullWidthFeatureContent = styled.div`
  position: absolute;
  right: 5%;
  width: 45%;
  padding: 0;
  border-radius: 0;
  border: none;
  background: transparent;

  /* Force light text to remain readable over the dark image background in any theme */
  ${FeatureEyebrow} {
    background: rgba(0, 0, 0, 0.7);
    border-color: rgba(255, 255, 255, 0.15);
    color: #ffffff;
    &::before, &::after {
      background: rgba(255, 255, 255, 0.5);
    }
  }
  ${FeatureTitle} {
    color: #ffffff;
    text-shadow: 0 4px 24px rgba(0,0,0,0.4);
  }
  ${FeatureDescription} {
    color: rgba(255, 255, 255, 0.8);
    text-shadow: 0 2px 12px rgba(0,0,0,0.4);
  }

  @media(max-width: 900px) {
    position: relative;
    right: 0;
    width: 100%;
    margin-top: 350px;
    padding: 0 24px;
  }
`;

// CTA Section
const CtaSection = styled.section`
  padding: 120px 24px;
  text-align: center;
  position: relative;
`;

const CtaBox = styled.div`
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.surfaceBorder};
  border-radius: 24px;
  padding: 80px 40px;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const FeaturesPageTemplate = () => {
  return (
    <Page>
      <HeroSection>
        <HeroCanvas />
        <Container>
          <HeroGlow />
          <EyebrowWrap>
            <EyebrowPill>{featuresHero.eyebrow}</EyebrowPill>
          </EyebrowWrap>
          <H1>{featuresHero.title}<GradientWord>{featuresHero.highlightedTitle}</GradientWord></H1>
          <Body style={{ fontSize: '18px' }}>
            {featuresHero.description}
          </Body>
        </Container>
      </HeroSection>

      <Container>
        {/* Feature 1 */}
        <FeatureRow>
          <FeatureContent>
            <FeatureEyebrow>{featuresList[0].eyebrow}</FeatureEyebrow>
            <FeatureTitle>{featuresList[0].title}</FeatureTitle>
            <FeatureDescription>{featuresList[0].description}</FeatureDescription>
          </FeatureContent>
          <FeatureVisual>
            <AppScreenshot>
              <img src={featuresList[0].image} alt={featuresList[0].title} />
            </AppScreenshot>
          </FeatureVisual>
        </FeatureRow>

        {/* Feature 2 */}
        <FeatureRow $reverse>
          <FeatureContent>
            <FeatureEyebrow>{featuresList[1].eyebrow}</FeatureEyebrow>
            <FeatureTitle>{featuresList[1].title}</FeatureTitle>
            <FeatureDescription>{featuresList[1].description}</FeatureDescription>
          </FeatureContent>
          <FeatureVisual>
            <FeatureImage src={featuresList[1].image} alt={featuresList[1].title} />
          </FeatureVisual>
        </FeatureRow>
      </Container>

      {/* Feature 3 */}
      <FullWidthFeature>
        <FullWidthFeatureContent>
          <FeatureEyebrow>{featuresList[2].eyebrow}</FeatureEyebrow>
          <FeatureTitle>{featuresList[2].title}</FeatureTitle>
          <FeatureDescription>{featuresList[2].description}</FeatureDescription>
          <GlowingButton href="https://app.convoa.ai/login">{featuresList[2].ctaText}<ArrowRightOutlined /></GlowingButton>
        </FullWidthFeatureContent>
      </FullWidthFeature>

      <Container>
        {/* Feature 4 */}
        <FeatureRow $reverse>
          <FeatureContent>
            <FeatureEyebrow>{featuresList[3].eyebrow}</FeatureEyebrow>
            <FeatureTitle>{featuresList[3].title}</FeatureTitle>
            <FeatureDescription>{featuresList[3].description}</FeatureDescription>
          </FeatureContent>
          <FeatureVisual>
            <AppScreenshot>
              <img src={featuresList[3].image} alt={featuresList[3].title} />
            </AppScreenshot>
          </FeatureVisual>
        </FeatureRow>

        {/* Feature 5 */}
        <FeatureRow>
          <FeatureContent>
            <FeatureEyebrow>{featuresList[4].eyebrow}</FeatureEyebrow>
            <FeatureTitle>{featuresList[4].title}</FeatureTitle>
            <FeatureDescription>{featuresList[4].description}</FeatureDescription>
          </FeatureContent>
          <FeatureVisual>
            <AppScreenshot>
              <img src={featuresList[4].image} alt={featuresList[4].title} style={{ objectPosition: 'left top' }} />
            </AppScreenshot>
          </FeatureVisual>
        </FeatureRow>

      </Container>

      {/* Feature 6 */}
      <div style={{ position: 'relative', width: '100%', padding: '140px 24px', display: 'flex', justifyContent: 'center', overflow: 'hidden', borderTop: `1px solid ${theme.colors.surfaceBorder}`, borderBottom: `1px solid ${theme.colors.surfaceBorder}` }}>
        <video autoPlay loop muted playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: 0.6 }} src={featuresList[5].video} />
        
        {/* Gradient Overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(10, 10, 10, 0.4) 0%, rgba(10, 10, 10, 0.9) 100%)', zIndex: 0 }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <FeatureEyebrow style={{ marginLeft: 0 }}>{featuresList[5].eyebrow}</FeatureEyebrow>
          <FeatureTitle style={{ textAlign: 'center' }}>{featuresList[5].title}</FeatureTitle>
          <FeatureDescription style={{ textAlign: 'center', margin: '0 auto' }}>{featuresList[5].description}</FeatureDescription>
        </div>
      </div>

      <CtaSection>
        <CtaBox>
          <FeatureTitle style={{ textAlign: 'center', marginBottom: 16 }}>{featuresCta.title}</FeatureTitle>
          <FeatureDescription style={{ textAlign: 'center', margin: '0 auto 40px' }}>{featuresCta.description}</FeatureDescription>
          <GlowingButton href="https://app.convoa.ai/login" style={{ margin: '0 auto' }}>{featuresCta.buttonText}<ArrowRightOutlined /></GlowingButton>
          <div style={{ fontSize: 12, color: theme.colors.textMuted, marginTop: 12 }}>{featuresCta.footnote}</div>
        </CtaBox>
      </CtaSection>

    </Page>
  );
};
