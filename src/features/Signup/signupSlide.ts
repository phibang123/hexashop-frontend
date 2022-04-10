import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';

import { INguoiDungInput } from 'models';
import { RootState } from './../../app/store';

export interface AuthState {
  isSignUp: boolean;
}

const initialState: AuthState = {
  isSignUp: false,
};

const signupSile = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    singup(state, action: PayloadAction<INguoiDungInput>) {
      state.isSignUp = true;
    },
    signupSuccess(state) {
      state.isSignUp = false;
    },
    signupFails(state) {
      state.isSignUp = false;
    },
  },
});

//Actions
export const signUpActions = signupSile.actions;

//Selector
export const selectIsLoggedIn = (state: RootState) => state.signup.isSignUp;

//Reduces
const signupReducer = signupSile.reducer;
export default signupReducer;
