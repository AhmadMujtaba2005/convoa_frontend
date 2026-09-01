"use client";

import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { theme } from "@/lib/theme";

const CanvasWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  opacity: 1; /* Handle opacity in JS based on theme */
  mask-image: radial-gradient(95% 90%, black 35%, transparent 82%);
  -webkit-mask-image: radial-gradient(95% 90%, black 35%, transparent 82%);
`;

const StyledCanvas = styled.canvas`
  width: 100%;
  height: 100%;
  display: block;
`;

export const PricingHeroCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;

      const isLightMode = document.documentElement.getAttribute('data-theme') === 'light';
      
      const lines = 6;
      for (let i = 0; i < lines; i++) {
        // define wave parameters per line to look distinct and sparse
        const amplitude1 = 40 + i * 15;
        const amplitude2 = 30 + i * 10;
        
        // spread the lines vertically centered around the canvas center
        const yOffset = canvas.height / 2 + (i - lines / 2) * 90;
        
        ctx.beginPath();
        for (let x = 0; x <= canvas.width; x += 10) {
          // static tunnel wave
          const y = yOffset 
            + Math.sin(x * 0.0015 + i) * amplitude1 
            + Math.cos(x * 0.002 + i) * amplitude2;
          
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        
        // draw the thin faint static tunnel line
        ctx.strokeStyle = theme.colors.surfaceBorder || 'rgba(255,255,255,0.05)';
        ctx.lineWidth = 1;
        ctx.globalAlpha = isLightMode ? 0.3 : 0.1;
        ctx.stroke();
        
        // draw the traveling dot and tail
        const speed = 0.002 + i * 0.0005;
        const dotX = (time * (80 + i * 20) + i * 300) % (canvas.width + 400) - 200;
        
        // draw tail
        const tailLength = 150;
        ctx.beginPath();
        for (let tx = Math.max(0, dotX - tailLength); tx <= dotX; tx += 5) {
          const ty = yOffset 
            + Math.sin(tx * 0.0015 + i) * amplitude1 
            + Math.cos(tx * 0.002 + i) * amplitude2;
          
          if (tx === Math.max(0, dotX - tailLength)) ctx.moveTo(tx, ty);
          else ctx.lineTo(tx, ty);
        }
        
        // gradient for the tail
        const tailGrad = ctx.createLinearGradient(dotX - tailLength, 0, dotX, 0);
        tailGrad.addColorStop(0, 'rgba(78, 205, 160, 0)');
        tailGrad.addColorStop(1, 'rgba(78, 205, 160, 1)');
        
        ctx.strokeStyle = tailGrad;
        ctx.lineWidth = 2;
        ctx.globalAlpha = 1;
        ctx.stroke();
        
        // leading dot position
        const dotY = yOffset 
            + Math.sin(dotX * 0.0015 + i) * amplitude1 
            + Math.cos(dotX * 0.002 + i) * amplitude2;
        
        // base dot
        ctx.beginPath();
        ctx.arc(dotX, dotY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = theme.colors.brandTeal;
        ctx.fill();
        
        // outer glow
        ctx.beginPath();
        ctx.arc(dotX, dotY, 12, 0, Math.PI * 2);
        const glowGrad = ctx.createRadialGradient(dotX, dotY, 0, dotX, dotY, 12);
        glowGrad.addColorStop(0, 'rgba(78, 205, 160, 0.6)');
        glowGrad.addColorStop(1, 'rgba(78, 205, 160, 0)');
        ctx.fillStyle = glowGrad;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <CanvasWrap>
      <StyledCanvas ref={canvasRef} />
    </CanvasWrap>
  );
};
