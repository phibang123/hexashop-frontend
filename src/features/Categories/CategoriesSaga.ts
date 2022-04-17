import { all, call, cancel, delay, fork, put, take, takeLatest } from 'redux-saga/effects';

import { ICategoryResponse } from './../../models/categores';
import { ListResponseARR } from './../../models/common';
import { PayloadAction } from '@reduxjs/toolkit';
import cateegories from 'api/categoryAPI';
import { categoriesAction } from './CategoriesSlide';
import { categoriesReponse } from './types/index';
import { toastError } from './../../utils/toast/hotToast';

function* handleGetCategoriesProduct(payload: string) {
  try {
    const categories: categoriesReponse = yield call(() => cateegories.getAll(payload));
    yield put(categoriesAction.succesGetCategoriesProduct(categories.data));

    yield cancel();
  } catch (error: any) {
    toastError(error.response?.data.message);
    yield cancel();
  }
}

function* watchGetCategoriesProduct() {
  while (true) {
    const action: PayloadAction<string> = yield take(categoriesAction.getCategoriesProduct.type);
    yield fork(handleGetCategoriesProduct, action.payload);
  }
}

export function* categoriesProduct() {
  yield all([watchGetCategoriesProduct()]);
}
