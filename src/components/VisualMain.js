import React, { useEffect, useState, useRef } from 'react'

import {Routes, Route, Link, useNavigate} from 'react-router-dom';

import { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './visual_main.scss';

export default function VisualMain() {
  const pageMent = [
    '2023 봄 여름 캠페인 스웨터 셔츠',
    '2023 봄 자켓',
    '2023 봄 여성 셔츠',
    '2023 봄 남성 셔츠'
  ];

  const navigate = useNavigate();

  const [swiperState, setSwiper] = useState([]);
  const swiper = useRef([]);
  
  const slides = Array.from({ length: 4 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  const swiperProps = {
    className: "visual_main_wrapper",
    modules: [Virtual, Navigation, Pagination],
    loop: true ,
    speed: 800, 
    slidesPerView: 1, 
    navigation: true, 
    //pagination은 현재 슬라이더 갯수만큼 생김
    //renderBullet: function(index) 선언하면 함수 index로 각 페이지네이션 인덱스에 해당하는 번호가 전달이 됨

    //isActive active클래스가 확인기능
    pagination: {
      renderBullet: function(index, className='') {
        return `<span class="page_indicator">${pageMent[index]}</span>`
      }
    },
    virtual: true, 
    ref: swiper,
  }

  useEffect(() => {
    console.log({...swiperProps});
  },[]);


  //스프레드 문법으로 객체를 prop에다 넣으면 해당 객체의 속성들이
  //개별로 전달되게 된다.
  return (

    <Swiper {...swiperProps}>
      {slides.map((slideContent, index) => (
        <SwiperSlide className="visual_main" key={slideContent} virtualIndex={index} onClick={() => {navigate('/top')}}>
          <img src = {process.env.PUBLIC_URL + `images/visual_main0${index + 1}.jpg`} />
        </SwiperSlide> 
      ))}
    </Swiper>
  )
}
