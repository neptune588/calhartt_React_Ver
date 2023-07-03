import React from 'react'

import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartData = createSlice({
  name: 'cartData',
  initialState : {
    list: [],
    totalCount: 0,
    totalPrice: 0,
    noticeIndex: null,
  },
  reducers: {
    addList (state, action) {
      let {list} = state;
      let {payload: nowObject} = action;

      let nowIndex = list.findIndex(object => object.id === nowObject.id);

      if (nowIndex !== -1) {
        if (list[nowIndex].count >= list[nowIndex].stockQuantity) {
/*        해당 인덱스에만 경고멘트

          경고멘트가 각기 다르게 들어가야함

          어떻게?

          일단 불리언으로 컨트롤하는건 안됨

          인덱스 관련 컨트롤을 해야함.

          상태 변화를 인덱스로잡고

          해당 인덱스와 같으면 멘트 온 

          상태변화가 인덱스가 되는경우는 카운트가 넘어섰을때  */
          state.noticeIndex = nowIndex;
          console.log(state.noticeIndex);

        } else if (list[nowIndex].count <= list[nowIndex].stockQuantity) {
          list[nowIndex].count += 1;

          state.totalCount += 1;
          
          let priceCalc = list[nowIndex].immunPrice * list[nowIndex].count;
  
          list[nowIndex].price = priceCalc;
          state.totalPrice += list[nowIndex].immunPrice; 
        }
      } else {
        list.push(nowObject);

        state.totalCount += 1;
        state.totalPrice += nowObject.immunPrice; 
      }
    },
    deleteList (state, action) {
      let {list} = state;
      let {payload: nowObject} = action;
      
      let nowIndex = list.findIndex(object => object.id === nowObject);

      state.totalCount -= list[nowIndex].count;

      state.totalPrice -= list[nowIndex].immunPrice; 

      list.splice(nowIndex, 1);
    },
    allDelete (state) {
      let {list} = state;

      list.splice(0, list.length);

      state.totalCount = 0;
      state.totalPrice = 0;      
    },
    decrease (state, action) {
      let {list} = state;
      let {payload: nowObject} = action;

      let nowIndex = list.findIndex(object => object.id === nowObject);

      if(list[nowIndex].count < 2) {
        list[nowIndex].count = 1;

        state.totalPrice = state.totalPrice;
      } else {
        state.totalCount -= 1;
        list[nowIndex].count -= 1;
        
        state.totalPrice -= list[nowIndex].immunPrice;
      }

      let priceCalc = list[nowIndex].immunPrice * list[nowIndex].count;
      list[nowIndex].price = priceCalc;
      
    },
    increase (state, action) {
      let {list} = state;
      let {payload: nowObject} = action;
      
      let nowIndex = list.findIndex(object => object.id === nowObject);
      
      if(list[nowIndex].count >= list[nowIndex].stockQuantity) {
        return state.nowIndex;
      } else {

        list[nowIndex].count += 1;
        state.totalCount += 1;
  
        let priceCalc = list[nowIndex].immunPrice * list[nowIndex].count;
        list[nowIndex].price = priceCalc;
        state.totalPrice += list[nowIndex].immunPrice;
      }
    }
  }
})

export const { addList, deleteList, decrease, increase, allDelete } = cartData.actions;

export default configureStore({
  reducer: {
    cartData: cartData.reducer,
  }
})