import { React, useRef, useEffect, useState } from 'react';

import {Container, Nav, Navbar, Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

import './header.scss';

export default function Header() {
  const currentState = useSelector(state => state.cartData);

  const navigate = useNavigate();

  const inputMaxLength = 20;

  //기본값 안주어지면 오류뜸 인풋 밸류 기본값은 항상 있어야함.
  const [searchValue, setSearchValue] = useState("");

  const searchInput = useRef();
  
  const subMenuArray = [
    {
      id: 'sub01',
      name: 'TOP',
      Linkname: 'top',
    },
    {
      id: 'sub02',
      name: 'BOTTOM',
      Linkname: 'bottom',
    },
    {
      id: 'sub03',
      name: 'ACC',
      Linkname: 'acc',
    },
/*     {
      id: 'sub04',
      name: 'BRAND',
      Linkname: 'brand',
    }, */
  ];

/*   useEffect(() => {
    console.log('헤더 컴포넌트 렌더완료');

    return () => {
      console.log('정리 완료');
    }
  }, []); */

  function handleSearch(e) {
    if(e.target.value === '' || e.target.value === undefined || e.target.value === null) {
      return;
    }

    if(e.key === 'Enter') {
      let time;
      clearTimeout(time);

      time = setTimeout(() => {
        navigate(`/searchpage/${e.target.value}`);
        setSearchValue('');
      }, 20);

      //nowLocation.pathname;
      //console.log(nowLocation.pathname);
      searchInput.current.focus();

    }
  }

  function handleChange(e) {
    let nowValue = e.target.value;

    if(nowValue.length > inputMaxLength) {
      nowValue = e.target.value.substring(0, inputMaxLength);
    }

    setSearchValue(nowValue);
  }
  

  function handleClickSearch() {
    let time;
      clearTimeout(time);

      time = setTimeout(() => {
        navigate(`/searchpage/${searchInput.current.value}`);
        setSearchValue('');
      }, 20);

    searchInput.current.focus();
  }

  return (
      <Navbar className="nav_ex" bg="dark" data-bs-theme="dark">
        <Container className="nav">
          <Navbar.Brand className="main_logo" onClick={() => {navigate('/')}}>
            <img src = {process.env.PUBLIC_URL + `/images/main_logo.png`} alt="main_logo"/>
          </Navbar.Brand>
          
          <Nav className="lnb">
            {subMenuArray.map((object) => {
              return <Nav.Link className='sub_menu' key={`${object.id}`} onClick={() => {navigate(`/subpage/${object.Linkname}`)}}>{object.name}</Nav.Link>
            })}
          </Nav>
          
          <Nav className="gnb">
            <ul className="gnb_list">
              <li className="sing_in" onClick={() => {navigate('/')}}>로그인</li>
              <li className="sign_up" onClick={() => {navigate('/')}}>회원가입</li>
              <li className="cart" onClick={() => {navigate('/cart')}}>
                장바구니<span className="cart_icon"><img src={process.env.PUBLIC_URL + "/images/cart_icon.png"} alt="cart_icon"/></span><span className="cart_product_length">{currentState.list.length}</span></li>
            </ul>
          </Nav>
          
          <div className="search_area">
            <input onKeyUp={handleSearch} onChange={handleChange} value={searchValue} ref={searchInput} className="search_bar" type="search"/>
            <button className="search_btn" type="button" onClick={handleClickSearch}>search</button>
          </div>

{/*           <Form className="d-flex search_area">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 search_bar"
              aria-label="Search"
              onKeyUp={handleSearch}
            />
            <Button className="search_btn" variant="outline-success">Search</Button>
          </Form> */}
        </Container>
      </Navbar>
  )
}
