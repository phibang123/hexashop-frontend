import { all, call, cancel, delay, fork, put, take, takeLatest } from 'redux-saga/effects';
import { toastError, toastSuccess } from './../../utils/toast/hotToast';

import { ILicSuMuaHang } from './../../models/historyPay';
import { LichSuRespon } from 'features/HistoryPay/types';
import { LikeRespon } from './../Likes/types/index';
import { LoginRespon } from './../Login/types/index';
import { PayloadAction } from '@reduxjs/toolkit';
import { authActions } from 'features/Login/loginSlice';
import payment from 'api/paymentAPI';
import { push } from 'connected-react-router';
import { updateAction } from './InfouserSlide';
import userApi from 'api/userAPI';

function* handleSetLike(payload: string) {
  try {
    const user: LikeRespon = yield call(() => userApi.Like(payload));
    yield put(authActions.loginSuccess(user.data));
    toastSuccess('Success');
    yield cancel();
  } catch (error) {
    toastError('Some thing wrong!');
    yield cancel();
  }
}
function* watchUpdateAvata() {
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
  } catch (error) {
    toastError('Some thing wrong!');
  }
}
function* watchGetPayment() {
  yield takeLatest(updateAction.getPayment.type, handleGetPayment);
}

//------------------------

function* handleRemoveCart(payload: string) {
  try {
    const user: LikeRespon = yield call(() => userApi.deleteProductCart(payload));
    yield put(authActions.returnProfile(user.data));
    toastSuccess('Success');
    yield cancel();
  } catch (error) {
    toastError('Some thing wrong!');
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
    const user: LikeRespon = yield call(() => userApi.addCart(payload));
    yield put(authActions.returnProfile(user.data));
    toastSuccess('Success');
    yield cancel();
  } catch (error: any) {
    toastError('sản phẩm đã hết!');
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
    toastSuccess('Success');
    yield cancel();
  } catch (error) {
    toastError('sản phẩm đã hết!');
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
    const user: LikeRespon = yield call(() => userApi.reduceCart(payload));
    yield put(authActions.returnProfile(user.data));
    toastSuccess('Success');
    yield cancel();
  } catch (error) {
    toastError('Some thing wrong!');
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
    const lichsumua: LichSuRespon = yield call(() => payment.byProduct());
    yield put(updateAction.succesGetPayment(lichsumua.data));
    yield put(push('/history'));
    toastSuccess('Buy project success');
    yield cancel();
  } catch (error) {
    console.log(error);
    toastError('Some thing wrong!');
    yield cancel();
  }
}

function* watchByCart() {
  yield takeLatest(updateAction.buyCart.type, handleBuyCart);
}
export function* updateUser() {
  yield all([
    watchUpdateAvata(),
    watchGetPayment(),
    watchRemoveCart(),
    watchAddCart(),
    watchReduceCart(),
    watchByCart(),
    watchAddCartRedirest(),
  ]);
}
