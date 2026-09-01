"use client";

import React, { useRef } from "react";
import {
  Page, BgGlow, GridLines,
  HeroBanner, HeroGlow, BadgeRow, Badge, HeroTitle, HeroSub, MetaRow, MetaDot,
  BodyWrap, TocWrap, TocTitle, TocList, TocItem,
  ContentArea, SectionCard, SectionNum, H2, H3, P, Ul, Li, Anchor,
  CtaBar, CtaText, CtaTitle, CtaSub, CtaBtn,
  useTocActive, scrollTo,
} from "@/features/legal/LegalPageLayout";

const TOC = [
  { id: "s1",  label: "1. Information We Collect" },
  { id: "s2",  label: "2. How We Use It" },
  { id: "s3",  label: "3. Sharing" },
  { id: "s4",  label: "4. Data Security" },
  { id: "s5",  label: "5. Data Retention" },
  { id: "s6",  label: "6. Your Rights" },
  { id: "s7",  label: "7. Third-Party Links" },
  { id: "s8",  label: "8. Children's Privacy" },
  { id: "s9",  label: "9. Policy Updates" },
  { id: "s10", label: "10. Contact Us" },
];

export default function PrivacyPolicyPage() {
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
        <HeroTitle>Privacy Policy</HeroTitle>
        <HeroSub>
          How we collect, use, and protect your information when you use Convoa.
        </HeroSub>
        <MetaRow>
          <span>Last updated: March 31st, 2025</span>
          <MetaDot />
          <span>Convoa, Inc.</span>
        </MetaRow>
      </HeroBanner>

      <BodyWrap>
        {/* sticky toc */}
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

        {/* content */}
        <ContentArea ref={contentRef}>
          <P style={{ marginBottom: 32 }}>
            At Convoa, your privacy is important to us. This Privacy Policy explains how we collect,
            use, store, and protect your information when you use our website, services, and platform.
            By accessing or using Convoa, you agree to the practices outlined in this policy.
          </P>

          <SectionCard id="s1">
            <SectionNum>Section 01</SectionNum>
            <H2>Information We Collect</H2>
            <P>We collect information in the following ways:</P>
            <H3>a. Information You Provide</H3>
            <Ul>
              <Li>Name, phone number, email address, company details, and billing information when you sign up or fill out forms.</Li>
              <Li>Any additional details you provide when using our services or communicating with our support team.</Li>
            </Ul>
            <H3>b. Automatically Collected Information</H3>
            <Ul>
              <Li>Device type, browser, IP address, location data (approximate), and usage activity.</Li>
              <Li>Call metadata such as call duration, call outcomes, and AI interactions (for analytics and service improvements).</Li>
            </Ul>
            <H3>c. Cookies and Tracking Technologies</H3>
            <P>We use cookies and similar tools to enhance your experience, understand user behavior, and improve performance.</P>
          </SectionCard>

          <SectionCard id="s2">
            <SectionNum>Section 02</SectionNum>
            <H2>How We Use Your Information</H2>
            <P>We use the information we collect to:</P>
            <Ul>
              <Li>Deliver and manage our AI voice assistant services</Li>
              <Li>Process payments and manage subscriptions</Li>
              <Li>Communicate with you about your account, updates, or support</Li>
              <Li>Improve the functionality, features, and performance of Convoa</Li>
              <Li>Provide insights and analytics to help optimize your business performance</Li>
              <Li>Prevent fraud, abuse, and maintain the security of our platform</Li>
            </Ul>
          </SectionCard>

          <SectionCard id="s3">
            <SectionNum>Section 03</SectionNum>
            <H2>Sharing Your Information</H2>
            <P>We do not sell your personal data. However, we may share your information in the following situations:</P>
            <Ul>
              <Li>With trusted service providers who help us operate (e.g., payment gateways, analytics tools)</Li>
              <Li>If required by law, regulation, or legal process</Li>
              <Li>To protect the rights, safety, and property of Convoa or our users</Li>
            </Ul>
            <P>All third-party partners are contractually obligated to protect your data and only use it for intended purposes.</P>
          </SectionCard>

          <SectionCard id="s4">
            <SectionNum>Section 04</SectionNum>
            <H2>Data Security</H2>
            <P>We implement technical, administrative, and organizational safeguards to protect your data. While no system is completely secure, we continuously monitor and update our security practices to keep your information safe.</P>
          </SectionCard>

          <SectionCard id="s5">
            <SectionNum>Section 05</SectionNum>
            <H2>Data Retention</H2>
            <P>We retain your information for as long as necessary to provide services, comply with legal obligations, and resolve disputes. You can request deletion of your data by contacting our support team.</P>
          </SectionCard>

          <SectionCard id="s6">
            <SectionNum>Section 06</SectionNum>
            <H2>Your Rights and Choices</H2>
            <P>You have the right to:</P>
            <Ul>
              <Li>Access or update your personal information</Li>
              <Li>Request a copy of your data</Li>
              <Li>Request deletion of your data</Li>
              <Li>Opt-out of marketing communications at any time</Li>
            </Ul>
            <P>To exercise these rights, contact us at <Anchor href="mailto:privacy@convoa.ai">privacy@convoa.ai</Anchor></P>
          </SectionCard>

          <SectionCard id="s7">
            <SectionNum>Section 07</SectionNum>
            <H2>Third-Party Links</H2>
            <P>Our platform may contain links to third-party websites. We are not responsible for their privacy practices or content. Please review their policies before sharing your data.</P>
          </SectionCard>

          <SectionCard id="s8">
            <SectionNum>Section 08</SectionNum>
            <H2>Children&apos;s Privacy</H2>
            <P>Convoa is not intended for children under 13 (or the applicable age in your jurisdiction). We do not knowingly collect personal information from minors.</P>
          </SectionCard>

          <SectionCard id="s9">
            <SectionNum>Section 09</SectionNum>
            <H2>Policy Updates</H2>
            <P>We may update this Privacy Policy to reflect changes in our services or legal obligations. When we do, we&apos;ll revise the &quot;Last Updated&quot; date. Continued use of our services means you accept the updated policy.</P>
          </SectionCard>

          <SectionCard id="s10">
            <SectionNum>Section 10</SectionNum>
            <H2>Contact Us</H2>
            <P>If you have questions or concerns about this Privacy Policy or your data, please contact us:</P>
            <Ul>
              <Li>📧 <Anchor href="mailto:privacy@convoa.ai">privacy@convoa.ai</Anchor></Li>
              <Li>📧 <Anchor href="mailto:support@convoa.ai">support@convoa.ai</Anchor></Li>
            </Ul>
          </SectionCard>

          <CtaBar>
            <CtaText>
              <CtaTitle>Have more questions?</CtaTitle>
              <CtaSub>Our team is happy to walk you through anything in this policy.</CtaSub>
            </CtaText>
            <CtaBtn href="/contact-us">Get in Touch →</CtaBtn>
          </CtaBar>
        </ContentArea>
      </BodyWrap>
    </Page>
  );
}
