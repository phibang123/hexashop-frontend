import { all, call, cancel, delay, fork, put, take, takeLatest } from 'redux-saga/effects';

import { ProfileRes } from './../Login/types/index';
import { productsActions } from './productSlice';
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

export function* projectsSaga() {
  yield all([watchGetAllProject()]);
}
