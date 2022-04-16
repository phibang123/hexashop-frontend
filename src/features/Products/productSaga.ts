import { all, call, cancel, delay, fork, put, take, takeLatest } from 'redux-saga/effects';

import { PaginationParams } from './../../models/common';
import { PayloadAction } from '@reduxjs/toolkit';
import { ProfileRes } from './../Login/types/index';
import { productsActions } from './productSlice';
import { projectAllPaginitionRes } from './types/index';
import { projectAllRes } from './types';
import pruduct from 'api/productAPI';
import userApi from 'api/userAPI';

function* handleGetAllProduct() {
  try {
    const allProduct: projectAllRes = yield call(() => pruduct.getAll());
    yield put(productsActions.getAllProductSuccess(allProduct.data));
  } catch (error: any) {}
}

function* watchGetAllProject() {
  yield takeLatest(productsActions.getAllProduct.type, handleGetAllProduct);
}

//----------------------
function* handleGetAllProductPagination(payload: PaginationParams) {
  try {
    const allProductPagination: projectAllPaginitionRes = yield call(() =>
      pruduct.getAllPaganition(payload)
    );
    yield put(productsActions.getAllProductSuccessPaginition(allProductPagination.data));
    yield cancel;
  } catch (error) {
    yield cancel;
  }
}

function* watchGetAllProjectPagination() {
  while (true) {
    const action: PayloadAction<PaginationParams> = yield take(
      productsActions.getAllProductPaginition.type
    );
    yield fork(handleGetAllProductPagination, action.payload);
  }
}

export function* projectsSaga() {
  yield all([watchGetAllProject(), watchGetAllProjectPagination()]);
}
