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
  const slides = [
    {
      id: 'vm01',
      src: process.env.PUBLIC_URL + `images/visual_main01.jpg`,
    },
    {
      id: 'vm02',
      src: process.env.PUBLIC_URL + `images/visual_main02.jpg`,
    },
    {
      id: 'vm03',
      src: process.env.PUBLIC_URL + `images/visual_main03.jpg`,
    },
    {
      id: 'vm04',
      src: process.env.PUBLIC_URL + `images/visual_main04.jpg`,
    },

  ]

  const pageMent = [
    '2023 봄 여름 캠페인 스웨터 셔츠',
    '2023 봄 자켓',
    '2023 봄 여성 셔츠',
    '2023 봄 남성 셔츠'
  ];

  const navigate = useNavigate();

  const [vmIndex, setVmIndex] = useState(0);

  useEffect(() => {
    console.log(vmIndex)
  },[vmIndex]);

/*   function indexChange(value) {
    setVmIndex(value);
  } */

  const swiperWrapper = {
    className: `visual_main_wrapper`,
    modules: [Navigation, Pagination],
    spaceBetween: 0,
    loop: true ,
    slidesPerView: 1, 
    navigation: true, 
    //pagination은 현재 슬라이더 갯수만큼 생김
    //renderBullet: function(index) 선언하면 함수 index로 각 페이지네이션 인덱스에 해당하는 번호가 전달이 됨

    //isActive active클래스가 확인기능
    pagination: {
      clickable: true,
      renderBullet: function(index, className) {
        return `<span class=${className}>${pageMent[index]}</span>`
      }
    },
  }

  const swiper = {
    className: 'visual_main',
    onClick: () => {navigate('/top')},
  }

  //스프레드 문법으로 객체를 prop에다 넣으면 해당 객체의 속성들이
  //개별로 전달되게 된다.
  return (
    <Swiper {...swiperWrapper}>
      {slides.map((object) => (
        <SwiperSlide {...swiper} key={object.id}>
          <img src = {object.src}/>
        </SwiperSlide> 
      ))}
    </Swiper>
  )
}
