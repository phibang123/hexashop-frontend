import { all } from 'redux-saga/effects';
import counterSaga from '../features/Counter/CounterSaga';
import { loginSaga } from '../features/Login/loginSaga';

function* helloSaga() {
  console.log('Hello saga');
}

export default function* rootSaga() {
  yield all([helloSaga(), loginSaga()]);
}
