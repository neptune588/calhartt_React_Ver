import { React, useEffect, useState } from 'react';

import {Routes, Route, Link, useNavigate} from 'react-router-dom';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import styled from 'styled-components';
import './product_list.scss';

const SubTitle = styled.h2`
    font-size: 2rem;
    text-align: center;
    font-weight: 700;
    margin: 40px 0 20px;
    `;
    

export default function ProductList() {
  
  const [bestproArray, setBestproArray] = useState([]);
  const [newproArray, setNewproArray] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch( process.env.PUBLIC_URL + '/productDB.json' )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setBestproArray(data.bestProductList);
      setNewproArray(data.newProductList);
    })
    .catch((error) => console.log('에러: ', error));
    
  },[]);
  
  //console.log(bestproArray, newproArray);


  const bestProduct = {
    className: 'best_product product_section',
    modules: [Navigation],
    spaceBetween: 15,
    loop: true ,
    slidesPerView: 4,
    //스와이퍼 api에 나와있음.
    //엘리먼트 지정하는것, 해당 클래스가 버튼의 기능을 하게됨
    navigation: {
      nextEl: '.best_product_next_btn',
      prevEl: '.best_product_prev_btn',
    }, 
  }

  const newProduct = {
    className: 'new_product product_section',
    modules: [Navigation],
    spaceBetween: 15,
    loop: true ,
    slidesPerView: 4,
    navigation: {
      nextEl: '.new_product_next_btn',
      prevEl: '.new_product_prev_btn',
    }, 
  }

  return (
    <div className="product_container">
      <SubTitle>BEST PRODUCT</SubTitle>

      <section className='arrow_section'>
        {/* 디자인을 위해 swiper_button_prev && next붙임. */}
        <div className="swiper-button-prev best_product_prev_btn arrow_btn"></div>
        <div className="swiper-button-next best_product_next_btn arrow_btn"></div>
      </section>

      <Swiper {...bestProduct}>
        {bestproArray.map((object) => {
            return (
              <SwiperSlide className="best_product_list product_list" onClick={() => {
                navigate(`/subpage`);
              }} key={object.id}>
                  <img src = {process.env.PUBLIC_URL + object.src}/>
                  <span className="product_info product_model_name">{object.modelName}</span>
                  <span className="product_info product_name">{object.name}</span>
              </SwiperSlide> 
            )
        })}
      </Swiper>

      <SubTitle>NEW PRODUCT</SubTitle>

      <section className='arrow_section'>
        <div className="swiper-button-prev new_product_prev_btn arrow_btn"></div>
        <div className="swiper-button-next new_product_next_btn arrow_btn"></div>
      </section>

      <Swiper {...newProduct}>
        {newproArray.map((object) => {
            return (
              <SwiperSlide className="new_product_list product_list" onClick={() => {
                navigate(`/subpage`);
              }} key={object.id}>
                  <img src = {process.env.PUBLIC_URL + object.src}/>
                  <span className="product_info product_model_name">{object.modelName}</span>
                  <span className="product_info product_name">{object.name}</span>
              </SwiperSlide> 
            )
        })}
      </Swiper>
    </div>
  )
}
