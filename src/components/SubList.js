import { React , useEffect, useState } from 'react'

import {Container, Row, Col, Tab, Tabs} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link, Routes, Route, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { addList } from './store';

import './sub_list.scss';

import CartAni from './CartAni';

export default function SubList(props) {
    
    const currentState = useSelector(state => state.cartData);
    const dispatch = useDispatch();

    console.log(currentState);
    
    const {types: clothType} = props;
    //console.log(clothType);

    const [subProductLi, setSubProductLi] = useState(false);
    const [vsMent, setVsMent] = useState("");

    const [cartState, setCartState] = useState(false);
    const [doubleClick, setDoubleClick] = useState(false);

    const navigate = useNavigate();    

    useEffect(() => {
        fetch( process.env.PUBLIC_URL + '/ProductDB.json' )
        .then(res => res.json())
        .then((data) => {
            const nowTypes = data.productList.filter(object => object.clothTypes === clothType);
            
            //infoment의 키 걸러내서 배열화 -> 파라미터랑 같은 키값 추출 -> 해당 멘트 출력
            const nowMent = Object.keys(data.infoMent).filter(value => value === clothType);

            setSubProductLi(nowTypes);
            setVsMent(data.infoMent[nowMent]);

            //console.log(nowMent)

        })
        .catch(error => console.log(error));     
    },[clothType]);
    
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

    if(!subProductLi) {
        return <div>상품 정보를 불러오는 중입니다.</div>
    }
    if(subProductLi.length === 0) {
        return <div>상품을 찾을 수 없습니다.</div>
    }
    
    return (
        <>
            <div className="visual_sub">
                <Link to={`/subpage/${clothType}`}>
                    <img src={process.env.PUBLIC_URL + "/images/visual_sub01.jpg"} alt={'vs_01'}/>
                    <div className="ment_box_ex">
                    <div className="ment_box">
                        <h2>{`${clothType.toUpperCase()}`}</h2>
                        <p>{vsMent}</p>
                    </div>
                    </div>
                </Link>
            </div>
            <CartAni cartAni={cartState}/>
            <div className="wrapper">
                <Container className="product_list_wrapper">
                    <Row>
                        {subProductLi.map((object, index) => {
                            return (
                                <Col className="product" key={object.propertyNumber} onClick={() => {navigate(`/detail/${object.id}`)}} style={{paddingLeft : 0}}>
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
                                                count: 1,
                                                immunCount: 1,
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
                                        <img src={object.imgSrc[0]} alt={`product_${index}`}/>
                                    </div>
                                    <div className="img_link_02">
                                        <img src={object.imgSrc[1]} alt={`product_hover_${index}`}/>
                                    </div>
                                    {checkExistence(object.isNew, object.isBest)}
                                    <p className="product_name">{object.productNameKor}</p>
                                    <p className="model_name">{object.productModelName}</p>
                                    <span className="price_unit">₩</span>
                                    <span className="price">{object.price.toLocaleString()}</span>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        </>
        )
}
