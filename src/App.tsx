import { useState } from 'react'
import { Header } from './components/Header'
import { NavbarRegistration } from './components/NavbarRegistration'
import { Slider } from './components/Slider'
import { Goods } from './components/Goods'
import slide1 from './assets/img/slide1.jpg'
import slide2 from './assets/img/slide2.jpg'
import slide3 from './assets/img/slide3.webp'
import slide4 from './assets/img/converse.webp'
import slide5 from './assets/img/rickowens.webp'
import slide6 from './assets/img/kobe6grinch.jpg'
import { NewGoods } from './components/NewGoods'

interface Product {
  id: number;
  image: string;
  title: string;
}


const slides = [
    slide1, 
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
];
const goodsData: Product[] = [
  {
    id: 0,
    image: slide1,
    title: 'Nike Air Max'
  },
  {
    id: 1,
    image: slide2,
    title: 'Converse Classic'
  },
  {
    id: 2,
    image: slide3,
    title: 'Rick Owens DRKSHDW'
  },
  {
    id: 3,
    image: slide4,
    title: 'Kobe 6 Grinch'
  },
  {
    id: 4,
    image: slide5,
    title: 'Kobe 6 Grinch'
  },
  {
    id: 5,
    image: slide6,
    title: 'Kobe 6 Grinch'
  },
];


function App() {

  return (
    <>
      <NavbarRegistration></NavbarRegistration>
      <Header></Header>
      <Slider>
        {
          slides.map(
            (s, index) => (
              <img 
                key={`slides-${index}`}
                src={s}
                className="w-full h-full object-center rounded-2xl max-h-[700px] object-contain"
              />
            )
          )
        }
      </Slider>
      <Goods>
         {
            goodsData.map((item, index) => (
            <div key={`newgoods-${index}`} className="flex flex-col items-center">
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-[350px] object-cover rounded-xl"
              />
              <div className="mt-2 text-center text-sm font-medium">
                {item.title}
              </div>
              <button
                className="mt-2 px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600"
              >
                Подробнее
              </button>
            </div>
          ))
        }
      </Goods>
      <NewGoods>
        {
          goodsData.slice(-4).map((item, index) => (
            <div key={`newgoods-${index}`} className="flex flex-col items-center">
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-[300px] object-cover rounded-xl"
              />
              <div className="mt-2 text-center text-sm font-medium">
                {item.title}
              </div>
              <button
                className="mt-2 px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600"
              >
                Подробнее
              </button>
            </div>
          ))
        }
      </NewGoods>
    </>
  )
}

export default App
