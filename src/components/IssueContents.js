import { React, useState, useRef, useEffect } from 'react'
import { styled } from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

import './issue_contents.scss';

const SubTitle = styled.h2`
    font-size: 2rem;
    text-align: center;
    font-weight: 700;
    margin: 40px 0 20px;
    `;

export default function IssueContents() {

  const [showSection, setShowSection] = useState(0);
  const [showText, setShowText] = useState('');

  const hoverImgObject = {
    hoverSection01Img : [
      {
        id: 'hoverImg01',
        className: 'hover_img hover_img01',
        src:  process.env.PUBLIC_URL + 'images/look_book_0_cloth01.png',
        handleMouseOver : (index) => {
          return () => {setShowText(index)};
        },
        handleMouseOut : () => setShowText(''),
      },
      {
        id: 'hoverImg02',
        className: 'hover_img hover_img02',
        src:  process.env.PUBLIC_URL + 'images/look_book_0_cloth02.png',
        handleMouseOver : (index) => {
          return () => {setShowText(index)};
        },
        handleMouseOut : () => setShowText(''),
      },
    ],
    hoverSection02Img : [
      {
        id: 'hoverImg04',
        className: 'hover_img hover_img01',
        src:  process.env.PUBLIC_URL + 'images/look_book_1_cloth01.png',
        handleMouseOver : (index) => {
          return () => {setShowText(index)};
        },
        handleMouseOut : () => setShowText(''),
      },
      {
        id: 'hoverImg05',
        className: 'hover_img hover_img02',
        src:  process.env.PUBLIC_URL + 'images/look_book_1_cloth02.png',
        handleMouseOver : (index) => {
          return () => {setShowText(index)};
        },
        handleMouseOut : () => setShowText(''),
      },
      {
        id: 'hoverImg06',
        className: 'hover_img hover_img03',
        src:  process.env.PUBLIC_URL + 'images/look_book_1_cloth03.png',
        handleMouseOver : (index) => {
          return () => {setShowText(index)};
        },
        handleMouseOut : () => setShowText(''),
      },
    ],
    hoverSection03Img : [
      {
        id: 'hoverImg07',
        className: 'hover_img hover_img01',
        src:  process.env.PUBLIC_URL + 'images/look_book_2_cloth01.png',
        handleMouseOver : (index) => {
          return () => {setShowText(index)};
        },
        handleMouseOut : () => setShowText(''),
      },
      {
        id: 'hoverImg08',
        className: 'hover_img hover_img02',
        src:  process.env.PUBLIC_URL + 'images/look_book_2_cloth02.png',
        handleMouseOver : (index) => {
          return () => {setShowText(index)};
        },
        handleMouseOut : () => setShowText(''),
      },
      {
        id: 'hoverImg09',
        className: 'hover_img hover_img03',
        src:  process.env.PUBLIC_URL + 'images/look_book_2_cloth03.png',
        handleMouseOver : (index) => {
          return () => {setShowText(index)};
        },
        handleMouseOut : () => setShowText(''),
      },
      {
        id: 'hoverImg10',
        className: 'hover_img hover_img04',
        src:  process.env.PUBLIC_URL + 'images/look_book_2_cloth04.png',
        handleMouseOver : (index) => {
          return () => {setShowText(index)};
        },
        handleMouseOut : () => setShowText(''),
      },
    ],
  }

  const {hoverSection01Img, hoverSection02Img, hoverSection03Img} = hoverImgObject;
  //console.log(hoverSection01, hoverSection02, hoverSection03);

  const textObject = {

    hoverSection01Txt : [
      {
        id: 'hoverText01',
        className: 'text_box tb_01',
        textModelName: 'S/S MARINA SHIRT',
        textName: 'MARINA PRINT, ARCADE',
        textPrice: 145000,
      },
      {
        id: 'hoverText02',
        className: 'text_box tb_02',
        textModelName: 'DOUBLE KNEE PANT DEARBORN',
        textName: 'WAX STONE WASHED',
        textPrice: 168000,
      },
    ],

    hoverSection02Txt : [
      {
        id: 'hoverText03',
        className: 'text_box tb_03',
        textModelName: 'BACKLEY CAP',
        textName: 'LUPINUS',
        textPrice: 58000,
      },
      {
        id: 'hoverText04',
        className: 'text_box tb_04',
        textModelName: 'W S/S TAMAS TROPICS SHIRT',
        textName: 'TAMAS TROPICS PRINT, PARADISE BIRD',
        textPrice: 168000,
      },
      {
        id: 'hoverText05',
        className: 'text_box tb_05',
        textModelName: 'W TRISTIN SHORT',
        textName: 'WAX RINSED',
        textPrice: 138000,
      },
    ],

    hoverSection03Txt : [
      {
        id: 'hoverText06',
        className: 'text_box tb_06',
        textModelName: 'MADISON LOGO CAP',
        textName: 'WALL',
        textPrice: 68000,
      },
      {
        id: 'hoverText07',
        className: 'text_box tb_07',
        textModelName: 'BAYFIELD TOTESTORM BLUE FADED',
        textName: 'STORM BLUE FADED',
        textPrice: 108000,
      },
      {
        id: 'hoverText08',
        className: 'text_box tb_08',
        textModelName: 'S/S BRAXTON SHIRT',
        textName: 'WHITE/WHITE',
        textPrice: 118000,
      },
      {
        id: 'hoverText09',
        className: 'text_box tb_09',
        textModelName: 'LANDON SHORT ROBERTSON',
        textName: 'BLUE BLEACHED',
        textPrice: 135000,
      },
    ]
  }
  
  const {hoverSection01Txt, hoverSection02Txt, hoverSection03Txt} = textObject;


  //JSX문법으로 조건부 렌더링 (공식문서에서 확인가능)
  let nowViewSection;
  if(showSection === 0) {
    nowViewSection = (
      <div className="look_book_view look_book_view01">
        <div className="view_icon01 v_icon">
          <FontAwesomeIcon icon={faLocationArrow} />
        </div>
        <div className="view_icon02 v_icon">
          <FontAwesomeIcon icon={faLocationArrow} />
        </div>
        {hoverSection01Img.map((object, index) => {
          return (
              <div key={object.id} className={object.className} onMouseOver={object.handleMouseOver(index)} onMouseOut={object.handleMouseOut}>
                <img src={object.src} alt={object.src}/>
              </div>
          )
        })}
        {hoverSection01Txt.map((object, index) => {
          return (
            /* 객체 키밸류에 상태변경함수 저장 -> img에 mousehover및 out시 객체안의 상태변경 함수 실행(map으로 돌린것이기 떄문에 객체안에다 함수 넣어놓았다) -> 상태변경할떄는 text인덱스에 맞춰서  -> text상태의 값과 현재 index가 같으면 opacity클래스 추가 */ 
            <div key={object.id} className={showText === index ? `${object.className} opacity_on` : object.className}>
              <p>{object.textModelName}</p>
              <p>{object.textName}</p>
              <p>{object.textPrice.toLocaleString()}</p>
            </div>
          )
        })}
        <img src={process.env.PUBLIC_URL + "/images/look_book_01.jpg"} alt="l_b_img_01"/>
      </div>
    )
  } else if(showSection === 1) {
    nowViewSection = (
      <div className="look_book_view look_book_view02">
        <div className="view_icon01 v_icon">
          <FontAwesomeIcon icon={faLocationArrow} />
        </div>
        <div className="view_icon02 v_icon">
          <FontAwesomeIcon icon={faLocationArrow} />
        </div>
        <div className="view_icon03 v_icon">
          <FontAwesomeIcon icon={faLocationArrow} />
        </div>

        {hoverSection02Img.map((object, index) => {
          return (
            <div key={object.id} className={object.className} onMouseOver={object.handleMouseOver(index)} onMouseOut={object.handleMouseOut}>
              <img src={object.src} alt={object.src}/>
            </div>
          )
        })}
        {hoverSection02Txt.map((object, index) => {
          return (
            <div key={object.id} className={showText === index ? `${object.className} opacity_on` : object.className}>
              <p>{object.textModelName}</p>
              <p>{object.textName}</p>
              <p>{object.textPrice.toLocaleString()}</p>
            </div>
          )
        })}
        <img src={process.env.PUBLIC_URL + "/images/look_book_02.jpg"} alt="l_b_img_02"/>
      </div>
      )
  } else if(showSection === 2) {
    nowViewSection = (
      <div className="look_book_view look_book_view03">
        <div className="view_icon01 v_icon">
          <FontAwesomeIcon icon={faLocationArrow} />
        </div>
        <div className="view_icon02 v_icon">
          <FontAwesomeIcon icon={faLocationArrow} />
        </div>
        <div className="view_icon03 v_icon">
          <FontAwesomeIcon icon={faLocationArrow} />
        </div>
        <div className="view_icon04 v_icon">
          <FontAwesomeIcon icon={faLocationArrow} />
        </div>

        {hoverSection03Img.map((object, index) => {
          return (
            <div key={object.id} className={object.className} onMouseOver={object.handleMouseOver(index)} onMouseOut={object.handleMouseOut}>
              <img src={object.src} alt={object.src}/>
            </div>
          )
        })}
        {hoverSection03Txt.map((object, index) => {
          return (
            <div key={object.id} className={showText === index ? `${object.className} opacity_on` : object.className} >
              <p>{object.textModelName}</p>
              <p>{object.textName}</p>
              <p>{object.textPrice.toLocaleString()}</p>
            </div>
          )
        })}
        <img src={process.env.PUBLIC_URL + "/images/look_book_03.jpg"} alt="l_b_img_03"/>
      </div>
    )
  }


  return (
    <>
      <SubTitle>LOOK BOOK - S/S 2023</SubTitle>
      <div className="main_issue_contents">
        <section className="look_book">
          <div className="look_book_thumnail">
            <div id="look_book_thm_area_01" className="big_look_book look_book_show_tab" onClick={() => {
              setShowSection(0);

              //hover값 초기화
              setShowText('');
              }}>
              <img src={process.env.PUBLIC_URL + "/images/look_book_thumnail_01.jpg"} alt="l_b_thum01"></img>
            </div>
            <div className="video_n_look_book">
              <div className="video_film">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/_EQlEfE1ahU"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen/>
              </div>
              <div id="look_book_thm_area_02" className="small_look_book_area">
                <div className="small_look_book01 look_book_show_tab" onClick={() => {
                  setShowSection(1);

                  //hover값 초기화
                  setShowText('');
                  }}>
                  <img src={process.env.PUBLIC_URL + "/images/look_book_thumnail_02.jpg"} alt="l_b_thum02"/>
                </div>
                <div className="small_look_book02 look_book_show_tab" onClick={() => {
                  setShowSection(2);

                  //hover값 초기화
                  setShowText('');
                  }}>
                <img src={process.env.PUBLIC_URL + "/images/look_book_thumnail_03.jpg"} alt="l_b_thum03"/>
                </div>
              </div>
            </div>
          </div>

          {/* showsection값에 따라 조건부렌더링 */}
          {nowViewSection}
        </section>
      </div>
    </>
  )
}
