import './SlickCarousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { memo, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';

import { ISanPham } from 'models/product';
import { NavLink } from 'react-router-dom';
import { Rating } from '@mui/material';
import { Skeleton } from 'antd';
import Slider from 'react-slick';
import { toastError } from 'utils/toast/hotToast';
import { updateAction } from 'features/Infouser/InfouserSlide';

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-prev`}
      style={{ ...style, display: 'block', left: '-50px' }}
      onClick={onClick}
    ></div>
  );
}



function SlickCarousel(props: any) {
  const userNguoiDung = useAppSelector((state) => state.auth.currentUser);

  const dispatch = useAppDispatch();

  const customNameCatorory = props.sanPham?.[0].categories.split("/")[1].replace("_", " ").toUpperCase()
  const renderSlice = props?.sanPham?.map((v: ISanPham, index: number) => {
    return (
      <div key={index} className="p-10">
        <div className="flex justify-center ">
          <div className=" max-w-xl group  rounded-md overflow-hidden">
            <div className="">
              <div className="relative flex justify-center  ">
                <NavLink to={`/detail/${v._id}`}>
                  <img
                    className="w-full rounded border border-gray-200 "
                    src={v.hinhAnh}
                    alt=""
                  />
                </NavLink>
                <div className="grid w-3/4 grid-cols-3 absolute z-10 top-full opacity-0  group-hover:-translate-y-32 group-hover:opacity-100 transition-all duration-500 ">
                  <div className="col-span-1 ">
                    <NavLink
                      to={`/detail/${v._id}`}
                      className="h-20  w-20 flex justify-center items-center bg-white m-auto "
                    >
                      <i className="fa fa-eye text-dark-primary text-3xl "></i>
                    </NavLink>
                  </div>
                  <div className="col-span-1 ">
                    <button
                      onClick={() =>
                        v ? dispatch(updateAction.setAddCart(v?._id)) : toastError('Error')
                      }
                      className="h-20  w-20 flex justify-center items-center bg-white m-auto "
                    >
                      <i className="fa-solid fa-cart-arrow-down text-dark-primary text-3xl"></i>
                    </button>
                  </div>
                  <div className="col-span-1 ">
                    <button
                      onClick={() =>
                        v ? dispatch(updateAction.setAddCartRedirest(v?._id)) : toastError('Error')
                      }
                      className="h-20  w-20 flex justify-center items-center bg-white m-auto "
                    >
                      <i className="fa-solid fa-bag-shopping text-dark-primary text-3xl"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-6 flex flex-col justify-between">
              <div className="flex justify-between items-center my-5">
                <h5 className="text-gray-900 text-4xl font-medium mb-2">
                  {' '}
                  {v.tenSanPham.length > 25 ? v.tenSanPham.slice(0, 25) + '...' : v.tenSanPham}
                </h5>
                <div className="text-4xl">
                  <span className="text-gray-600  ml-3">
                    {v?.luotThich.tongLuotThich}
                    <i
                      onClick={() =>
                        v ? dispatch(updateAction.setLike(v?._id)) : toastError('Error')
                      }
                      className={`fa-solid fa-heart cursor-pointer transition-all duration-500 
                        ${
                          v?.luotThich.idNguoiDungs.findIndex((v) => {
                            return v.tenNguoiDung === userNguoiDung?.hoTen;
                          }) !== -1
                            ? 'text-red-700 hover:text-black'
                            : 'text-hover:text-red-700 hover:text-red-700'
                        }
                        `}
                    ></i>{' '}
                  </span>
                </div>
              </div>
              <div>
                <p className={` text-4xl ${v.sale ? 'text-red-700' : 'text-gray-400'}`}>
                  {v.thanhTien.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')} Đ{' '}
                  {v.sale ? (
                    <span className="text-2xl line-through text-gray-400">{v.giaTien}</span>
                  ) : (
                    ''
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  const [slick, setSlick] = useState({
    display: true,
  });
  const settings = {
    infinite: true,
    speed: 2000,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: (
      <div>
        <p>k</p>
        <i className="material-icons">navigate_next</i>
      </div>
    ),
    // nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="border-t-2 border-dashed">
      <div className="2xl:max-w-8xl mx-auto mt-40 mb-10 ">
        <div className="">
          <h1 className="text-dark-primary font-bold text-6xl leading-relaxed mb-5">
            {props.sanPham  ? customNameCatorory : <Skeleton.Input active></Skeleton.Input>}
          </h1>
          <p className="text-gray-400 text-2xl italic">
          {props.sanPham  ? " Details to details is what makes Hexashop different from the other themes." : <Skeleton paragraph={{rows: 6}} active></Skeleton>}
          </p>
        </div>
      </div>
      <div className="2xl:max-w-9xl mx-auto mb-40">
        <div
          style={{
            display: slick.display ? 'block' : 'none',
          }}
        >
          <Slider {...settings}>{renderSlice}</Slider>
        </div>
      </div>
    </div>
  );
}

export default memo(SlickCarousel);
