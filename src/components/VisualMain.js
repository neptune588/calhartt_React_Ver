import React, { useEffect } from 'react'

import {Routes, Route, Link, useNavigate} from 'react-router-dom';

import { Virtual } from 'swiper';
import { Swiper, SwiperSlide, Navigation, Pagination } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/virtual';

import './visual_main.scss';

export default function VisualMain() {
  const navigate = useNavigate();

/*   const srcArray = [
    process.env.PUBLIC_URL + `images/visual_main0${index}.jpg`,
    process.env.PUBLIC_URL + `images/visual_main02.jpg`,
    process.env.PUBLIC_URL + `images/visual_main03.jpg`,
    process.env.PUBLIC_URL + `images/visual_main04.jpg`,
  ]; */

  //src확인
/*   useEffect(() => {
    srcArray.forEach((src) => {
      console.log(src);
    });
  },[]); */

  const slides = Array.from({ length: 4 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  const swiper = new Swiper('.swiper', {
    modules: [ Navigation, Pagination ],
  });

  return (
/*     <Swiper
      className = "visual_main_wrapper"
      슬라이더사이마진
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {srcArray.map((src, index) => {
        return <SwiperSlide className="visual_main" key={src + index} onClick = {() => {navigate(`/top`)}}><img src = {src} alt = {`${src}`}/></SwiperSlide>
      })}
    </Swiper> */
    <Swiper 
      className = "visual_main_wrapper" modules={[Virtual]} loop={true} speed={1000} slidesPerView={1} virtual>
      {slides.map((slideContent, index) => (
        <SwiperSlide className="visual_main" key={slideContent} virtualIndex={index}>
          <img src = {process.env.PUBLIC_URL + `images/visual_main0${index + 1}.jpg`} />
        </SwiperSlide> 
      ))}
    </Swiper>
  )
}
