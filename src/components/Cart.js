import React from 'react'
import { styled } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMinus, faPlus, faTimes, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { useSelector, useDispatch } from 'react-redux';
import { deleteList, decrease, increase, allDelete } from './store';

import { useNavigate } from 'react-router-dom';
import './cart.scss';

const CartTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-right: 15px;
`;

export default function Cart() {
  const navigate = useNavigate();

  const currentState = useSelector(state => state.cartData);
  const dispatch = useDispatch();

  if(currentState.list.length === 0) {
    return (
      <div className="not_product">
        <div className="not_icon">
          <FontAwesomeIcon icon={faShoppingCart}/>
        </div>
        <p className="notice_ment01">장바구니에 담긴 상품이 없습니다.</p>
        <p className="notice_ment02">저희 CALHARTT 에서 고객님의 스타일에 맞는 제품을 찾아보세요!</p>
        <div className="home" onClick={() => {navigate('/')}}>쇼핑 계속하기</div>
        <div className="promo_ment_area">
          <p className="promo_ment01"><span>C A L H A R T T</span> P R O M O T I O N</p>
          <p className="promo_ment02">칼하트의 강인함과 스타일로 내가 원하는 자신감을 표현해보세요</p>
          <div className="bgc_black"></div>
          <img src={process.env.PUBLIC_URL + "/images/promo_img.jpg"} alt="promo_img"/>
        </div>
      </div>
    )
  }

  return (
    <div className="cart_container">
      <section className="container_top">
        <div className="cart_title_all_length">
          <CartTitle>장바구니</CartTitle>
          <p id="cart_total_length">{`총 ${currentState.list.length} 개`}</p>
        </div>
        <div className="product_all_delete">
          <p onClick={() => {dispatch(allDelete())}}>전체삭제<span><FontAwesomeIcon icon={faTimes}/></span></p>
        </div>
      </section>
      <div id="product_list_container">
        <ul className="product_list_area">
          <li className="order_detail_title">
            <p className="product_info_area product_info_title">상품정보</p>
            <p className="product_quantity_area product_quantity_title">수량</p>
            <p className="order_price_n_pro_delete_area order_price_title">주문금액</p>
          </li>
          {currentState.list.map((object, index) => {
            return (
              <li key={object.id} className="product_list">
                <div className="product_info_area">
                  <div className="pro_img">
                    <img src={process.env.PUBLIC_URL + object.imgSrc} alt={`prodcut_img_0${index}`}/>
                  </div>
                  <div className="pro_name">
                    <p className="name_kor">{object.productNameKor}</p>
                    <p className="name_eng">{object.productNameEng}</p>
                  </div>
                </div>
                <div className="product_quantity_area">
                  <div className="control_quantity">
                    <div className="quantity_area">
                      <button className="decrease_btn" onClick={() => {dispatch(decrease(object.id))}}><FontAwesomeIcon icon={faMinus}/></button>
                      <span className="quantity_number">{object.count}</span>
                      <button className="increase_btn" onClick={() => {dispatch(increase(object.id))}}><FontAwesomeIcon icon={faPlus}/></button>
                    </div>
                    <p className={ currentState.noticeIndex === index ? "notice_ment block_on" : "notice_ment"}>
                      재고량을 초과 하였습니다!
                    </p>
                  </div>
                  <div className="stock_quantity_length quantity_length">{`재고량: ${object.stockQuantity}개`}</div>
                  <div className="quantity_length">{`선택 수량: ${object.count}개`}</div>
                </div>
                <div className="order_price_n_pro_delete_area">
                  <p className="pro_price">{`상품 금액: ${object.price.toLocaleString()}원`}</p>
                  <div className="product_delete" onClick={() => {dispatch(deleteList(object.id))}}><FontAwesomeIcon icon={faTimes}/></div>
                </div>
              </li>
            )
          })}
        </ul>
        <section className="total_area">
          <div className="calc">
            <p className="total_length"><span>총 상품 수량:</span> {`${currentState.totalCount} 개`}</p>
            <p className="total_price"><span>총 주문 금액:</span> {`${currentState.totalPrice.toLocaleString()}원`}</p>
            <button className="buy_btn">BUY NOW</button>
          </div>
        </section>
      </div>
    </div>
  )
}
