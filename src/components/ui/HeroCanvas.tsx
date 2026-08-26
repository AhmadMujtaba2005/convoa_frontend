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
  opacity: 1;
  mask-image: radial-gradient(90% 85%, black 40%, transparent 80%);
  -webkit-mask-image: radial-gradient(90% 85%, black 40%, transparent 80%);
`;

const StyledCanvas = styled.canvas`
  width: 100%;
  height: 100%;
  display: block;
`;

export const HeroCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    
    // Hexagon grid settings
    const r = 35; // radius
    const w = Math.sqrt(3) * r;
    const h = 2 * r;
    const xOffset = w;
    const yOffset = 1.5 * r;
    
    let cols = 0;
    let rows = 0;
    
    interface Hex {
      col: number;
      row: number;
      x: number;
      y: number;
      phase: number;
      speed: number;
      isHighlighted: boolean;
    }
    
    let hexes: Hex[] = [];
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      cols = Math.ceil(canvas.width / xOffset) + 1;
      rows = Math.ceil(canvas.height / yOffset) + 1;
      
      hexes = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * xOffset + (row % 2 === 1 ? w / 2 : 0);
          const y = row * yOffset;
          hexes.push({
            col,
            row,
            x,
            y,
            phase: Math.random() * Math.PI * 2,
            speed: 0.005 + Math.random() * 0.01,
            isHighlighted: Math.random() > 0.92 // 8% chance to be a glowing hexagon
          });
        }
      }
    };

    const drawHexagon = (x: number, y: number, radius: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6;
        const hx = x + radius * Math.cos(angle);
        const hy = y + radius * Math.sin(angle);
        if (i === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
      }
      ctx.closePath();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isLightMode = document.documentElement.getAttribute('data-theme') === 'light';
      time += 1;
      
      // Teal color matching theme.colors.brandTeal (rgb 78, 205, 160)
      const r_color = 78, g_color = 205, b_color = 160;

      hexes.forEach(hex => {
        hex.phase += hex.speed;
        const pulse = (Math.sin(hex.phase) + 1) / 2; // 0 to 1
        
        drawHexagon(hex.x, hex.y, r - 2); // Small gap between hexes
        
        // Base grid lines
        ctx.strokeStyle = `rgba(${r_color}, ${g_color}, ${b_color}, ${isLightMode ? 0.2 : 0.1})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        
        if (hex.isHighlighted) {
          // Highlighted hexagon filling
          const alpha = (isLightMode ? 0.35 : 0.25) * pulse;
          ctx.fillStyle = `rgba(${r_color}, ${g_color}, ${b_color}, ${alpha})`;
          ctx.fill();
        }
      });

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
