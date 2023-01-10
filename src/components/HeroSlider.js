import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';

import Img1 from "../assets/img/heroSlider/1.jpg";
import Img2 from "../assets/img/heroSlider/2.jpg";
import Img3 from "../assets/img/heroSlider/3.jpg";

const slides = [
  {
    title: 'Your luxury Hotel for vacation',
    bg: Img1,
    btnText: "See our rooms"
  },
  {
    title: 'Your luxury Hotel for vacation',
    bg: Img2,
    btnText: "See our rooms"
  },
  {
    title: 'Your luxury Hotel for vacation',
    bg: Img3,
    btnText: "See our rooms"
  }
]

const HeroSlider = () => {
  return (

    <Swiper
      effects={'fade'}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      className='heroSlider h-[600px] lg:h-[860px]' style={{ width: '100%' }}>
      {slides.map((slide, index) => {
        return <SwiperSlide key={index} className='h-full relative flex justify-center items-center'>
          <div className='z-20 text-white text-center'>
            <div className='uppercase tracking-[5px] mb-6 font-tertiary'>
              Just Enjoy and relax
            </div>
            <h1 className='text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px]'>
              {slide.title}
            </h1>
            <button className='btn btn-lg btn-primary mx-auto'>{slide.btnText}</button>
          </div>
          <div className='absolute top-0 w-full h-full z-0'>
            <img src={slide.bg} alt="" className='object-cover h-full w-full' />
          </div>
          <div className='absolute w-full h-full bg-black/70'> </div>
        </SwiperSlide>
      })}
    </Swiper>
  )
};

export default HeroSlider;
