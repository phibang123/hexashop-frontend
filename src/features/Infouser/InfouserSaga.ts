import { LoginRespon, ProfileRes } from './../Login/types/index';
import { all, call, cancel, delay, fork, put, take, takeLatest } from 'redux-saga/effects';
import { toastError, toastLoading, toastSuccess } from './../../utils/toast/hotToast';

import { ILicSuMuaHang } from './../../models/historyPay';
import { INguoiDungEdit } from './../../models/user';
import { LichSuRespon } from 'features/HistoryPay/types';
import { LikeRespon } from './../Likes/types/index';
import { PayloadAction } from '@reduxjs/toolkit';
import { authActions } from 'features/Login/loginSlice';
import payment from 'api/paymentAPI';
import { push } from 'connected-react-router';
import { toast } from 'react-hot-toast';
import { updateAction } from './InfouserSlide';
import userApi from 'api/userAPI';

function* handleSetLike(payload: string) {
  try {
    toastLoading();
    const user: LikeRespon = yield call(() => userApi.Like(payload));
    yield put(authActions.loginSuccess(user.data));
    toast.dismiss();
    toastSuccess('Success');
    yield cancel();
  } catch (error: any) {
    toast.dismiss();
    if (error.response?.data.status === 401) {
      yield put(push('/login'));
      toastError(error.response?.data.message);
      yield cancel();
    }
    toastError(error.response?.data.message);
    yield cancel();
  }
}
function* watchSetLike() {
  while (true) {
    const action: PayloadAction<string> = yield take(updateAction.setLike.type);
    yield fork(handleSetLike, action.payload);
  }
}
//------------------------
function* handleGetPayment() {
  try {
    const lichsumua: LichSuRespon = yield call(() => payment.getByUser());
    yield put(updateAction.succesGetPayment(lichsumua.data));
  } catch (error: any) {
    if (error.response?.data.status === 401) {
      yield put(push('/login'));
      toastError(error.response?.data.message);
      yield cancel();
    }
    toastError('Some thing wrong!');
  }
}
function* watchGetPayment() {
  yield takeLatest(updateAction.getPayment.type, handleGetPayment);
}

//------------------------

function* handleUpdateProfile(payload: INguoiDungEdit) {
  try {
    toastLoading();
    const userUpdate: ProfileRes = yield call(() => userApi.updateProfile(payload));
    yield put(authActions.returnProfile(userUpdate.data));
    toast.dismiss();
    yield put(updateAction.success());
    toastSuccess('Success');
    yield cancel();
  } catch (error: any) {
    toast.dismiss();
    yield cancel();
    if (error.response?.data.status === 401) {
      yield put(push('/login'));
      toastError(error.response?.data.message);
    }
    toastError(error.response?.data.message);
  }
}
function* watchUpdateProfile() {
  while (true) {
    const action: PayloadAction<INguoiDungEdit> = yield take(updateAction.updateEditProfile.type);
    yield fork(handleUpdateProfile, action.payload);
  }
}
//------------------------

function* handleRemoveCart(payload: string) {
  try {
    toastLoading();
    const user: LikeRespon = yield call(() => userApi.deleteProductCart(payload));
    yield put(authActions.returnProfile(user.data));
    toast.dismiss();
    toastSuccess('Success');
    yield cancel();
  } catch (error: any) {
    toast.dismiss();
    if (error.response?.data.status === 401) {
      yield put(push('/login'));
      toastError(error.response?.data.message);
      yield cancel();
    }
    toastError(error.response?.data.message);
    yield cancel();
  }
}

function* watchRemoveCart() {
  while (true) {
    const action: PayloadAction<string> = yield take(updateAction.setRemoveCart.type);
    yield fork(handleRemoveCart, action.payload);
  }
}

//------------------------

function* handleAddCart(payload: string) {
  try {
    toastLoading();
    const user: LikeRespon = yield call(() => userApi.addCart(payload));
    yield put(authActions.returnProfile(user.data));
    toast.dismiss();
    toastSuccess('Success');
    yield cancel();
  } catch (error: any) {
    toast.dismiss();
    if (error.response?.data.status === 401) {
      yield put(push('/login'));
      toastError(error.response?.data.message);
      yield cancel();
    }
    toastError(error.response?.data.message);
    yield cancel();
  }
}
function* watchAddCart() {
  while (true) {
    const action: PayloadAction<string> = yield take(updateAction.setAddCart.type);
    yield fork(handleAddCart, action.payload);
  }
}

//------------------------

function* handleAddCartRedirest(payload: string) {
  try {
    const user: LikeRespon = yield call(() => userApi.addCart(payload));
    yield put(authActions.returnProfile(user.data));
    yield put(push('/carts'));
    yield toastSuccess('Success');
    yield cancel();
  } catch (error: any) {
    if (error.response?.data.status === 401) {
      yield put(push('/login'));
      toastError(error.response?.data.message);
      yield cancel();
    }
    yield toastError(error.response?.data.message);
    yield cancel();
  }
}
function* watchAddCartRedirest() {
  while (true) {
    const action: PayloadAction<string> = yield take(updateAction.setAddCartRedirest.type);
    yield fork(handleAddCartRedirest, action.payload);
  }
}

//------------------------
function* handleReduceCart(payload: string) {
  try {
    yield toastLoading();
    const user: LikeRespon = yield call(() => userApi.reduceCart(payload));
    yield put(authActions.returnProfile(user.data));
    yield toast.dismiss();
    yield toastSuccess('Success');
    yield cancel();
  } catch (error: any) {
    yield toast.dismiss();
    if (error.response?.data.status === 401) {
      yield put(push('/login'));
      toastError(error.response?.data.message);
      yield cancel();
    }
    yield toastError('Some thing wrong!');
    yield cancel();
  }
}
function* watchReduceCart() {
  while (true) {
    const action: PayloadAction<string> = yield take(updateAction.setReduceCart.type);
    yield fork(handleReduceCart, action.payload);
  }
}
//------------------------
function* handleBuyCart() {
  try {
    yield toastLoading();
    const lichsumua: LichSuRespon = yield call(() => payment.byProduct());
    yield put(updateAction.succesGetPayment(lichsumua.data));
    yield put(push('/history'));
    yield toast.dismiss();
    yield toastSuccess('Buy project success');
    yield cancel();
  } catch (error: any) {
    yield toast.dismiss();
    yield toastError(error.response?.data.message);
    yield cancel();
  }
}

function* watchByCart() {
  yield takeLatest(updateAction.buyCart.type, handleBuyCart);
}
export function* updateUser() {
  yield all([
    watchSetLike(),
    watchGetPayment(),
    watchRemoveCart(),
    watchAddCart(),
    watchReduceCart(),
    watchByCart(),
    watchAddCartRedirest(),
    watchUpdateProfile(),
  ]);
}
