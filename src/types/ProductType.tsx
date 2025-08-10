import type { ReactNode } from "react";
export type ProductType = 'Обувь' | 'Футболки' | 'Худи';
export type ProductYear = 2023 | 2024 | 2025;
export type ProductColor = 'Черный' | 'Белый' | 'Несколько цветов' | 'Зеленый';


export type NavItem = 'Коллабы' | 'Мужское' | 'Женское' | null;

export interface SliderProps {
  children: ReactNode;
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

export interface Product {
  id: number;
  image: string;
  title: string;
  type: ProductType;
  year: ProductYear;
  price: number;
  color : ProductColor;
}