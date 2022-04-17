import React, { useCallback, useMemo, useState } from 'react';

import { NavLink } from 'react-router-dom';
import { Skeleton } from 'antd';
import SlickCarouselKid from '../../components/slick/SlickCarousel';
import SlickCarouselMen from '../../components/slick/SlickCarousel';
import SlickCarouselWomen from '../../components/slick/SlickCarousel';
import { push } from 'connected-react-router';
import { useAppSelector } from 'app/hooks';

export default function Home() {
  const allProject = useAppSelector((state) => state.projectsReducer.allProduct);
  const productWomen = useMemo(() => {
    let productWomen = allProject?.filter((v) => {
      return v.categories.includes('nu_gioi');
    });
    return productWomen;
  }, [allProject]);

  const productMen = useMemo(() => {
    let productMen = allProject?.filter((v) => {
      return v.categories.includes('nam_gioi');
    });
    return productMen;
  }, [allProject]);

  const productKid = useMemo(() => {
    let productKid = allProject?.filter((v) => {
      return v.categories.includes('tre_em');
    });
    return productKid;
  }, [allProject]);

  return (
    <>
      <div className="border-y-2 py-20 border-dashed mt-5">
        <div className="grid grid-rows-4 grid-cols-8 mx-9 gap-4 ">
          {allProject ? (
            <div className="row-span-full  relative col-span-4 h-full">
              {' '}
              <img
                className="w-full h-full object-cover"
                // "https://templatemo.com/templates/templatemo_571_hexashop/assets/images/left-banner-image.jpg"
                src="https://images8.alphacoders.com/899/thumb-1920-899993.jpg"
              ></img>
              <div className="absolute z-10 top-1/2 left-1/2 w-max -translate-x-1/2 -translate-y-1/2 text-gray-900">
                <h1 className="text-8xl mb-5 font-bold text-gray-900">We are Hexashop</h1>
                <p className="text-2xl mb-10 italic font-thin ">
                  Awesome, clean & creative HTML5 Template
                </p>
              
              </div>{' '}
            </div>
          ) : (
            <Skeleton
              paragraph={{ rows: 20 }}
              active
              className="row-span-full  relative col-span-4 h-full"
            ></Skeleton>
          )}

          {allProject ? (
            <div className="row-span-2 group  relative  col-span-2 ">
              <img
                className="w-full h-full object-cover"
                src="https://images.alphacoders.com/965/thumb-1920-965894.jpg"
              ></img>
              <div className="absolute text-gray-900 z-10 top-1/2 left-1/2 w-max -translate-x-1/2 -translate-y-1/2 text-center group-hover:invisible group-hover:opacity-0 transition-all duration-500">
                <h1 className="text-5xl mb-10 font-semibold text-gray-900">Woman</h1>
                <p className=" text-2xl mb-5 italic font-thin">Best Clothes for woman</p>
              </div>
              <div className="absolute text-gray-300 z-10 top-1/2 left-1/2 w-11/12 h-5/6 -translate-x-1/2 -translate-y-1/2 text-center group-hover:visible group-hover:opacity-80 invisible opacity-0 bg-black transition-all duration-500 flex justify-center items-center flex-col">
                <h1 className=" text-5xl mb-10 font-semibold text-gray-300">Women </h1>
                <p className="text-2xl mb-5 italic font-thin">Best Clothes for Women</p>
                <NavLink to="/categories/nu_gioi" className="text-4xl bg-transparent border-white hover:bg-white font-thin  text-white hover:text-black transition-all py-2 px-4 rounded">
                  Buy now!
                </NavLink>
              </div>
            </div>
          ) : (
            <Skeleton
              paragraph={{ rows: 8 }}
              active
              className="row-span-2 group  relative  col-span-2"
            ></Skeleton>
          )}
          {allProject ? (
            <div className="row-span-2 group relative col-span-2">
              <img
                className="w-full h-full object-cover"
                src="https://images5.alphacoders.com/981/thumb-1920-981801.jpg"
              ></img>
              <div className="absolute text-gray-900 z-10 top-1/2 left-1/2 w-max -translate-x-1/2 -translate-y-1/2 text-center group-hover:invisible group-hover:opacity-0 transition-all duration-500">
                <h1 className="text-5xl mb-10 font-semibold text-gray-900">Men</h1>
                <p className="text-2xl mb-5 italic font-thin">Best Clothes for Men</p>
              </div>
              <div className="absolute text-gray-300 z-10 top-1/2 left-1/2 w-11/12 h-5/6 -translate-x-1/2 -translate-y-1/2 text-center group-hover:visible group-hover:opacity-80 invisible opacity-0 bg-black transition-all duration-500 flex justify-center items-center flex-col">
                <h1 className=" text-5xl mb-10 font-semibold text-gray-300">Men </h1>
                <p className="text-2xl mb-5 italic font-thin">Best Clothes for Men</p>
                <NavLink to="/categories/nam_gioi" className="text-4xl bg-transparent border-white hover:bg-white font-thin  text-white hover:text-black transition-all py-2 px-4 rounded">
                  Buy now!
                </NavLink>
              </div>
            </div>
          ) : (
            <Skeleton
              paragraph={{ rows: 8 }}
              active
              className="row-span-2 group  relative  col-span-2"
            ></Skeleton>
          )}
          {allProject ? (
            <div className="row-span-2 group relative col-span-2">
              <img
                className="w-full h-full object-cover"
                src="https://images8.alphacoders.com/911/thumbbig-911594.jpg"
              ></img>
              <div className="absolute text-gray-900  z-10 top-1/2 left-1/2 w-max -translate-x-1/2 -translate-y-1/2 text-center group-hover:invisible group-hover:opacity-0 transition-all duration-500">
                <h1 className=" text-5xl mb-10 font-semibold text-gray-900 ">Kid</h1>
                <p className="text-2xl mb-5 italic font-thin">
                  Best Clothes for Kid
                </p>
              </div>
              <div className="absolute text-gray-300  z-10 top-1/2 left-1/2 w-11/12 h-5/6 -translate-x-1/2 -translate-y-1/2 text-center group-hover:visible group-hover:opacity-80 invisible opacity-0 bg-black transition-all duration-500 flex justify-center items-center flex-col">
                <h1 className=" text-5xl mb-10 font-semibold text-gray-300 ">Kid </h1>
                <p className="text-slate-100 text-2xl mb-5 italic font-thin">
                  Best Clothes for Kid
                </p>
                <NavLink  to="/categories/tre_em" className="text-4xl bg-transparent  border-white hover:bg-white font-thin  text-white hover:text-black transition-all py-2 px-4 rounded">
                  Buy now!
                </NavLink>
              </div>
            </div>
          ) : (
            <Skeleton
              paragraph={{ rows: 8 }}
              active
              className="row-span-2 group  relative  col-span-2"
            ></Skeleton>
          )}
          {allProject ? (
            <div className="row-span-2 group relative col-span-2">
              <img
                className="w-full h-full object-cover"
                src="https://images4.alphacoders.com/121/thumbbig-1214522.jpg"
              ></img>
              <div className="absolute text-gray-900 z-10 top-1/2 left-1/2 w-max -translate-x-1/2 -translate-y-1/2 text-center group-hover:invisible group-hover:opacity-0 transition-all duration-500">
                <h1 className=" text-5xl mb-10 font-semibold text-gray-900">All Product</h1>
                <p className=" text-2xl mb-5 italic font-thin">Best Clothes for All Product</p>
              </div>
              <div className="absolute text-gray-300 z-10 top-1/2 left-1/2 w-11/12 h-5/6 -translate-x-1/2 -translate-y-1/2 text-center group-hover:visible group-hover:opacity-80 invisible opacity-0 bg-black transition-all duration-500 flex justify-center items-center flex-col">
                <h1 className=" text-5xl mb-10 font-semibold text-gray-300">All Product </h1>
                <p className=" text-2xl mb-5 italic font-thin">Best Clothes for All Product</p>
                <NavLink to='/products'
               
                  className="border-0 text-4xl bg-transparent  border-white hover:bg-white font-thin  text-white hover:text-black transition-all py-2 px-4 rounded"
                >
                  Buy now!
                </NavLink>
              </div>
            </div>
          ) : (
            <Skeleton
              paragraph={{ rows: 8 }}
              active
              className="row-span-2 group  relative  col-span-2"
            ></Skeleton>
          )}
        </div>
      </div>
      <SlickCarouselWomen sanPham={productWomen}></SlickCarouselWomen>

      <SlickCarouselMen sanPham={productMen}></SlickCarouselMen>

      <SlickCarouselKid sanPham={productKid}></SlickCarouselKid>
      <div className="border-t-2 border-dashed">
        <div className="2xl:max-w-8xl mx-auto my-32 grid grid-cols-4 grid-rows-2 gap-12">
          <div className="col-span-2 row-span-2">
            <h1 className="text-dark-primary font-bold text-6xl leading-relaxed mb-5">
              Explore Our Products
            </h1>
            <p className="text-gray-400 text-2xl italic my-10 leading-10">
              You are allowed to use this HexaShop HTML CSS template. You can feel free to modify or
              edit this layout. You can convert this template as any kind of ecommerce CMS theme as
              you wish.
            </p>
            <div className="flex justify-center">
              <i className="fa fa-quote-left text-6xl mr-5"></i>
              <p className="text-2xl text-black leading-10">
                You are not allowed to redistribute this template ZIP file on any other website.
                Thanks you
              </p>
            </div>
            <p className="text-gray-400 text-2xl italic my-10 leading-10">
              There are 5 pages included in this HexaShop Template and we are providing it to you
              for absolutely free of charge at our TemplateMo website. There are web development
              costs for us.
            </p>
            <p className="text-gray-400 text-2xl italic my-10 leading-10">
              If this template is beneficial for your website or business, please kindly support us
              a little via PayPal. Please also tell your friends about our great website. Thank you.
            </p>
            <button className="border border-black border-solid bg-transparent text-2xl px-7 py-4 hover:bg-black hover:text-white transition-all duration-500">
              Discover More
            </button>
          </div>
          <div className="col-start-3 col-end-4 row-start-1 row-end-2 bg-gray-200">
            <div className="w-full h-full flex justify-center items-center flex-col">
              <h1 className="text-dark-primary font-bold text-4xl leading-relaxed ">
                Leather Bags
              </h1>
              <p className="text-gray-400 text-2xl italic my-3">Latest Collection</p>
            </div>
          </div>
          <div className="col-start-4 col-end-5 row-start-1 row-end-2  bg-gray-200">
            <div className="w-full h-full">
              <img
                src="https://images3.alphacoders.com/113/thumb-1920-1135031.jpg"
                className="w-full  object-cover h-full"
              ></img>
            </div>
          </div>
          <div className="col-start-3 col-end-4 row-start-2 row-end-3  bg-gray-200">
            <div className="w-full h-full">
              <img
                src="https://images4.alphacoders.com/113/thumb-1920-1137894.jpg"
                className="w-full  object-cover h-full"
              ></img>
            </div>
          </div>
          <div className="col-start-4 col-end-5 row-start-2 row-end-3 bg-gray-200">
            <div className="w-full h-full flex justify-center items-center flex-col">
              <h1 className="text-dark-primary font-bold text-4xl leading-relaxed ">
                Leather Bags
              </h1>
              <p className="text-gray-400 text-2xl italic my-3 ">Latest Collection</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-dashed">
        <div className="2xl:max-w-8xl mx-auto my-32">
          <h1 className="text-dark-primary font-bold text-6xl leading-relaxed mb-5">
            Social Media
          </h1>
          <p className="text-gray-400 text-2xl italic">
            Details to details is what makes Hexashop different from the other themes.
          </p>
          <div className="grid grid-cols-6 mt-10 h-80">
            <img
              className="col-span-1 h-full object-cover"
              alt="socioal 1"
              src="https://images7.alphacoders.com/115/thumb-1920-1152964.jpg"
            ></img>
            <img
              className="col-span-1 h-full object-cover"
              alt="socioal 1"
              src="	https://images5.alphacoders.com/113/thumbbig-1134009.jpg"
            ></img>
            <img
              className="col-span-1 h-full object-cover"
              alt="socioal 1"
              src="	https://images5.alphacoders.com/114/thumbbig-1142155.png"
            ></img>
            <img
              className="col-span-1 h-full object-cover"
              alt="socioal 1"
              src="	https://images7.alphacoders.com/121/thumbbig-1215771.png"
            ></img>
            <img
              className="col-span-1 h-full object-cover"
              alt="socioal 1"
              src="https://images4.alphacoders.com/113/thumbbig-1130744.jpg"
            ></img>
            <img
              className="col-span-1 h-full object-cover "
              alt="socioal 1"
              src="https://images4.alphacoders.com/120/thumbbig-1202332.jpg"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
