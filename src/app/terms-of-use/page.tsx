"use client";

import React, { useRef } from "react";
import {
  Page, BgGlow, GridLines,
  HeroBanner, HeroGlow, BadgeRow, Badge, HeroTitle, HeroSub, MetaRow, MetaDot,
  BodyWrap, TocWrap, TocTitle, TocList, TocItem,
  ContentArea, SectionCard, SectionNum, H2, P, Ul, Li, Anchor,
  CtaBar, CtaText, CtaTitle, CtaSub, CtaBtn,
  useTocActive, scrollTo,
} from "@/features/legal/LegalPageLayout";

const TOC = [
  { id: "s1",  label: "1. Eligibility" },
  { id: "s2",  label: "2. Account Registration" },
  { id: "s3",  label: "3. Use of Services" },
  { id: "s4",  label: "4. Subscription & Billing" },
  { id: "s5",  label: "5. Free Trials" },
  { id: "s6",  label: "6. Cancellation" },
  { id: "s7",  label: "7. User Data & Privacy" },
  { id: "s8",  label: "8. Intellectual Property" },
  { id: "s9",  label: "9. Service Availability" },
  { id: "s10", label: "10. Limitation of Liability" },
  { id: "s11", label: "11. Modifications" },
  { id: "s12", label: "12. Governing Law" },
  { id: "s13", label: "13. Contact Us" },
];

export default function TermsOfUsePage() {
  const contentRef = useRef<HTMLDivElement>(null);
  const active = useTocActive(TOC.map(t => t.id), contentRef);

  return (
    <Page>
      <BgGlow />
      <GridLines />

      <HeroBanner>
        <HeroGlow />
        <BadgeRow>
          <Badge>Legal</Badge>
        </BadgeRow>
        <HeroTitle>Terms of Service</HeroTitle>
        <HeroSub>
          The rules and guidelines that govern your use of Convoa&apos;s platform and services.
        </HeroSub>
        <MetaRow>
          <span>Last updated: March 31st, 2025</span>
          <MetaDot />
          <span>Convoa, Inc.</span>
        </MetaRow>
      </HeroBanner>

      <BodyWrap>
        {/* Sticky TOC */}
        <TocWrap>
          <TocTitle>On this page</TocTitle>
          <TocList>
            {TOC.map(t => (
              <TocItem key={t.id} $active={active === t.id} onClick={() => scrollTo(t.id, contentRef)}>
                {t.label}
              </TocItem>
            ))}
          </TocList>
        </TocWrap>

        {/* Content */}
        <ContentArea ref={contentRef}>
          <P style={{ marginBottom: 32 }}>
            Welcome to Convoa. These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Convoa
            website, platform, services, and related products (collectively, the &quot;Services&quot;). By accessing
            or using our Services, you agree to be bound by these Terms.
          </P>
          <P style={{ marginBottom: 40 }}>
            If you do not agree to these Terms, please do not use our Services.
          </P>

          <SectionCard id="s1">
            <SectionNum>Section 01</SectionNum>
            <H2>Eligibility</H2>
            <P>You must be at least 18 years old or the age of majority in your jurisdiction to use Convoa. By using the Services, you represent and warrant that you meet these requirements and have the legal capacity to enter into a binding agreement.</P>
          </SectionCard>

          <SectionCard id="s2">
            <SectionNum>Section 02</SectionNum>
            <H2>Account Registration</H2>
            <P>To use certain features of the Services, you may be required to create an account. You agree to:</P>
            <Ul>
              <Li>Provide accurate and complete information during registration</Li>
              <Li>Keep your login credentials secure and confidential</Li>
              <Li>Notify us immediately of any unauthorized access or security breach</Li>
            </Ul>
            <P>You are responsible for all activities that occur under your account.</P>
          </SectionCard>

          <SectionCard id="s3">
            <SectionNum>Section 03</SectionNum>
            <H2>Use of Services</H2>
            <P>Convoa provides AI-powered voice assistant services designed to handle inbound and outbound calls, manage bookings, qualify leads, and provide customer insights.</P>
            <P>You agree to use the Services only for lawful purposes and in compliance with all applicable laws and regulations. You must not:</P>
            <Ul>
              <Li>Use the Services for fraudulent, harmful, or misleading activities</Li>
              <Li>Interfere with or disrupt the integrity or performance of the Services</Li>
              <Li>Attempt to reverse-engineer or replicate any part of our system</Li>
            </Ul>
          </SectionCard>

          <SectionCard id="s4">
            <SectionNum>Section 04</SectionNum>
            <H2>Subscription and Billing</H2>
            <P>Some features of the Services require a paid subscription. By selecting a subscription plan, you agree to:</P>
            <Ul>
              <Li>Pay all applicable fees on time</Li>
              <Li>Allow Convoa to charge your provided payment method</Li>
            </Ul>
            <P>Unless otherwise specified, subscriptions are billed monthly or annually and automatically renew unless canceled before the next billing cycle. We reserve the right to change pricing with prior notice.</P>
          </SectionCard>

          <SectionCard id="s5">
            <SectionNum>Section 05</SectionNum>
            <H2>Free Trials</H2>
            <P>Convoa may offer free trials for certain features or plans. At the end of the trial, unless canceled, the subscription will automatically convert to a paid plan at the applicable rate.</P>
            <P>Only one free trial is permitted per user or business.</P>
          </SectionCard>

          <SectionCard id="s6">
            <SectionNum>Section 06</SectionNum>
            <H2>Cancellation and Termination</H2>
            <P>You can cancel your subscription at any time through your account settings. Upon cancellation:</P>
            <Ul>
              <Li>Access to premium features will remain until the end of the billing period</Li>
              <Li>No partial refunds will be issued unless required by law</Li>
            </Ul>
            <P>Convoa reserves the right to suspend or terminate your access if you violate these Terms or engage in abusive behavior.</P>
          </SectionCard>

          <SectionCard id="s7">
            <SectionNum>Section 07</SectionNum>
            <H2>User Data and Privacy</H2>
            <P>Your privacy matters to us. Please review our <Anchor href="/privacy-policy">Privacy Policy</Anchor> to understand how we collect, use, and protect your data.</P>
            <P>You retain ownership of your data, but you grant us the right to use aggregated, anonymized data to improve our services.</P>
          </SectionCard>

          <SectionCard id="s8">
            <SectionNum>Section 08</SectionNum>
            <H2>Intellectual Property</H2>
            <P>All content, trademarks, code, and materials on the platform are the intellectual property of Convoa or its licensors. You may not copy, modify, distribute, or use any part of the Services without prior written consent.</P>
          </SectionCard>

          <SectionCard id="s9">
            <SectionNum>Section 09</SectionNum>
            <H2>Service Availability</H2>
            <P>We strive to keep Convoa accessible and reliable, but we do not guarantee 100% uptime. Service interruptions may occur due to maintenance, system upgrades, or factors beyond our control.</P>
          </SectionCard>

          <SectionCard id="s10">
            <SectionNum>Section 10</SectionNum>
            <H2>Limitation of Liability</H2>
            <P>To the maximum extent permitted by law, Convoa is not liable for:</P>
            <Ul>
              <Li>Any indirect, incidental, or consequential damages</Li>
              <Li>Business interruption, data loss, or financial loss arising from your use of the Services</Li>
            </Ul>
            <P>Our total liability shall not exceed the amount you paid to Convoa in the last 12 months.</P>
          </SectionCard>

          <SectionCard id="s11">
            <SectionNum>Section 11</SectionNum>
            <H2>Modifications to Terms</H2>
            <P>We may update these Terms from time to time. If changes are material, we will provide reasonable notice. Your continued use of the Services after updates constitutes acceptance of the revised Terms.</P>
          </SectionCard>

          <SectionCard id="s12">
            <SectionNum>Section 12</SectionNum>
            <H2>Governing Law</H2>
            <P>These Terms are governed by and construed under the laws of [Insert Jurisdiction]. Any legal disputes shall be resolved in the courts located in [Insert Location].</P>
          </SectionCard>

          <SectionCard id="s13">
            <SectionNum>Section 13</SectionNum>
            <H2>Contact Us</H2>
            <P>If you have questions or concerns about these Terms, please contact us at:</P>
            <Ul>
              <Li>📧 <Anchor href="mailto:support@convoa.ai">support@convoa.ai</Anchor></Li>
            </Ul>
          </SectionCard>

          <CtaBar>
            <CtaText>
              <CtaTitle>Questions about our Terms?</CtaTitle>
              <CtaSub>Our team is happy to clarify anything for you.</CtaSub>
            </CtaText>
            <CtaBtn href="/contact-us">Get in Touch →</CtaBtn>
          </CtaBar>
        </ContentArea>
      </BodyWrap>
    </Page>
  );
}
