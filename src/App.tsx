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

const slides = [
    slide1, 
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
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
          slides.map(
              (s, index) => (
                <img 
                  key={`goods-${index}`}
                  src={s}
                  className="w-full h-full object-center rounded-2xl max-h-[500px] object-cover"
                />
              )
            )
          }
      </Goods>
    </>
  )
}

export default App
