import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Http2ServerRequest } from 'http2';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

type Anchor = 'top' | 'left' | 'bottom' | 'right';
export default function Header() {
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
      <h1 className="text-center my-8 font-bold text-4xl tracking-wide underline ">GIỎ HÀNG</h1>
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
  return (
    <div className={`${scrollPosition > 200 ? "fixed z-20 bg-white top-0 w-full max-w-full  px-96 mx-9" : "max-w-8xl"} transition-all duration-500  mx-auto flex py-10 justify-between items-center `}>
      <a href="/">
        <img src="https://templatemo.com/templates/templatemo_571_hexashop/assets/images/logo.png"></img>
      </a>
      <div className="md:block ">
        <ul className="flex">
          <li className="2xl:text-3xl xl:px-9 md:px-2  hover:text-sky-700 font-bold cursor-pointer  md:text-2xl">
            Home
          </li>
          <li className="2xl:text-3xl xl:px-9 md:px-2 hover:text-sky-700 font-bold cursor-pointer  md:text-2xl">
            Men's
          </li>
          <li className="2xl:text-3xl xl:px-9 md:px-2 hover:text-sky-700 font-bold cursor-pointer  md:text-2xl">
            Women's
          </li>
          <li className="2xl:text-3xl xl:px-9 md:px-2 hover:text-sky-700 font-bold cursor-pointer  md:text-2xl">
            Kid's
          </li>
          <li className="2xl:text-3xl xl:px-9 md:px-2 hover:text-sky-700 font-bold cursor-pointer  md:text-2xl">
            <a href="/products"> Product</a>
          </li>
          <li className="2xl:text-3xl xl:px-9 md:px-2 hover:text-sky-700 font-bold cursor-pointer  md:text-2xl">
            <a href="/detail">Detail</a>
          </li>
          <li className="2xl:text-3xl pl-xl:px-9 md:px-2 hover:text-sky-700 font-bold cursor-pointer  md:text-2xl">
            <a href="/login">Login</a>
          </li>
          <li className="2xl:text-3xl pl-xl:px-9 md:px-2 hover:text-sky-700 font-bold cursor-pointer  md:text-2xl ml-9">
            <div>
              {(['right'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                  <ShoppingCartIcon
                    fontSize="large"
                    color="primary"
                    onClick={toggleDrawer(anchor, true)}
                  >
                    {anchor}
                  </ShoppingCartIcon>
                  <SwipeableDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                  >
                    {list(anchor)}
                  </SwipeableDrawer>
                </React.Fragment>
              ))}
            </div>
          </li>
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
