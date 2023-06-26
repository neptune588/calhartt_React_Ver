import { React, useEffect, useState } from 'react';

import {Routes, Route, Link, useNavigate} from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import styled from 'styled-components';
import './product_list.scss';

const SubTitle = styled.h2`
    font-size: 2rem;
    text-align: center;
    font-weight: 700;
    margin-top: 40px;
`;

export default function ProductList() {
  
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    fetch( process.env.PUBLIC_URL + '/productDB.json' )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setDataArray(data.bestProductList);
    })
    .catch((error) => console.log('에러: ', error));
    console.log(dataArray);
  },[]);


  const bestProduct = {
    className: 'bset_product',
    modules: [Navigation],
    spaceBetween: 0,
    loop: true ,
    slidesPerView: 4,
    navigation: true, 
  }

  return (
    <>
        <SubTitle>BEST PRODUCT</SubTitle>
{/*         {dataArray.map((object, index) => {
          return (
            <SwiperSlide {...bestProduct} key={object.id}>
              <img src = {process.env.PUBLIC_URL + object.src}/>
            </SwiperSlide> 
          )
        })} */}
    </>
  )
}
