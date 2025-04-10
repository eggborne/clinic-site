import { useState, useEffect, useRef } from "react";

interface InfiniteCarouselProps {
  images: string[];
  autoScrollSpeed?: number;       // Pixels per second
  itemWidth?: number;   // Width of each logo item 
  gap?: number;         // Gap between items
}

export default function InfiniteCarousel({
  images,
  autoScrollSpeed = 30,
  itemWidth = 160,
  gap = 32,
}: InfiniteCarouselProps) {
  // Clone images to ensure we have enough for smooth scrolling
  // We need at least 2 complete sets
  const allImages = [...images, ...images, ...images];

  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  // Calculate the width of one complete set of images
  const singleSetWidth = images.length * (itemWidth + gap) - gap;

  // Setup automatic scrolling
  useEffect(() => {
    if (!containerRef.current || !wrapperRef.current) return;

    let lastTimestamp = 0;

    const animate = (timestamp: number) => {
      if (!isPaused) {
        if (lastTimestamp) {
          const deltaTime = timestamp - lastTimestamp;
          offsetRef.current += (autoScrollSpeed * deltaTime) / 1000;

          // Check if we need to reset position for seamless loop
          if (offsetRef.current >= singleSetWidth) {
            offsetRef.current = 0;
          }

          if (wrapperRef.current) {
            wrapperRef.current.style.transform = `translateX(${-offsetRef.current}px)`;
          }
        }
        lastTimestamp = timestamp;
      } else {
        lastTimestamp = 0;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, autoScrollSpeed, singleSetWidth]);

  // Mouse/Touch event handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    if (!wrapperRef.current) return;

    setIsPaused(true);
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    scrollLeftRef.current = offsetRef.current;

    wrapperRef.current.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || !wrapperRef.current) return;

    const deltaX = e.clientX - startXRef.current;
    let newOffset = scrollLeftRef.current - deltaX;

    // Ensure we stay within valid range for infinite loop
    if (newOffset < 0) {
      // If scrolled before start, wrap to equivalent position in next set
      newOffset = singleSetWidth + (newOffset % singleSetWidth);
    } else if (newOffset >= singleSetWidth) {
      // If scrolled past end, wrap to equivalent position in previous set
      newOffset = newOffset % singleSetWidth;
    }

    offsetRef.current = newOffset;
    wrapperRef.current.style.transform = `translateX(${-newOffset}px)`;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!wrapperRef.current) return;

    isDraggingRef.current = false;
    setIsPaused(false);

    wrapperRef.current.releasePointerCapture(e.pointerId);
  };

  // Handle hover states
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => {
    if (!isDraggingRef.current) {
      setIsPaused(false);
    }
  };

  // Button controls
  const scroll = (direction: 'left' | 'right') => {
    setIsPaused(true);

    const distance = itemWidth * 3;
    let newOffset = offsetRef.current + (direction === 'left' ? -distance : distance);

    // Normalize the position for infinite loop
    if (newOffset < 0) {
      newOffset = singleSetWidth + (newOffset % singleSetWidth);
    } else if (newOffset >= singleSetWidth) {
      newOffset = newOffset % singleSetWidth;
    }

    // Apply smooth scroll animation
    if (wrapperRef.current) {
      wrapperRef.current.style.transition = 'transform 0.5s ease';
      wrapperRef.current.style.transform = `translateX(${-newOffset}px)`;

      // Update the offset ref for when animation resumes
      offsetRef.current = newOffset;
    }

    // Resume auto-scrolling after animation completes
    setTimeout(() => {
      if (wrapperRef.current) {
        wrapperRef.current.style.transition = 'none';
      }
      setIsPaused(false);
    }, 500);
  };

  return (
    <div
      className="relative overflow-hidden"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Edge gradients */}
      <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,0.8) 70%, rgba(255,255,255,0) 100%)'
        }}>
      </div>
      <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,0.8) 70%, rgba(255,255,255,0) 100%)'
        }}>
      </div>

      {/* Images container */}
      <div
        ref={wrapperRef}
        className="flex touch-none select-none"
        style={{
          transform: `translateX(0px)`,
          willChange: 'transform'
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {allImages.map((src, index) => (
          <div
            key={`carousel-item-${index}`}
            className="flex-shrink-0 flex w-auto items-center justify-center h-[6dvmax] m:h-[4dvmax]"
            style={{
              // width: `${itemWidth}px`,
              marginRight: `${gap}px`,
            }}
            draggable="false"
          >
            <img
              src={src}
              alt={`Partner logo`}
              className="max-h-full max-w-full object-contain"
              draggable="false"
            />
          </div>
        ))}
      </div>

      {/* Control buttons */}
      <button
        className="absolute left-1 top-1/2 -translate-y-1/2 text-gray-800 p-2 z-20 cursor-pointer hover:bg-black/10 transition-colors"
        onClick={() => scroll('left')}
        aria-label="Scroll Left"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-800 p-2 z-20 cursor-pointer hover:bg-black/10 transition-colors"
        onClick={() => scroll('right')}
        aria-label="Scroll Right"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}