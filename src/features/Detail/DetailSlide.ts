import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ILicSuMuaHang } from 'models';
import { ISanPham } from './../../models/product';
import { LoginType } from './../Login/types/index';
import { PayloadIComment } from './types/index';

interface IinitialState {
  sanPham: ISanPham | null;
  isLoadding: boolean;
}

const initialState: IinitialState = {
  sanPham: null,
  isLoadding: false,
};

const projectDetail = createSlice({
  name: 'project',
  initialState,
  reducers: {
    getProjectDetail(state, action: PayloadAction<string>) {},

    pushCommentProduct(state, action: PayloadAction<PayloadIComment>) {
      console.log(action.payload);
      state.isLoadding = true;
    },

    getProjectDetailCommentSuccess(state, action: PayloadAction<ISanPham>) {
      state.sanPham = action.payload;
      state.isLoadding = false;
    },
    getProjectDetailSuccess(state, action: PayloadAction<ISanPham>) {
      state.sanPham = action.payload;
    },
  },
});

//Actions
export const projectAction = projectDetail.actions;

const projectReducer = projectDetail.reducer;
export default projectReducer;
