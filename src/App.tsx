import { useState } from 'react'
import { Header } from './components/Header'
import { NavbarRegistration } from './components/NavbarRegistration'
import { Slider } from './components/Slider'
import { Goods } from './components/Goods'
import slide1 from './assets/img/slide1.jpg'
import slide2 from './assets/img/slide2.jpg'
import slide3 from './assets/img/slide3.webp'
const slides = [
    slide1, 
    slide2,
    slide3,
];

function App() {

  return (
    <>
      <NavbarRegistration></NavbarRegistration>
      <Header></Header>
      <Slider>
        {
          slides.map(
            (s) => (
              <img 
                src={s}
                className="w-full h-full object-center rounded-2xl max-h-[700px] object-contain"
              />
            )
          )
        }
      </Slider>
      <Goods>
        {
          slides.map(
              (s) => (
                <img 
                  src={s}
                  className="w-full h-full object-center rounded-2xl max-h-[700px] object-contain"
                />
              )
            )
          }
      </Goods>
    </>
  )
}

export default App
