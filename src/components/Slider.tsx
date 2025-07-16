import { useState, useEffect, Children } from "react";
import CIcon from '@coreui/icons-react';
import { cilArrowRight, cilArrowLeft } from '@coreui/icons';import type { ReactNode } from "react";
interface SliderProps {
  children: ReactNode;
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

export const Slider = ({ children, autoSlide = true, autoSlideInterval = 10000 }: SliderProps) => {
  const slidesArray = Children.toArray(children);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slidesArray.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="relative overflow-hidden max-w-[1440px] h-[780px] m-auto">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slidesArray.map((slide, index) => (
          <div key={index} className="min-w-full h-full">
            {slide}
          </div>
        ))}
      </div>

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
