import './App.css';
import 'antd/dist/antd.css';

import { Route, Router, Switch } from 'react-router';

import About from './features/About/About';
import AdminTemplate from "templates/adminTemplate/AdminTempalte"
import Cart from 'features/Cart/components/Cart';
import Categories from 'features/Categories/components/Categories';
import { CssBaseline } from '@mui/material';
import Detail from 'features/Detail/components/Detail';
import HistoryPay from 'features/HistoryPay/components/HistoryPay';
import Home from './features/Home/Home';
import HomeAdmin from "./Admin/Home/components/HomeAdmin"
import HomeTemplate from './templates/homeTemplate/HomeTemplate';
import Infouser from "features/Infouser/components/Infouser"
import Likes from 'features/Likes/components/Likes';
import Login from 'features/Login/components/Login';
import NotFound from "features/NotFound"
import ProductTemplate from 'templates/productTemplate/ProductTemplate';
import Productlist from 'features/Products/components/Productlist';
import SignUp from './features/Signup/components/Signup';
import ZetailTemplate from './templates/detailTemplate/DetailTemplate';

function App() {
  return (
    <Switch>
      <HomeTemplate exact path="/" Component={Home}></HomeTemplate>
      <HomeTemplate exact path="/home" Component={Home}></HomeTemplate>
      <HomeTemplate exact path="/about" Component={About}></HomeTemplate>
      <ZetailTemplate exact path="/profile" Component={Infouser}></ZetailTemplate>
      <ZetailTemplate exact path="/carts" Component={Cart}></ZetailTemplate>
      <ZetailTemplate exact path="/likes" Component={Likes}></ZetailTemplate>
      <ZetailTemplate exact path="/history" Component={HistoryPay}></ZetailTemplate>
      <ZetailTemplate exact path="/detail/:id" Component={Detail}></ZetailTemplate>
      <ZetailTemplate exact path="/products" Component={Productlist}></ZetailTemplate>
   
      <ZetailTemplate exact path="/categories/:categories" Component={Categories}></ZetailTemplate>
      
      <AdminTemplate exact path="/admin/" Component={HomeAdmin}></AdminTemplate>

      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
      <Route path='*' exact={true} component={NotFound} />
    </Switch>
  );
}

export default App;
