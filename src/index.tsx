import './index.css';

import * as serviceWorker from './serviceWorker';

import App from './App';
import { ConnectedRouter } from 'connected-react-router';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Toaster } from 'react-hot-toast';
import { history } from 'utils/history';
import { store } from './app/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <CssBaseline />
        <App />
      </ConnectedRouter>
      <Toaster
        position="top-right"
        toastOptions={{
        className: 'text-2xl',
      }}
     />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
