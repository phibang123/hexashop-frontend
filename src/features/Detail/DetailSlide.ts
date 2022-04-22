import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ILicSuMuaHang } from 'models';
import { ISanPham } from './../../models/product';
import { LoginType } from './../Login/types/index';
import { PayloadIComment } from './types/index';

interface IinitialState {
  sanPham: ISanPham | null;
  isLoaddingComment: boolean;
  isLoadddingProduct: boolean;
}

const initialState: IinitialState = {
  sanPham: null,
  isLoaddingComment: false,
  isLoadddingProduct: false,
};

const projectDetail = createSlice({
  name: 'project',
  initialState,
  reducers: {
    getProjectDetail(state, action: PayloadAction<string>) {},
    loadingEffect(state) {
      state.isLoadddingProduct = true;
    },
    pushCommentProduct(state, action: PayloadAction<PayloadIComment>) {
      state.isLoaddingComment = true;
    },

    getProjectDetailCommentSuccess(state, action: PayloadAction<ISanPham>) {
      state.sanPham = action.payload;
      state.isLoaddingComment = false;
    },
    getProjectDetailSuccess(state, action: PayloadAction<ISanPham>) {
      state.sanPham = action.payload;
      state.isLoadddingProduct = false;
    },
  },
});

//Actions
export const projectAction = projectDetail.actions;

const projectReducer = projectDetail.reducer;
export default projectReducer;
