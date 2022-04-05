import './SlickCarousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { useState } from 'react';

import { Rating } from '@mui/material';
import Slider from 'react-slick';

// import Slider from 'react-slick';
// import Slider from 'react-slick';

// function SampleNextArrow(props) {
// 	const { className, style, onClick } = props;
// 	return (
// 		<div
// 			className={`${className} ${styleSlick["slick-next"]}`}
// 			style={{ ...style, display: "block" }}
// 			onClick={onClick}
// 		></div>
// 	);
// }

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

export default function SlickCarousel() {
  const [slick, setSlick] = useState({
    display: true,
  });
  const settings = {
    infinite: true,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 3,
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
            Women's Latest
          </h1>
          <p className="text-gray-400 text-2xl italic">
            Details to details is what makes Hexashop different from the other themes.
          </p>
        </div>
      </div>
      <div className="2xl:max-w-9xl mx-auto mb-40">
        <div
          style={{
            display: slick.display ? 'block' : 'none',
          }}
        >
          <Slider {...settings}>
            <div>
              <div className="flex justify-center">
                <div className=" max-w-xl group">
                  <div className="">
                    <div className="relative flex justify-center">
                      <a href="#!">
                        <img
                          className=""
                          src="https://templatemo.com/templates/templatemo_571_hexashop/assets/images/women-03.jpg"
                          alt=""
                        />
                      </a>
                      <div className="grid w-3/4 grid-cols-3 absolute z-10 top-full opacity-0  group-hover:-translate-y-32 group-hover:opacity-100 transition-all duration-500 ">
                        <div className="col-span-1 ">
                          <button className="h-20  w-20 flex justify-center items-center bg-white m-auto ">
                            <i className="fa fa-eye text-dark-primary text-3xl "></i>
                          </button>
                        </div>
                        <div className="col-span-1 ">
                          <button className="h-20  w-20 flex justify-center items-center bg-white m-auto ">
                            <i className="fa fa-eye text-dark-primary text-3xl "></i>
                          </button>
                        </div>
                        <div className="col-span-1 ">
                          <button className="h-20  w-20 flex justify-center items-center bg-white m-auto ">
                            <i className="fa fa-eye text-dark-primary text-3xl "></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-6 flex flex-col justify-between">
                    <div className="flex justify-between items-center my-5">
                      <h5 className="text-gray-900 text-4xl font-medium mb-2">Classin Spring</h5>
                      <Rating
                        style={{ color: 'black', fontSize: '2rem' }}
                        size="large"
                        name="half-rating"
                      />
                    </div>
                    <div>
                      <p className="text-gray-400 text-4xl">$130.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <div className=" max-w-xl group">
                  <div className="">
                    <div className="relative flex justify-center">
                      <a href="#!">
                        <img
                          className=""
                          src="https://templatemo.com/templates/templatemo_571_hexashop/assets/images/women-03.jpg"
                          alt=""
                        />
                      </a>
                      <div className="grid w-3/4 grid-cols-3 absolute z-10 top-full opacity-0  group-hover:-translate-y-32 group-hover:opacity-100 transition-all duration-500 ">
                        <div className="col-span-1 ">
                          <button className="h-20  w-20 flex justify-center items-center bg-white m-auto ">
                            <i className="fa fa-eye text-dark-primary text-3xl "></i>
                          </button>
                        </div>
                        <div className="col-span-1 ">
                          <button className="h-20  w-20 flex justify-center items-center bg-white m-auto ">
                            <i className="fa fa-eye text-dark-primary text-3xl "></i>
                          </button>
                        </div>
                        <div className="col-span-1 ">
                          <button className="h-20  w-20 flex justify-center items-center bg-white m-auto ">
                            <i className="fa fa-eye text-dark-primary text-3xl "></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-6 flex flex-col justify-between">
                    <div className="flex justify-between items-center my-5">
                      <h5 className="text-gray-900 text-4xl font-medium mb-2">Classin Spring</h5>
                      <Rating
                        style={{ color: 'black', fontSize: '2rem' }}
                        size="large"
                        name="half-rating"
                      />
                    </div>
                    <div>
                      <p className="text-gray-400 text-4xl">$130.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <div className=" max-w-xl group">
                  <div className="">
                    <div className="relative flex justify-center">
                      <a href="#!">
                        <img
                          className=""
                          src="https://templatemo.com/templates/templatemo_571_hexashop/assets/images/women-03.jpg"
                          alt=""
                        />
                      </a>
                      <div className="grid w-3/4 grid-cols-3 absolute z-10 top-full opacity-0  group-hover:-translate-y-32 group-hover:opacity-100 transition-all duration-500 ">
                        <div className="col-span-1 ">
                          <button className="h-20  w-20 flex justify-center items-center bg-white m-auto ">
                            <i className="fa fa-eye text-dark-primary text-3xl "></i>
                          </button>
                        </div>
                        <div className="col-span-1 ">
                          <button className="h-20  w-20 flex justify-center items-center bg-white m-auto ">
                            <i className="fa fa-eye text-dark-primary text-3xl "></i>
                          </button>
                        </div>
                        <div className="col-span-1 ">
                          <button className="h-20  w-20 flex justify-center items-center bg-white m-auto ">
                            <i className="fa fa-eye text-dark-primary text-3xl "></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-6 flex flex-col justify-between">
                    <div className="flex justify-between items-center my-5">
                      <h5 className="text-gray-900 text-4xl font-medium mb-2">Classin Spring</h5>
                      <Rating
                        style={{ color: 'black', fontSize: '2rem' }}
                        size="large"
                        name="half-rating"
                      />
                    </div>
                    <div>
                      <p className="text-gray-400 text-4xl">$130.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <div className=" max-w-xl group">
                  <div className="">
                    <div className="relative flex justify-center">
                      <a href="#!">
                        <img
                          className=""
                          src="https://templatemo.com/templates/templatemo_571_hexashop/assets/images/women-03.jpg"
                          alt=""
                        />
                      </a>
                      <div className="grid w-3/4 grid-cols-3 absolute z-10 top-full opacity-0  group-hover:-translate-y-32 group-hover:opacity-100 transition-all duration-500 ">
                        <div className="col-span-1 ">
                          <button className="h-20  w-20 flex justify-center items-center bg-white m-auto ">
                            <i className="fa fa-eye text-dark-primary text-3xl "></i>
                          </button>
                        </div>
                        <div className="col-span-1 ">
                          <button className="h-20  w-20 flex justify-center items-center bg-white m-auto ">
                            <i className="fa fa-eye text-dark-primary text-3xl "></i>
                          </button>
                        </div>
                        <div className="col-span-1 ">
                          <button className="h-20  w-20 flex justify-center items-center bg-white m-auto ">
                            <i className="fa fa-eye text-dark-primary text-3xl "></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-6 flex flex-col justify-between">
                    <div className="flex justify-between items-center my-5">
                      <h5 className="text-gray-900 text-4xl font-medium mb-2">Classin Spring</h5>
                      <Rating
                        style={{ color: 'black', fontSize: '2rem' }}
                        size="large"
                        name="half-rating"
                      />
                    </div>
                    <div>
                      <p className="text-gray-400 text-4xl">$130.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <div className=" max-w-xl group">
                  <div className="">
                    <div className="relative flex justify-center">
                      <a href="#!">
                        <img
                          className=""
                          src="https://templatemo.com/templates/templatemo_571_hexashop/assets/images/women-03.jpg"
                          alt=""
                        />
                      </a>
                      <div className="grid w-3/4 grid-cols-3 absolute z-10 top-full opacity-0  group-hover:-translate-y-32 group-hover:opacity-100 transition-all duration-500 ">
                        <div className="col-span-1 ">
                          <button className="h-20  w-20 flex justify-center items-center bg-white m-auto ">
                            <i className="fa fa-eye text-dark-primary text-3xl "></i>
                          </button>
                        </div>
                        <div className="col-span-1 ">
                          <button className="h-20  w-20 flex justify-center items-center bg-white m-auto ">
                            <i className="fa fa-eye text-dark-primary text-3xl "></i>
                          </button>
                        </div>
                        <div className="col-span-1 ">
                          <button className="h-20  w-20 flex justify-center items-center bg-white m-auto ">
                            <i className="fa fa-eye text-dark-primary text-3xl "></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-6 flex flex-col justify-between">
                    <div className="flex justify-between items-center my-5">
                      <h5 className="text-gray-900 text-4xl font-medium mb-2">Classin Spring</h5>
                      <Rating
                        style={{ color: 'black', fontSize: '2rem' }}
                        size="large"
                        name="half-rating"
                      />
                    </div>
                    <div>
                      <p className="text-gray-400 text-4xl">$130.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
