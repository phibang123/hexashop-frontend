import './App.css';

import { Route, Router, Switch } from 'react-router';

import About from './features/About/About';
import {Counter} from "./features/Counter/Counter"
import Detail from 'features/Detail/Detail';
import DetailTemplate from 'templates/detailTemPlate/DetailTemplate';
import Home from './features/Home/Home';
import HomeTemplate from './templates/homeTemplate/HomeTemplate';
import InfomationTemP from 'templates/InfomationTemplate/InfomationTemP';
import Infouser from 'features/Infouser/Infouser';
import Login from 'features/Login/components/Login';
import ProductTemplate from 'templates/Products/ProductTemplate';
import Productlist from 'features/Products/Productlist';
import SignUp from 'features/user/SignUp/SignUp';
import { createBrowserHistory } from 'history';




export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate exact path="/" Component={Home}></HomeTemplate>
        <HomeTemplate exact path="/about" Component={About}></HomeTemplate>
        <DetailTemplate exact path="/detail" Component={Detail}></DetailTemplate>
        <ProductTemplate exact path="/products" Component={Productlist}></ProductTemplate>
        <InfomationTemP exact path="/info" Component={Infouser}></InfomationTemP>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
