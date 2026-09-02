"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { CheckOutlined } from "@ant-design/icons";
import { theme } from "@/lib/theme";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PricingHeroCanvas } from "@/components/ui/PricingHeroCanvas";
import { pricingHero, pricingToggles, pricingPlans, pricingFaqs } from "./pricing";

// shared styles
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
  padding: 0 8px;
  position: relative;
  z-index: 1;
  @media(max-width:768px){ padding: 0 8px; }
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 900px;
  height: 420px;
  background: radial-gradient(rgba(78, 205, 160, 0.15) 0%, transparent 65%);
  pointer-events: none;
  z-index: 0;
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

const H2 = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: ${theme.colors.textPrimary};
  margin: 0 0 24px;
`;

const Body = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 16px;
  line-height: 1.6;
  color: ${theme.colors.textMuted};
  margin: 0 auto;
  max-width: 600px;
`;

const GradientWord = styled.span`
  background: ${theme.colors.brandGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

// glass radio group
const GlassRadioWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const GlassRadioGroup = styled.div`
  --bg: ${theme.colors.surface};
  --text: ${theme.colors.textMuted};

  display: flex;
  position: relative;
  background: var(--bg);
  border-radius: 1rem;
  backdrop-filter: blur(12px);
  border: 1px solid ${theme.colors.surfaceBorder};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  width: fit-content;
`;

const GlassRadioLabel = styled.label<{ $active: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 170px;
  font-size: 14px;
  padding: 0.8rem 1.6rem;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 0.3px;
  color: ${p => p.$active ? '#fff' : 'var(--text)'};
  position: relative;
  z-index: 2;
  transition: color 0.3s ease-in-out;
  @media(max-width: 600px) {
    min-width: 110px;
    padding: 0.6rem 1rem;
    font-size: 12px;
  }

  &:hover {
    color: ${p => p.$active ? '#fff' : theme.colors.textPrimary};
  }
`;

const GlassGlider = styled.div<{ $index: number }>`
  position: absolute;
  top: 0;
  bottom: 0;
  width: calc(100% / 3);
  border-radius: 1rem;
  z-index: 1;
  transition:
    transform 0.5s cubic-bezier(0.37, 1.95, 0.66, 0.56),
    background 0.4s ease-in-out,
    box-shadow 0.4s ease-in-out;
  
  transform: translateX(${p => p.$index * 100}%);

  ${p => p.$index === 0 && `
    background: linear-gradient(135deg, rgba(78, 205, 160, 0.25), rgba(61, 74, 155, 0.35));
    box-shadow: 0 0 18px rgba(78, 205, 160, 0.25), 0 0 10px rgba(78, 205, 160, 0.15) inset;
  `}
  ${p => p.$index === 1 && `
    background: linear-gradient(135deg, #3DBF91, #3D4A9B);
    box-shadow: 0 0 18px rgba(78, 205, 160, 0.5), 0 0 10px rgba(78, 205, 160, 0.3) inset;
  `}
  ${p => p.$index === 2 && `
    background: linear-gradient(135deg, rgba(61, 74, 155, 0.35), rgba(78, 205, 160, 0.25));
    box-shadow: 0 0 18px rgba(61, 74, 155, 0.4), 0 0 10px rgba(61, 74, 155, 0.2) inset;
  `}
`;

// pricing specific styles

const ToggleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 60px;
  margin-bottom: 40px;
  position: relative;
`;

const ToggleLabel = styled.span<{ $active: boolean }>`
  font-size: 15px;
  font-weight: 600;
  color: ${p => p.$active ? theme.colors.textPrimary : theme.colors.textDim};
  transition: color 0.3s ease;
`;

const SwitchWrapper = styled.label`
  --a: 0.5s ease-out;
  cursor: pointer;
  position: relative;
  display: inline-flex;
  height: 20px;
  border-radius: 20px;
  box-shadow: 0 0 0 6px ${theme.colors.surfaceBorder};
  aspect-ratio: 212.4992/84.4688;
  background-color: ${theme.colors.surfaceBorder};
  margin: 0 8px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
  }

  svg {
    height: 100%;
    
    path {
      stroke-width: 16;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dasharray: 136 224;
      transition:
        all var(--a),
        0s transform;
      transform-origin: center;
    }
  }

  input:checked ~ svg path {
    stroke-dashoffset: 180;
    transform: scaleY(-1);
  }
`;

const ToggleLabelWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SaveBadge = styled.div`
  position: absolute;
  top: -28px;
  left: 50%;
  transform: translateX(-50%);
  background: ${theme.colors.brandTeal};
  color: #000;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 4px;
  white-space: nowrap;
`;

const PricingContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  align-items: stretch;

  @media(max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PlanCard = styled(motion.div) <{ $popular?: boolean }>`
  background: ${p => p.$popular ? 'rgba(78, 205, 160, 0.05)' : theme.colors.surface};
  border: 1px solid ${p => p.$popular ? 'rgba(78, 205, 160, 0.4)' : theme.colors.surfaceBorder};
  border-radius: 20px;
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 400px;
  
  ${p => p.$popular && `
    box-shadow: 0 10px 40px rgba(78,205,160,0.1);
    background-image: radial-gradient(circle at top right, rgba(78, 205, 160, 0.1) 0%, transparent 70%);
  `}
`;

const PopularRibbon = styled.div`
  position: absolute;
  top: 24px;
  right: -36px;
  background: linear-gradient(135deg, #3DBF91, #3D4A9B);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 6px 40px;
  transform: rotate(45deg);
`;

const PlanName = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 24px;
  font-weight: 600;
  color: ${theme.colors.textPrimary};
  margin: 0 0 24px;
  text-align: center;
`;

const PlanPriceWrap = styled.div`
  text-align: center;
  margin-bottom: 32px;
`;

const PlanPrice = styled.div<{ $contact?: boolean }>`
  font-family: ${theme.fonts.heading};
  font-size: ${p => p.$contact ? '32px' : '48px'};
  font-weight: 700;
  color: ${theme.colors.brandTeal};
  line-height: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const Currency = styled.span`
  font-size: 24px;
  margin-top: 4px;
  margin-right: 2px;
`;

const PriceSuffix = styled.div`
  font-size: 13px;
  color: ${theme.colors.textMuted};
  margin-top: 8px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 14px;
  color: ${theme.colors.textMuted};
  line-height: 1.5;
`;

const CheckIcon = styled(CheckOutlined)`
  color: ${theme.colors.brandTeal};
  font-size: 14px;
  margin-top: 2px;
`;

const Divider = styled.div`
  height: 1px;
  background: ${theme.colors.surfaceBorder};
  margin: 0 0 16px 0;
  width: 100%;
`;

const ActionButton = styled.a<{ $primary?: boolean, $index?: number }>`
  width: 100%;
  padding: 14px 24px;
  border-radius: 30px;
  font-family: ${theme.fonts.body};
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s;
  background: linear-gradient(135deg, #3DBF91, #3D4A9B);
  color: #fff;
  border: none;
  text-decoration: none;
  display: block;
  text-align: center;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(78, 205, 160, 0.3);
    opacity: 0.9;
  }
`;

const FaqSection = styled.div`
  margin-top: 120px;
  margin-bottom: 80px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

const FaqItem = styled(motion.div)`
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.surfaceBorder};
  border-radius: 16px;
  margin-bottom: 16px;
  overflow: hidden;
  transition: border-color 0.3s;
  &:hover {
    border-color: rgba(78, 205, 160, 0.4);
  }
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
  
  &:hover {
    background: rgba(255, 255, 255, 0.02);
  }
`;

const FaqQuestion = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 18px;
  margin: 0;
  font-weight: 600;
`;

const FaqIcon = styled(motion.div)`
  font-size: 20px;
  color: ${theme.colors.brandTeal};
`;

const FaqContent = styled(motion.div)`
  overflow: hidden;
`;

const FaqAnswer = styled.div`
  padding: 0 32px 32px 32px;
  color: ${theme.colors.textMuted};
  font-size: 15px;
  line-height: 1.6;
`;

const AccordionItem = ({ question, children, isOpen, onToggle }: { question: string, children: React.ReactNode, isOpen: boolean, onToggle: () => void }) => {
  return (
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
};

const AppScreenshot = styled.div`
  border-radius: 16px;
  background: #0d0d12;
  border: 1px solid rgba(255, 255, 255, 0.06);
  overflow: hidden;
  display: flex;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4);
  width: 100%;
  margin: 24px 0 0 0;
  
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
  }
`;

// template component

export const PricingPageTemplate = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <Page>
      <HeroSection>
        <PricingHeroCanvas />
        <Container>
          <HeroGlow />
          <EyebrowWrap>
            <EyebrowPill>{pricingHero.eyebrow}</EyebrowPill>
          </EyebrowWrap>
          <H1>{pricingHero.title}<GradientWord>{pricingHero.highlightedTitle}</GradientWord></H1>
          <Body style={{ fontSize: '18px' }}>
            {pricingHero.description}
          </Body>
        </Container>
      </HeroSection>

      <Container>

        <ToggleWrap>
          <ToggleLabelWrap>
            <SaveBadge>{pricingToggles.saveBadge}</SaveBadge>
            <ToggleLabel $active={isAnnual}>{pricingToggles.quarterly}</ToggleLabel>
          </ToggleLabelWrap>
          <SwitchWrapper>
            <input type="checkbox" checked={!isAnnual} onChange={() => setIsAnnual(!isAnnual)} />
            <svg viewBox="0 0 212.4992 84.4688" overflow="visible">
              <defs>
                <linearGradient id="switchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3DBF91" />
                  <stop offset="100%" stopColor="#3D4A9B" />
                </linearGradient>
              </defs>
              <path
                pathLength="360"
                fill="none"
                stroke="url(#switchGrad)"
                d="M 42.2496 0 A 42.24 42.24 90 0 0 0 42.2496 A 42.24 42.24 90 0 0 42.2496 84.4688 A 42.24 42.24 90 0 0 84.4992 42.2496 A 42.24 42.24 90 0 0 42.2496 0 A 42.24 42.24 90 0 0 0 42.2496 A 42.24 42.24 90 0 0 42.2496 84.4688 L 170.2496 84.4688 A 42.24 42.24 90 0 0 212.4992 42.2496 A 42.24 42.24 90 0 0 170.2496 0 A 42.24 42.24 90 0 0 128 42.2496 A 42.24 42.24 90 0 0 170.2496 84.4688 A 42.24 42.24 90 0 0 212.4992 42.2496 A 42.24 42.24 90 0 0 170.2496 0 L 42.2496 0"
              ></path>
            </svg>
          </SwitchWrapper>
          <ToggleLabel $active={!isAnnual}>{pricingToggles.monthly}</ToggleLabel>
        </ToggleWrap>

        <PricingContainer>
          {pricingPlans.map((plan, index) => (
            <PlanCard
              key={index}
              $popular={plan.popular}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {plan.popular && <PopularRibbon>POPULAR</PopularRibbon>}
              <PlanName>{plan.name}</PlanName>
              
              <PlanPriceWrap>
                {plan.contactUs ? (
                  <>
                    <PlanPrice $contact>Contact Us</PlanPrice>
                    <PriceSuffix>&nbsp;</PriceSuffix>
                  </>
                ) : (
                  <>
                    <PlanPrice><Currency>$</Currency>{isAnnual ? plan.annualPrice : plan.monthlyPrice}</PlanPrice>
                    <PriceSuffix>Per Month</PriceSuffix>
                  </>
                )}
              </PlanPriceWrap>

              <FeatureList>
                {plan.features.map((feature, i) => (
                  <React.Fragment key={i}>
                    <FeatureItem><CheckIcon /> {feature}</FeatureItem>
                    {i < plan.features.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </FeatureList>

              <ActionButton $index={index} href="https://app.convoa.ai/login">{plan.ctaText}</ActionButton>
            </PlanCard>
          ))}
        </PricingContainer>

        <FaqSection>
          <EyebrowWrap style={{ justifyContent: 'center', marginBottom: '20px' }}>
            <EyebrowPill>FAQ</EyebrowPill>
          </EyebrowWrap>
          <H2 style={{ textAlign: 'center', marginBottom: '48px' }}>Frequently Asked Questions</H2>
          
          {pricingFaqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              question={faq.question} 
              isOpen={openFaqIndex === index}
              onToggle={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
            >
              {faq.image ? (
                <>
                  <p style={{ margin: '0 0 16px 0' }}>{faq.answer}</p>
                  <AppScreenshot>
                    <Image src={faq.image} alt={faq.question} width={800} height={400} style={{ width: '100%', height: 'auto' }} />
                  </AppScreenshot>
                </>
              ) : (
                faq.answer
              )}
            </AccordionItem>
          ))}
        </FaqSection>

      </Container>
    </Page>
  );
};
