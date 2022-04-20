import React from 'react';
import { liFooter } from '../../../utils/classTailwind/classTailwind';

export default function Footer() {
  return (
    <div className="bg-dark-primary text-white ">
      <div className="2xl:max-w-8xl mx-auto py-20">
        <div className="grid grid-rows-2 grid-cols-4">
          <div className="row-span-1 col-span-1">
            <img
              className="mb-10"
              src="https://templatemo.com/templates/templatemo_571_hexashop/assets/images/white-logo.png"
            ></img>
            <ul className="text-2xl font-medium ">
              <li className={`mb-5  ${liFooter} leading-8`}>
                16501 Collins Ave, Sunny Isles Beach, FL 33160, United States
              </li>
              <li className={`mb-5 ${liFooter} `}>hexashop@company.com</li>
              <li className={` ${liFooter} `}>010-020-0340</li>
            </ul>
          </div>
          <div className="row-span-1 col-span-1">
            <h1 className="text-3xl font-semibold mb-10 text-gray-500">Shopping & Categories</h1>
            <ul className="text-2xl font-medium">
              <li className={`mb-5 ${liFooter} `}>Men's Shopping</li>
              <li className={`mb-5 ${liFooter} `}>Women's Shopping</li>
              <li className={`${liFooter} `}>Kid's Shopping</li>
            </ul>
          </div>
          <div className="row-span-1 col-span-1">
            <h1 className="text-3xl font-semibold mb-10 text-gray-500">Useful Links</h1>
            <ul className="text-2xl font-medium">
              <li className={`mb-5 ${liFooter} `}>Homepage</li>
              <li className={`mb-5 ${liFooter}`}>About Us</li>
              <li className={`mb-5 ${liFooter}`}>Help</li>
              <li className={` ${liFooter}`}>Contact Us</li>
            </ul>
          </div>
          <div className="row-span-1 col-span-1">
            <h1 className="text-3xl font-semibold mb-10 text-gray-500">Help & Information</h1>
            <ul className="text-2xl font-medium">
              <li className={`mb-5 ${liFooter} `}>Help</li>
              <li className={`mb-5 ${liFooter} `}>FAQ's</li>
              <li className={`mb-5 ${liFooter} `}>Shipping</li>
              <li className={` ${liFooter} `}>Tracking ID</li>
            </ul>
          </div>
          <div className="row-span-2 col-span-full flex justify-center items-center border-t mt-20">
            <div className="my-20 text-center font-medium">
              <p className="text-2xl mb-3">Web được lấy ý tưởng và thực hiện</p>
              <p className="text-2xl mb-0">Nguồn: TemplateMo.com	&copy;</p>
              <p className="text-2xl">Framewords: ReactJS, Toolkit-Saga, TailWind, Antdesign</p>
              <p className="text-2xl">Trần Vũ Phi Bằng</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
