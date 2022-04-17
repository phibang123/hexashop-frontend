import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ICategoryResponse } from './../../models/categores';
import { ILicSuMuaHang } from 'models';
import { INguoiDungEdit } from './../../models/user';
import { LoginType } from './../Login/types/index';

interface IinitialState {
  categories: ICategoryResponse[] | null;
  isLoading: boolean;
}

const initialState: IinitialState = {
  categories: null,
  isLoading: false,
};

const categoriesProduct = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategoriesProduct(state, action: PayloadAction<string>) {
      state.isLoading = true;
    },

    succesGetCategoriesProduct(state, action: PayloadAction<ICategoryResponse[]>) {
      state.categories = action.payload;
      state.isLoading = false;
    },
  },
});

export const categoriesAction = categoriesProduct.actions;

const categoriesProductReducer = categoriesProduct.reducer;
export default categoriesProductReducer;
