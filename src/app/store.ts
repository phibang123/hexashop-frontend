import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import authReducer from 'features/Login/loginSlice';
import categoriesProductReducer from 'features/Categories/CategoriesSlide';
import createSagaMiddleware from 'redux-saga';
import { history } from 'utils/history';
import projectReducer from 'features/Detail/DetailSlide';
import projectsReducer from 'features/Products/productSlice';
import rootSaga from './rootSaga';
import signupReducer from 'features/Signup/signupSlide';
import updateUserReducer from 'features/Infouser/InfouserSlide';

const rootReducer = combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  signup: signupReducer,
  updateUser: updateUserReducer,
  projectReducer: projectReducer,
  projectsReducer: projectsReducer,
  categoriesProductReducer: categoriesProductReducer,
});

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(history)),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
