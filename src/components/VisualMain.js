import React, { useEffect, useState, useRef } from 'react'

import {Routes, Route, Link, useNavigate} from 'react-router-dom';

import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import styled from 'styled-components';
import './visual_main.scss';

const ControlBtn = styled(FontAwesomeIcon)`
  font-size: 30px;
  color: #ffbf00;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    color: #4136BF;
  }
`;

export default function VisualMain() {
  const slides = [
    {
      id: 'vm01',
      src: process.env.PUBLIC_URL + `/images/visual_main01.jpg`,
    },
    {
      id: 'vm02',
      src: process.env.PUBLIC_URL + `/images/visual_main02.jpg`,
    },
    {
      id: 'vm03',
      src: process.env.PUBLIC_URL + `/images/visual_main03.jpg`,
    },
    {
      id: 'vm04',
      src: process.env.PUBLIC_URL + `/images/visual_main04.jpg`,
    },

  ]

  const pageMent = [
    '2023 봄 여름 캠페인 스웨터 셔츠',
    '2023 봄 자켓',
    '2023 봄 여성 셔츠',
    '2023 봄 남성 셔츠'
  ];

  const navigate = useNavigate();

  const swiperWrapper = {
    className: `visual_main_wrapper`,
    modules: [Navigation, Pagination, Autoplay],
    spaceBetween: 0,
    loop: true ,
    slidesPerView: 1, 
    navigation: true, 
    //pagination은 현재 슬라이더 갯수만큼 생김
    //renderBullet: function(index) 선언하면 함수 index로 각 페이지네이션 인덱스에 해당하는 번호가 전달이 됨

    pagination: {
      clickable: true,
      renderBullet: function(index, className) {
        return `<span class=${className}>${pageMent[index]}</span>`
      }
    },
    autoplay: {
      delay: 2000,
    }
  }

  const swiper = {
    className: 'visual_main',
    onClick: () => {navigate('/subpage')},
  }

  const [swiperObject, setSwiperObject] = useState(swiperWrapper);

/*   유즈이펙트의 의존성배열안의 값으로 값이 바뀐걸 감지한다. swiperObject의 오토플레이 값을 의존성배열에 넣어놓고
  불값이 바뀔때마다 console.log를 띄워보자. 이까진 성공 */
  
/*   useEffect(() => {
    swiperWrapper.autoplay = swiperObject.autoplay;
    console.log(swiperWrapper.autoplay);
  },[swiperObject.autoplay]);
 */
  //스프레드 문법으로 객체를 prop에다 넣으면 해당 객체의 속성들이
  //개별로 전달되게 된다.
  return (
    <Swiper {...swiperWrapper}>
{/*       <div className='auto_play_area'>

        <button className='play_btn auto_area_btn' onClick={()=>{console.log(swiperObject)}}><ControlBtn icon={faPlay}/></button> 
          autoplay의 속성의 값을 false로 바꾸기.. console에는 잘 나옴

        <button className='play_btn auto_area_btn'><ControlBtn icon={faPlay}/></button>
        <button className='stop_btn auto_area_btn'><ControlBtn icon={faStop}/></button>
      </div> */}

      {slides.map((object) => (
        <SwiperSlide {...swiper} key={object.id}>
          <img src = {object.src}/>
        </SwiperSlide> 
      ))}
    </Swiper>
  )
}
