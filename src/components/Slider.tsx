// src/components/Slider.tsx
import { type ReactNode, useEffect, useState } from "react";
import CIcon from "@coreui/icons-react";
import { cilArrowRight, cilArrowLeft } from "@coreui/icons";

interface SliderProps {
  children: ReactNode[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

export const Slider = ({
  children,
  autoSlide = true,
  autoSlideInterval = 5000,
}: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % children.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + children.length) % children.length);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(interval);
  }, [autoSlide, autoSlideInterval, children.length]);

  if (!children || children.length === 0) return null;

  return (
    <div className="relative overflow-hidden max-w-[1440px] h-[600px] m-auto">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children.map((child, index) => (
          <div key={index} className="min-w-full h-full">
            {child}
          </div>
        ))}
      </div>

      {/* кнопки */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 px-3 py-2 rounded-full hover:bg-opacity-100 transition z-10"
      >
        <CIcon icon={cilArrowLeft} className="w-5 h-5 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 px-3 py-2 rounded-full hover:bg-opacity-100 transition z-10"
      >
        <CIcon icon={cilArrowRight} className="w-5 h-5 text-gray-800" />
      </button>
    </div>
  );
};
