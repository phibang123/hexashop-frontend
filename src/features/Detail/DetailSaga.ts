import { all, call, cancel, delay, fork, put, take, takeLatest } from 'redux-saga/effects';

import { PayloadAction } from '@reduxjs/toolkit';
import { ProjectDetailRepon } from './types';
import { projectAction } from './DetailSlide';
import pruduct from 'api/productAPI';
import { push } from 'connected-react-router';
import { toastError } from './../../utils/toast/hotToast';

function* handleGetProjectDetail(payload: string) {
  try {
    let projectDetail: ProjectDetailRepon = yield call(() => pruduct.getProjectById(payload));
    yield put(projectAction.getProjectDetailSuccess(projectDetail.data));
    yield cancel();
  } catch (error: any) {
    console.log(error);
    toastError("Can't not found project");
    yield put(push('/404'));
    yield cancel();
  }
}

function* watchGetProject() {
  while (true) {
    const action: PayloadAction<string> = yield take(projectAction.getProjectDetail.type);
    yield fork(handleGetProjectDetail, action.payload);
  }
  //yield takeLatest(action, handleLogin);
}

export function* projectSaga() {
  yield all([watchGetProject()]);
}
