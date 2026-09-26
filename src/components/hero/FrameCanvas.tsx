import React, { useEffect, useRef, useState, useCallback } from 'react';

interface FrameCanvasProps {
  scrollProgress: number;
  onLoadComplete: () => void;
  onProgressUpdate: (loaded: number, total: number) => void;
}

export const FrameCanvas: React.FC<FrameCanvasProps> = ({
  scrollProgress,
  onLoadComplete,
  onProgressUpdate,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const totalFrames = 240;

  // Preload frames logic using NEW authoritative folder: bhramadanayak_vastu_video_frames/webp
  useEffect(() => {
    let isCancelled = false;
    let loadedCounter = 0;

    const loadFrame = (index: number): Promise<HTMLImageElement> => {
      return new Promise((resolve) => {
        if (imagesRef.current.has(index)) {
          resolve(imagesRef.current.get(index)!);
          return;
        }

        const img = new Image();
        const formattedIndex = String(index).padStart(4, '0');
        img.src = `/bhramadanayak_vastu_video_frames/webp/frame_${formattedIndex}.webp`;

        img.onload = () => {
          if (!isCancelled) {
            imagesRef.current.set(index, img);
            loadedCounter++;
            onProgressUpdate(loadedCounter, totalFrames);
          }
          resolve(img);
        };

        img.onerror = () => {
          resolve(img);
        };
      });
    };

    const loadAllFrames = async () => {
      // Step 1: Preload priority batch (frames 1-25) for initial paint
      const priorityBatch = [];
      for (let i = 1; i <= 25; i++) {
        priorityBatch.push(loadFrame(i));
      }
      await Promise.all(priorityBatch);

      if (!isCancelled) {
        onLoadComplete();
      }

      // Step 2: Load remaining frames progressively in background chunks
      const chunkSize = 15;
      for (let i = 26; i <= totalFrames; i += chunkSize) {
        if (isCancelled) break;
        const chunk = [];
        for (let j = i; j < Math.min(i + chunkSize, totalFrames + 1); j++) {
          chunk.push(loadFrame(j));
        }
        await Promise.all(chunk);
        await new Promise((r) => setTimeout(r, 20));
      }
    };

    loadAllFrames();

    return () => {
      isCancelled = true;
    };
  }, []);

  // Render current frame to canvas using requestAnimationFrame
  const renderFrame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rawFramePos = scrollProgress * (totalFrames - 1) + 1;
    let targetIndex = Math.min(totalFrames, Math.max(1, Math.round(rawFramePos)));

    let imgToDraw = imagesRef.current.get(targetIndex);
    if (!imgToDraw) {
      for (let offset = 1; offset < 25; offset++) {
        if (imagesRef.current.has(targetIndex - offset)) {
          imgToDraw = imagesRef.current.get(targetIndex - offset);
          break;
        }
        if (imagesRef.current.has(targetIndex + offset)) {
          imgToDraw = imagesRef.current.get(targetIndex + offset);
          break;
        }
      }
    }

    if (imgToDraw && imgToDraw.complete && imgToDraw.naturalWidth > 0) {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const imgWidth = imgToDraw.naturalWidth;
      const imgHeight = imgToDraw.naturalHeight;
      const imgRatio = imgWidth / imgHeight;
      const canvasRatio = width / height;

      let drawW, drawH, drawX, drawY;

      if (canvasRatio > imgRatio) {
        drawW = width;
        drawH = width / imgRatio;
        drawX = 0;
        drawY = (height - drawH) / 2;
      } else {
        drawH = height;
        drawW = height * imgRatio;
        drawX = (width - drawW) / 2;
        drawY = 0;
      }

      ctx.drawImage(imgToDraw, drawX, drawY, drawW, drawH);
      ctx.restore();
    }
  }, [scrollProgress]);

  useEffect(() => {
    let animId = requestAnimationFrame(renderFrame);
    return () => cancelAnimationFrame(animId);
  }, [renderFrame]);

  useEffect(() => {
    const handleResize = () => {
      renderFrame();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [renderFrame]);

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full block object-cover"
        style={{ touchAction: 'none' }}
      />

      {/* Vignette & Ambient Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-transparent to-charcoal-950/50 pointer-events-none" />

      {/* Minimal Film Overlay (NO FRAME COUNTERS, NO DEV NUMBERS) */}
      <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-16 pointer-events-none z-10">
        <div className="max-w-3xl my-auto text-center md:text-left">
          <span className="text-gold-400 font-mono text-xs tracking-ultra uppercase block mb-3 opacity-90">
            BHRAMADANAYAK VASTU CONSULTANCY
          </span>
          <h1 className="font-serif text-3xl md:text-6xl text-ivory-100 font-light tracking-wide leading-tight mb-4 drop-shadow-2xl">
            DISCOVER THE HARMONY OF SPACE
          </h1>
          <p className="text-ivory-200/90 text-sm md:text-lg font-sans max-w-xl font-light leading-relaxed drop-shadow">
            The space we live in exists within a larger cosmic order.
          </p>
        </div>

        {/* Minimal Scroll Indicator */}
        <div className="flex justify-between items-end text-xs tracking-widest text-ivory-300/80 font-mono">
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="uppercase text-gold-300">CINEMATIC JOURNEY</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-[11px]">SCROLL TO EXPLORE</span>
            <div className="w-4 h-8 border border-gold-400/60 rounded-full flex justify-center p-1">
              <div className="w-1 h-2.5 bg-gold-400 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
