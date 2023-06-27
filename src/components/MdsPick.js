import { useState, useEffect, React} from 'react'
import { styled } from 'styled-components'

import './mds_pick.scss';

const SubTitle = styled.h2`
    font-size: 2rem;
    text-align: center;
    font-weight: 700;
    margin: 40px 0 20px;
    `;

export default function MdsPick() {
  return (
    <>
      <SubTitle>MD'S PICK</SubTitle>
    </>
  )
}
