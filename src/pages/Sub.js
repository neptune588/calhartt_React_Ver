import { React } from 'react';
import { useParams } from 'react-router-dom';

import SubList from '../components/SubList'

export default function Sub() {
  const { types } = useParams();
  return (
    <>
      <SubList types = {types}/>
    </>
  )
}
