import React from 'react'

import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartData = createSlice({
  name: 'cartData',
  initialState : {
    list: [],
  },
  reducers: {
    addList (state, action) {
      const {list} = state;
      let {payload: nowObject} = action;

      let nowIndex = list.findIndex(object => object.id === nowObject.id);

      if (nowIndex !== -1) {
        list[nowIndex].count++;
      } else {
        list.push(nowObject);
      }
    },
    deleteList (state, action) {
      const {list} = state;
      let {payload: nowObject} = action;
  
      let nowIndex = list.findIndex(object => object.id === nowObject);
      list.splice(nowIndex, 1);
    }
  }
})

export const { addList, deleteList } = cartData.actions;

export default configureStore({
  reducer: {
    cartData: cartData.reducer,
  }
})