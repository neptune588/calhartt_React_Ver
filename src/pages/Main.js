import { React , useEffect } from 'react';

import VisualMain from '../components/VisualMain';
import ProductList from '../components/ProductList';
import IssueContents from '../components/IssueContents';
import MdsPick from '../components/MdsPick';
import InstaGram from '../components/InstaGram';

export default function Main() {
  useEffect(() => {
    window.scrollTo({top:0, left:0, behavior:'smooth'})
  },[]);

  return (
    <>
      <VisualMain/>
      <ProductList/>
      <IssueContents/>
      <MdsPick/>
      <InstaGram/>
    </>
  )
}
