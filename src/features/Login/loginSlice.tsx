import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { SetStateAction } from "react";

interface loginProps {
  taiKhoan: String;
  matKhau: String;
}

interface TokenProps {
  content: {
    accessToken: string;
  };
}


const initialState = {
  profile: JSON.parse(localStorage.getItem("user") as string) || {},
  
};



const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login(state, action: PayloadAction<string>)
    {
    },
  }
})

// Action
export const authActions = authSlice.actions;


// Selection
// Reducer
const authReducer = authSlice.reducer
export default authReducer
