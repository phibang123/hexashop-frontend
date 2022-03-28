import './App.css';

import { Route, Router, Switch } from 'react-router-dom';

import About from './pages/about/About';
import Home from './pages/home/Home';
import HomeTemplate from './templates/homeTemplate/HomeTemplate';
import React from 'react';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate exact path="/" Component={Home}></HomeTemplate>
        <HomeTemplate exact path="/about" Component={About}></HomeTemplate>
      </Switch>
    </Router>
  );
}

export default App;
