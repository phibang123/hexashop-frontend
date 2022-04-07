import { INguoiDung, INguoiDungLogin } from 'models';
import { LoginPayload, authActions } from '../Auth/authSlide';
import { call, fork, put, take } from 'redux-saga/effects';
import { toastError, toastSuccess } from './../../utils/toast/hotToast';

import { LoginRespon } from './types/index';
import { PayloadAction } from '@reduxjs/toolkit';
import axiosClient from 'api/axiosClient';
import { push } from 'connected-react-router';
import userApi from 'api/userAPI';

function* handleLogin(payload: LoginPayload) {
  console.log({ taiKhoan: payload.taiKhoan, matKhau: payload.matKhau });
  try {
    const reponese: LoginRespon = yield call(() =>
      userApi.login({
        taiKhoan: payload.taiKhoan,
        matKhau: payload.matKhau,
      })
    );

    yield put(push('/'));
    toastSuccess(reponese.message);
  } catch (error: any) {
    console.log(error.response?.data);
    yield put(authActions.loginFailed(error.response?.data));
    toastError(error.response?.data.message);
  }
}

function* handleLogout() {
  localStorage.removeItem('access_token');
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload);
    }
    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}

export function* loginSaga() {
  yield fork(watchLoginFlow);
}
