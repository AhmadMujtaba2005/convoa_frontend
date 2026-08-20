"use client";

import styled from "styled-components";
import { Button, Collapse } from "antd";
import { IndustryContent } from "@/features/industries/types";

const Hero = styled.section`
  padding: 120px 24px;
  text-align: center;
  background: radial-gradient(circle at top, #7c5cff33, transparent 60%);
`;

const Heading = styled.h1`
  font-size: 56px;
  font-weight: 700;
  color: #f5f5f7;
`;

interface Props {
    content: IndustryContent;
}

export default function IndustryPageTemplate({ content }: Props) {
    return (
        <>
            <Hero>
                <Heading>{content.hero.heading}</Heading>
                <p>{content.hero.subheading}</p>
                <Button type="primary" size="large">
                    {content.hero.ctaLabel}
                </Button>
            </Hero>

            <section>
                <h2>{content.serviceSection.heading}</h2>
                {content.serviceSection.painPoints.map((point) => (
                    <div key={point}>{point}</div>
                ))}
            </section>

            {/* ...featuresSection, benefitsSection, statsSection, faq... */}
        </>
    );
}