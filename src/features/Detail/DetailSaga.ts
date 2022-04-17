import { all, call, cancel, delay, fork, put, take, takeLatest } from 'redux-saga/effects';
import { toastError, toastLoading, toastSuccess } from './../../utils/toast/hotToast';

import { PayloadAction } from '@reduxjs/toolkit';
import { PayloadIComment } from './types/index';
import { ProjectDetailRepon } from './types';
import { projectAction } from './DetailSlide';
import pruduct from 'api/productAPI';
import { push } from 'connected-react-router';
import { toast } from 'react-hot-toast';
import userApi from 'api/userAPI';

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

//--------------------

function* handlePostComment(payload: PayloadIComment) {
  try {
    yield toastLoading();
    let projectDetail: ProjectDetailRepon = yield call(() =>
      userApi.commentProduct({ comment: payload.comment }, payload.id)
    );
    yield put(projectAction.getProjectDetailCommentSuccess(projectDetail.data));
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

function* watchPostComment() {
  while (true) {
    const action: PayloadAction<PayloadIComment> = yield take(
      projectAction.pushCommentProduct.type
    );
    yield fork(handlePostComment, action.payload);
  }
  //yield takeLatest(action, handleLogin);
}

export function* projectSaga() {
  yield all([watchGetProject(), watchPostComment()]);
}
