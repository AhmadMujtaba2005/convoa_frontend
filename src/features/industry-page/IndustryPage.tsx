"use client";

import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircleFilled, CheckOutlined } from "@ant-design/icons";
import { theme } from "@/lib/theme";
import { IndustryContent, globalIndustryFaq } from "@/features/industries/types";

// Animations
const fadeUp = keyframes`from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}`;


// Page Shell
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

// Section Divider (matches Homepage)
const SectionDividerWrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  z-index: 2;
  pointer-events: none;
`;

const SectionDividerLine = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${theme.colors.surfaceBorder} 15%,
    ${theme.colors.surfaceBorder} 85%,
    transparent 100%
  );
  position: relative;
  z-index: 2;
`;

const SectionDividerPill = styled.span`
  position: relative;
  z-index: 3;
  font-family: ${theme.fonts.body};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${theme.colors.textMuted};
  padding: 5px 16px;
  border-radius: 20px;
  border: 1px solid ${theme.colors.surfaceBorder};
  background: ${theme.colors.surface};
  margin-top: -1px;
  transform: translateY(-50%);
`;

const SectionDivider = ({ label }: { label?: string }) => (
  <SectionDividerWrap>
    <SectionDividerLine />
    {label && <SectionDividerPill>{label}</SectionDividerPill>}
  </SectionDividerWrap>
);

// Eyebrow (canonical: matches Home/Pricing/Features)
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

// Hero Section
const HeroSection = styled.section<{ $bgImage?: string }>`
  position: relative;
  padding: 180px 0 100px;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: ${p => p.$bgImage ? `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("${p.$bgImage}") center/cover no-repeat` : `radial-gradient(circle at top, rgba(78, 205, 160, 0.1), transparent 60%)`};

  /* Force white text if there is a dark background image, regardless of theme */
  ${p => p.$bgImage && `
    h1 { color: #ffffff !important; }
    ${HeroSubheading} { color: rgba(255, 255, 255, 0.85) !important; }
    
    ${EyebrowPill} { 
      background: rgba(0, 0, 0, 0.7) !important;
      border-color: rgba(255, 255, 255, 0.15) !important;
      color: #ffffff !important;
      &::before, &::after { background: #9a9aa5 !important; }
    }
    
    ${EyebrowWrap}::before, ${EyebrowWrap}::after {
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15)) !important;
    }
    
    /* Bullet items, target audience, and their text */
    ${TargetAudienceLabel} { color: ${theme.colors.brandTeal} !important; }
    ${BulletItem} { color: rgba(255, 255, 255, 0.85) !important; }
  `}
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 60px;
  align-items: center;

  @media(max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroHeading = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: clamp(32px, 4.5vw, 56px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: ${theme.colors.textPrimary};
  margin: 0 0 20px;
`;

const HeroSubheading = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 18px;
  color: ${theme.colors.textMuted};
  margin-bottom: 24px;
  line-height: 1.6;
`;

const TargetAudienceLabel = styled.div`
  font-family: ${theme.fonts.body};
  font-size: 15px;
  font-weight: 600;
  color: ${theme.colors.brandTeal};
  margin-bottom: 40px;
`;

const CtaButton = styled.a`
  background: linear-gradient(135deg, ${theme.colors.brandTeal}, ${theme.colors.brandIndigo});
  color: white;
  padding: 16px 32px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  font-family: ${theme.fonts.body};
  border: none;
  cursor: pointer;
  transition: opacity 0.3s, transform 0.3s;
  margin-bottom: 40px;
  width: 100%;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  box-sizing: border-box;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

const BulletList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  
  @media(max-width: 992px) {
    text-align: left;
    max-width: 500px;
    margin: 0 auto;
  }
`;

const BulletItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${theme.colors.textMuted};
  font-family: ${theme.fonts.body};
  font-size: 14px;
  line-height: 1.5;
`;

// Form Widget (Lead Capture)
const WidgetCard = styled.div`
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.surfaceBorder};
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
  animation: ${fadeUp} 0.8s ease-out;
`;

const WidgetLabel = styled.p`
  color: ${theme.colors.textMuted};
  margin-bottom: 24px;
  font-size: 15px;
  font-family: ${theme.fonts.body};
  line-height: 1.6;
`;

const Input = styled.input`
  width: 100%;
  background: rgba(0,0,0,0.3);
  border: 1px solid ${theme.colors.surfaceBorder};
  border-radius: 8px;
  padding: 14px;
  color: white;
  margin-bottom: 12px;
  font-size: 15px;
  font-family: ${theme.fonts.body};
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${theme.colors.brandTeal};
  }

  &::placeholder {
    color: ${theme.colors.textDim};
  }

  /* Light mode: readable inputs on the white card */
  [data-theme='light'] & {
    background: rgba(0,0,0,0.04);
    color: #111111;
    border-color: rgba(0,0,0,0.12);
    
    &::placeholder {
      color: rgba(0,0,0,0.4);
    }
  }
`;

const WidgetButton = styled.button`
  background: linear-gradient(135deg, ${theme.colors.brandTeal}, ${theme.colors.brandIndigo});
  color: white;
  padding: 14px 24px;
  border-radius: 30px;
  font-size: 15px;
  font-weight: 600;
  font-family: ${theme.fonts.body};
  border: none;
  cursor: pointer;
  transition: opacity 0.3s, transform 0.3s;
  width: 100%;
  margin-top: 8px;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

// Generic Section
const Section = styled.section`
  padding: 100px 0;
`;

const SectionHead = styled.div<{ $align?: string }>`
  text-align: ${p => p.$align || 'center'};
  margin-bottom: 56px;
`;

const SectionH2 = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(28px, 3.5vw, 40px);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${theme.colors.textPrimary};
  margin: 0 0 14px;
`;

const SectionBody = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 18px;
  line-height: 1.6;
  color: ${theme.colors.textMuted};
  margin: 0;
`;

// Solutions
const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media(max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const SolutionCard = styled.div`
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.surfaceBorder};
  border-radius: 16px;
  overflow: hidden;
  transition: border-color 0.3s, transform 0.3s;

  &:hover {
    border-color: rgba(78, 205, 160, 0.4);
    transform: translateY(-4px);
  }

  .img-ph {
    height: 200px;
    background: linear-gradient(135deg, rgba(78, 205, 160, 0.05), rgba(61, 74, 155, 0.05));
    border-bottom: 1px solid ${theme.colors.surfaceBorder};
    background-size: cover;
    background-position: center;
  }

  .content {
    padding: 24px;
    text-align: center;
    font-family: ${theme.fonts.heading};
    font-weight: 600;
    font-size: 18px;
    line-height: 1.3;
    color: ${theme.colors.textPrimary};
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

// Feature / Benefit Cards
const FeatureCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 40px;
`;

const FeatureCard = styled.div`
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.surfaceBorder};
  border-radius: 16px;
  padding: 28px;
  transition: border-color 0.3s, transform 0.3s;

  &:hover {
    border-color: rgba(78, 205, 160, 0.3);
    transform: translateY(-3px);
  }
`;

const FeatureCardIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, rgba(78, 205, 160, 0.15), rgba(61, 74, 155, 0.15));
  border: 1px solid rgba(78, 205, 160, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  font-size: 18px;
  color: ${theme.colors.brandTeal};
`;

const FeatureCardTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 18px;
  font-weight: 700;
  line-height: 1.3;
  color: ${theme.colors.textPrimary};
  margin: 0 0 10px;
`;

const FeatureCardBody = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 16px;
  line-height: 1.6;
  color: ${theme.colors.textMuted};
  margin: 0;
`;

// Side By Side layout
const SideBySide = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media(max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const SideImage = styled.div<{ $src?: string }>`
  width: 100%;
  height: 400px;
  background: ${p => p.$src ? `url("${p.$src}") center/cover no-repeat` : theme.colors.surface};
  border-radius: 20px;
  border: 1px solid ${theme.colors.surfaceBorder};
`;

const StructuredList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StructuredItem = styled.div`
  font-family: ${theme.fonts.body};
  font-size: 16px;
  line-height: 1.6;
  color: ${theme.colors.textMuted};
`;

const StructuredLabel = styled.strong`
  color: ${theme.colors.textPrimary};
  font-family: ${theme.fonts.heading};
  font-size: 18px;
  display: block;
  margin-bottom: 8px;
`;

// CTA Stats
const CtaBox = styled.div<{ $bgImage?: string }>`
  background: ${p => p.$bgImage ? `linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.72)), url("${p.$bgImage}") center/cover no-repeat` : theme.colors.surface};
  border: 1px solid ${theme.colors.surfaceBorder};
  border-radius: 24px;
  padding: 64px 40px;
  text-align: center;
  overflow: hidden;
  position: relative;

  /* Dark mode: force near-white heading */
  h2 {
    color: #f5f5f7 !important;
    -webkit-text-fill-color: #f5f5f7 !important;
  }

  /* Light mode: switch to white overlay + dark text */
  [data-theme='light'] & {
    background: ${p => p.$bgImage ? `linear-gradient(rgba(255,255,255,0.82), rgba(255,255,255,0.82)), url("${p.$bgImage}") center/cover no-repeat` : theme.colors.surface};
    h2 {
      color: #111111 !important;
      -webkit-text-fill-color: #111111 !important;
    }
  }
`;

const CtaStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 60px;

  @media(max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled.div`
  background: rgba(255,255,255,0.07);
  padding: 30px;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.12);

  h3 {
    font-family: ${theme.fonts.heading};
    font-size: 36px;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 12px;
    background: ${theme.colors.brandGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    font-family: ${theme.fonts.body};
    font-size: 16px;
    line-height: 1.6;
    color: rgba(245, 245, 247, 0.85);
    margin: 0;
    text-align: center;
  }

  [data-theme='light'] & {
    background: rgba(0,0,0,0.04);
    border-color: rgba(0,0,0,0.12);
    p { color: #333333; }
  }
`;

// FAQ
const FaqSection = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

const FaqGrid = styled.div<{ $hasImage?: boolean }>`
  display: grid;
  grid-template-columns: ${p => p.$hasImage ? '1fr 1fr' : '800px'};
  gap: 60px;
  align-items: start;
  justify-content: center;

  @media(max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const FaqItem = styled(motion.div)`
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.surfaceBorder};
  border-radius: 16px;
  margin-bottom: 16px;
  overflow: hidden;
  transition: border-color 0.3s;
  &:hover { border-color: rgba(78, 205, 160, 0.4); }
`;

const FaqHeader = styled.button`
  width: 100%;
  text-align: left;
  padding: 24px 32px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${theme.colors.textPrimary};
`;

const FaqQuestion = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 18px;
  line-height: 1.3;
  margin: 0;
  font-weight: 600;
`;

const FaqIcon = styled(motion.div)`
  font-size: 20px;
  color: ${theme.colors.brandTeal};
  flex-shrink: 0;
`;

const FaqContent = styled(motion.div)`overflow: hidden;`;

const FaqAnswer = styled.div`
  padding: 0 32px 32px 32px;
  font-family: ${theme.fonts.body};
  font-size: 16px;
  line-height: 1.6;
  color: ${theme.colors.textMuted};
`;

const AccordionItem = ({ question, children, isOpen, onToggle }: { question: string; children: React.ReactNode; isOpen: boolean; onToggle: () => void }) => (
  <FaqItem initial={false}>
    <FaqHeader onClick={onToggle}>
      <FaqQuestion>{question}</FaqQuestion>
      <FaqIcon animate={{ rotate: isOpen ? 180 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </FaqIcon>
    </FaqHeader>
    <AnimatePresence initial={false}>
      {isOpen && (
        <FaqContent
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <FaqAnswer>{children}</FaqAnswer>
        </FaqContent>
      )}
    </AnimatePresence>
  </FaqItem>
);

// Feature icons by index
const FEATURE_ICONS = ["🤖", "📞", "⚙️", "💬", "📊", "🔗"];
const BENEFIT_ICONS = ["⭐", "⚡", "📅", "🧠", "💰", "✅"];

interface Props {
  content: IndustryContent;
}

export default function IndustryPageTemplate({ content }: Props) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <Page>
      {/* Hero */}
      <HeroSection $bgImage={content.hero.image}>
        <Container>
          <HeroGrid>
            <div style={{ zIndex: 2 }}>
              <EyebrowWrap>
                <EyebrowPill>{content.hero.eyebrow}</EyebrowPill>
              </EyebrowWrap>
              <HeroHeading>{content.hero.heading}</HeroHeading>
              <HeroSubheading>{content.hero.subheading}</HeroSubheading>
              {content.hero.targetAudience && (
                <TargetAudienceLabel>{content.hero.targetAudience}</TargetAudienceLabel>
              )}
              <CtaButton href="https://app.convoa.ai/login">Start for Free</CtaButton>
              <BulletList>
                <BulletItem><CheckCircleFilled style={{color: theme.colors.brandTeal}}/> No credit card required</BulletItem>
                <BulletItem><CheckCircleFilled style={{color: theme.colors.brandTeal}}/> Fast setup</BulletItem>
                <BulletItem><CheckCircleFilled style={{color: theme.colors.brandTeal}}/> First month free</BulletItem>
                <BulletItem><CheckCircleFilled style={{color: theme.colors.brandTeal}}/> 8,000+ API integrations</BulletItem>
              </BulletList>
            </div>
            <div>
              <WidgetCard>
                <WidgetLabel>Experience how Convoa&apos;s AI assistant can elevate your customer experience:</WidgetLabel>
                <Input placeholder="Full Name" />
                <Input placeholder="Phone Number" />
                <Input placeholder="Email Address" />
                <Input placeholder="Company Name" />
                <WidgetButton>Call Me Now</WidgetButton>
              </WidgetCard>
            </div>
          </HeroGrid>
        </Container>
      </HeroSection>

      <SectionDivider />

      {/* Solutions */}
      <Section>
        <Container>
          <SectionHead>
            <EyebrowWrap style={{ justifyContent: 'center', marginBottom: '20px' }}>
              <EyebrowPill>Why Convoa</EyebrowPill>
            </EyebrowWrap>
            <SectionH2>{content.solutions.heading}</SectionH2>
            <SectionBody>{content.solutions.subheading}</SectionBody>
          </SectionHead>
          <CardsGrid>
            {content.solutions.cards.map((card, i) => (
              <SolutionCard key={i}>
                <div className="img-ph" style={{ backgroundImage: `url("${card.image}")` }} />
                <div className="content">{card.title}</div>
              </SolutionCard>
            ))}
          </CardsGrid>
        </Container>
      </Section>

      <SectionDivider />

      {/* Features */}
      <Section>
        <Container>
          <SectionHead>
            <EyebrowWrap style={{ justifyContent: 'center', marginBottom: '20px' }}>
              <EyebrowPill>Features</EyebrowPill>
            </EyebrowWrap>
            <SectionH2>{content.features.heading}</SectionH2>
          </SectionHead>
          <SideBySide>
            <SideImage $src={content.features.image} />
            <StructuredList>
              {content.features.bullets.map((feature, i) => (
                <StructuredItem key={i}>
                  <StructuredLabel>{feature.title.replace(':', '')}</StructuredLabel>
                  {feature.description}
                </StructuredItem>
              ))}
            </StructuredList>
          </SideBySide>
        </Container>
      </Section>

      <SectionDivider />

      {/* Benefits */}
      <Section>
        <Container>
          <SectionHead>
            <EyebrowWrap style={{ justifyContent: 'center', marginBottom: '20px' }}>
              <EyebrowPill>Benefits</EyebrowPill>
            </EyebrowWrap>
            <SectionH2>{content.benefits.heading}</SectionH2>
            <SectionBody>{content.benefits.subheading}</SectionBody>
          </SectionHead>
          <SideBySide>
            <StructuredList>
              {content.benefits.bullets.map((benefit, i) => (
                <StructuredItem key={i}>
                  <StructuredLabel>{benefit.title.replace(':', '')}</StructuredLabel>
                  {benefit.description}
                </StructuredItem>
              ))}
            </StructuredList>
            <SideImage $src={content.benefits.image} />
          </SideBySide>
        </Container>
      </Section>

      <SectionDivider />

      {/* Final CTA / Stats Band */}
      <Section>
        <Container>
          <CtaBox $bgImage={content.statsImage}>
            <EyebrowWrap style={{ justifyContent: 'center', marginBottom: '20px' }}>
              <EyebrowPill>Growth</EyebrowPill>
            </EyebrowWrap>
            <SectionH2 style={{ margin: "0 0 40px" }}>Never miss an opportunity to grow.</SectionH2>
            <CtaStats>
              <StatItem>
                <h3>100%</h3>
                <p>Satisfaction guaranteed</p>
              </StatItem>
              <StatItem>
                <h3>Free</h3>
                <p>First month — get started today</p>
              </StatItem>
              <StatItem>
                <h3>100%</h3>
                <p>Phone calls answered</p>
              </StatItem>
            </CtaStats>
          </CtaBox>
        </Container>
      </Section>

      <SectionDivider />

      {/* FAQ */}
      <Section>
        <Container>
          <SectionHead>
            <EyebrowWrap style={{ justifyContent: 'center', marginBottom: '20px' }}>
              <EyebrowPill>FAQ</EyebrowPill>
            </EyebrowWrap>
            <SectionH2>Frequently Asked Questions</SectionH2>
          </SectionHead>
          <FaqSection>
            <FaqGrid $hasImage={!!content.faqImage}>
              <div>
                {globalIndustryFaq.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    question={faq.question}
                    isOpen={openFaqIndex === index}
                    onToggle={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  >
                    {faq.answer}
                  </AccordionItem>
                ))}
              </div>
              {content.faqImage && <SideImage $src={content.faqImage} />}
            </FaqGrid>
          </FaqSection>
        </Container>
      </Section>

    </Page>
  );
}