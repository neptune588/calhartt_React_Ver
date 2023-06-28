import { React , useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';

import {Container, Row, Col, Tab, Tabs} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link, Routes, Route } from 'react-router-dom';

import './sub_list.scss';

export default function SubList() {
    
    const [subProductLi, setSubProductLi] = useState([]);
    const navigate = useNavigate();    

    useEffect(() => {
        fetch('./subProductDB.json')
        .then(res => res.json())
        .then(data => setSubProductLi(data))
        .catch(error => console.log(error));     
    },[]);
    
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

    return (
        <>
            <div className="visual_sub">
                <Link to="/subpage">
                    <img src={process.env.PUBLIC_URL + "images/visual_sub01.jpg"} alt={'vs_01'}/>
                    <div className="ment_box_ex">
                    <div className="ment_box">
                        <h2>TOP</h2>
                        <p>다양한 패턴과 소재로 제작된 상의, 이번 시즌에는 놓치지 마세요!</p>
                    </div>
                    </div>
                </Link>
            </div>
            
            <div className="wrapper">
                <Container className="product_list_wrapper">
                    <Row>
                        {subProductLi.map((object, index) => {
                            return (
                                <Col className="product" key={object.propertyNumber} onClick={() => {navigate(`/detail/${object.id}`)}} style={{paddingLeft : 0}}>
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
