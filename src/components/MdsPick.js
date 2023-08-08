import { useState, useEffect, React} from 'react'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom';

import './mds_pick.scss';

const SubTitle = styled.h2`
    font-size: 2rem;
    text-align: center;
    font-weight: 700;
    margin: 40px 0 20px;
    `;

const MdsMent = styled.p`
    font-size: 1.6rem;
    color: white;
    font-weight: 700;
    letter-spacing: -0.8px;
    margin-bottom: 5px !important;
    `;

export default function MdsPick() {

  const navigate = useNavigate();

  const [acodian, setAcodian] = useState(0);

  const mdsArray = [
    {
      id : 'mds_01',
      liClassName: "md_list",
      src : process.env.PUBLIC_URL + "/images/mds_01.jpg", 
      hoverSrc: process.env.PUBLIC_URL + "/images/mds_acodian_01.jpg",
      clothCategory: 'top',
      handleClick: (index) => {
        return () => {
          setAcodian(index);
        }
      },

      proInfoClassName : "product_info",
      mdsText : [
        'LEAGUE JACKET', '리그 자켓 블루', 'BLUE', 'CA22FWJAJL00026001', '₩ 263,000'
      ]
    },
    {
      id : 'mds_02',
      liClassName: "md_list",
      src : process.env.PUBLIC_URL + "/images/mds_02.jpg",
      hoverSrc: process.env.PUBLIC_URL + "/images/mds_acodian_02.jpg",
      clothCategory: 'top',
      handleClick: (index) => {
        return () => {
          setAcodian(index);
        }
      },
      
      proInfoClassName : "product_info",
      mdsText : [
        'LEAGUE JACKET', '리그 자켓 펜스 와이어', 'FENCE WIRE', 'CA22FWJAJL10290001', '₩ 263,000'
      ]
    },
    {
      id : 'mds_03',
      liClassName: "md_list",
      src : process.env.PUBLIC_URL + "/images/mds_03.jpg",
      hoverSrc: process.env.PUBLIC_URL + "/images/mds_acodian_03.jpg",
      clothCategory: 'top',
      handleClick: (index) => {
        return () => {
          setAcodian(index);
        }
      },
      
      proInfoClassName : "product_info",
      mdsText : [
        'MONTANA BLAZER', '몬타나 블레이저 시위드', 'SEAWEED', 'CA22FWJAJL10066001', '₩ 243,000'
      ]
    },
    {
      id : 'mds_04',
      liClassName: "md_list",
      src : process.env.PUBLIC_URL + "/images/mds_04.jpg",
      hoverSrc: process.env.PUBLIC_URL + "/images/mds_acodian_04.jpg",
      clothCategory: 'top',
      handleClick: (index) => {
        return () => {
          setAcodian(index);
        }
      },
      
      proInfoClassName : "product_info",
      mdsText : [
        'S/S MIRAGE SHIRT', '반팔 미라지 셔츠 미라지 프린트, 프로스티드 블루', 'MIRAGE PRINT, FROSTED BLUE', 'CA22SSSHSS09401001', '₩ 135,000'
      ]
    },
  ]

  return (
    <>
      <SubTitle>MD'S PICK</SubTitle>
      <section className="mds_pick">
      <ul className="acodian_menu">
        {mdsArray.map((object,index) => {
          return (
            <li key={object.id} className = {acodian === index ? `${object.liClassName} acodian_on`: object.liClassName} onClick={object.handleClick(index)}>
              <img src={acodian === index ? object.hoverSrc : object.src} alt={object.id}/>
              <div className = {object.proInfoClassName}>
                {object.mdsText.map((text, index) => {
                  return <MdsMent key={index}>{text}</MdsMent>
                })}
                <button className="buy_button" onClick={() => {navigate(`/subpage/:${object.clothCategory}`)}}>구매하기</button>
              </div>
            </li>
          )
        })}
      </ul>
      </section>

    </>
  )
}
