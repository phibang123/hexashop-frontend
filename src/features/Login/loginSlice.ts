import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';

import { INguoiDung } from '../../models/user';
import { LoginType } from './types';
import { RootState } from './../../app/store';

export interface AuthState {
  isLoggedIn: boolean;
  currentUser: INguoiDung | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  currentUser: null,
};

const authSile = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginType>) {
      state.isLoggedIn = true;
    },
    loginSuccess(state, action: PayloadAction<INguoiDung>) {
      //return { ...state, currentUser: action.payload, isLoggedIn: true, logging: true };
      // state.currentUser = action.payload;
      state.isLoggedIn = false;
      state.currentUser = action.payload;
    },
    loginFailed(state) {
      state.isLoggedIn = false;
    },
    logout(state) {
      state.currentUser = null;
    },
    checkProfile(state, action: PayloadAction) {},

    returnProfile(state, action: PayloadAction<INguoiDung>) {
      state.currentUser = action.payload;
    },
  },
  // extraReducers: {
  //   [dataFetch]: (state:any, action: PayloadAction<INguoiDung>) => {
  //     state.currentUser = action.payload;
  //   },
  // },
});

//Actions
export const authActions = authSile.actions;

//Selector
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectUserLogin = (state: RootState) => state.auth.currentUser;

//Reduces
const authReducer = authSile.reducer;
export default authReducer;
