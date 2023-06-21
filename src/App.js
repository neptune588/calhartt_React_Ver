import React from 'react';
import './App.scss';

import {Routes, Route} from 'react-router-dom';

import Header from './components/Header.js';
import VisualMain from './components/VisualMain';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element = {
          <VisualMain/>
        }/>
      </Routes>
    </>
  );
}

export default App;
