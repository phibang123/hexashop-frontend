import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { incrementAsync, incrementSaga, incrementSagaSuccess } from './counterSlice';

import { PayloadAction } from '@reduxjs/toolkit';

export function* log(action: PayloadAction) {
  console.log('Log', action);
}

function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log(`Handle crement saga ${action.payload}`);

  yield delay(2000);

  console.log('Waiting done, dispath action');

  yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
  console.log('counter saga');
  yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
}
