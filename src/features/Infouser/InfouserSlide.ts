import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ILicSuMuaHang } from 'models';
import { INguoiDungEdit } from './../../models/user';
import { LichSuPaginition } from './../HistoryPay/types/index';
import { LoginType } from './../Login/types/index';

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
    setLike(state, action: PayloadAction<string>) {},
    setRemoveCart(state, action: PayloadAction<string>) {},
    setAddCart(state, action: PayloadAction<string>) {},
    setAddCartRedirest(state, action: PayloadAction<string>) {},
    setReduceCart(state, action: PayloadAction<string>) {},
    updateEditProfile(state, action: PayloadAction<INguoiDungEdit>) {
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
