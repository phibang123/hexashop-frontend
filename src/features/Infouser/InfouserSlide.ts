import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ILicSuMuaHang } from 'models';
import { LoginType } from './../Login/types/index';

interface IinitialState {
  isLoading: boolean;
  payment: ILicSuMuaHang[] | null;
}

const initialState: IinitialState = {
  isLoading: false,
  payment: null,
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
    buyCart(state) {},
    getPayment(sate) {},

    succesGetPayment(sate, action: PayloadAction<ILicSuMuaHang[]>) {
      sate.payment = action.payload;
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
