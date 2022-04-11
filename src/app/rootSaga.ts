import { all } from 'redux-saga/effects';
import { loginSaga } from '../features/Login/loginSaga';
import { projectSaga } from 'features/Detail/DetailSaga';
import { projectsSaga } from 'features/Products/productSaga';
import { signupSaga } from 'features/Signup/signupSaga';
import { updateUser } from 'features/Infouser/InfouserSaga';

export default function* rootSaga() {
  yield all([loginSaga(), signupSaga(), updateUser(), projectSaga(), projectsSaga()]);
}
