import { React , useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import './detail_list.scss';

export default function DetailList() {
    const [productArray, setProductArray] = useState();

    const { id } = useParams();

    useEffect(() => {
        fetch('./subProductDB.json')
        .then(res => {res.json()})
        .then(data => setProductArray(data))
        .catch(error => console.log(error)); 
    },[]);

    console.log(productArray, id);

    return (
        <div className="contents_product_buy">
            <div className="product_view_area">
                <section className="style_code">
                    <p className="color_gray">스타일코드</p>
                    <p className="code_number">CA23SSJAJL00358002</p>
                </section>
                <section className="view_thumnail">
                    <div className="view_img01 thumnail_box">
                    </div>
                    <div className="view_img02 thumnail_box">
                    </div>
                </section>
                <section className="product_related_area">
                    <h3 className="title_text">함께 착용한 상품</h3>
                    <ul className="related_list">
                        <li className="small_product_img">
                            <img src="" alt="related_img01"/>
                            <p className="re_txt">콜 카고 팬츠 모라가 블랙 가먼트 다이드</p>
                            <p className="re_txt">BLACK</p>
                            <p className="re_txt">₩ 183,000</p>
                        </li>
                        <li className="small_product_img">
                            <img src="" alt="related_img02"/>
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
                                <img src="" alt="recently_img01"/>
                            </div>
                            <p className="re_txt">알링턴 베스트 에일 헤비 스톤 워시</p>
                            <p className="re_txt">BROWN</p>
                            <p className="re_txt">₩ 283,000</p>
                        </li>
                        <li className="small_product_img">
                            <div className="re_img_box">
                                <img src="" alt="recently_img01"/>
                            </div>
                            <p className="re_txt">리그 자켓 블루</p>
                            <p className="re_txt">BLUE</p>
                            <p className="re_txt">₩ 263,000</p>
                        </li>
                    </ul>
                </section>
            </div>
            <div className="product_info_n_buy_btn_area">
                <h2 className="product_name">코스탈 자켓 블랙/화이트</h2>
                <div className="rating_n_sns">
                    <section className="rating_count">
                        <div className="count_point">
                        </div>
                        <span className="current_rating">5.0</span>
                    </section>
                    <ul className="sns_list">
                        <li className="like">
                            <input type="checkbox" id="like_chk"/>
                            <label htmlFor="like_chk"></label>
                        </li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <section className="price">
                    <div className="product_select_wrapper">
                        <p className="product_money">
                            248,000
                        </p>
                        <div className="product_select_area">
                            <button type="button" id="quantity_minus" className="quantity_btn"></button>
                            <input type="text" id="product_quantity_select"/>
                            <button type="button" id="quantity_plus" className="quantity_btn"></button>
                        </div>
                    </div>
                    <p className="color_gray">적립 <span className="product_point">1240</span> (0.5%)</p>
                    <p className="limit_quantity color_gray">재고량: <span className="quantity_number"></span></p>
                </section>
                <p className="select_notice_ment">재고가 부족합니다!</p>    
                <section className="total_price_area">
                    <p className="total_ment">총 합계 금액</p>
                    <div className="right_total_view">
                        <p className="total_quntaitly">총<span className="total_quntaitly_view">1</span>개</p>
                        <p className="total_price">248,000 원</p>
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
    )
}
