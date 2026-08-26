"use client";

import React from "react";
import styled, { keyframes } from "styled-components";
import { ArrowRightOutlined } from "@ant-design/icons";
import { theme } from "@/lib/theme";
import { motion } from "framer-motion";
import { HeroCanvas } from "@/components/ui/HeroCanvas";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SHARED STYLES (Consistent with Homepage/Pricing)
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
  font-size: 18px;
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

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// FEATURE SECTIONS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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
  flex: 1;
`;

const FeatureVisual = styled.div`
  flex: 1;
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.surfaceBorder};
  box-shadow: 0 20px 40px rgba(0,0,0,0.5);
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

const FeatureEyebrow = styled.div`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${theme.colors.brandTeal};
  margin-bottom: 16px;
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

const GlowingButton = styled.button`
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

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(78, 205, 160, 0.6);
  }
`;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// UI PLACEHOLDERS (Abstract representations of the screenshots)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const PlaceholderWindow = styled.div`
  width: 100%; height: 100%;
  background: ${theme.colors.backgroundElevated};
  border: 1px solid ${theme.colors.surfaceBorder};
  border-radius: 12px;
  display: flex; flex-direction: column; overflow: hidden;
`;

const WindowHeader = styled.div`
  height: 48px; border-bottom: 1px solid ${theme.colors.surfaceBorder};
  display: flex; align-items: center; padding: 0 16px; gap: 8px;
`;

const Dot = styled.div<{ $color?: string }>`
  width: 10px; height: 10px; border-radius: 50%;
  background: ${p => p.$color || theme.colors.surfaceBorder};
  opacity: 0.8;
`;

const WindowBody = styled.div`
  flex: 1; padding: 24px; display: flex; flex-direction: column; gap: 16px;
`;

const BarRow = styled.div`display: flex; align-items: center; gap: 16px;`;
const BarLabel = styled.div`width: 60px; height: 12px; background: ${theme.colors.surfaceBorder}; border-radius: 4px;`;
const SkeletonLine = styled.div<{ $w: string }>`
  height: 8px; width: ${p => p.$w}; background: ${theme.colors.surfaceBorder}; border-radius: 4px;
`;
const BarTrack = styled.div`flex: 1; height: 8px; background: ${theme.colors.surfaceBorder}; border-radius: 4px; overflow: hidden;`;
const BarFill = styled.div<{ $width: string }>`width: ${p => p.$width}; height: 100%; background: ${theme.colors.brandTeal};`;

const CalendarGrid = styled.div`
  display: grid; grid-template-columns: repeat(7, 1fr); gap: 8px;
`;
const CalDay = styled.div<{ $active?: boolean }>`
  aspect-ratio: 1; border-radius: 50%; 
  background: ${p => p.$active ? theme.colors.brandTeal : 'transparent'};
  display: flex; align-items: center; justify-content: center;
  font-size: 12px; color: ${p => p.$active ? theme.colors.background : theme.colors.textMuted};
  font-weight: ${p => p.$active ? 700 : 400};
`;

const DashboardGrid = styled.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 16px; height: 100%;
`;
const DashCard = styled.div`
  background: ${theme.colors.surface}; border-radius: 8px; padding: 16px;
  border: 1px solid ${theme.colors.surfaceBorder};
`;
const SkeletonBlock = styled.div`
  flex: 1; background: ${theme.colors.surfaceBorder}; border-radius: 8px;
`;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CTA SECTION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
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
            <EyebrowPill>FEATURES</EyebrowPill>
          </EyebrowWrap>
          <H1>Everything you need to <GradientWord>grow faster</GradientWord></H1>
          <Body>
            Discover the powerful features that make Convoa the ultimate AI receptionist for service businesses.
          </Body>
        </Container>
      </HeroSection>

      <Container>
        {/* Feature 1 */}
        <FeatureRow>
          <FeatureContent>
            <FeatureEyebrow>24/7 AVAILABILITY</FeatureEyebrow>
            <FeatureTitle>Never Miss a Call Again</FeatureTitle>
            <FeatureDescription>
              Your business runs day and night, and so does Convoa. Whether it's after hours, weekends, or peak hours, our AI-powered system answers every call instantly – ensuring no missed opportunities and happier customers.
            </FeatureDescription>
          </FeatureContent>
          <FeatureVisual>
            <PlaceholderWindow>
              <WindowHeader><Dot/><Dot/><Dot/></WindowHeader>
              <WindowBody>
                {[
                  { l: "Monday", w: "80%" }, { l: "Tuesday", w: "70%" },
                  { l: "Wednesday", w: "90%" }, { l: "Thursday", w: "85%" },
                  { l: "Friday", w: "60%" }
                ].map((d, i) => (
                  <BarRow key={i}>
                    <BarLabel style={{width: 70}} />
                    <BarTrack><BarFill $width={d.w} /></BarTrack>
                  </BarRow>
                ))}
              </WindowBody>
            </PlaceholderWindow>
          </FeatureVisual>
        </FeatureRow>

        {/* Feature 2 */}
        <FeatureRow $reverse>
          <FeatureContent>
            <FeatureEyebrow>SMART APPOINTMENT BOOKING</FeatureEyebrow>
            <FeatureTitle>More Bookings, Less Hassle</FeatureTitle>
            <FeatureDescription>
              Convoa schedules appointments in real-time, syncing seamlessly with your calendar. No more back-and-forth with customers – just effortless scheduling that fills up your calendar while you focus on running your business.
            </FeatureDescription>
          </FeatureContent>
          <FeatureVisual>
            <PlaceholderWindow style={{ maxWidth: 350, margin: '0 auto' }}>
              <WindowHeader><BarLabel style={{width: 100}} /></WindowHeader>
              <WindowBody style={{ justifyContent: 'center' }}>
                <CalendarGrid>
                  {['Mo','Tu','We','Th','Fr','Sa','Su'].map(d => <CalDay key={d}>{d}</CalDay>)}
                  {[...Array(30)].map((_, i) => (
                    <CalDay key={i} $active={i === 13}>{i + 1}</CalDay>
                  ))}
                </CalendarGrid>
              </WindowBody>
            </PlaceholderWindow>
          </FeatureVisual>
        </FeatureRow>

        {/* Feature 3 */}
        <FeatureRow>
          <FeatureContent>
            <FeatureEyebrow>TRANSFER TO A HUMAN</FeatureEyebrow>
            <FeatureTitle>AI When You Want It, Human When You Need It</FeatureTitle>
            <FeatureDescription>
              See how Convoa answers calls, qualifies leads, books appointments, and captures customer insights, all in real time. Our AI voice assistant works around the clock to help you grow without adding to your workload. Experience how effortless and impactful every conversation can be.
            </FeatureDescription>
            <GlowingButton>Create Your Assistant <ArrowRightOutlined /></GlowingButton>
          </FeatureContent>
          <FeatureVisual>
            <PlaceholderWindow>
              <WindowHeader><Dot/><Dot/><Dot/></WindowHeader>
              <WindowBody>
                <DashboardGrid>
                  <DashCard style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <BarLabel style={{width: '40%'}}/>
                    <div style={{ fontSize: 32, color: theme.colors.brandTeal, fontWeight: 700 }}>5,423</div>
                  </DashCard>
                  <DashCard style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <BarLabel style={{width: '40%'}}/>
                    <div style={{ fontSize: 32, color: '#fff', fontWeight: 700 }}>1,893</div>
                  </DashCard>
                  <DashCard style={{ gridColumn: '1 / -1', height: 120 }}>
                    <BarTrack style={{ height: '100%', borderRadius: 4 }}>
                      <BarFill $width="100%" style={{ background: 'linear-gradient(90deg, rgba(78, 205, 160, 0.2), rgba(78, 205, 160, 0.8))' }} />
                    </BarTrack>
                  </DashCard>
                </DashboardGrid>
              </WindowBody>
            </PlaceholderWindow>
          </FeatureVisual>
        </FeatureRow>

        {/* Feature 4 */}
        <FeatureRow $reverse>
          <FeatureContent>
            <FeatureEyebrow>INSIGHTFUL DASHBOARDS</FeatureEyebrow>
            <FeatureTitle>Actionable Data at Your Fingertips</FeatureTitle>
            <FeatureDescription>
              Track call volumes, customer interactions, and performance metrics in a beautifully designed dashboard. See real-time insights, identify trends, and make data-driven decisions that improve customer experience and boost sales.
            </FeatureDescription>
          </FeatureContent>
          <FeatureVisual>
            <div style={{ width: 280, height: 500, background: '#000', borderRadius: 32, border: `2px solid ${theme.colors.surfaceBorder}`, padding: 12 }}>
              <PlaceholderWindow style={{ borderRadius: 20 }}>
                <WindowHeader style={{ justifyContent: 'center' }}><BarLabel style={{width: 80}}/></WindowHeader>
                <WindowBody>
                   <DashboardGrid style={{ gridTemplateColumns: '1fr 1fr' }}>
                     <DashCard style={{ height: 100 }} />
                     <DashCard style={{ height: 100 }} />
                     <DashCard style={{ height: 100 }} />
                     <DashCard style={{ height: 100 }} />
                   </DashboardGrid>
                </WindowBody>
              </PlaceholderWindow>
            </div>
          </FeatureVisual>
        </FeatureRow>

        {/* Feature 5 */}
        <FeatureRow>
          <FeatureContent>
            <FeatureEyebrow>AI-POWERED CALL SUMMARIES</FeatureEyebrow>
            <FeatureTitle>Instant Recaps, Zero Effort</FeatureTitle>
            <FeatureDescription>
              No more listening to long call recordings or taking manual notes. Convoa generates instant call summaries, capturing key details, customer intent, and action points – so you always stay informed and never miss important follow-ups.
            </FeatureDescription>
          </FeatureContent>
          <FeatureVisual>
            <PlaceholderWindow>
              <WindowHeader><Dot/><Dot/><Dot/></WindowHeader>
              <WindowBody>
                <div style={{ display: 'flex', gap: 16, height: '100%' }}>
                  <div style={{ width: 120, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {[...Array(6)].map((_,i) => <BarLabel key={i} style={{width: '100%', height: 24}}/>)}
                  </div>
                  <div style={{ flex: 1, background: 'rgba(255,255,255,0.02)', borderRadius: 8, padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <BarLabel style={{width: '60%'}}/>
                    <BarLabel style={{width: '80%'}}/>
                    <BarLabel style={{width: '40%'}}/>
                    <div style={{ marginTop: 'auto' }}>
                      <BarTrack><BarFill $width="30%" /></BarTrack>
                    </div>
                  </div>
                </div>
              </WindowBody>
            </PlaceholderWindow>
          </FeatureVisual>
        </FeatureRow>

        {/* Feature 6 */}
        <FeatureRow $reverse>
          <FeatureContent>
            <FeatureEyebrow>SEAMLESS CRM & DATA INTEGRATIONS</FeatureEyebrow>
            <FeatureTitle>Work Smarter, Not Harder</FeatureTitle>
            <FeatureDescription>
              Connect Convoa with your CRM and tools to sync call data, customer info and bookings. Use heatmaps to track activity by region and make smarter decisions to run your business more efficiently.
            </FeatureDescription>
          </FeatureContent>
          <FeatureVisual style={{ background: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M10 10L90 90M90 10L10 90\' stroke=\'rgba(255,255,255,0.05)\' stroke-width=\'2\'/%3E%3C/svg%3E")' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%)' }} />
            <div style={{ width: 80, height: 80, background: theme.colors.brandIndigo, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, fontWeight: 700, zIndex: 1, boxShadow: '0 10px 30px rgba(61, 74, 155, 0.4)' }}>?</div>
          </FeatureVisual>
        </FeatureRow>
      </Container>

      <CtaSection>
        <CtaBox>
          <FeatureTitle style={{ textAlign: 'center', marginBottom: 16 }}>Ready to transform the way your business handles calls?</FeatureTitle>
          <FeatureDescription style={{ textAlign: 'center', margin: '0 auto 40px' }}>
            Let Convoa take care of the conversations while you focus on what matters most – growing your business.
          </FeatureDescription>
          <GlowingButton style={{ margin: '0 auto' }}>Start Free Trial</GlowingButton>
          <div style={{ fontSize: 12, color: theme.colors.textMuted, marginTop: 12 }}>No credit card required*</div>
        </CtaBox>
      </CtaSection>

    </Page>
  );
};
