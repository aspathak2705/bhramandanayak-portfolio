import React, { useEffect, useRef, useState, useCallback } from 'react';

export interface FrameStory {
  start: number;
  end: number;
  tag: string;
  title: string;
  subtitle: string;
}

export const STORY_RANGES: FrameStory[] = [
  {
    start: 1,
    end: 20,
    tag: 'COSMIC BEGINNING',
    title: 'BEFORE FORM, THERE WAS SPACE.',
    subtitle: 'In the stillness of unmanifest existence, space carries potential for order.',
  },
  {
    start: 21,
    end: 40,
    tag: 'UNIVERSE & GALAXIES',
    title: 'THE UNIVERSE MOVES IN RHYTHM.',
    subtitle: 'Celestial bodies align through cosmic rhythm and eternal movement.',
  },
  {
    start: 41,
    end: 60,
    tag: 'COSMIC ORDER',
    title: 'EVERY FORCE HAS ITS PLACE.',
    subtitle: 'Orbital harmony establishes sacred direction across physical realms.',
  },
  {
    start: 61,
    end: 80,
    tag: 'TRIDEVA',
    title: 'CREATION. PRESERVATION. TRANSFORMATION.',
    subtitle: 'Brahma, Vishnu, Mahesh — eternal triad of universal dynamics.',
  },
  {
    start: 81,
    end: 120,
    tag: 'NAVAGRAHA',
    title: 'NINE CELESTIAL FORCES. ONE GREATER ORDER.',
    subtitle: 'Planetary alignments influence energy distribution in earthly spaces.',
  },
  {
    start: 121,
    end: 160,
    tag: 'PANCHAMAHABHUTA',
    title: 'FIVE ELEMENTS. ONE LIVING SPACE.',
    subtitle: 'Earth, Water, Fire, Air, Space — building blocks of material reality.',
  },
  {
    start: 161,
    end: 180,
    tag: 'VASTU PURUSHA',
    title: 'SPACE IS NOT RANDOM.',
    subtitle: 'Direction. Proportion. Relationship. The sacred matrix of life.',
  },
  {
    start: 181,
    end: 200,
    tag: 'MANDALA TO ARCHITECTURE',
    title: 'ANCIENT KNOWLEDGE. LIVING SPACES.',
    subtitle: 'Geometric grids translate divine cosmic order into human habitats.',
  },
  {
    start: 201,
    end: 220,
    tag: 'VASTU VIDYA',
    title: 'THE SCIENCE OF SPACE MEETS LIFE.',
    subtitle: 'Architectural precision unlocks peace, vitality, and spatial harmony.',
  },
  {
    start: 221,
    end: 235,
    tag: 'HOME & COSMOS',
    title: 'EVERY HOME EXISTS WITHIN A GREATER ORDER.',
    subtitle: 'Harmonizing immediate living environments with cosmic orientation.',
  },
  {
    start: 236,
    end: 239,
    tag: 'VISUAL CALM',
    title: 'RETURNING TO HARMONY.',
    subtitle: 'Breathe in the alignment of nature, geometry, and human consciousness.',
  },
  {
    start: 240,
    end: 240,
    tag: 'BHRAMADANAYAK VASTU CONSULTANCY',
    title: 'BHRAMADANAYAK VASTU CONSULTANCY',
    subtitle: 'Sacred Vastu Vidya & Spatial Architectural Guidance.',
  },
];

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
  const [loadedCount, setLoadedCount] = useState(0);
  const totalFrames = 240;

  // Determine active frame story narrative
  const currentFrameIndex = Math.min(
    totalFrames,
    Math.max(1, Math.floor(scrollProgress * (totalFrames - 1)) + 1)
  );

  const activeStory = STORY_RANGES.find(
    (range) => currentFrameIndex >= range.start && currentFrameIndex <= range.end
  ) || STORY_RANGES[0];

  // Preload frames logic: prioritize initial frames 1-20, then progressively load remaining
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
        img.src = `/bhramadanayak_vastu_240_frames/frames/frame_${formattedIndex}.webp`;

        img.onload = () => {
          if (!isCancelled) {
            imagesRef.current.set(index, img);
            loadedCounter++;
            setLoadedCount(loadedCounter);
            onProgressUpdate(loadedCounter, totalFrames);
          }
          resolve(img);
        };

        img.onerror = () => {
          // If frame fails, resolve with fallback or empty frame to prevent breakage
          resolve(img);
        };
      });
    };

    const loadAllFrames = async () => {
      // Step 1: Preload priority batch (frames 1-25)
      const priorityBatch = [];
      for (let i = 1; i <= 25; i++) {
        priorityBatch.push(loadFrame(i));
      }
      await Promise.all(priorityBatch);

      if (!isCancelled) {
        onLoadComplete();
      }

      // Step 2: Load remaining frames progressively in chunk sizes to keep UI smooth
      const chunkSize = 15;
      for (let i = 26; i <= totalFrames; i += chunkSize) {
        if (isCancelled) break;
        const chunk = [];
        for (let j = i; j < Math.min(i + chunkSize, totalFrames + 1); j++) {
          chunk.push(loadFrame(j));
        }
        await Promise.all(chunk);
        // Short pause to allow event loop breathing room
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

    // Calculate frame position based on scrollProgress
    const rawFramePos = scrollProgress * (totalFrames - 1) + 1;
    let targetIndex = Math.min(totalFrames, Math.max(1, Math.round(rawFramePos)));

    // Fallback search if exact target index isn't loaded yet
    let imgToDraw = imagesRef.current.get(targetIndex);
    if (!imgToDraw) {
      // Find nearest loaded frame
      for (let offset = 1; offset < 20; offset++) {
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
      // Canvas size sync with devicePixelRatio for maximum sharpness
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

      // Object-fit cover math
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

  // Handle window resize
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

      {/* Ambient Vignette & Dark Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-charcoal-950/40 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none opacity-40" />

      {/* Cinematic Text Overlay Layer */}
      <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-16 pointer-events-none z-10">
        {/* Top Header info */}
        <div className="flex justify-between items-center text-xs tracking-ultra text-gold-400/80 font-mono">
          <span>BHRAMADANAYAK VASTU</span>
          <span>{String(currentFrameIndex).padStart(3, '0')} / 240</span>
        </div>

        {/* Center Narrative Title */}
        <div className="max-w-4xl my-auto transition-all duration-500 ease-out">
          <p className="text-gold-400 text-xs md:text-sm font-mono tracking-widest mb-3 uppercase">
            {activeStory.tag}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-ivory-100 font-light tracking-wide leading-tight mb-4 drop-shadow-lg">
            {activeStory.title}
          </h2>
          <p className="text-ivory-200/80 text-sm md:text-lg font-sans max-w-xl font-light leading-relaxed">
            {activeStory.subtitle}
          </p>
        </div>

        {/* Bottom Bar UI */}
        <div className="flex justify-between items-end text-xs tracking-widest text-ivory-400/60 font-mono">
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="uppercase text-gold-300/80">COSMIC SEQUENCE</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>SCROLL TO EXPLORE</span>
            <div className="w-4 h-8 border border-gold-500/40 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-gold-400 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
