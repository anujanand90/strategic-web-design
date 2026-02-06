
import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('button, a, input, textarea')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div 
      className={`fixed top-0 left-0 w-6 h-6 rounded-full bg-white/20 blur-[2px] pointer-events-none z-[100] mix-blend-difference transition-transform duration-200 hidden md:block ${isHovering ? 'scale-[3]' : 'scale-100'}`}
      style={{ 
        transform: `translate3d(${position.x - 12}px, ${position.y - 12}px, 0)`,
      }}
    />
  );
};
