import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ISanPham } from './../../models/product';
import { PaginationParams } from './../../models/common';
import { RootState } from './../../app/store';
import { productPaginition } from './types';

interface IAllProduct {
  allProduct: ISanPham[] | null;
  producPaginition: ISanPham[] | null;
  total: number;
  isLoadingProject: boolean;
}

const initialState: IAllProduct = {
  allProduct: null,
  producPaginition: null,
  total: 0,
  isLoadingProject: false,
};

const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProduct(state) {},
    // incrementByAmount(state, action: PayloadAction<number>) {
    //   state.value += action.payload;
    // },

    getAllProductPaginition(state, action: PayloadAction<PaginationParams>) {
      state.isLoadingProject = true;
    },

    getAllProductSuccess(state, action: PayloadAction<ISanPham[]>) {
      state.allProduct = action.payload;
    },
    getAllProductSuccessPaginition(state, action: PayloadAction<productPaginition>) {
      state.producPaginition = action.payload.data;
      state.total = action.payload.total;
      state.isLoadingProject = false;
    },
  },
});

//Actions
export const productsActions = productsSlice.actions;

//Selector

//Reduces
const productsReducer = productsSlice.reducer;
export default productsReducer;
