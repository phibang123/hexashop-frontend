import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { INguoiDung } from '../../models/user';
import { INguoiDungLogin } from './../../models/user';
import { LoginType } from './types';

export interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  currentUser?: INguoiDung;
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
};

const authSile = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginType>) {
      state.logging = true;
      state.isLoggedIn = true;
    },
    loginSuccess(state, action: PayloadAction<INguoiDung>) {
      state.isLoggedIn = true;
      state.logging = false;
      state.currentUser = action.payload;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.logging = false;
      state.isLoggedIn = false;
    },
    logout(state) {
      state.isLoggedIn = false;
      // state.currentUser = undefined;
    },
  },
});

//Actions
export const authActions = authSile.actions;

//Selector
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectIsLogging = (state: any) => state.auth.logging;
export const selectUserLogin = (state: any) => state.auth.currentUser;

export const username = (state: any) => state.auth.currentUser;
//Reduces
const authReducer = authSile.reducer;
export default authReducer;
