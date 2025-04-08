import { useRef, useEffect } from "react";

interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const carouselRef = useRef<HTMLUListElement>(null);

  const scrollDistance = 100;
  const scrollInterval = 800; // milliseconds
  const logoWidthClasses = "max-w-[100px] md:max-w-[160px]";

  const scroll = (direction: "left" | "right") => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    // Seamless looping
    if (direction === "right") {
      if (carousel.scrollLeft + scrollDistance >= maxScrollLeft) {
        carousel.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carousel.scrollBy({ left: scrollDistance, behavior: "smooth" });
      }
    } else {
      if (carousel.scrollLeft - scrollDistance <= 0) {
        carousel.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
      } else {
        carousel.scrollBy({ left: -scrollDistance, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => scroll("right"), scrollInterval);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-6xl overflow-hidden px-12">
      {/* Left caret */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/30 text-gray-500 p-2 rounded shadow z-10 hover:bg-gray-200"
        aria-label="Scroll Left"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Scrollable logos */}
      <ul
        ref={carouselRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-8 px-8 py-4"
      >
        {images.map((imgSrc, i) => (
          <li
            key={i}
            className={`flex-shrink-0 snap-start ${logoWidthClasses}`}
          >
            <img
              src={imgSrc}
              alt={`Logo ${i + 1}`}
              className="h-16 w-full object-contain mx-auto"
            />
          </li>
        ))}
      </ul>

      {/* Right caret */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/30 text-gray-500 p-2 rounded shadow z-10 hover:bg-gray-200"
        aria-label="Scroll Right"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}