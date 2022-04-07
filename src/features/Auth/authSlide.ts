import { INguoiDung, INguoiDungLogin } from './../../models/user';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface LoginPayload {
  taiKhoan: string;
  matKhau: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  currentUser?: INguoiDung;
  token?: string;
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
};

const authSile = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.logging = true;
    },
    loginSuccess(state, action: PayloadAction<INguoiDung>) {
      state.isLoggedIn = true;
      state.logging = false;
      state.currentUser = action.payload;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.logging = false;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
  },
});

//Actions
export const authActions = authSile.actions;

//Selector
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectIsLogging = (state: any) => state.auth.logging;

//Reduces
const authReducer = authSile.reducer;
export default authReducer;
