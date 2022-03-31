import './App.css';

// import { Route, Router, Switch } from 'react-router-dom';

import About from './pages/about/About';
import Home from './pages/home/Home';
import HomeTemplate from './templates/homeTemplate/HomeTemplate';
import React from 'react';
import { createBrowserHistory } from 'history';
import { Route, Router, Switch } from 'react-router';
import Login from 'pages/user/Login/Login';
import SignUp from 'pages/user/SignUp/SignUp';
import DetailTemplate from 'templates/detailTemPlate/DetailTemplate';
import Detail from 'pages/detail/Detail';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate exact path="/" Component={Home}></HomeTemplate>
        <HomeTemplate exact path="/about" Component={About}></HomeTemplate>
        <DetailTemplate exact path="/detail" Component={Detail}></DetailTemplate>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
