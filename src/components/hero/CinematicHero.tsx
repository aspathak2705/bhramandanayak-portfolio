import React, { useRef, useState, useEffect } from 'react';
import { FrameCanvas } from './FrameCanvas';
import { Preloader } from './Preloader';

export const CinematicHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.clientHeight - window.innerHeight;

      if (totalScrollable <= 0) return;

      // Calculate scroll progress from 0.0 to 1.0 within hero height
      const scrolled = -rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / totalScrollable));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProgressUpdate = (loaded: number, total: number) => {
    const percent = (loaded / Math.min(total, 25)) * 100; // 100% when first 25 priority frames load
    setLoadProgress(Math.min(100, percent));
  };

  const handleLoadComplete = () => {
    setIsReady(true);
  };

  return (
    <>
      {!hasEntered && (
        <Preloader
          progress={loadProgress}
          isReady={isReady}
          onEnter={() => setHasEntered(true)}
        />
      )}

      {/* 600vh height section to give generous smooth scroll room for 240 frames */}
      <section ref={containerRef} className="relative w-full h-[600vh] bg-charcoal-950">
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          <FrameCanvas
            scrollProgress={scrollProgress}
            onLoadComplete={handleLoadComplete}
            onProgressUpdate={handleProgressUpdate}
          />
        </div>
      </section>
    </>
  );
};
