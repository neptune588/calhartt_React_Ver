import React from 'react';
import './App.scss';

import {Routes, Route} from 'react-router-dom';

import Header from './components/Header.js';
import Main from './pages/Main.js';
import Sub from './pages/Sub.js';
import Cart from './components/Cart.js';
import Detail from './pages/Detail.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element = {
          <Main/>
        }/>
        <Route path="subpage/:types" element = {
          <Sub/>
        }/>
        <Route path="cart" element = {
          <Cart/>
        }/>
        <Route path="detail/:id" element = {
          <Detail/>
        }/>
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
