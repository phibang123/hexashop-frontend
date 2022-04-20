import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ILicSuMuaHang } from 'models';
import { INguoiDungEdit } from './../../models/user';
import { LichSuPaginition } from './../HistoryPay/types/index';
import { LoginType } from './../Login/types/index';
import { PaginationParams } from './../../models/common';

interface IinitialState {
  isLoading: boolean;
  payment: ILicSuMuaHang[] | null;
  total: number;
}

const initialState: IinitialState = {
  isLoading: false,
  payment: null,
  total: 0,
};

const updateUser = createSlice({
  name: 'updateuser',
  initialState,
  reducers: {
    setLike(state, action: PayloadAction<string>) {
      state.isLoading = true;
    },
    setRemoveCart(state, action: PayloadAction<string>) {
      state.isLoading = true;
    },
    setAddCart(state, action: PayloadAction<string>) {
      state.isLoading = true;
    },
    setAddCartRedirest(state, action: PayloadAction<string>) {
      state.isLoading = true;
    },
    setReduceCart(state, action: PayloadAction<string>) {
      state.isLoading = true;
    },
    updateEditProfile(state, action: PayloadAction<INguoiDungEdit>) {
      state.isLoading = true;
    },

    changePagePayment(state, action: PayloadAction<PaginationParams>) {
      state.isLoading = true;
    },

    buyCart(state) {},

    getPayment(state) {
      state.isLoading = true;
    },

    succesGetPayment(state, action: PayloadAction<LichSuPaginition>) {
      state.payment = action.payload.data;
      state.total = action.payload.total;
      state.isLoading = false;
    },

    success(state) {
      state.isLoading = false;
    },
  },
});

//Actions
export const updateAction = updateUser.actions;

const updateUserReducer = updateUser.reducer;
export default updateUserReducer;
