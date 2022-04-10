import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ILicSuMuaHang } from 'models';
import { ISanPham } from './../../models/product';
import { LoginType } from './../Login/types/index';

interface IinitialState {
  sanPham: ISanPham | null;
}

const initialState: IinitialState = {
  sanPham: null,
};

const projectDetail = createSlice({
  name: 'project',
  initialState,
  reducers: {
    getProjectDetail(state, action: PayloadAction<string>) {},

    getProjectDetailSuccess(state, action: PayloadAction<ISanPham>) {
      state.sanPham = action.payload;
    },
  },
});

//Actions
export const projectAction = projectDetail.actions;

const projectReducer = projectDetail.reducer;
export default projectReducer;
