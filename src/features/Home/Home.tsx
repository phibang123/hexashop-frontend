import React from 'react';
import SlickCarousel from '../../components/slick/SlickCarousel';

export default function Home() {
  return (
    <>
      <div className="border-y-2 py-20 border-dashed mt-5">
        <div className="grid grid-rows-4 grid-cols-8 mx-9 gap-4 ">
          <div className="row-span-full  relative col-span-4">
            <img
              className="w-full "
              src="https://templatemo.com/templates/templatemo_571_hexashop/assets/images/left-banner-image.jpg"
            ></img>
            <div className="absolute z-10 top-1/2 left-1/2 w-max -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-slate-50 text-8xl mb-5 font-bold">We are Hexashop</h1>
              <p className="text-slate-100 text-2xl mb-10 italic font-thin">
                Awesome, clean & creative HTML5 Template
              </p>
              <button className="tex	t-3xl bg-transparent border-2 border-white hover:bg-white font-thin  text-white hover:text-black transition-all py-2 px-4 rounded">
                Purchase Now!
              </button>
            </div>
          </div>
          <div className="row-span-2 group  relative  col-span-2 ">
            <img
              className="w-full"
              src="https://templatemo.com/templates/templatemo_571_hexashop/assets/images/baner-right-image-01.jpg "
            ></img>
            <div className="absolute  z-10 top-1/2 left-1/2 w-max -translate-x-1/2 -translate-y-1/2 text-center group-hover:invisible group-hover:opacity-0 transition-all duration-500">
              <h1 className="text-slate-50 text-5xl mb-10 font-semibold">Woman</h1>
              <p className="text-slate-100 text-2xl mb-5 italic font-thin">
                Best Clothes for woman
              </p>
            </div>
            <div className="absolute  z-10 top-1/2 left-1/2 w-11/12 h-5/6 -translate-x-1/2 -translate-y-1/2 text-center group-hover:visible group-hover:opacity-80 invisible opacity-0 bg-black transition-all duration-500 flex justify-center items-center flex-col">
              <h1 className="text-slate-50 text-5xl mb-10 font-semibold ">Woman </h1>
              <p className="text-slate-100 text-2xl mb-5 italic font-thin">
                Best Clothes for woman
              </p>
              <button className="text-4xl bg-transparent border-2 border-white hover:bg-white font-thin  text-white hover:text-black transition-all py-2 px-4 rounded">
                Buy now!
              </button>
            </div>
          </div>
          <div className="row-span-2 group relative col-span-2">
            <img
              className="w-full"
              src="https://templatemo.com/templates/templatemo_571_hexashop/assets/images/baner-right-image-02.jpg"
            ></img>
            <div className="absolute  z-10 top-1/2 left-1/2 w-max -translate-x-1/2 -translate-y-1/2 text-center group-hover:invisible group-hover:opacity-0 transition-all duration-500">
              <h1 className="text-slate-50 text-5xl mb-10 font-semibold ">Woman</h1>
              <p className="text-slate-100 text-2xl mb-5 italic font-thin">
                Best Clothes for woman
              </p>
            </div>
            <div className="absolute  z-10 top-1/2 left-1/2 w-11/12 h-5/6 -translate-x-1/2 -translate-y-1/2 text-center group-hover:visible group-hover:opacity-80 invisible opacity-0 bg-black transition-all duration-500 flex justify-center items-center flex-col">
              <h1 className="text-slate-50 text-5xl mb-10 font-semibold ">Woman </h1>
              <p className="text-slate-100 text-2xl mb-5 italic font-thin">
                Best Clothes for woman
              </p>
              <button className="text-4xl bg-transparent border-2 border-white hover:bg-white font-thin  text-white hover:text-black transition-all py-2 px-4 rounded">
                Buy now!
              </button>
            </div>
          </div>
          <div className="row-span-2 group relative col-span-2">
            <img
              className="w-full"
              src="https://templatemo.com/templates/templatemo_571_hexashop/assets/images/baner-right-image-03.jpg"
            ></img>
            <div className="absolute  z-10 top-1/2 left-1/2 w-max -translate-x-1/2 -translate-y-1/2 text-center group-hover:invisible group-hover:opacity-0 transition-all duration-500">
              <h1 className="text-slate-50 text-5xl mb-10 font-semibold ">Woman</h1>
              <p className="text-slate-100 text-2xl mb-5 italic font-thin">
                Best Clothes for woman
              </p>
            </div>
            <div className="absolute  z-10 top-1/2 left-1/2 w-11/12 h-5/6 -translate-x-1/2 -translate-y-1/2 text-center group-hover:visible group-hover:opacity-80 invisible opacity-0 bg-black transition-all duration-500 flex justify-center items-center flex-col">
              <h1 className="text-slate-50 text-5xl mb-10 font-semibold ">Woman </h1>
              <p className="text-slate-100 text-2xl mb-5 italic font-thin">
                Best Clothes for woman
              </p>
              <button className="text-4xl bg-transparent border-2 border-white hover:bg-white font-thin  text-white hover:text-black transition-all py-2 px-4 rounded">
                Buy now!
              </button>
            </div>
          </div>
          <div className="row-span-2 group relative col-span-2">
            <img
              className="w-full"
              src="https://templatemo.com/templates/templatemo_571_hexashop/assets/images/baner-right-image-04.jpg"
            ></img>
            <div className="absolute  z-10 top-1/2 left-1/2 w-max -translate-x-1/2 -translate-y-1/2 text-center group-hover:invisible group-hover:opacity-0 transition-all duration-500">
              <h1 className="text-slate-50 text-5xl mb-10 font-semibold ">Woman</h1>
              <p className="text-slate-100 text-2xl mb-5 italic font-thin">
                Best Clothes for woman
              </p>
            </div>
            <div className="absolute  z-10 top-1/2 left-1/2 w-11/12 h-5/6 -translate-x-1/2 -translate-y-1/2 text-center group-hover:visible group-hover:opacity-80 invisible opacity-0 bg-black transition-all duration-500 flex justify-center items-center flex-col">
              <h1 className="text-slate-50 text-5xl mb-10 font-semibold ">Woman </h1>
              <p className="text-slate-100 text-2xl mb-5 italic font-thin">
                Best Clothes for woman
              </p>
              <button className="text-4xl bg-transparent border-2 border-white hover:bg-white font-thin  text-white hover:text-black transition-all py-2 px-4 rounded">
                Buy now!
              </button>
            </div>
          </div>
        </div>
      </div>
      <SlickCarousel></SlickCarousel>
      <SlickCarousel></SlickCarousel>
      <SlickCarousel></SlickCarousel>
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
                src="https://templatemo.com/templates/templatemo_571_hexashop/assets/images/explore-image-01.jpg"
                className="max-w-full max-h-max"
              ></img>
            </div>
          </div>
          <div className="col-start-3 col-end-4 row-start-2 row-end-3  bg-gray-200">
            <div className="w-full h-full">
              <img
                src="https://templatemo.com/templates/templatemo_571_hexashop/assets/images/explore-image-02.jpg"
                className="w-full h-max"
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
          <div className="grid grid-cols-6 mt-10">
            <img
              className="col-span-1"
              alt="socioal 1"
              src="	https://templatemo.com/templates/templatemo_571_hexashop/assets/images/instagram-01.jpg"
            ></img>
            <img
              className="col-span-1"
              alt="socioal 1"
              src="	https://templatemo.com/templates/templatemo_571_hexashop/assets/images/instagram-02.jpg"
            ></img>
            <img
              className="col-span-1"
              alt="socioal 1"
              src="	https://templatemo.com/templates/templatemo_571_hexashop/assets/images/instagram-03.jpg"
            ></img>
            <img
              className="col-span-1"
              alt="socioal 1"
              src="	https://templatemo.com/templates/templatemo_571_hexashop/assets/images/instagram-04.jpg"
            ></img>
            <img
              className="col-span-1"
              alt="socioal 1"
              src="	https://templatemo.com/templates/templatemo_571_hexashop/assets/images/instagram-05.jpg"
            ></img>
            <img
              className="col-span-1"
              alt="socioal 1"
              src="	https://templatemo.com/templates/templatemo_571_hexashop/assets/images/instagram-06.jpg"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
