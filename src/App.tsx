import './App.css';
import 'antd/dist/antd.css';

import { Route, Router, Switch } from 'react-router';

import About from './features/About/About';
import AdminTemplate from "templates/adminTemplate/AdminTempalte"
import Cart from 'features/Cart/components/Cart';
import Categories from 'features/Categories/components/Categories';
import Detail from 'features/Detail/components/Detail';
import DetailTemplate from 'templates/detailTemplate/DetailTemplate'
import HistoryPay from 'features/HistoryPay/components/HistoryPay';
import Home from './features/Home/Home';
import HomeAdmin from "./Admin/Home/components/HomeAdmin"
import HomeTemplate from 'templates/homeTemplate/HomeTemplate';
import Infouser from "features/Infouser/components/Infouser"
import Likes from 'features/Likes/components/Likes';
import Login from 'features/Login/components/Login';
import NotFound from "features/NotFound"
import Productlist from 'features/Products/components/Productlist';
import SignUp from './features/Signup/components/Signup';

function App() {
  return (
    <Switch>
      <HomeTemplate exact path="/" Component={Home}></HomeTemplate>
      <HomeTemplate exact path="/home" Component={Home}></HomeTemplate>
      <HomeTemplate exact path="/about" Component={About}></HomeTemplate>
      <DetailTemplate exact path="/profile" Component={Infouser}></DetailTemplate>
      <DetailTemplate exact path="/carts" Component={Cart}></DetailTemplate>
      <DetailTemplate exact path="/likes" Component={Likes}></DetailTemplate>
      <DetailTemplate exact path="/history" Component={HistoryPay}></DetailTemplate>
      <DetailTemplate exact path="/detail/:id" Component={Detail}></DetailTemplate>
      <DetailTemplate exact path="/products" Component={Productlist}></DetailTemplate>
      <DetailTemplate exact path="/categories/:categories" Component={Categories}></DetailTemplate>
      {/* <AdminTemplate exact path="/admin/" Component={HomeAdmin}></AdminTemplate> */}
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
      <Route path='*' exact={true} component={NotFound} />
    </Switch>
  );
}

export default App;
