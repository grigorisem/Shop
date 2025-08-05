import slide1 from '../assets/img/slide1.jpg';
import slide2 from '../assets/img/slide2.jpg';
import slide3 from '../assets/img/slide3.webp';
import slide4 from '../assets/img/converse.webp';
import slide5 from '../assets/img/rickowens.webp';
import slide6 from '../assets/img/kobe6grinch.jpg';
import slide7 from '../assets/img/tennistee.jpg'

export type ProductType = 'Обувь' | 'Футболки' | 'Худи';
export type ProductYear = 2023 | 2024 | 2025;

export interface Product {
  id: number;
  image: string;
  title: string;
  type: ProductType;
  year: ProductYear;
}

export const slides = [
  slide1, slide2, slide3, slide4, slide5, slide6, slide7
];

export const productsData: Product[] = [
  {
    id: 0,
    image: slide1,
    title: 'Nike Air Max',
    type: 'Обувь',
    year: 2025,
  },
  {
    id: 1,
    image: slide2,
    title: 'Converse Classic',
    type: 'Обувь',
    year: 2025,
  },
  {
    id: 2,
    image: slide3,
    title: 'Rick Owens DRKSHDW',
    type: 'Обувь',
    year: 2025,
  },
  {
    id: 3,
    image: slide4,
    title: 'Kobe 6 Grinch',
    type: 'Обувь',
    year: 2025,
  },
  {
    id: 4,
    image: slide5,
    title: 'Kobe 6 Grinch',
    type: 'Обувь',
    year: 2025,
  },
  {
    id: 5,
    image: slide6,
    title: 'Kobe 6 Grinch',
    type: 'Обувь',
    year: 2025,
  },
  {
    id: 6,
    image: slide7,
    title: 'Nike Tee',
    type: 'Футболки',
    year: 2024,
  },
];