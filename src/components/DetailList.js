import { React , useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faChevronLeft, faChevronRight, faStar as fasStar, faWindowClose} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

import './detail_list.scss';

export default function DetailList() {

    const maxStarCount = 5;
    const reviewMaxLength = 100;

    //데이터 받아와서 저장하는 배열
    const [productArray, setProductArray] = useState([]);

    //배열에서 추출한 오브젝트 저장하는곳
    const [myObject, setMyObject] = useState(false);

    //리뷰 저장소
    const [reviewArray, setReviewArray] = useState([]);

    //밸류 저장소
    const [reviewValue, setReviewValue] = useState('');

    //별점 카운트
    const [curRatingStar, setCurRatingStar] = useState(Array(maxStarCount).fill({id: 'starNum', boolean: false}));

    //별점 리셋 상태
    const [resetStar, setResetStar] = useState(false);
    
    //리뷰 박스 on/off
    const [reviewBox, setReviewBox] = useState(false);

    //별 표기를 위한 상태 저장소
    const [starArray, setStarArray] = useState(false);

    //임시
    const [quantity, setQuantity] = useState(1);

    //url 쿼리
    const { id: nowParams } = useParams();

    const [idAddLength, setIdAddLength] = useState(reviewArray.length);

    const reviewInput = useRef();

    useEffect(() => {
        fetch(  process.env.PUBLIC_URL + '/subProductDB.json')
        .then(res => res.json())
        .then(data => setProductArray(data.productList))    
        .catch(error => console.log(error)); 

        window.scrollTo({top:0, left:0, behavior:'smooth'})
    },[]);

    useEffect(() => {
        //console.log(productArray, nowParams);

        let nowIndex = productArray.findIndex(object => object.id === nowParams);
        
        if(nowIndex > -1) {
            setMyObject(productArray[nowIndex]);
            setStarArray(
                    {
                        fasStars : Array(productArray[nowIndex].isRating).fill({id: 'farStar'}), 
                        farStars : Array(maxStarCount - productArray[nowIndex].isRating).fill({id: 'fasStar'})
                    }
                );
        }

    },[productArray])

    if(!myObject) {
        return <div>로딩중</div>
    }

    function handleChangeBool(nowIndex = 0) {
        return () => {
            setResetStar(false);
            
            const star = [];

            curRatingStar.forEach(object => star.push({...object, id: 'starNum', boolean: false}))

            star.forEach((object, index) => {
                //이말인즉슨 내가 누른 별까지만 true로 바뀐다 , true일떄는 채움 별 반환 즉, 내가 누른 인덱스까지 별이 채워지게 됨.
                if(index <= nowIndex) {
                    object.boolean =  true;
                } else {
                    object.boolean =  false;
                }
            });

            setCurRatingStar(star);
        }   
    }
    

    function handleChange(e) {
        let nowValue = e.target.value;
        if(e.target.value.length > 100) {
            nowValue = nowValue.substring(0, reviewMaxLength);
            //console.log(nowValue); 
        }
        setReviewValue(nowValue);
    }

    function handleReviewCreate() {

        //리스트에 들어갈것들
        //1. 멘트
        //2. 시간초
        //3. 별점
        
        /* curRatingStar.forEach((object) => {
            if(object.boolean === true) {
                trueArray.push(object.boolean);
            }
        }); */
        
        
        //forEach 최적화, 찾고 반복 끝낼수있게

        const nowListStarCount = [];

        curRatingStar.forEach(object => nowListStarCount.push({...object, id: 'list_star_count'}))

        //console.log(nowListStarCount);

        const nowDate = calcTime();

        setIdAddLength(idAddLength + 1);
        setReviewArray(reviewArray.concat(
                {
                    id: `review_${idAddLength}`, 
                    fillratingStar: nowListStarCount, 
                    text: reviewValue, 
                    createTime: nowDate
                }
            ))

        setReviewValue('');
        reviewInput.current.focus();
    }

    
    function handleListDelete(nowIndex) {
        const copy = reviewArray.slice();
        //수정하는동시에 제거하면 안됨.. 제거하고 수정해야하는듯
        //setReviewArray(copy.splice(nowIndex, 1))
        copy.splice(nowIndex, 1);
        setReviewArray(copy);
        console.log(reviewArray);
    }
    
    function calcTime() {
        let newDate = new Date();
        let nowYear = newDate.getFullYear();
        let nowMonth = newDate.getMonth() + 1;
        let nowDay = newDate.getDate();
        let nowHours = newDate.getHours();
        let nowMinutes = newDate.getMinutes();
        let nowSeconds = newDate.getSeconds();

        const changeLengthBefore = [nowMonth, nowDay, nowHours, nowMinutes, nowSeconds];

        let changeLengthAfter = changeLengthBefore.map(time => time < 10 ? time = `0${time}` : time);

        let time = `${nowYear}-${changeLengthAfter[0]}-${changeLengthAfter[1]}/${changeLengthAfter[2]}:${changeLengthAfter[3]}:${changeLengthAfter[4]}`;

        return time;
    }

    return (
        <>
            <div className="contents_product_buy">
                <div className="product_view_area">
                    <section className="style_code">
                        <p className="color_gray">스타일코드</p>
                        <p className="code_number">{myObject.id}</p>
                    </section>
                    <section className="view_thumnail">
                        <div className="view_img01 thumnail_box">
                            <img src={process.env.PUBLIC_URL + myObject.imgSrc[0]} alt={myObject.id}/>
                        </div>
                    </section>
                    <section className="product_related_area">
                        <h3 className="title_text">함께 착용한 상품</h3>
                        <ul className="related_list">
                            <li className="small_product_img">
                                <div className="re_img_box">
                                    <img src={ process.env.PUBLIC_URL + "/images/detail_page_img/related_produnct_01.jpg" } alt="related_img01"/>
                                </div>
                                <p className="re_txt">콜 카고 팬츠 모라가 블랙 가먼트 다이드</p>
                                <p className="re_txt">BLACK</p>
                                <p className="re_txt">₩ 183,000</p>
                            </li>
                            <li className="small_product_img">
                                <div className="re_img_box">
                                    <img src={ process.env.PUBLIC_URL + "/images/detail_page_img/related_produnct_02.jpg" } alt="related_img02"/>
                                </div>
                                <p className="re_txt">더블 니 팬츠 페어필드 블루 스톤 워시드</p>
                                <p className="re_txt">BLUE</p>
                                <p className="re_txt">₩ 158,000</p>
                            </li>
                        </ul>
                    </section>
                    <section className="recently_viewed_product_area">
                        <h3 className="title_text">최근 본 상품</h3>
                        <ul className="recently_list">
                            <li className="small_product_img">
                                <div className="re_img_box">
                                    <img src={ process.env.PUBLIC_URL + "/images/sub_page_img/CA22FWJAJH10144002/CA22FWJAJH10144002-1.jpg" } alt="recently_img01"/>
                                </div>
                                <p className="re_txt">알링턴 베스트 에일 헤비 스톤 워시</p>
                                <p className="re_txt">BROWN</p>
                                <p className="re_txt">₩ 283,000</p>
                            </li>
                            <li className="small_product_img">
                                <div className="re_img_box">
                                    <img src={ process.env.PUBLIC_URL + "/images/sub_page_img/CA22FWJAJL00026001/CA22FWJAJL00026001-1.jpg" } alt="recently_img02"/>
                                </div>
                                <p className="re_txt">리그 자켓 블루</p>
                                <p className="re_txt">BLUE</p>
                                <p className="re_txt">₩ 263,000</p>
                            </li>
                        </ul>
                    </section>
                </div>
                <div className="product_info_n_buy_btn_area">
                    <h2 className="product_name">{myObject.productNameKor}</h2>
                    <div className="rating_n_sns">
                        <section className="rating_count">
                            <div className="count_point">
                                {starArray !== false ? 
                                <>
                                    {starArray.fasStars.map((object, index) => {return <span key={object.id + index}><FontAwesomeIcon icon={fasStar} /></span>})}
                                    {starArray.farStars.map((object, index) => {return <span key={object.id + index}><FontAwesomeIcon icon={farStar} /></span>})}
                                </>  
                                : ''}
                            </div>
                            <span className="current_rating">{myObject.isRating.toFixed(1)}/{maxStarCount.toFixed(1)}</span>
                        </section>
                        <ul className="sns_list">
                            <li className="like">
                                <input type="checkbox" id="like_chk"/>
                                <label htmlFor="like_chk"><FontAwesomeIcon icon={faHeart} /></label>
                            </li>
                            <li><FontAwesomeIcon icon={faFacebookF} /></li>
                            <li><FontAwesomeIcon icon={faTwitter} /></li>
                        </ul>
                    </div>
                    <section className="price">
                        <div className="product_select_wrapper">
                            <p className="product_money">
                                ₩ {myObject.price.toLocaleString()}
                            </p>
                            <div className="product_select_area">
                                <button type="button" id="quantity_minus" className="quantity_btn"><FontAwesomeIcon icon={faChevronLeft} /></button>
                                {/* <input type="text" id="product_quantity_select"/> */}
                                <span id="product_quantity_select">1</span>
                                <button type="button" id="quantity_plus" className="quantity_btn"><FontAwesomeIcon icon={faChevronRight} /></button>
                            </div>
                        </div>
                        <p className="color_gray">적립 <span className="product_point">{myObject.price * 0.005}P</span> (0.5%)</p>
                        <p className="limit_quantity color_gray">재고량: <span className="quantity_number">{myObject.stockQuantity}</span></p>
                    </section>
                    <p className="select_notice_ment">재고가 부족합니다!</p>    
                    <section className="total_price_area">
                        <p className="total_ment">총 합계 금액</p>
                        <div className="right_total_view">
                            <p className="total_quntaitly">총<span className="total_quntaitly_view">1</span>개</p>
                            <p className="total_price">{myObject.price.toLocaleString()} 원</p>
                        </div>
                    </section>
                    <div className="shipping_n_installment">
                        <ul className="shipping_info">
                            <li className="list_left">
                                <span className="car_icon">

                                </span>
                                배송정보
                            </li>
                            <li className="list_right">
                                    <p>10만원 이하 3,000원, 10만원 이상 무료배송</p>
                                    <p><span>2시 이전 주문시 내일(수) 도착 예정</span>｜대한통운</p>
                                </li>
                        </ul>
                        <ul className="installment_info">
                            <li className="list_left">
                                <span className="card_icon">
                                </span>
                                무이자할부
                            </li>
                            <li className="list_right">최대 6개월<span className="color_gray">(단, 일시불 할인 및 법인 카드 사용 불가)</span></li>
                        </ul>
                    </div>
                    <section className="size_select">
                        <p className="color_gray">사이즈</p>
                        <ul className="size_list">
                            <li>XS</li>
                            <li>S</li>
                            <li>M</li>
                            <li>L</li>
                            <li>XL</li>
                        </ul>
                    </section>
                    <section className="point">
                        <p className="point_left"><span className="pay_icon"></span>네이버페이 포인트 혜택</p>
                        <p className="point_right">최대 3% 적립</p>
                    </section>
                    <div className="size_n_buy">
                        <div className="buy_n_keep">
                            <div className="keep_btn">장바구니</div>
                            <div className="buy_btn">구매하기</div>
                        </div>
                        <p className="color_gray notice">* 주문/배송/반품 등 일반 문의는 1:1문의를 이용해 주시기 바랍니다.</p>
                    </div>
                </div>
            </div>
            <div className="info_container">
                <section id="product_details_section">
                    <ul className="info_tab_list">
                        <li className="tab_on"><a href="#product_details_section">상세정보</a></li>
                        <li><a href="#product_reviews_section">상품후기</a></li>
                        <li><a href="#qna_section">상품문의</a></li>
                        <li><a href="#product_shipping_notice_section">배송안내</a></li>
                        <li><a href="#instructions_section">안내사항</a></li>
                    </ul>
                    <div className="more"><span></span>상세정보</div>
                    <div className="product_detail_info ment_box">
                        <p className="pro_description">
                            <span className="model_name">COASTAL JACKET</span> 면100% 포플린 소재의 자켓입니다.
                            안감은 면 포플린 소재로 이루어져 있습니다. 후드는 팩커블 형태로 조절이 가능합니다. 정면은 지퍼와 스냅으로 여닫을 수 있습니다. 소매에 스크립트 자수가 있습니다.
                        </p>
                    </div>
                </section>
                <section id="product_reviews_section">
                    <ul className="info_tab_list">
                        <li>상세정보</li>
                        <li className="tab_on">상품후기</li>
                        <li>상품문의</li>
                        <li>배송안내</li>
                        <li>안내사항</li>
                    </ul>
                    <div className="product_reviews_area">
                        <div className="top">
                            <p className="total_info">전체 (총 <span className="review_couting">{reviewArray.length + 1}</span>건)</p>
                            <div className="best_review_btn blue_btn">
                                BEST 후기 게시판
                            </div>
                        </div>
                        <form action="" id="review_form">
                            <ul className="review_list list_area">
                                <li>
                                    <p className="review_ment">
                                        봄에 입기 딱 좋아요! 핏도 너무 오버하지않고 딱 떨어져서 좋아요
                                    </p>
                                    <div className="right_info">
                                        <ul className="rating_star">
                                            <li><FontAwesomeIcon icon={fasStar}/></li>
                                            <li><FontAwesomeIcon icon={fasStar}/></li>
                                            <li><FontAwesomeIcon icon={fasStar}/></li>
                                            <li><FontAwesomeIcon icon={fasStar}/></li>
                                            <li><FontAwesomeIcon icon={fasStar}/></li>
                                        </ul>
                                        <span className="review_date date">2023-01-01/05:28:48</span>
                                        <span className="review_id">ju****</span>
                                    </div>
                                </li>
                                {reviewArray.length >= 1 ? reviewArray.map((object, index)=>{
                                    return (
                                        <li key={object.id}>    
                                            <p className="review_ment">
                                                {object.text}
                                                <span className = "delete" onClick={() => {handleListDelete(index)}}>
                                                    <FontAwesomeIcon icon={faWindowClose}/>
                                                </span>
                                            </p>
                                            <div className="right_info">
                                                <ul className="rating_star">
                                                    {object.fillratingStar.map((object, index) => {
                                                        return (
                                                            <li key={object.id + index}>{object.boolean ? <FontAwesomeIcon icon={fasStar}/> : <FontAwesomeIcon icon={farStar}/>}</li>
                                                        )
                                                    })}
                                                </ul>
                                                <span className="review_date date">{object.createTime}</span>
                                                <span className="review_id">ju****</span>
                                            </div>
                                        </li>
                                    )
                                }) : ''}
                            </ul>
                            <div className="review_pagenation pagenation">
                                <ul className="review_page_list page_list">

                                </ul>
                            </div>
                            <div className="create_btn blue_btn" onClick={() => {
                                if(!reviewBox) {
                                    setReviewBox(true);
                                } else {
                                    setReviewBox(false);
                                    setResetStar(true);
                                }
                            }}>
                                글쓰기
                            </div>
                            <div className={reviewBox === true ? "review_create block_on" : "review_create"}>
                                <div className="text_top_area">
                                    <div className="str_length">
                                        현재
                                        <span className="review_now_length"> {reviewValue.length} 자</span>
                                        <span className="notice"></span>
                                        /최대 100자
                                    </div>
                                    <ul className="review_rating_star">
                                        {curRatingStar.map((object, index) => {
                                            return <li key={object.id + index} onClick={handleChangeBool(index)}>{(object.boolean && !resetStar) ? <FontAwesomeIcon icon={fasStar}/>:<FontAwesomeIcon icon={farStar}/>}</li>
                                        })}
                                    </ul>
                                </div>
                                <textarea id="review_text_box" ref={reviewInput} value={reviewValue} onChange={handleChange} cols={10} rows={4} maxLength={100}></textarea>
                                <button id="create_complete" className="blue_btn" type="button" onClick={handleReviewCreate}>작성완료</button>
                            </div>
                        </form>
                    </div>
                </section>
                <section id="qna_section">
                    <ul className="info_tab_list">
                        <li>상세정보</li>
                        <li>상품후기</li>
                        <li className="tab_on">상품문의</li>
                        <li>배송안내</li>
                        <li>안내사항</li>
                    </ul>
                    <div className="qna_notice">
                        <p className="guide_01">제품에 관한 궁금한 점을 올리시면 신속한 답변을 드립니다.</p>
                        <p className="guide_02">배송,결제,교환/반품 등에 대한 문의는 <span>{"고객센터 > 이메일 상담"}</span>을 이용해주세요.</p>
                        <div className="question_btn">
                            문의하기
                        </div>
                    </div>
                    <form action="" id="qna_form">
                        <div className="create_question">
                            <div className="create_question_top">
                                <label htmlFor="qna_user_id">ID</label>
                                <input id="qna_user_id" type="text" maxLength={12} placeholder="최대 12자" />
                            </div>
                            <div className="str_length">
                                현재
                                <span className="qna_now_length">0 자</span>
                                <span className="notice"></span>
                                /최대 100자
                            </div>
                            <div className="qna_notice_ment nt_ment"></div>
                            <div id="qna_create" className="blue_btn">문의 작성완료</div>
                        </div>
                        <p className="total_info">전체 (총 <span className="qna_couting">1</span>건)</p>
                        <ul className="qna list_area">
                            <li className="question_list">
                                <div className="question_box">
                                    <div className="left_box">
                                        <span className="state_answer_complete">답변완료</span>
                                        <p className="qna_ment">배송은 얼마나 걸리나요??<span></span></p>
                                    </div>
                                    <div className="right_box">
                                        <span className="qna_date date">2022-11-11</span>
                                        <span className="qna_id list_view_id">je*****</span>
                                    </div>
                                </div>
                                <div className="answer_box block_on">
                                    <div className="ment_input">
                                        <h2>[CARHARTT] 관리자</h2>
                                    </div>
                                    <div className="ment_area">
                                        <span className="answer">답변</span>
                                        <div className="qna_guide_ment">
                                            <p className="spot"><span></span>{"[CARHARTT] 관리자"}</p>
                                            평일 오후 2시 이전 결제 완료 된 주문건은 당일 출고되며 배송은 1~3일 정도 소요됩니다. 물류량이 많을 시 배송이 지연되는 점 양해 부탁드립니다.상품준비
                                            도중 시스템 오류나 제품상 문제로 상품의 발송이 늦어지거나 품절이 될 수 있습니다. 휴일{"(주말/공휴일 포함)"} 주문건은 다음 영업일에 상품준비 후 발송됩니다.
                                            자세한 문의는 고객센터에 문의해 주시면 친절하게 상담해드리겠습니다.
                                            오늘도 칼하트를 이용해 주셔서 감사하며 즐거운 쇼핑되세요!
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </form>
                </section>
                <section id="product_shipping_notice_section">
                    <ul className="info_tab_list">
                        <li>상세정보</li>
                        <li>상품후기</li>
                        <li>상품문의</li>
                        <li className="tab_on">배송안내</li>
                        <li>안내사항</li>
                    </ul>
                    <div className="more"><span></span>배송안내</div>
                    <div className="notice_ment ment_box">
                        <p>CJ대한통운 {"(1588-1255)"}</p>
                        <p>배송 지역:전국 {"(일부 지역 제외)"}</p>
                        <p>배송비:10만원 이상 구매 시 무료 배송</p>
                        <p>배송 기간:평일 오후 2시 이전 결제 완료 된</p>
                        <p>주문건은 당일 출고되며 배송은 1~3일 정도 소요됩니다.</p>
                        <p className="detail_view color_gray">{"(자세히 보기)"}</p>
                    </div>
                </section>
                <section id="instructions_section">
                    <ul className="info_tab_list">
                        <li>상세정보</li>
                        <li>상품후기</li>
                        <li>상품문의</li>
                        <li>배송안내</li>
                        <li className="tab_on">안내사항</li>
                    </ul>
                    <div className="guide more"><span></span>반품안내</div>
                    <div className="product_return_guide_ment ment_box">
                        <p>교환/환불의 경우 모든 상품은 상품을 공급받으신 날로부터</p>
                        <p>7일 이내 신청하시면 기사님께서 빠른 시일 내에 수거하실 예정입니다.</p>
                        <p>고객님의 단순 변심으로 인한 상품의 교환/반품을 요청하시는 경우,</p>
                        <p>택배비용은 고객님 부담이오니 이점 양해 바랍니다.</p>
                        <p>칼하트{"(마이페이지 > 주문내역 > 주문서 상세 페이지 조회 > 교환/환불 신청)"}</p>
                        <p className="detail_view color_gray">(자세히 보기)</p>
                    </div>
                    <div className="more"><span></span>A/S안내</div>
                    <div className="as_guide_ment ment_box">
                        <p>칼하트윕 한국 공식 판매처를 통하여 구입한 모든 제품은</p>
                        <p>A/S를 받으 실 수 있습니다.</p>
                        <p className="detail_view color_gray">{"(자세히 보기)"}</p>
                    </div>
                    <div className="more"><span></span>세탁 및 취급 시 주의사항</div>
                    <div className="washing_notice_ment ment_box">
                        <p>제품 혼용율에 따라 세탁 및 취급 유의 사항이 변경될 수 있습니다.</p>
                        <p>반드시 부착되어 있는 케어라벨 내용을 확인하신 후 세탁히시기 바랍니다.</p>
                        <p>따라서 세탁시에는 반드시 세탁 및 취급 시 주의사항 페이지를 참고 부탁드립니다.</p>
                        <p className="detail_view color_gray">{"(자세히 보기)"}</p>
                    </div>
                </section>
            </div>
        </>
    )
}
