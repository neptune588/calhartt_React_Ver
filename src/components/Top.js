import React from 'react'
import { styled } from 'styled-components'

const TopBtn = styled.div`
    position: fixed;
    cursor: pointer;
    user-select: none;
    right: 25px; bottom: 25px;
    font-size: 1.4rem;
    padding: 15px;
    color: white;
    background-color: #4136BF;
    border: 1px solid white;
    transition: all 0.2s;
    &:hover {
        background-color: #ffbf00;
    }
    z-index: 999999;
`
export default function Top() {
  return (
    <TopBtn onClick={() => {
        window.scrollTo({top:0, left:0, behavior:'smooth'})
    }}>TOP</TopBtn>
  )
}
