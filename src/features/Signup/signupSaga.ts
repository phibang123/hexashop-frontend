import { all, call, cancel, fork, put, take, takeLatest } from 'redux-saga/effects';
import { toastError, toastLoading, toastSuccess } from './../../utils/toast/hotToast';

import { INguoiDungInput } from './../../models/user';
import { PayloadAction } from '@reduxjs/toolkit';
import { ResignupRespon } from './types/index';
import { push } from 'connected-react-router';
import { signUpActions } from './signupSlide';
import { toast } from 'react-hot-toast';
import userApi from 'api/userAPI';

function* handleSignup(payload: INguoiDungInput) {
  try {
    yield toastLoading();
    yield call(() => userApi.signup(payload));
    yield put(signUpActions.signupSuccess());
    yield put(push('/login'));
    yield toast.dismiss();
    yield toastSuccess('Đăng ký thành công');
    yield cancel();
  } catch (error: any) {
    yield toast.dismiss();
    if (error.response?.data) {
      yield put(signUpActions.signupFails());
      toastError(error.response?.data.message);
      yield cancel();
    }
    yield put(signUpActions.signupFails());
    toastError('Error connect!');
    yield cancel();
  }
}

function* watchSignup() {
  while (true) {
    const action: PayloadAction<INguoiDungInput> = yield take(signUpActions.singup.type);
    yield fork(handleSignup, action.payload);
  }
}

export function* signupSaga() {
  yield all([watchSignup()]);
}
