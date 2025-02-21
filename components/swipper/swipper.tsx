import React, { useState, useRef, useEffect } from "react";

interface MarqueeScrollProps {
  direction: 'right' | 'left' | 'up' | 'down';  // Direction of scroll
  speed: number;  // Speed of scrolling in pixels
  autoplay: boolean;  // Whether to autoplay the scroll
  duration:number;
  children: React.ReactNode;  // The content to scroll
}

const MarqueeScroll: React.FC<MarqueeScrollProps> = ({
  direction,
  speed,
  autoplay,
  duration,
  children,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const startPos = useRef<number>(0);
  const prevPos = useRef<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Handle drag start
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    startPos.current = direction === "right" || direction === "left" ? clientX : clientY;
    prevPos.current = startPos.current;
  };

  // Handle drag move
  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const currentPos = direction === "right" || direction === "left" ? clientX : clientY;
    const distance = prevPos.current - currentPos;

    if (containerRef.current && contentRef.current) {
      if (direction === "right") {
        contentRef.current.style.transform = `translateX(${containerRef.current.scrollLeft + distance}px)`;
      } else if (direction === "left") {
        contentRef.current.style.transform = `translateX(${containerRef.current.scrollLeft - distance}px)`;
      } else if (direction === "up") {
        contentRef.current.style.transform = `translateY(${containerRef.current.scrollTop - distance}px)`;
      } else if (direction === "down") {
        contentRef.current.style.transform = `translateY(${containerRef.current.scrollTop + distance}px)`;
      }
    }

    prevPos.current = currentPos;
  };

  // Handle drag end
  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // Autoplay scrolling logic
  const handleAutoplay = () => {
    if (containerRef.current && contentRef.current) {
      const container = containerRef.current;
      const content = contentRef.current;

      // Infinite scrolling by resetting the position of content
      if (direction === "right" || direction === "left") {
        const width = content.offsetWidth;
        const scrollPos = container.scrollLeft;

        if (scrollPos >= width) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += speed;
        }
      } else if (direction === "up" || direction === "down") {
        const height = content.offsetHeight;
        const scrollPos = container.scrollTop;

        if (scrollPos >= height) {
          container.scrollTop = 0;
        } else {
          container.scrollTop += speed;
        }
      }
    }
  };

  // Start the autoplay when the component mounts
  useEffect(() => {
    if (autoplay) {
      intervalRef.current = setInterval(handleAutoplay, duration); // Scroll at an interval
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoplay, direction, speed]);

  return (
    <div
      className="w-full h-[300px] overflow-hidden relative"
      ref={containerRef}
      style={{
        overflowX: direction === "left" || direction === "right" ? "auto" : "hidden",
        overflowY: direction === "up" || direction === "down" ? "auto" : "hidden",
      }}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      <div
        ref={contentRef}
        className={`flex gap-2 ${
          direction === "right" || direction === "left" ? "flex-row" : "flex-col"
        } ${direction === "left" ? "flex-row-reverse" : ""}`}
        style={{
          whiteSpace: "nowrap",
          transition: "transform 0.3s ease-out",
        }}
      >
        {children}
        {children} {/* Clone content to create the infinite scroll */}
      </div>
    </div>
  );
};

export default MarqueeScroll;
