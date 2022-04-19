import { Badge, Button, Dropdown, Menu } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';

import Box from '@mui/material/Box';
import { INguoiDung } from 'models';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { authActions } from 'features/Login/loginSlice';
import { productsActions } from 'features/Products/productSlice';

type Anchor = 'top' | 'left' | 'bottom' | 'right';
export default function Header() {
  const dispatch = useAppDispatch();
  const userReducer = useAppSelector((state) => state.auth.currentUser);
  useEffect(() => {
    dispatch(productsActions.getAllProduct());
  }, [userReducer]);

  useEffect(() => {
    dispatch(authActions.checkProfile());
    dispatch(productsActions.getAllProduct());
  }, []);
 
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,  
    right: false,
  });
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  // let userInfo!: INguoiDung;
  // if (checkInfo) {
  //   userInfo = JSON.parse(checkInfo);
  // }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


 

  const menu = (
    <Menu className="w-64">
      <Menu.Item key={1}>
        <NavLink exact to="/profile" className="">
          <li className="2xl:text-3xl xl:px-9 md:px-2 hover:text-sky-700 font-bold cursor-pointer  md:text-2xl flex justify-self-start">
            <i className="fa-solid fa-address-card  mr-2"></i> <p>Profile</p>
          </li>
        </NavLink>
      </Menu.Item>
      <Menu.Item key={2}> 
        <NavLink exact to="/history">
        <li
          className="2xl:text-3xl xl:px-9 md:px-2 hover:text-sky-700 font-bold cursor-pointer  md:text-2xl flex justify-self-start"
          // onClick={() => dispatch(authActions.logout())}
        >
          <i className="fa-solid fa-file-invoice-dollar  mr-2"></i> <p>History</p>
        </li>
        </NavLink>
      </Menu.Item>
      <Menu.Item key={3}>
      <NavLink exact to="/carts" className="">
        <li
          className="2xl:text-3xl xl:px-9 md:px-2 hover:text-sky-700 font-bold cursor-pointer  md:text-2xl flex justify-self-start"
          // onClick={() => dispatch(authActions.logout())}
        >
         <Badge count={userReducer?.gioHang.length || 0}> <i className=" fa-solid fa-cart-shopping  mr-2"></i></Badge>  <p className='ml-5'>Cart</p>
          </li>
          </NavLink>
      </Menu.Item>
      <Menu.Item key={4}>
        <NavLink exact to="/likes">
        <li
          className="2xl:text-3xl xl:px-9 md:px-2 hover:text-sky-700 font-bold cursor-pointer  md:text-2xl flex justify-self-start"
          // onClick={() => dispatch(authActions.logout())}
        >
          <i className="fa-solid fa-heart mr-2"></i> <p>Like</p>
        </li>
        </NavLink>
      </Menu.Item>
      <Menu.Item key={5}>
        <li
          className="2xl:text-3xl xl:px-9 md:px-2 hover:text-sky-700 font-bold cursor-pointer  md:text-2xl flex justify-self-start"
          onClick={() => dispatch(authActions.logout())}
        >
          <i className="fa-solid fa-arrow-right-from-bracket  mr-2"></i> <p>Log Out</p>
        </li>
      </Menu.Item>
    </Menu>
  );
  return (
    <div
      className={`${
        scrollPosition > 230 ? 'fixed z-20 bg-white top-0 w-full max-w-full  px-104' : 'max-w-8xl'
      } transition-all  duration-500  mx-auto flex py-10 justify-between items-center `}
    >
      <NavLink exact to="/">
        <img src="https://templatemo.com/templates/templatemo_571_hexashop/assets/images/logo.png"></img>
      </NavLink>
      <div className="md:block ">
        <ul className="flex items-center">
          <li className="2xl:text-3xl xl:px-9 md:px-2  hover:text-sky-700 font-bold cursor-pointer  md:text-2xl ">
            <NavLink exact to="/home" className="text-black">
              Home
            </NavLink>
          </li>
          <li className="2xl:text-3xl xl:px-9 md:px-2 hover:text-sky-700 font-bold cursor-pointer  md:text-2xl ">
    
            <NavLink exact to="/categories/nam_gioi" className="text-black">
            Men's
            </NavLink>
          </li>
          <li className="2xl:text-3xl xl:px-9 md:px-2 hover:text-sky-700 font-bold cursor-pointer  md:text-2xl ">
        
            <NavLink exact to="/categories/nu_gioi" className="text-black">
               Women's
            </NavLink>
          </li>
          <li className="2xl:text-3xl xl:px-9 md:px-2 hover:text-sky-700 font-bold cursor-pointer  md:text-2xl ">
           
            <NavLink exact to="/categories/tre_em" className="text-black">
            Kid's
            </NavLink>
          </li>
          <li className="2xl:text-3xl xl:px-9 md:px-2 hover:text-sky-700 font-bold cursor-pointer  md:text-2xl ">
            <NavLink exact to="/products" className="text-black">
              Product
            </NavLink>
          </li>
          <li className="2xl:text-3xl xl:px-9 md:px-2 hover:text-sky-700 font-bold cursor-pointer  md:text-2xl ">
            <NavLink exact to="/about" className="text-black">
              About
            </NavLink>
          </li>
          {userReducer ? (
            <Fragment>
              <li className="2xl:text-3xl xl:pl-9 md:pl-2 hover:text-sky-700 font-bold cursor-pointer  md:text-2xl">
                <Dropdown overlay={menu} placement="bottom" arrow={{ pointAtCenter: true }}>
                  <img
                    id="dropdownInformationButton"
                    alt="user"
                    data-dropdown-toggle="dropdownInformation"
                    className="w-20 h-20 rounded-full  hover:-translate-y-2 transition-all duration-500 cursor-pointer"
                    src={userReducer.avatar}
                  ></img>
                </Dropdown>
              </li>
            </Fragment>
          ) : (
            <Fragment>
              {' '}
              <li className="2xl:text-3xl xl:px-9 md:px-2 hover:text-sky-700 font-bold cursor-pointer  md:text-2xl ">
                <NavLink exact to="/login" className="text-black">
                  Log In
                </NavLink>
              </li>
              <li className="2xl:text-3xl xl:px-9 md:pl-2 hover:text-sky-700 font-bold cursor-pointer  md:text-2xl ">
                <NavLink exact to="/signup" className="text-black">
                  Sign Up
                </NavLink>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
      <div className="md:hidden">
        <label>
          <span>&rarr;</span>
        </label>
      </div>
    </div>
  );
}
