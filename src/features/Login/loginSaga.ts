import { INguoiDung, INguoiDungLogin } from 'models';
import { LoginPayload, authActions } from '../Auth/authSlide';
import { LoginRespon, LoginType } from './types/index';
import { all, call, fork, put, take, takeLatest } from 'redux-saga/effects';
import { toastError, toastSuccess } from './../../utils/toast/hotToast';

import { PayloadAction } from '@reduxjs/toolkit';
import axiosClient from 'api/axiosClient';
import { push } from 'connected-react-router';
import userApi from 'api/userAPI';

function* handleLogin(payload: LoginPayload) {
  console.log(456);
  try {
    const reponese: LoginRespon = yield call(() =>
      userApi.login({
        taiKhoan: payload.taiKhoan,
        matKhau: payload.matKhau,
      })
    );
    yield localStorage.setItem('access_token', reponese.data.token);
    yield put(authActions.loginSuccess(reponese.data.user));
    yield put(push('/'));
    toastSuccess(reponese.message);
  } catch (error: any) {
    console.log(error);
    if (error.response?.data) {
      yield put(authActions.loginFailed(error.response?.data));
      return toastError(error.response?.data.message);
    }
    yield put(authActions.loginFailed('Error connect!'));
    return toastError('Error connect!');
  }
}

function* handleLogout() {
  console.log(123);
  localStorage.removeItem('access_token');
  yield put(push('/login'));
}

function* watchLogin() {
  const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
  yield fork(handleLogin, action.payload);
  //yield takeLatest(authActions.login.type, handleLogin);
}
function* watchLogout() {
  yield takeLatest(authActions.logout.type, handleLogout);
}

export function* loginSaga() {
  yield all([watchLogin(), watchLogout()]);
}
