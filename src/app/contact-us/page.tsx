"use client";

import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "@/lib/theme";
import { MailOutlined, GlobalOutlined, ArrowRightOutlined, CheckCircleFilled } from "@ant-design/icons";
import { Input as AntInput, Button as AntButton } from "antd";

// animations
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const pulseGlow = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50%       { opacity: 0.7; transform: scale(1.05); }
`;



const envFloating = keyframes`
  0% { transform: translate(-2px, -5px); }
  100% { transform: translate(0, 5px); }
`;

const envDropping = keyframes`
  0% {
    background-position: 100px 11px , 115px 35px, 105px 60px;
    opacity: 1;
  }
  50% {
    background-position: 0px 11px , 20px 35px, 5px 60px;
  }
  60% {
    background-position: -30px 11px , 0px 35px, -10px 60px;
  }
  75%, 100% {
    background-position: -30px 11px , -30px 35px, -30px 60px;
    opacity: 0;
  }
`;

// layout
const Page = styled.div`
  background: ${theme.colors.background};
  min-height: 100vh;
  font-family: ${theme.fonts.body};
  color: ${theme.colors.textPrimary};
  position: relative;
  overflow: hidden;
`;

const BgGlow = styled.div`
  position: absolute;
  top: -200px;
  left: -200px;
  width: 700px;
  height: 700px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(78,205,160,0.07) 0%, transparent 70%);
  pointer-events: none;
  animation: ${pulseGlow} 6s ease-in-out infinite;
`;

const BgGlow2 = styled.div`
  position: absolute;
  bottom: -100px;
  right: -100px;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(61,74,155,0.1) 0%, transparent 70%);
  pointer-events: none;
  animation: ${pulseGlow} 8s ease-in-out infinite reverse;
`;

const GridLines = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 140px 24px 100px;
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 80px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 56px;
    padding: 120px 20px 80px;
  }
`;

// left info panel
const InfoPanel = styled.div`
  animation: ${fadeUp} 0.7s ease both;
`;

const EyebrowRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
`;

const EyebrowLine = styled.div`
  width: 32px;
  height: 1px;
  background: ${theme.colors.brandTeal};
`;

const Eyebrow = styled.span`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${theme.colors.brandTeal};
`;

const Heading = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: clamp(36px, 4.5vw, 56px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0 0 20px;
`;

const GradientWord = styled.span`
  background: ${theme.colors.brandGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtext = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: ${theme.colors.textMuted};
  margin: 0 0 48px;
  max-width: 400px;
`;

const ContactCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 48px;
`;

const ContactCard = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 20px;
  border-radius: 14px;
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.surfaceBorder};
  text-decoration: none;
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: rgba(78,205,160,0.35);
    transform: translateX(4px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  }
`;

const CardIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, rgba(78,205,160,0.15), rgba(61,74,155,0.15));
  border: 1px solid rgba(78,205,160,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: ${theme.colors.brandTeal};
  flex-shrink: 0;
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const CardLabel = styled.span`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${theme.colors.textMuted};
`;

const CardValue = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.colors.textPrimary};
`;

const TrustRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: ${theme.colors.textMuted};

  .anticon {
    color: ${theme.colors.brandTeal};
    font-size: 14px;
  }
`;

// form panel
const FormPanel = styled.div`
  animation: ${fadeUp} 0.7s 0.15s ease both;
`;

const FormCard = styled.div`
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.surfaceBorder};
  border-radius: 24px;
  padding: 48px 40px;
  box-shadow: 0 24px 64px rgba(0,0,0,0.35);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(78,205,160,0.4), transparent);
  }

  @media (max-width: 600px) {
    padding: 32px 24px;
  }
`;

const FormTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 8px;
`;

const FormSubtitle = styled.p`
  font-size: 14px;
  color: ${theme.colors.textMuted};
  margin: 0 0 36px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

const FieldWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${theme.colors.textMuted};
`;

const inputBase = `
  && {
    width: 100%;
    box-sizing: border-box;
    background: rgba(255,255,255,0.03);
    border: 1px solid ${theme.colors.surfaceBorder};
    border-radius: 12px;
    padding: 14px 18px;
    color: ${theme.colors.textPrimary};
    font-family: ${theme.fonts.body};
    font-size: 15px;
    outline: none;
    transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;

    &:focus, &:hover, &-focused {
      border-color: rgba(78,205,160,0.5);
      background: rgba(78,205,160,0.04);
      box-shadow: 0 0 0 3px rgba(78,205,160,0.08);
    }

    &::placeholder {
      color: ${theme.colors.textDim};
    }

    &.ant-input-status-error,
    &.ant-input-affix-wrapper-status-error,
    &.ant-input-textarea-status-error {
      border-color: #ff4d4f !important;
      background: rgba(255, 77, 79, 0.04) !important;
      box-shadow: 0 0 0 3px rgba(255, 77, 79, 0.1) !important;
    }
  }
`;

const Input = styled(AntInput)`${inputBase}`;

const PhoneWrap = styled.div`
  position: relative;
`;

const FlagPrefix = styled.div`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 15px;
  color: ${theme.colors.textMuted};
  pointer-events: none;
  z-index: 1;
`;

const PhoneInput = styled(AntInput)`
  ${inputBase}
  && {
    padding-left: 76px;
  }
`;

const Textarea = styled(AntInput.TextArea)`
  ${inputBase}
  && {
    resize: vertical;
    min-height: 130px;
    font-family: ${theme.fonts.body};
  }
`;

const SubmitBtn = styled(AntButton)`
  && {
    width: 100%;
    height: auto;
    padding: 16px 24px;
    border-radius: 14px;
    border: none;
    background: linear-gradient(135deg, #4ECDA0 0%, #3D4A9B 100%);
    background-size: 200% auto;
    color: #fff;
    font-family: ${theme.fonts.body};
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: transform 0.2s ease, box-shadow 0.2s ease, background-position 0.4s ease;
    margin-top: 4px;
    box-shadow: 0 4px 20px rgba(78,205,160,0.25);

    &:hover, &:focus {
      transform: translateY(-2px);
      box-shadow: 0 8px 32px rgba(78,205,160,0.4);
      background-position: right center;
      color: #fff;
      border: none;
    }

    &:active {
      transform: translateY(0);
    }
  }
`;

const Disclaimer = styled.p`
  font-size: 12px;
  color: ${theme.colors.textDim};
  text-align: center;
  margin: 0;
  line-height: 1.5;

  a {
    color: ${theme.colors.textMuted};
    text-decoration: underline;
    text-underline-offset: 2px;

    &:hover { color: ${theme.colors.brandTeal}; }
  }
`;

const FieldError = styled.p`
  color: #ff4d4f;
  font-size: 12px;
  font-family: ${theme.fonts.body};
  margin: -10px 0 2px;
  padding-left: 2px;
  line-height: 1.4;
`;

// success state
const SuccessBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 48px 24px;
  text-align: center;
  animation: ${fadeUp} 0.5s ease both;

  .anticon {
    font-size: 48px;
    color: ${theme.colors.brandTeal};
  }
`;

const SuccessTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 22px;
  font-weight: 700;
  margin: 0;
`;

const SuccessText = styled.p`
  font-size: 15px;
  color: ${theme.colors.textMuted};
  margin: 0;
  max-width: 300px;
  line-height: 1.6;
`;

const EnvelopeLoader = styled.div`
  position: relative;
  border-style: solid;
  box-sizing: border-box;
  border-width: 40px 60px 30px 60px;
  border-color: ${theme.colors.brandIndigo} ${theme.colors.brandTeal} ${theme.colors.brandTeal} ${theme.colors.brandIndigo};
  animation: ${envFloating} 1s ease-in infinite alternate;
  margin: 20px auto;

  &:after {
    content: "";
    position: absolute;
    right: 62px;
    top: -40px;
    height: 70px;
    width: 50px;
    background-image: linear-gradient(#fff 45px, transparent 0),
              linear-gradient(#fff 45px, transparent 0),
              linear-gradient(#fff 45px, transparent 0);
    background-repeat: no-repeat;
    background-size: 30px 4px;
    background-position: 0px 11px , 8px 35px, 0px 60px;
    animation: ${envDropping} 0.75s linear infinite;
  }
`;

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", phone: "", email: "", company: "", message: ""
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) setFormErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.firstName.trim()) errs.firstName = 'First name is required.';
    if (!form.lastName.trim()) errs.lastName = 'Last name is required.';
    if (!form.email.trim()) errs.email = 'Email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email address.';
    if (!form.message.trim()) errs.message = 'Please enter a message.';
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setFormErrors(errs); return; }
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Page>
      <BgGlow />
      <BgGlow2 />
      <GridLines />

      <Wrapper>
        {/* left panel */}
        <InfoPanel>
          <EyebrowRow>
            <EyebrowLine />
            <Eyebrow>Get in Touch</Eyebrow>
          </EyebrowRow>

          <Heading>
            Let&apos;s <GradientWord>Talk</GradientWord><br />
            About Your Business
          </Heading>

          <Subtext>
            Whether you have questions, want a demo, or are ready to get started —
            our team is here to help you transform how you handle calls.
          </Subtext>

          <ContactCards>
            <ContactCard href="mailto:support@convoa.ai">
              <CardIcon><MailOutlined /></CardIcon>
              <CardText>
                <CardLabel>Email Us</CardLabel>
                <CardValue>support@convoa.ai</CardValue>
              </CardText>
            </ContactCard>
            <ContactCard href="mailto:privacy@convoa.ai">
              <CardIcon><MailOutlined /></CardIcon>
              <CardText>
                <CardLabel>Privacy Inquiries</CardLabel>
                <CardValue>privacy@convoa.ai</CardValue>
              </CardText>
            </ContactCard>
            <ContactCard href="https://app.convoa.ai" target="_blank" rel="noopener noreferrer">
              <CardIcon><GlobalOutlined /></CardIcon>
              <CardText>
                <CardLabel>Platform</CardLabel>
                <CardValue>app.convoa.ai</CardValue>
              </CardText>
            </ContactCard>
          </ContactCards>

          <TrustRow>
            <TrustItem><CheckCircleFilled /> Typically reply within a few hours</TrustItem>
            <TrustItem><CheckCircleFilled /> Free consultation available</TrustItem>
            <TrustItem><CheckCircleFilled /> No commitment required</TrustItem>
          </TrustRow>
        </InfoPanel>

        {/* right form panel */}
        <FormPanel>
          <FormCard>
            {submitted ? (
              <SuccessBox>
                <CheckCircleFilled />
                <SuccessTitle>Message Sent!</SuccessTitle>
                <SuccessText>
                  Thanks for reaching out. Our team will get back to you within a few hours.
                </SuccessText>
              </SuccessBox>
            ) : isSubmitting ? (
              <SuccessBox>
                <EnvelopeLoader />
                <SuccessTitle>Sending Message...</SuccessTitle>
                <SuccessText>
                  Please wait while we deliver your message to our team.
                </SuccessText>
              </SuccessBox>
            ) : (
              <>
                <FormTitle>Send us a message</FormTitle>
                <FormSubtitle>Fill out the form and we&apos;ll be in touch shortly.</FormSubtitle>

                <Form onSubmit={handleSubmit} noValidate>
                  <Row>
                    <FieldWrap>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="John"
                        value={form.firstName}
                        onChange={handleChange}
                        status={formErrors.firstName ? 'error' : ''}
                      />
                      {formErrors.firstName && <FieldError>{formErrors.firstName}</FieldError>}
                    </FieldWrap>
                    <FieldWrap>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Smith"
                        value={form.lastName}
                        onChange={handleChange}
                        status={formErrors.lastName ? 'error' : ''}
                      />
                      {formErrors.lastName && <FieldError>{formErrors.lastName}</FieldError>}
                    </FieldWrap>
                  </Row>

                  <FieldWrap>
                    <Label htmlFor="phone">Phone</Label>
                    <PhoneWrap>
                      <FlagPrefix>🇺🇸 <span style={{ fontSize: '11px' }}>▼</span></FlagPrefix>
                      <PhoneInput
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </PhoneWrap>
                  </FieldWrap>

                  <FieldWrap>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={handleChange}
                      status={formErrors.email ? 'error' : ''}
                    />
                    {formErrors.email && <FieldError>{formErrors.email}</FieldError>}
                  </FieldWrap>

                  <FieldWrap>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your Company Name"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </FieldWrap>

                  <FieldWrap>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your business and how we can help..."
                      value={form.message}
                      onChange={handleChange}
                      status={formErrors.message ? 'error' : ''}
                    />
                    {formErrors.message && <FieldError>{formErrors.message}</FieldError>}
                  </FieldWrap>

                  <SubmitBtn htmlType="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"} <ArrowRightOutlined />
                  </SubmitBtn>

                  <Disclaimer>
                    By submitting, you agree to our{" "}
                    <a href="/privacy-policy">Privacy Policy</a>{" "}
                    and{" "}
                    <a href="/terms-of-use">Terms of Service</a>.
                  </Disclaimer>
                </Form>
              </>
            )}
          </FormCard>
        </FormPanel>
      </Wrapper>
    </Page>
  );
}
