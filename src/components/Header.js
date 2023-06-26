import React from 'react';

import {Container, Nav, Navbar, Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './header.scss';

export default function Header() {
  const navigate = useNavigate();

  const subMenuArray = [
    {
      id: 'sub01',
      name: 'NEW',
      Linkname: 'new',
    },
    {
      id: 'sub02',
      name: 'TOP',
      Linkname: 'top',
    },
    {
      id: 'sub03',
      name: 'BOTTOM',
      Linkname: 'bottom',
    },
    {
      id: 'sub04',
      name: 'ACC',
      Linkname: 'acc',
    },
    {
      id: 'sub05',
      name: 'PROMO',
      Linkname: 'promo',
    },
    {
      id: 'sub06',
      name: 'SALE',
      Linkname: 'sale',
    },
    {
      id: 'sub07',
      name: 'BRAND',
      Linkname: 'brand',
    },
  ];

  useEffect(() => {
    console.log('헤더 컴포넌트 렌더완료');

    return () => {
      console.log('정리 완료');
    }
  }, []);

  return (
      <Navbar className="nav_ex" bg="dark" data-bs-theme="dark">
        <Container className="nav">
          <Navbar.Brand className="main_logo" onClick={() => {navigate('/')}}>
            <img src = {process.env.PUBLIC_URL + `images/main_logo.png`} alt="main_logo"/>
          </Navbar.Brand>
          
          <Nav className="lnb">
            {subMenuArray.map((object) => {
              return <Nav.Link className='sub_menu' key={`${object.id}`} onClick={() => {navigate(`/subpage/:${object.Linkname}`)}}>{object.name}</Nav.Link>
            })}
          </Nav>
          <Form className="d-flex search_area">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 search_bar"
              aria-label="Search"
            />
            <Button className="search_btn" variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
  )
}
