import { React, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchMinus } from '@fortawesome/free-solid-svg-icons';
import { styled } from 'styled-components';

import { addList } from './store';

import { useDispatch } from 'react-redux';
import CartAni from './CartAni';

import './search.scss';

const NotSearchIcon = styled(FontAwesomeIcon)`
    font-size: 3rem;
    margin-right: 15px;
`

export default function Search() {
    const dispatch = useDispatch();
    const navigate = useNavigate();   

    const { keyword } = useParams();
    const [ searchData , setSearchData ] = useState(false);
    const [ list , setList ] = useState(false);
    
    const [cartState, setCartState] = useState(false);
    const [doubleClick, setDoubleClick] = useState(false);

    const [loadingAniState, setLoadingAniState] = useState(true);

    useEffect(() => {
        fetch(process.env.PUBLIC_URL + '/ProductDB.json')
        .then(res => res.json())
        .then(data => setSearchData(data.productList))
        .catch(error => console.log(error));

        window.scrollTo({top:0, left:0, behavior:'smooth'});
    },[])

    useEffect(() => {
        let filterArray;
        if(searchData.length > 0) {
            console.log(searchData);
            filterArray = searchData.filter((object) => {
                return object.id.includes(keyword) || object.productNameKor.includes(keyword) || object.productModelName.toUpperCase().includes(keyword.toUpperCase()) ||object.productStyle.toUpperCase().includes(keyword.toUpperCase());
            })
            setList(filterArray);
        }
    },[searchData, keyword]);

    useEffect(() => {
        console.log(list);
    },[list]);

    function checkExistence( isNew, isBest ) {
        
        let newValue = '';
        let bestValue = '';
        
        let newBest = '';

        if( isNew ) {
            newValue = <span className="new">NEW</span>
        }

        if( isBest ) {
            bestValue = <span className="best">BEST</span>
        }
        newBest = <>{newValue} {bestValue}</>;

        return newBest;
    }

    if(!list) {
        return (
            <div className="loading">
                <div className="loading_ment">
                    <div className={loadingAniState ? "circle circle_ani" : "circle"}>
                        <span className="circle_bar"></span>
                    </div>
                    <p>상품 정보를 불러오는 중입니다.</p>
                </div>
            </div>
        )
    }

    if(list.length === 0) {
        return <div className="not_search"><NotSearchIcon icon={faSearchMinus}/>상품 정보를 찾을 수 없습니다.</div>
    }

    return (
        <>
            <CartAni cartAni={cartState}/>
            <div className="search_container">
                <ul className="product_list_wrapper">
                    {list.map((object, index) => {
                        return (
                            <li className="search_product_list" key={object.propertyNumber} onClick={() => {navigate(`/detail/${object.id}`)}} style={{paddingLeft : 0}}>
                                <span className="cart_btn" onClick={(e) => {
                                    e.stopPropagation();

                                    if(!doubleClick) {
                                        setCartState(true);
                                        setDoubleClick(true);
                                        
                                        dispatch(addList({
                                            id: object.id + object.propertyNumber,
                                            imgSrc: object.imgSrc[0],
                                            price: object.price,
                                            productNameKor: object.productNameKor,
                                            productNameEng: object.productModelName,
                                            stockQuantity: object.stockQuantity,
                                            count: 1,
                                            immunPrice: object.price,
                                        }));

                                        setTimeout(() => {
                                            setCartState(false);
                                            setDoubleClick(false);
                                        }, 900)
                                    }

                                }}>
                                    <img src={process.env.PUBLIC_URL + "/images/cart_icon.png"} alt="cart_btn"/>
                                </span>
                                <div className="img_link_01">   
                                    <img src={process.env.PUBLIC_URL + object.imgSrc[0]} alt={`product_${index}`}/>
                                </div>
                                <div className="img_link_02">
                                    <img src={process.env.PUBLIC_URL + object.imgSrc[1]} alt={`product_hover_${index}`}/>
                                </div>
                                {checkExistence(object.isNew, object.isBest)}
                                <p className="product_name">{object.productNameKor}</p>
                                <p className="model_name">{object.productModelName}</p>
                                <span className="price_unit">₩</span>
                                <span className="price">{object.price.toLocaleString()}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}
