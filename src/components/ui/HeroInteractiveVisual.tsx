"use client";

import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { theme } from "@/lib/theme";
import { Phone, Globe, MessageSquare, Mic } from "lucide-react";

// Animations
const pulse = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(78, 205, 160, 0.4); }
  70% { transform: scale(1.05); box-shadow: 0 0 0 20px rgba(78, 205, 160, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(78, 205, 160, 0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const wave = keyframes`
  0%, 100% { height: 4px; }
  50% { height: 16px; }
`;

// Styled Components
const VisualContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px auto;
  position: relative;
  z-index: 10;
`;

const ToggleContainer = styled.div`
  display: flex;
  background: ${theme.colors.surfaceBorder};
  border-radius: 30px;
  padding: 4px;
  margin-bottom: 32px;
`;

const ToggleButton = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${p => p.$active ? theme.colors.surface : 'transparent'};
  color: ${p => p.$active ? theme.colors.textPrimary : theme.colors.textMuted};
  border: none;
  border-radius: 26px;
  padding: 8px 20px;
  font-family: ${theme.fonts.body};
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${p => p.$active ? '0 2px 10px rgba(0,0,0,0.2)' : 'none'};

  &:hover {
    color: ${theme.colors.textPrimary};
  }
`;

const OrbWrapper = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

const Orb = styled.div<{ $isVoice: boolean }>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, ${theme.colors.brandTeal}, ${theme.colors.brandIndigo});
  box-shadow: 0 10px 40px rgba(78, 205, 160, 0.4);
  animation: ${p => p.$isVoice ? css`${pulse} 2s infinite ease-in-out` : css`${float} 4s infinite ease-in-out`};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 60%);
  }
`;

const Waveform = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  z-index: 2;
`;

const Bar = styled.div<{ $delay: string }>`
  width: 4px;
  height: 12px;
  background: white;
  border-radius: 2px;
  animation: ${wave} 1s ease-in-out infinite;
  animation-delay: ${p => p.$delay};
`;

const ChatBubble = styled.div`
  position: absolute;
  top: -20px;
  right: -80px;
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.surfaceBorder};
  border-radius: 16px;
  border-bottom-left-radius: 4px;
  padding: 12px 16px;
  font-family: ${theme.fonts.body};
  font-size: 14px;
  color: ${theme.colors.textPrimary};
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  animation: ${float} 4s infinite ease-in-out 0.5s;
  z-index: 3;
  white-space: nowrap;
`;

const ActionRow = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.surfaceBorder};
  color: ${theme.colors.textPrimary};
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(78, 205, 160, 0.4);
    box-shadow: 0 8px 20px rgba(78, 205, 160, 0.15);
  }
`;

const ActionLabel = styled.div`
  font-size: 12px;
  color: ${theme.colors.textMuted};
  margin-top: 8px;
  font-weight: 500;
  text-align: center;
`;

const ActionGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const HeroInteractiveVisual = () => {
  const [mode, setMode] = useState<'voice' | 'chat'>('voice');
  
  return (
    <VisualContainer>
      <ToggleContainer>
        <ToggleButton $active={mode === 'chat'} onClick={() => setMode('chat')}>
          <MessageSquare size={16} /> Chat
        </ToggleButton>
        <ToggleButton $active={mode === 'voice'} onClick={() => setMode('voice')}>
          <Mic size={16} /> Voice
        </ToggleButton>
      </ToggleContainer>
      
      <OrbWrapper>
        {mode === 'chat' && (
          <ChatBubble>Hey, how can I help you today?</ChatBubble>
        )}
        <Orb $isVoice={mode === 'voice'}>
           {mode === 'voice' && (
             <Waveform>
               <Bar $delay="0s" />
               <Bar $delay="0.1s" />
               <Bar $delay="0.2s" />
               <Bar $delay="0.3s" />
               <Bar $delay="0.4s" />
             </Waveform>
           )}
        </Orb>
      </OrbWrapper>
      
      <ActionRow>
        <ActionGroup>
          <ActionButton>
            <Globe size={24} />
          </ActionButton>
          <ActionLabel>Web call</ActionLabel>
        </ActionGroup>
        <ActionGroup>
          <ActionButton>
            <Phone size={24} />
          </ActionButton>
          <ActionLabel>Phone call</ActionLabel>
        </ActionGroup>
      </ActionRow>
    </VisualContainer>
  );
};
