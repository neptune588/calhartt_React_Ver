import { React, useEffect, useState, useRef} from 'react'
import { styled } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './instagram.scss';

const SubTitle = styled.h2`
    font-size: 2rem;
    text-align: center;
    font-weight: 700;
    margin: 40px 0 20px;
    `;

export default function InstaGram() {

  const aniFrame01 = useRef(null);
  const aniFrame02 = useRef(null);

  const instaSrcArray = [
    {
      id: 'insta01',
      idClone: 'insta01Clone',
      src: process.env.PUBLIC_URL + "/images/insta01.jpg",
      alt: 'insta_img_01',
    },
    {
      id: 'insta02',
      idClone: 'insta02Clone',
      src: process.env.PUBLIC_URL + "/images/insta02.jpg",
      alt: 'insta_img_02',
    },
    {
      id: 'insta03',
      idClone: 'insta03Clone',
      src: process.env.PUBLIC_URL + "/images/insta03.jpg",
      alt: 'insta_img_03',
    },
    {
      id: 'insta04',
      idClone: 'insta04Clone',
      src: process.env.PUBLIC_URL + "/images/insta04.jpg",
      alt: 'insta_img_04',
    },
    {
      id: 'insta05',
      idClone: 'insta05Clone',
      src: process.env.PUBLIC_URL + "/images/insta05.jpg",
      alt: 'insta_img_05',
    },
    {
      id: 'insta06',
      idClone: 'insta06Clone',
      src: process.env.PUBLIC_URL + "/images/insta06.jpg",
      alt: 'insta_img_06',
    },
    {
      id: 'insta07',
      idClone: 'insta07Clone',
      src: process.env.PUBLIC_URL + "/images/insta07.jpg",
      alt: 'insta_img_07',
    },
    {
      id: 'insta08',
      idClone: 'insta08Clone',
      src: process.env.PUBLIC_URL + "/images/insta08.jpg",
      alt: 'insta_img_08',
    },

  ]

  return (
    <>
      <SubTitle>INSTAGRAM</SubTitle>
      <section className="insta">
        <div className="insta_frame" onMouseOver={() => {
          aniFrame01.current.style = 'animation-play-state: paused';
          aniFrame02.current.style = 'animation-play-state: paused';
        }} onMouseOut={() => {
          aniFrame01.current.style = 'animation-play-state: running';
          aniFrame02.current.style = 'animation-play-state: running';
        }}>

          <ul className= "insta_move_ul01 animate" ref={aniFrame01}>
            {instaSrcArray.map((object) => {
              return (
                <li key={object.id}>
                  <img src={object.src} alt={object.alt}/>
                </li>
              )
            })}
          </ul>

          <ul className="insta_move_ul02 animate" ref={aniFrame02}>
          {instaSrcArray.map((object) => {  
              return (
                <li key={object.idClone}>
                  <img src={object.src} alt={object.alt}/>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}
