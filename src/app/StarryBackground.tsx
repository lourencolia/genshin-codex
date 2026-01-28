'use client';

import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

export default function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Criar estrelas
    const stars: Star[] = [];
    const starCount = 150; 

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5, 
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.005, 
        twinklePhase: Math.random() * Math.PI * 2, 
      });
    }

    // Animação
    let animationFrameId: number;
    const animate = () => {
      ctx.fillStyle = '#0f1729';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Desenhar estrelas
      stars.forEach((star) => {
        star.twinklePhase += star.twinkleSpeed;
        star.opacity = (Math.sin(star.twinklePhase) + 1) / 2; // Valor entre 0 e 1

        // Desenhar estrela
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.8})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Efeito de brilho (glow)
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
}