import React from 'react';
import './App.scss';

import {Routes, Route} from 'react-router-dom';

import Header from './components/Header.js';
import Main from './pages/Main.js';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element = {
          <Main/>
        }/>
        <Route path="subPage" element = {
          <div>서브페이지입니다.</div>
        }/>
      </Routes>
    </>
  );
}

export default App;
