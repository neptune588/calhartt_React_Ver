import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookSquare, faYoutube, faPinterest, faSoundcloud } from "@fortawesome/free-brands-svg-icons"
import './footer.scss';

export default function Footer() {
  return (
    <>
        <section className="site_info">
            <ul className="info_list">
                <li>칼하트윕에 대하여</li>
                <li>칼하트윕 라디오</li>
                <li>기업의 사회적 책임</li>
                <li>채용 안내</li>
                <li>일반 적합 인증</li>
            </ul>
        </section>
        <div className="footer_ex">
            <footer className="footer">
                <div className="footer_top">
                    <div className="footer_left">
                        <ul className="guide_list">
                            <li>고객지원</li>
                            <li>비즈니스 문의</li>
                            <li>배송안내</li>
                            <li>나의계정</li>
                            <li>자주하는 질문</li>
                        </ul>
                        <ul className="business_info_list">
                            <li>주식회사 웍스아웃</li>
                            <li>사업자 등록번호 : 106-86-85373</li>
                            <li>주소 : 서울시 마포구 월드컵북로23길 24</li>
                            <li>통신판매업 신고 : 2014-서울마포-0219</li>
                            <li>호스팅 사업자 : 아마존 웹 서비스</li>
                        </ul>
                    </div>
                    <div className="footer_right">
                        <ul className="sns_list">
                            <li><FontAwesomeIcon icon={faInstagram}/></li>
                            <li><FontAwesomeIcon icon={faFacebookSquare}/></li>
                            <li><FontAwesomeIcon icon={faYoutube}/></li>
                            <li><FontAwesomeIcon icon={faPinterest}/></li>
                            <li><FontAwesomeIcon icon={faSoundcloud}/></li>
                        </ul>
                        <ul className="contact_info_list">
                            <li><span>대표전화</span><span>02-541-0854</span></li>
                            <li><span>운영시간</span><span>10:00~17:00</span></li>
                            <li><span>휴무일</span><span>(토,일,공휴일)</span></li>
                            <li><span>이메일</span><span>customer@carhartt-wip.co.kr</span></li>
                        </ul>
                    </div>
                </div>
                <ul className="notice">
                    <li>© 칼하트윕 코리아 2023</li>
                    <li>이용약관</li>
                    <li>개인정보 취급방침</li>
                    <li>구매안전(에스크로) 서비스 가입사실 확인</li>
                </ul>
            </footer>
        </div>
    </>
  )
}
