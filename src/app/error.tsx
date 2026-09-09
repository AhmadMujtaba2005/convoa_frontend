"use client";

import { useEffect } from "react";
import styled from "styled-components";
import { theme } from "@/lib/theme";
import Link from "next/link";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${theme.colors.background};
  text-align: center;
  padding: 24px;
`;

const ErrorCode = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: 80px;
  font-weight: 700;
  margin: 0;
  background: ${theme.colors.brandGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
`;

const ErrorTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: 24px;
  color: ${theme.colors.textPrimary};
  margin: 16px 0;
`;

const ErrorMessage = styled.p`
  color: ${theme.colors.textMuted};
  font-size: 16px;
  max-width: 400px;
  margin: 0 0 32px 0;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
`;

const ActionButton = styled.button`
  padding: 12px 24px;
  border-radius: 30px;
  font-family: ${theme.fonts.body};
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  background: ${theme.colors.surface};
  color: ${theme.colors.textPrimary};
  border: 1px solid ${theme.colors.surfaceBorder};
  
  &:hover {
    border-color: ${theme.colors.brandTeal};
    background: rgba(78, 205, 160, 0.05);
  }
`;

const PrimaryButton = styled(Link)`
  padding: 12px 24px;
  border-radius: 30px;
  font-family: ${theme.fonts.body};
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  background: ${theme.colors.textPrimary};
  color: ${theme.colors.background};
  border: none;
  text-decoration: none;
  
  &:hover {
    opacity: 0.9;
  }
`;

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service if applicable
    console.error(error);
  }, [error]);

  return (
    <ErrorContainer>
      <ErrorCode>500</ErrorCode>
      <ErrorTitle>Something went wrong!</ErrorTitle>
      <ErrorMessage>
        An unexpected error occurred while processing your request. We've logged the issue and are looking into it.
      </ErrorMessage>
      <ButtonGroup>
        <ActionButton onClick={() => reset()}>Try again</ActionButton>
        <PrimaryButton href="/">Go back home</PrimaryButton>
      </ButtonGroup>
    </ErrorContainer>
  );
}
