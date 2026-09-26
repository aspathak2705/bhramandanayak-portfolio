import React, { useEffect, useRef, useCallback } from 'react';

interface GlobalCinematicCanvasProps {
  scrollProgress: number; // 0.0 to 1.0 document scroll ratio
}

export const GlobalCinematicCanvas: React.FC<GlobalCinematicCanvasProps> = ({ scrollProgress }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const totalFrames = 240;

  // Preload frame sequence from authoritative video frame folder: /bhramadanayak_vastu_video_frames/webp/
  useEffect(() => {
    let isCancelled = false;

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
          }
          resolve(img);
        };

        img.onerror = () => {
          resolve(img);
        };
      });
    };

    const loadAllFrames = async () => {
      // Priority load first 25 frames
      const priorityBatch = [];
      for (let i = 1; i <= 25; i++) {
        priorityBatch.push(loadFrame(i));
      }
      await Promise.all(priorityBatch);

      // Background progressive chunk load remaining frames
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

  // Render frame driven by total page scroll position
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
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden bg-charcoal-950">
      <canvas
        ref={canvasRef}
        className="w-full h-full block object-cover"
        style={{ touchAction: 'none' }}
      />
    </div>
  );
};
