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

/*   const lookBookSrcArray = [
    process.env.PUBLIC_URL + "images/look_book_01.jpg",
    process.env.PUBLIC_URL + "images/look_book_02.jpg",
    process.env.PUBLIC_URL + "images/look_book_03.jpg"
  ]; */

  const tBox01 = useRef();
  const tBox02 = useRef();
  const tBox03 = useRef();

  const [lookBook, setLookBook] = useState(0);

/*   function thumnailChange() {
    setThumnailSrc(true);
  } */


/*   useEffect(() => {
    console.log(thumnailSrc);
  },[]); */

  return (
    <>
      <SubTitle>LOOK BOOK - S/S 2023</SubTitle>
      <div className="main_issue_contents">
        <section className="look_book">
          <div className="look_book_thumnail">
            <div id="look_book_thm_area_01" className="big_look_book look_book_show_tab" ref={tBox01}>
              <img src={process.env.PUBLIC_URL + "images/look_book_thumnail_01.jpg"} alt="l_b_thum01"></img>
            </div>
            <div className="video_n_look_book">
              <div className="video_film">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/_EQlEfE1ahU"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen/>
              </div>
              <div id="look_book_thm_area_02" className="small_look_book_area">
                <div className="small_look_book01 look_book_show_tab" ref={tBox02}>
                  <img src={process.env.PUBLIC_URL + "images/look_book_thumnail_02.jpg"} alt="l_b_thum02"/>
                </div>
                <div className="small_look_book02 look_book_show_tab" ref={tBox03}>
                <img src={process.env.PUBLIC_URL + "images/look_book_thumnail_03.jpg"} alt="l_b_thum03"/>
                </div>
              </div>
            </div>
          </div>
          <div className="look_book_view look_book_view01">
            <div className="view_icon01 v_icon">
              <FontAwesomeIcon icon={faLocationArrow} />
            </div>
            <div className="view_icon02 v_icon">
              <FontAwesomeIcon icon={faLocationArrow} />
            </div>
            <div className="hover_img hover_img01">
              <img src="" alt=""/>
            </div>
            <div className="text_box tb_01"></div>
            <div className="hover_img hover_img02">
              <img src="" alt=""/>
            </div>
            <div className="text_box tb_02"></div>
            <img src={process.env.PUBLIC_URL + "images/look_book_01.jpg"} alt="l_b_img_01"/>
          </div>
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

            <div className="hover_img hover_img01">
              <img src="" alt=""/>
            </div>
            <div className="hover_img hover_img02">
              <img src="" alt=""/>
            </div>
            <div className="hover_img hover_img03">
              <img src="" alt=""/>
            </div>

            <div className="text_box tb_03">

            </div>
            <div className="text_box tb_04">

            </div>
            <div className="text_box tb_05">

            </div>
            <img src={process.env.PUBLIC_URL + "images/look_book_02.jpg"} alt="l_b_img_02"/>
          </div>
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

            <div className="hover_img hover_img01"></div>
            <div className="hover_img hover_img02"></div>
            <div className="hover_img hover_img03"></div>
            <div className="hover_img hover_img04"></div>
            <div className="text_box tb_06">

            </div>
            <div className="text_box tb_07">

            </div>
            <div className="text_box tb_08">

            </div>
            <div className="text_box tb_09">

            </div>
            <img src={process.env.PUBLIC_URL + "images/look_book_03.jpg"} alt="l_b_img_03"/>
          </div>
        </section>
      </div>
    </>
  )
}
