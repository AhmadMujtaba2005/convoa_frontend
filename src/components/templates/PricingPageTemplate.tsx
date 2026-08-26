"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { CheckOutlined } from "@ant-design/icons";
import { theme } from "@/lib/theme";
import { motion } from "framer-motion";
import { PricingHeroCanvas } from "@/components/ui/PricingHeroCanvas";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SHARED STYLES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
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
`;

const EyebrowPill = styled.span`
  position: relative;
  padding: 6px 20px; border-radius: 20px;
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.surfaceBorder};
  color: ${theme.colors.textMuted};
  font-family: ${theme.fonts.body};
  font-size: 13px; font-weight: 500;
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
  font-size: clamp(32px, 5vw, 64px);
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

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// GLASS RADIO GROUP (From Uiverse.io)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
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
  color: ${p => p.$active ? theme.colors.background : 'var(--text)'};
  position: relative;
  z-index: 2;
  transition: color 0.3s ease-in-out;
  @media(max-width: 600px) {
    min-width: 110px;
    padding: 0.6rem 1rem;
    font-size: 12px;
  }

  &:hover {
    color: ${p => p.$active ? theme.colors.background : theme.colors.textPrimary};
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
    background: linear-gradient(135deg, #c0c0c055, #e0e0e0);
    box-shadow: 0 0 18px rgba(192, 192, 192, 0.5), 0 0 10px rgba(255, 255, 255, 0.4) inset;
  `}
  ${p => p.$index === 1 && `
    background: linear-gradient(135deg, #ffd70055, #ffcc00);
    box-shadow: 0 0 18px rgba(255, 215, 0, 0.5), 0 0 10px rgba(255, 235, 150, 0.4) inset;
  `}
  ${p => p.$index === 2 && `
    background: linear-gradient(135deg, #d0e7ff55, #a0d8ff);
    box-shadow: 0 0 18px rgba(160, 216, 255, 0.5), 0 0 10px rgba(200, 240, 255, 0.4) inset;
  `}
`;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PRICING SPECIFIC STYLES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const ToggleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 40px;
  position: relative;
`;

const ToggleLabel = styled.span<{ $active: boolean }>`
  font-size: 15px;
  font-weight: 600;
  color: ${p => p.$active ? theme.colors.textPrimary : theme.colors.textDim};
  transition: color 0.3s ease;
`;

const ToggleSwitch = styled.button`
  width: 56px;
  height: 32px;
  background: ${theme.colors.surfaceBorder};
  border-radius: 32px;
  border: none;
  position: relative;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  outline: none;
`;

const ToggleHandle = styled(motion.div)`
  width: 24px;
  height: 24px;
  background: ${theme.colors.backgroundElevated};
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
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
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
`;

const PlanCard = styled(motion.div) <{ $popular?: boolean }>`
  background: ${p => p.$popular ? 'rgba(78, 205, 160, 0.05)' : theme.colors.surface};
  border: 1px solid ${p => p.$popular ? 'rgba(78, 205, 160, 0.4)' : theme.colors.surfaceBorder};
  border-radius: 20px;
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
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
  background: #6c5ce7;
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

const ActionButton = styled.button<{ $primary?: boolean, $index?: number }>`
  width: 100%;
  padding: 14px 24px;
  border-radius: 30px;
  font-family: ${theme.fonts.body};
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s;
  
  background: ${p => {
    if (p.$primary) return '#fff';
    if (p.$index === 0) return '#e0e0e0';
    if (p.$index === 1) return '#ffcc00';
    if (p.$index === 2) return '#a0d8ff';
    return theme.colors.brandTeal;
  }};
  color: #000;
  border: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255,255,255,0.2);
  }
`;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TEMPLATE COMPONENT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const PricingPageTemplate = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(1);

  return (
    <Page>
      <HeroSection>
        <PricingHeroCanvas />
        <Container>
          <HeroGlow />
          <EyebrowWrap>
            <EyebrowPill>PRICING</EyebrowPill>
          </EyebrowWrap>
          <H1>Choose the plan that fits <GradientWord>your business</GradientWord></H1>
          <Body>
            All plans include 24 by 7 AI call handling, lead qualification and smart appointment booking.
          </Body>
        </Container>
      </HeroSection>

      <Container>

        <ToggleWrap>
          <ToggleLabelWrap>
            <SaveBadge>Save 17%</SaveBadge>
            <ToggleLabel $active={isAnnual}>Quarterly</ToggleLabel>
          </ToggleLabelWrap>
          <ToggleSwitch onClick={() => setIsAnnual(!isAnnual)}>
            <ToggleHandle
              animate={{ x: isAnnual ? 0 : 24 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </ToggleSwitch>
          <ToggleLabel $active={!isAnnual}>Monthly</ToggleLabel>
        </ToggleWrap>

        <GlassRadioWrap>
          <GlassRadioGroup>
            <GlassGlider $index={selectedPlanIndex} />
            <GlassRadioLabel $active={selectedPlanIndex === 0} onClick={() => setSelectedPlanIndex(0)}>
              Launch
            </GlassRadioLabel>
            <GlassRadioLabel $active={selectedPlanIndex === 1} onClick={() => setSelectedPlanIndex(1)}>
              Pro
            </GlassRadioLabel>
            <GlassRadioLabel $active={selectedPlanIndex === 2} onClick={() => setSelectedPlanIndex(2)}>
              Convoa Enterprise
            </GlassRadioLabel>
          </GlassRadioGroup>
        </GlassRadioWrap>

        <PricingContainer>
          {selectedPlanIndex === 0 && (
            <PlanCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <PlanName>Launch</PlanName>
              <PlanPriceWrap>
                <PlanPrice><Currency>$</Currency>{isAnnual ? '249' : '299'}</PlanPrice>
                <PriceSuffix>Per Month</PriceSuffix>
              </PlanPriceWrap>

              <FeatureList>
                <FeatureItem><CheckIcon /> 600 minutes per month</FeatureItem>
                <Divider />
                <FeatureItem><CheckIcon /> 3 AI Assistant personas</FeatureItem>
                <Divider />
                <FeatureItem><CheckIcon /> Call recording, transcript & summaries</FeatureItem>
                <Divider />
                <FeatureItem><CheckIcon /> Appointment/Calendar Scheduling</FeatureItem>
                <Divider />
                <FeatureItem><CheckIcon /> Customize your AI</FeatureItem>
                <Divider />
                <FeatureItem><CheckIcon /> Analytical Dashboard</FeatureItem>
                <Divider />
                <FeatureItem><CheckIcon /> Minimum 2 dedicated lines</FeatureItem>
              </FeatureList>

              <ActionButton $index={0}>Get Started</ActionButton>
            </PlanCard>
          )}

          {selectedPlanIndex === 1 && (
            <PlanCard
              $popular
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <PopularRibbon>POPULAR</PopularRibbon>
              <PlanName>Pro</PlanName>
              <PlanPriceWrap>
                <PlanPrice><Currency>$</Currency>{isAnnual ? '579' : '699'}</PlanPrice>
                <PriceSuffix>Per Month</PriceSuffix>
              </PlanPriceWrap>

              <FeatureList>
                <FeatureItem><CheckIcon /> 1800 minutes per month</FeatureItem>
                <Divider />
                <FeatureItem><CheckIcon /> 10 AI Assistant personas</FeatureItem>
                <Divider />
                <FeatureItem><CheckIcon /> Call recording, transcript & summaries</FeatureItem>
                <Divider />
                <FeatureItem><CheckIcon /> Appointment/Calendar Scheduling</FeatureItem>
                <Divider />
                <FeatureItem><CheckIcon /> Customize your AI</FeatureItem>
                <Divider />
                <FeatureItem><CheckIcon /> Analytical Dashboard</FeatureItem>
                <Divider />
                <FeatureItem><CheckIcon /> Minimum 5 dedicated lines</FeatureItem>
              </FeatureList>

              <ActionButton $index={1}>Get Started</ActionButton>
            </PlanCard>
          )}

          {selectedPlanIndex === 2 && (
            <PlanCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <PlanName>Convoa Enterprise</PlanName>
              <PlanPriceWrap>
                <PlanPrice $contact>Contact Us</PlanPrice>
                <PriceSuffix>&nbsp;</PriceSuffix>
              </PlanPriceWrap>

              <FeatureList>
                <FeatureItem><CheckIcon /> Unlimited concurrency</FeatureItem>
                <Divider />
                <FeatureItem><CheckIcon /> Multilingual assistants</FeatureItem>
                <Divider />
                <FeatureItem><CheckIcon /> Inbound and outbound automation</FeatureItem>
                <Divider />
                <FeatureItem><CheckIcon /> Advanced data analytics</FeatureItem>
                <Divider />
                <FeatureItem><CheckIcon /> API access</FeatureItem>
                <Divider />
                <FeatureItem><CheckIcon /> Custom integrations</FeatureItem>
                <Divider />
                <FeatureItem><CheckIcon /> White-glove deployment</FeatureItem>
                <Divider />
                <FeatureItem><CheckIcon /> Hands on training</FeatureItem>
                <Divider />
                <FeatureItem><CheckIcon /> Professional support and setup</FeatureItem>
              </FeatureList>

              <ActionButton $index={2}>Contact Us</ActionButton>
            </PlanCard>
          )}
        </PricingContainer>

      </Container>
    </Page>
  );
};
