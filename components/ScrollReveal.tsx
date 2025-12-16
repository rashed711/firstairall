
import React, { useEffect, useRef, useState } from 'react';

type AnimationType = 'fade-up' | 'fade-down' | 'fade-right' | 'fade-left' | 'zoom-in' | 'flip';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  duration?: number;
  delay?: number;
  className?: string;
  threshold?: number; // How much of the element must be visible to trigger (0 to 1)
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-up',
  duration = 800,
  delay = 0,
  className = '',
  threshold = 0.15,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger when element enters viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Only animate once
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before the bottom of the screen
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  // Define initial styles based on animation type
  const getInitialStyle = () => {
    switch (animation) {
      case 'fade-up':
        return 'translate-y-16 opacity-0';
      case 'fade-down':
        return '-translate-y-16 opacity-0';
      case 'fade-right':
        return '-translate-x-16 opacity-0';
      case 'fade-left':
        return 'translate-x-16 opacity-0';
      case 'zoom-in':
        return 'scale-90 opacity-0';
      case 'flip':
        return 'rotate-x-90 opacity-0';
      default:
        return 'opacity-0';
    }
  };

  const finalStyle = isVisible 
    ? 'transform-none opacity-100' 
    : getInitialStyle();

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${className} ${finalStyle}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
