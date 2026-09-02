"use client";

import React from "react";
import styled, { keyframes, css } from "styled-components";
import { theme } from "@/lib/theme";
import { PlayCircleFilled, FileTextOutlined, CheckCircleFilled, MessageFilled, AudioFilled, UserOutlined } from "@ant-design/icons";

// --- ANIMATIONS ---
const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

const slideUp = keyframes`
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const scan = keyframes`
  0% { top: 0%; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { top: 100%; opacity: 0; }
`;

const wave = keyframes`
  0% { height: 10%; }
  50% { height: 100%; }
  100% { height: 10%; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

const dash = keyframes`
  to {
    stroke-dashoffset: -20;
  }
`;

const typeLine = keyframes`
  0% { width: 0; opacity: 1; }
  99% { opacity: 1; }
  100% { opacity: 0; }
`;

// --- SHARED ---
const MockupWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  perspective: 1000px;
`;

const WindowFrame = styled.div`
  background: ${theme.colors.surface};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  max-width: 320px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1);
`;

const WindowHeader = styled.div`
  background: rgba(0, 0, 0, 0.2);
  padding: 10px 12px;
  display: flex;
  gap: 6px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

const Dot = styled.div<{ $c: string }>`
  width: 10px; height: 10px; border-radius: 50%;
  background: ${p => p.$c};
`;


// --- 1. INSTANT SETUP (Terminal Build) ---
const TerminalBody = styled.div`
  padding: 16px;
  font-family: monospace;
  font-size: 12px;
  color: ${theme.colors.textMuted};
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const CodeLine = styled.div<{ $delay: number, $color?: string, $hide?: boolean }>`
  opacity: 0;
  color: ${p => p.$color || 'inherit'};
  animation: ${slideUp} 0.3s ease-out forwards;
  animation-delay: ${p => p.$delay}s;
  ${p => p.$hide && css`
    animation: ${slideUp} 0.3s ease-out forwards, ${typeLine} 0s forwards;
    animation-delay: ${p.$delay}s, ${p.$delay + 1}s;
  `}
`;


// --- 2. KNOWLEDGE BASE (Scanner) ---
const Dropzone = styled.div`
  border: 2px dashed rgba(78, 205, 160, 0.3);
  border-radius: 12px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  position: relative;
  background: linear-gradient(180deg, rgba(78,205,160,0.05) 0%, transparent 100%);
`;
const DocFile = styled(FileTextOutlined)`
  font-size: 40px;
  color: ${theme.colors.brandTeal};
  animation: ${float} 4s infinite ease-in-out;
  position: relative;
`;
const ScanLine = styled.div`
  position: absolute;
  left: 0; right: 0; height: 2px;
  background: ${theme.colors.brandTeal};
  box-shadow: 0 0 10px ${theme.colors.brandTeal};
  animation: ${scan} 2s infinite linear;
`;


// --- 3. CALL ANALYTICS (Rich Chart) ---
const ChartContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
  height: 120px;
  padding: 16px;
  position: relative;
  width: 100%;
  max-width: 280px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
`;
const RichBar = styled.div<{ $h: number, $delay: number }>`
  flex: 1;
  height: ${p => p.$h}%;
  background: linear-gradient(to top, rgba(78, 205, 160, 0.1), ${theme.colors.brandTeal});
  border-radius: 4px 4px 0 0;
  animation: ${slideUp} 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: ${p => p.$delay}s;
  opacity: 0;
  position: relative;
  &:hover { opacity: 0.8; }
`;
const FloatingTooltip = styled.div`
  position: absolute;
  top: -24px; left: 50%; transform: translateX(-50%);
  background: #fff; color: #000;
  font-size: 10px; font-weight: 700;
  padding: 2px 6px; border-radius: 4px;
  opacity: 0;
  animation: ${slideUp} 0.3s forwards;
  animation-delay: 1.2s;
`;


// --- 4. CUSTOM VOICES (Multi-layered Waveform) ---
const VoiceContainer = styled.div`
  display: flex; align-items: center; justify-content: center;
  gap: 6px; height: 80px; width: 100%;
`;
const WaveStick = styled.div<{ $delay: number, $color: string }>`
  width: 6px;
  background: ${p => p.$color};
  border-radius: 6px;
  animation: ${wave} 1.2s infinite ease-in-out;
  animation-delay: ${p => p.$delay}s;
  box-shadow: 0 0 10px ${p => p.$color};
`;


// --- 5. CALL RECORDINGS (Mini Audio Player) ---
const PlayerUI = styled.div`
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
  padding: 16px;
  display: flex; flex-direction: column; gap: 16px;
  width: 100%; max-width: 280px;
  backdrop-filter: blur(10px);
`;
const PlayerTop = styled.div`
  display: flex; align-items: center; gap: 12px;
`;
const Avatar = styled.div`
  width: 40px; height: 40px; border-radius: 50%;
  flex-shrink: 0;
  background: ${theme.colors.brandGradient};
  display: flex; align-items: center; justify-content: center;
  color: #000;
`;
const TrackInfo = styled.div`
  display: flex; flex-direction: column;
  white-space: nowrap;
  min-width: 0;
  overflow: hidden;
  flex: 1;
`;
const Timeline = styled.div`
  height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px;
  position: relative; overflow: hidden;
  &::after {
    content: ''; position: absolute; left: 0; top: 0; bottom: 0;
    width: 60%; background: ${theme.colors.brandTeal};
    border-radius: 2px;
  }
`;
const TranscribeBtn = styled.button`
  background: rgba(78, 205, 160, 0.1); border: none;
  color: ${theme.colors.brandTeal}; font-size: 11px; padding: 6px 12px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center; gap: 6px; cursor: pointer;
  margin-top: -4px; width: fit-content;
  &:hover { background: rgba(78, 205, 160, 0.2); }
`;


// --- 6. SEAMLESS HANDOFF (Routing Graph) ---
const FlowGraph = styled.div`
  display: flex; align-items: center; gap: 16px;
  position: relative;
`;
const Node = styled.div<{ $type: 'user' | 'ai' | 'agent' }>`
  width: 50px; height: 50px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  background: ${p => p.$type === 'ai' ? `linear-gradient(rgba(78,205,160,0.2), rgba(78,205,160,0.2)), ${theme.colors.surface}` : theme.colors.surface};
  border: 1px solid ${p => p.$type === 'ai' ? theme.colors.brandTeal : 'rgba(255,255,255,0.1)'};
  color: ${p => p.$type === 'ai' ? theme.colors.brandTeal : theme.colors.textMuted};
  font-size: 20px;
  position: relative;
  z-index: 2;
  box-shadow: ${p => p.$type === 'ai' ? `0 0 20px rgba(78,205,160,0.4)` : 'none'};
`;
const FlowLine = styled.div`
  flex: 1; height: 2px; min-width: 40px;
  background: linear-gradient(90deg, transparent, ${theme.colors.brandTeal}, transparent);
  position: relative;
  &::after {
    content: ''; position: absolute; top: -3px; left: 0; width: 8px; height: 8px;
    background: ${theme.colors.brandTeal}; border-radius: 50%;
    box-shadow: 0 0 10px ${theme.colors.brandTeal};
    animation: slideUp 2s infinite linear;
  }
`;
// Custom SVG line for the flowing dots
const SvgLine = styled.svg`
  position: absolute; top: 50%; left: 25px; width: calc(100% - 50px); height: 40px;
  transform: translateY(-50%); z-index: 1; overflow: visible;
  path {
    stroke: rgba(255,255,255,0.1); stroke-width: 2; fill: none;
  }
  .animated-path {
    stroke: ${theme.colors.brandTeal};
    stroke-dasharray: 8 12;
    animation: ${dash} 1s linear infinite;
  }
`;


// --- 7. CUSTOM GUARDRAILS (Settings Panel) ---
const ToggleList = styled.div`
  display: flex; flex-direction: column; gap: 12px; width: 100%;
`;
const ToggleRow = styled.div<{ $delay: number }>`
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 16px; background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.05); border-radius: 12px;
  opacity: 0;
  animation: ${slideUp} 0.4s ease forwards;
  animation-delay: ${p => p.$delay}s;
`;
const Switch = styled.div<{ $on: boolean }>`
  width: 36px; height: 20px; border-radius: 10px;
  background: ${p => p.$on ? theme.colors.brandTeal : 'rgba(255,255,255,0.2)'};
  position: relative; transition: all 0.3s;
  &::after {
    content: ''; position: absolute; top: 2px; left: ${p => p.$on ? '18px' : '2px'};
    width: 16px; height: 16px; border-radius: 50%; background: #fff;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`;


// --- 8. SMS FOLLOW-UPS (Chat UI) ---
const ChatWindow = styled.div`
  display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 260px;
`;
const Msg = styled.div<{ $bot?: boolean, $delay: number }>`
  padding: 10px 14px; border-radius: 16px; font-size: 13px; max-width: 100%;
  word-break: break-word;
  opacity: 0;
  animation: ${slideUp} 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: ${p => p.$delay}s;
  
  ${p => p.$bot ? css`
    align-self: flex-start;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    color: ${theme.colors.textPrimary};
    border-bottom-left-radius: 4px;
  ` : css`
    align-self: flex-end;
    background: linear-gradient(135deg, ${theme.colors.brandTeal}, ${theme.colors.brandIndigo});
    color: #fff;
    border-bottom-right-radius: 4px;
    box-shadow: 0 4px 12px rgba(78, 205, 160, 0.3);
  `}
`;



export const getFeatureMockup = (title: string) => {
  switch (title) {
    case "Instant Setup":
      return (
        <MockupWrap>
          <WindowFrame>
            <WindowHeader>
              <Dot $c="#FF5F56" /><Dot $c="#FFBD2E" /><Dot $c="#27C93F" />
            </WindowHeader>
            <TerminalBody>
              <CodeLine $delay={0}>{">"} npm run deploy</CodeLine>
              <CodeLine $delay={0.4} $color={theme.colors.textMuted}>Building Convoa Assistant...</CodeLine>
              <CodeLine $delay={0.8} $color={theme.colors.textMuted}>Connecting API endpoints...</CodeLine>
              <CodeLine $delay={1.2} $color={theme.colors.brandTeal}>✓ Deployment successful!</CodeLine>
              <CodeLine $delay={1.4} $color={theme.colors.textPrimary}>https://convoa.ai/live/1a2b</CodeLine>
            </TerminalBody>
          </WindowFrame>
        </MockupWrap>
      );
      
    case "Knowledge Base":
      return (
        <MockupWrap>
          <Dropzone>
            <DocFile />
            <div style={{ fontSize: 13, color: theme.colors.textMuted, fontWeight: 500 }}>Drop documents here</div>
          </Dropzone>
        </MockupWrap>
      );
      
    case "Call Analytics":
      return (
        <MockupWrap>
          <ChartContainer>
            <RichBar $h={40} $delay={0} />
            <RichBar $h={60} $delay={0.1} />
            <RichBar $h={35} $delay={0.2} />
            <RichBar $h={80} $delay={0.3} />
            <RichBar $h={100} $delay={0.4}>
              <FloatingTooltip>+48%</FloatingTooltip>
            </RichBar>
          </ChartContainer>
        </MockupWrap>
      );
      
    case "Custom Voices":
      return (
        <MockupWrap>
          <VoiceContainer>
            <WaveStick $delay={0} $color={theme.colors.brandIndigo} />
            <WaveStick $delay={0.2} $color={theme.colors.brandTeal} />
            <WaveStick $delay={0.4} $color={`linear-gradient(to top, ${theme.colors.brandTeal}, ${theme.colors.brandIndigo})`} />
            <WaveStick $delay={0.6} $color={theme.colors.brandTeal} />
            <WaveStick $delay={0.8} $color={theme.colors.brandIndigo} />
          </VoiceContainer>
        </MockupWrap>
      );
      
    case "Call Recordings":
      return (
        <MockupWrap>
          <PlayerUI>
            <PlayerTop>
              <Avatar><UserOutlined /></Avatar>
              <TrackInfo>
                <div style={{ fontSize: 14, fontWeight: 600, color: theme.colors.textPrimary, overflow: 'hidden', textOverflow: 'ellipsis' }}>Customer Inquiry</div>
                <div style={{ fontSize: 12, color: theme.colors.brandTeal }}>0:12 / 1:45</div>
              </TrackInfo>
              <PlayCircleFilled style={{ fontSize: 32, color: theme.colors.brandTeal, flexShrink: 0 }} />
            </PlayerTop>
            <Timeline />
            <TranscribeBtn><FileTextOutlined /> Show Transcript</TranscribeBtn>
          </PlayerUI>
        </MockupWrap>
      );
      
    case "Seamless Handoff":
      return (
        <MockupWrap>
          <FlowGraph>
            <SvgLine>
              <line x1="0" y1="20" x2="100%" y2="20" className="animated-path" />
            </SvgLine>
            <Node $type="user"><UserOutlined /></Node>
            <div style={{ width: 40 }} />
            <Node $type="ai"><AudioFilled /></Node>
            <div style={{ width: 40 }} />
            <Node $type="agent"><MessageFilled /></Node>
          </FlowGraph>
        </MockupWrap>
      );
      
    case "Custom Guardrails":
      return (
        <MockupWrap>
          <ToggleList>
            <ToggleRow $delay={0}>
              <div style={{ fontSize: 13, color: theme.colors.textPrimary }}>Never discuss pricing</div>
              <Switch $on={true} />
            </ToggleRow>
            <ToggleRow $delay={0.15}>
              <div style={{ fontSize: 13, color: theme.colors.textPrimary }}>Only book morning slots</div>
              <Switch $on={false} />
            </ToggleRow>
            <ToggleRow $delay={0.3}>
              <div style={{ fontSize: 13, color: theme.colors.textPrimary }}>Always collect email</div>
              <Switch $on={true} />
            </ToggleRow>
          </ToggleList>
        </MockupWrap>
      );
      
    case "SMS Follow-Ups":
      return (
        <MockupWrap>
          <ChatWindow>
            <Msg $bot={true} $delay={0} style={{ background: theme.colors.surface, border: `1px solid ${theme.colors.brandTeal}` }}>
              <div style={{ color: theme.colors.brandTeal, fontWeight: 700, marginBottom: 4 }}>Convoa AI</div>
              Your booking is confirmed. View details: convoa.ai/b/123
            </Msg>
          </ChatWindow>
        </MockupWrap>
      );
      
    default:
      return null;
  }
};
