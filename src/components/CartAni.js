import { React, useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import { useLocation } from 'react-router-dom';

import './cart_ani.scss';

export default function CartAni(props) {
  const {cartAni} = props;

  return (
    <p className={cartAni ? "ment ani" : "ment" }>해당 상품을 장바구니에 담았습니다.</p>
  )
}
