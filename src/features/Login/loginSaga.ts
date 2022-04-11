import { LoginRespon, LoginType, ProfileRes } from './types/index';
import { all, call, cancel, delay, fork, put, take, takeLatest } from 'redux-saga/effects';
import { toastError, toastLoading, toastSuccess } from './../../utils/toast/hotToast';

import { INguoiDungLogin } from './../../models/user';
import { PayloadAction } from '@reduxjs/toolkit';
import { authActions } from './loginSlice';
import axiosClient from 'api/axiosClient';
import { push } from 'connected-react-router';
import { toast } from 'react-hot-toast';
import userApi from 'api/userAPI';

function* handleLogin(payload: LoginType) {
  try {
    yield toastLoading();
    const reponese: LoginRespon = yield call(() =>
      userApi.login({
        taiKhoan: payload.taiKhoan,
        matKhau: payload.matKhau,
      })
    );
    yield localStorage.setItem('access_token', reponese.data.token);
    yield toast.dismiss();
    toastSuccess('Login success');
    yield delay(2000);
    yield put(authActions.loginSuccess(reponese.data.user));

    yield put(push('/'));
    yield window.location.reload();
    yield cancel();
  } catch (error: any) {
    yield toast.dismiss();
    if (error.response?.data) {
      yield put(authActions.loginFailed());
      toastError(error.response?.data.message);
      yield cancel();
    }
    yield put(authActions.loginFailed());
    toastError('Error connect!');
    yield cancel();
  }
}

function* handleLogout() {
  localStorage.removeItem('access_token');
  yield window.location.reload();
}

function* handleProfile() {
  try {
    const reponese: ProfileRes = yield call(() => userApi.getProfile());
    yield put(authActions.returnProfile(reponese.data));
  } catch (error: any) {
    if (localStorage.getItem('access_token')) {
      localStorage.removeItem('access_token');
      yield put(push('/login'));
      toastError('Error connect!');
    }
  }
}

function* watchLogin() {
  while (true) {
    const action: PayloadAction<LoginType> = yield take(authActions.login.type);
    yield fork(handleLogin, action.payload);
  }
  //yield takeLatest(action, handleLogin);
}
function* watchLogout() {
  yield takeLatest(authActions.logout.type, handleLogout);
}
function* watchUser() {
  yield takeLatest(authActions.checkProfile.type, handleProfile);
}

export function* loginSaga() {
  yield all([watchLogin(), watchLogout(), watchUser()]);
}
