import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const subMenuArray = ['NEW','TOP','BOTTOM','ACC','PROMO','SALE','BRAND'];

  useEffect(() => {
    console.log('컴포넌트 렌더완료');

    return () => {
      console.log('정리 완료');
    }
  }, []);

  return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="main_logo" onClick={() => {navigate('/')}}>
            <img src = {process.env.PUBLIC_URL + `images/main_logo.png`}/>
          </Navbar.Brand>
          
          <Nav className="nav_ex">
            {subMenuArray.map((value, i) => {
              return <Nav.Link key={`${value + i}`} onClick={() => {navigate('/top')}}>{subMenuArray[i]}</Nav.Link>
            })}
          </Nav>
        </Container>
      </Navbar>
  )
}
