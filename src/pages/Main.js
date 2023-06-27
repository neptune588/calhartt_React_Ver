import React from 'react'
import VisualMain from '../components/VisualMain'
import ProductList from '../components/ProductList'
import IssueContents from '../components/IssueContents'
import MdsPick from '../components/MdsPick'

export default function Main() {
  return (
    <>
      <VisualMain/>
      <ProductList/>
      <IssueContents/>
      <MdsPick/>
    </>
  )
}
