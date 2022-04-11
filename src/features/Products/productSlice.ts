import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ISanPham } from './../../models/product';
import { RootState } from './../../app/store';

interface IAllProduct {
  allProduct: ISanPham[] | null;
}

const initialState: IAllProduct = {
  allProduct: null,
};

const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProduct(state) {},
    // incrementByAmount(state, action: PayloadAction<number>) {
    //   state.value += action.payload;
    // },
    getAllProductSuccess(state, action: PayloadAction<ISanPham[]>) {
      state.allProduct = action.payload;
    },
  },
});

//Actions
export const productsActions = productsSlice.actions;

//Selector

//Reduces
const productsReducer = productsSlice.reducer;
export default productsReducer;
