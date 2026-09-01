"use client";

import React from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "@/lib/theme";

// animations
export const twinkle = keyframes`0%,100%{opacity:0.1;transform:scale(1)}50%{opacity:0.6;transform:scale(1.4)}`;
export const sparkleAnim = keyframes`0%,100%{opacity:0.4;transform:scale(1) rotate(0deg)}50%{opacity:1;transform:scale(1.6) rotate(180deg)}`;
export const SpinAnim = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
export const SpinAnimReverse = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(-360deg); }
`;

// hero canvas elements
export const StarField = styled.div`
  position: absolute; inset: 0; pointer-events: none; z-index: 0; overflow: hidden;
`;

export const Star = styled.div<{ $x: number; $y: number; $delay: number; $size: number }>`
  position: absolute;
  left: ${p => p.$x}%;
  top: ${p => p.$y}%;
  width: ${p => p.$size}px;
  height: ${p => p.$size}px;
  background: #fff;
  border-radius: 50%;
  opacity: 0.12;
  animation: ${twinkle} ${p => 2 + p.$delay}s ease-in-out ${p => p.$delay}s infinite;
`;

export const Sparkle = styled.div<{ $x: number; $y: number; $delay: number }>`
  position: absolute;
  left: ${p => p.$x}%;
  top: ${p => p.$y}%;
  width: 5px; height: 5px;
  background: radial-gradient(circle, ${theme.colors.brandTeal} 0%, transparent 70%);
  border-radius: 50%;
  box-shadow: 0 0 10px 3px rgba(78, 205, 160, 0.60);
  animation: ${sparkleAnim} ${p => 3 + p.$delay}s ease-in-out ${p => p.$delay}s infinite;
`;

export const STARS = [
  {x:8,y:15,d:0.3,s:1},{x:17,y:28,d:0.8,s:1},{x:25,y:12,d:1.2,s:1},{x:34,y:42,d:0.5,s:1},
  {x:42,y:8,d:1.7,s:1},{x:55,y:35,d:0.2,s:1},{x:63,y:18,d:1.1,s:1},{x:71,y:50,d:0.6,s:1},
  {x:80,y:22,d:1.4,s:1},{x:88,y:38,d:0.9,s:1},{x:93,y:14,d:0.4,s:1},{x:12,y:55,d:1.8,s:1},
  {x:48,y:60,d:0.7,s:1},{x:76,y:65,d:1.3,s:1},{x:92,y:55,d:0.1,s:1},{x:30,y:70,d:1.6,s:1},
  {x:60,y:75,d:0.5,s:1},{x:20,y:80,d:1.0,s:1},{x:85,y:78,d:0.3,s:1},{x:5,y:40,d:1.5,s:1},
];

export const SPARKLES = [{x:22,y:62,d:0},{x:78,y:58,d:1.2}];

export const HeroGlow = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(78, 205, 160, 0.40) 0%, rgba(78, 205, 160, 0.15) 50%, transparent 70%);
  filter: blur(60px);
  pointer-events: none;
  z-index: 0;
`;

// background section elements
export const SectionBgArc = styled.div`
  position: absolute; top: 0; left: 0; right: 0; height: 250px;
  pointer-events: none; z-index: 0; opacity: 0.8;
`;

export const ArcSvg = () => (
  <svg width="100%" height="250" viewBox="0 0 1440 250" fill="none" preserveAspectRatio="xMidYMin slice">
    <defs>
      <linearGradient id="arcGrad" x1="0" y1="0" x2="1440" y2="0">
        <stop offset="0%" stopColor="transparent" />
        <stop offset="30%" stopColor={theme.colors.brandTeal} stopOpacity="0.4" />
        <stop offset="50%" stopColor={theme.colors.brandTeal} stopOpacity="0.9" />
        <stop offset="70%" stopColor={theme.colors.brandTeal} stopOpacity="0.4" />
        <stop offset="100%" stopColor="transparent" />
      </linearGradient>
    </defs>
    <path d="M0 100 Q 720 -20 1440 100" stroke="url(#arcGrad)" strokeWidth="1.5" />
    <path d="M0 100 Q 720 -20 1440 100" stroke="url(#arcGrad)" strokeWidth="6" filter="blur(12px)" opacity="0.8" />
  </svg>
);

export const SectionBgHelix = styled.div`
  position: absolute; top: 0; left: 50%; transform: translateX(-50%);
  width: 250px; height: 400px; pointer-events: none; z-index: 0; opacity: 0.8;
`;

export const HelixSvg = () => (
  <svg width="250" height="400" viewBox="0 0 250 400" fill="none">
    <defs>
      <linearGradient id="helGrad" x1="0" y1="0" x2="0" y2="400">
        <stop offset="0%" stopColor={theme.colors.brandTeal} stopOpacity="0.9" />
        <stop offset="50%" stopColor={theme.colors.brandIndigo} stopOpacity="0.7" />
        <stop offset="100%" stopColor="transparent" />
      </linearGradient>
      <linearGradient id="helGradCore" x1="0" y1="0" x2="0" y2="400">
        <stop offset="0%" stopColor={theme.colors.brandTeal} stopOpacity="0.8" />
        <stop offset="50%" stopColor={theme.colors.brandTeal} stopOpacity="0.2" />
        <stop offset="100%" stopColor="transparent" />
      </linearGradient>
    </defs>
    
    {/* central core line */}
    <path d="M125 0 V 400" stroke="url(#helGradCore)" strokeWidth="1" opacity="0.5" strokeDasharray="3 4" />
    
    {/* main outer twist 1 */}
    <path d="M125 0 Q 30 75 125 150 T 125 300 T 125 450" stroke="url(#helGrad)" strokeWidth="1.5" />
    
    {/* main outer twist 2 */}
    <path d="M125 0 Q 220 75 125 150 T 125 300 T 125 450" stroke="url(#helGrad)" strokeWidth="1.5" opacity="0.8" />

    {/* inner tight twist 1 */}
    <path d="M125 0 Q 80 50 125 100 T 125 200 T 125 300 T 125 400" stroke="url(#helGradCore)" strokeWidth="1" opacity="0.5" />
    
    {/* inner tight twist 2 */}
    <path d="M125 0 Q 170 50 125 100 T 125 200 T 125 300 T 125 400" stroke="url(#helGradCore)" strokeWidth="1" opacity="0.5" />

    {/* glowing nodes at intersections */}
    <circle cx="125" cy="150" r="3" fill={theme.colors.brandTeal} style={{ filter: 'drop-shadow(0 0 6px #4ECDA0)' }} opacity="0.8" />
    <circle cx="125" cy="300" r="2" fill={theme.colors.brandIndigo} style={{ filter: 'drop-shadow(0 0 4px #3D4A9B)' }} opacity="0.6" />

    {/* ambient glow */}
    <path d="M125 0 V 400" stroke="url(#helGrad)" strokeWidth="32" filter="blur(28px)" opacity="0.3" />
  </svg>
);

export const SectionBgLines = styled.div`
  position: absolute; top: 0; left: 50%; transform: translateX(-50%);
  width: 500px; height: 400px; pointer-events: none; z-index: 0; opacity: 0.8;
`;

export const LinesSvg = () => (
  <svg width="500" height="400" viewBox="0 0 500 400" fill="none">
    <defs>
      <linearGradient id="linesGrad" x1="0" y1="0" x2="0" y2="400">
        <stop offset="0%" stopColor={theme.colors.brandTeal} stopOpacity="0.9" />
        <stop offset="100%" stopColor="transparent" />
      </linearGradient>
    </defs>
    <rect x="249" y="0" width="2" height="400" fill="url(#linesGrad)" />
    <rect x="220" y="0" width="1" height="250" fill="url(#linesGrad)" opacity="0.6" />
    <rect x="280" y="0" width="1" height="250" fill="url(#linesGrad)" opacity="0.6" />
    <rect x="190" y="0" width="1" height="180" fill="url(#linesGrad)" opacity="0.4" />
    <rect x="310" y="0" width="1" height="180" fill="url(#linesGrad)" opacity="0.4" />
    <rect x="150" y="0" width="200" height="400" fill="url(#linesGrad)" filter="blur(40px)" opacity="0.2" />
  </svg>
);

// canvas backgrounds
export const CanvasWrap = styled.div`
  position: absolute; inset: 0; pointer-events: none; z-index: 0; overflow: hidden;
`;

const DotGridSvg = styled.svg`
  position: absolute; inset: 0;
  opacity: 0.25;
  [data-theme='light'] & {
    opacity: 0.55;
  }
`;

export const CanvasStats = () => (
  <CanvasWrap>
    <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
      <defs>
        <radialGradient id="cStats" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={theme.colors.brandTeal} stopOpacity="0.12" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="50%" cy="50%" rx="60%" ry="80%" fill="url(#cStats)" />
    </svg>
  </CanvasWrap>
);

export const CanvasFeatures = () => (
  <CanvasWrap>
    <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
      <defs>
        <radialGradient id="cFeatL" cx="0%" cy="0%" r="60%">
          <stop offset="0%" stopColor={theme.colors.brandTeal} stopOpacity="0.18" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="cFeatR" cx="100%" cy="100%" r="60%">
          <stop offset="0%" stopColor={theme.colors.brandIndigo} stopOpacity="0.22" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#cFeatL)" />
      <rect width="100%" height="100%" fill="url(#cFeatR)" />
    </svg>
  </CanvasWrap>
);

export const CanvasSolutions = () => (
  <CanvasWrap>
    <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
      <defs>
        <radialGradient id="cSolL" cx="20%" cy="40%" r="50%">
          <stop offset="0%" stopColor={theme.colors.brandIndigo} stopOpacity="0.20" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="cSolR" cx="85%" cy="60%" r="40%">
          <stop offset="0%" stopColor={theme.colors.brandTeal} stopOpacity="0.14" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#cSolL)" />
      <rect width="100%" height="100%" fill="url(#cSolR)" />
    </svg>
  </CanvasWrap>
);

export const OrbitRing = styled.div<{ $size: string, $duration: number, $reverse?: boolean, $opacity?: number }>`
  position: absolute;
  top: 50%; left: 75%;
  width: ${p => p.$size};
  height: ${p => p.$size};
  margin-top: calc(-${p => p.$size} / 2);
  margin-left: calc(-${p => p.$size} / 2);
  border: 1px dashed rgba(78, 205, 160, ${p => p.$opacity || 0.2});
  border-radius: 50%;
  animation: ${p => p.$reverse ? SpinAnimReverse : SpinAnim} ${p => p.$duration}s linear infinite;
  pointer-events: none;

  // light mode rings are near invisible at default teal opacity boost them
  [data-theme='light'] & {
    border-color: rgba(61, 74, 155, ${p => Math.min(1, (p.$opacity || 0.2) * 4)});
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -4px; left: 50%;
    width: 8px; height: 8px;
    background: ${theme.colors.brandTeal};
    border-radius: 50%;
    box-shadow: 0 0 12px 2px rgba(78, 205, 160, 0.8);
  }
`;

export const CanvasIntegrations = () => (
  <CanvasWrap>
    <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
      <defs>
        <radialGradient id="cIntC" cx="75%" cy="50%" r="60%">
          <stop offset="0%" stopColor={theme.colors.brandIndigo} stopOpacity="0.35" />
          <stop offset="50%" stopColor={theme.colors.brandTeal} stopOpacity="0.12" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#cIntC)" />
    </svg>
    <DotGridSvg width="100%" height="100%">
      <defs>
        <pattern id="dotGridInt" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill={theme.colors.textMuted} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dotGridInt)" />
    </DotGridSvg>
    
    <OrbitRing $size="50vw" $duration={30} $opacity={0.3} />
    <OrbitRing $size="70vw" $duration={45} $reverse $opacity={0.15} />
    <OrbitRing $size="90vw" $duration={60} $opacity={0.1} />
  </CanvasWrap>
);

export const CanvasSteps = () => (
  <CanvasWrap>
  </CanvasWrap>
);

export const CanvasFocus = () => (
  <CanvasWrap>
    <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
      <defs>
        <radialGradient id="cFocTop" cx="50%" cy="0%" r="60%">
          <stop offset="0%" stopColor={theme.colors.brandTeal} stopOpacity="0.10" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#cFocTop)" />
    </svg>
  </CanvasWrap>
);

export const TestimonialDot = styled.circle<{ $delay: number; $duration: number }>`
  animation: ${twinkle} ${p => p.$duration}s ease-in-out ${p => p.$delay}s infinite;
`;

export const CanvasTestimonials = () => (
  <CanvasWrap>
    <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
      <defs>
        <radialGradient id="cTestTopR" cx="80%" cy="10%" r="65%">
          <stop offset="0%" stopColor={theme.colors.brandTeal} stopOpacity="0.25" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="cTestBL" cx="10%" cy="90%" r="55%">
          <stop offset="0%" stopColor={theme.colors.brandIndigo} stopOpacity="0.25" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#cTestTopR)" />
      <rect width="100%" height="100%" fill="url(#cTestBL)" />
    </svg>
    {/* scattered glowing dots */}
    <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
      {[...Array(12)].map((_, i) => (
        <TestimonialDot key={i} 
          cx={`${10 + (i * 27) % 80}%`} 
          cy={`${15 + (i * 41) % 70}%`} 
          r={i % 2 === 0 ? "1.5" : "1"} 
          fill={theme.colors.brandTeal} 
          opacity={0.1 + (i % 3) * 0.05} 
          filter="blur(0.5px)" 
          $delay={i * 0.4}
          $duration={3 + (i % 3)}
        />
      ))}
    </svg>
  </CanvasWrap>
);

export const CanvasCta = () => (
  <CanvasWrap style={{ position: 'absolute', inset: 0 }}>
    <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
      <defs>
        <radialGradient id="cCta" cx="50%" cy="50%" r="75%">
          <stop offset="0%" stopColor={theme.colors.brandIndigo} stopOpacity="0.45" />
          <stop offset="45%" stopColor={theme.colors.brandTeal} stopOpacity="0.10" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#cCta)" />
    </svg>
  </CanvasWrap>
);
