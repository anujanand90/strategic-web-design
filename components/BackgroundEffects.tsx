import React, { useEffect, useRef } from 'react';

export const BackgroundEffects: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{ x: number, y: number, size: number, speedX: number, speedY: number }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      particles = [];
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
      
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    init();
    animate();

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden bg-black">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-bg opacity-[0.03]" />
      
      {/* Moving Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-40" />
      
      {/* Light Field / Beam texture (Soft Blue Gradient) */}
      <div className="absolute top-0 left-0 w-full h-full animate-gradient-slow opacity-20" 
           style={{ background: 'radial-gradient(circle at 0% 0%, #007DBC 0%, transparent 50%), radial-gradient(circle at 100% 100%, #1A8ED8 0%, transparent 50%)' }} />
      
      {/* Parallax Abstract Shapes */}
      <div className="absolute -top-20 -left-20 w-[40rem] h-[40rem] bg-brand-accent/10 blur-[150px] animate-float" />
      <div className="absolute -bottom-40 -right-40 w-[50rem] h-[50rem] bg-brand-hover/10 blur-[200px] animate-float" style={{ animationDelay: '3s' }} />
    </div>
  );
};