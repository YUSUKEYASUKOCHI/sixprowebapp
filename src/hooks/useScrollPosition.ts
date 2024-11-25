import { useEffect, useState } from 'react';

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [direction, setDirection] = useState<'up' | 'down'>('up');
  const [lastPosition, setLastPosition] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentPosition = window.pageYOffset;
          setScrollPosition(currentPosition);
          setDirection(currentPosition > lastPosition ? 'down' : 'up');
          setLastPosition(currentPosition);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastPosition]);

  return { scrollPosition, direction };
}