import { Button, Dropdown, Menu } from 'antd';
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

type Anchor = 'top' | 'left' | 'bottom' | 'right';
export default function Header() {
  const dispatch = useAppDispatch();
  useEffect(() =>
  {
    dispatch(authActions.checkProfile())
  }, [])
  
  const userReducer = useAppSelector(state => state.auth.currentUser)
  console.log(userReducer)
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

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <h1 className="text-center my-8 font-bold text-4xl tracking-wide underline">GIỎ HÀNG</h1>
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <h2 className="text-left my-8 font-bold mx-6  ">TỔNG TIỀN :50$</h2>
    </Box>
  );

  const menu = (
    <Menu className='w-80'>
      <Menu.Item>
        <li className="2xl:text-3xl xl:px-9 md:px-2 hover:text-sky-700 font-bold cursor-pointer  md:text-2xl ">
          <NavLink exact to="/profile" className="text-black flex justify-between text-left">
            <i className="fa-solid fa-address-card"></i> <p >Profile</p>
          </NavLink>
        </li>
      </Menu.Item>
      <Menu.Item>
        <li
          className="2xl:text-3xl xl:px-9 md:px-2 hover:text-sky-700 font-bold cursor-pointer  md:text-2xl flex justify-between"
          // onClick={() => dispatch(authActions.logout())}
        >
          <i className="fa-solid fa-file-invoice-dollar"></i> <p>History</p> 
        </li>
      </Menu.Item>
      <Menu.Item>
        <li
          className="2xl:text-3xl xl:px-9 md:px-2 hover:text-sky-700 font-bold cursor-pointer  md:text-2xl flex justify-between"
          // onClick={() => dispatch(authActions.logout())}
        >
          <i className="fa-solid fa-cart-shopping"></i> <p>Cart</p>
        </li>
      </Menu.Item>
      <Menu.Item>
        <li
          className="2xl:text-3xl xl:px-9 md:px-2 hover:text-sky-700 font-bold cursor-pointer  md:text-2xl flex justify-between"
          // onClick={() => dispatch(authActions.logout())}
        >
          <i className="fa-solid fa-heart"></i> <p>Like</p>
        </li>
      </Menu.Item>
      <Menu.Item>
        <li
          className="2xl:text-3xl xl:px-9 md:px-2 hover:text-sky-700 font-bold cursor-pointer  md:text-2xl flex justify-between"
          onClick={() => dispatch(authActions.logout())}
        >
          <i className="fa-solid fa-arrow-right-from-bracket"></i> <p>Log Out</p>
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
            Men's
          </li>
          <li className="2xl:text-3xl xl:px-9 md:px-2 hover:text-sky-700 font-bold cursor-pointer  md:text-2xl ">
            Women's
          </li>
          <li className="2xl:text-3xl xl:px-9 md:px-2 hover:text-sky-700 font-bold cursor-pointer  md:text-2xl ">
            Kid's
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
              <li className="2xl:text-3xl xl:px-9 md:px-2 hover:text-sky-700 font-bold cursor-pointer  md:text-2xl">
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
              <li className="2xl:text-3xl xl:px-9 md:px-2 hover:text-sky-700 font-bold cursor-pointer  md:text-2xl ">
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
