import { IGioiHang, ILicSuMuaHang, INguoiDung } from 'models';
import { Modal, Skeleton } from 'antd';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';

import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';
import moment from 'moment';
import payment from 'api/paymentAPI';
import { updateAction } from 'features/Infouser/InfouserSlide';
import { updateUser } from 'features/Infouser/InfouserSaga';

export default function HistoryPay() {
  const dispatch = useAppDispatch();
  const lichSuMua: ILicSuMuaHang[] | null = useAppSelector((state) => state.updateUser.payment);
  const isLoading = useAppSelector((state) => state.updateUser.isLoading)
  useEffect(() => {
    dispatch(updateAction.getPayment());
  }, []);

  if (!localStorage.getItem('access_token')) {
    return <Redirect to="/login" />;
  }

  const modalHistoryPay = (v: ILicSuMuaHang) => {
    Modal.success({
      content: (
        <div>
          <div className="flex flex-col max-w-5xl space-y-4 divide-y  divide-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100">
            <h2 className="text-2xl font-semibold">Order items</h2>
            <ul className="flex flex-col pt-4 space-y-2">
              {v.tongSanPham.map((product, index) =>
              {
                return (<li className="flex items-start justify-between" key={index}>
                <h3>
                  {product.tenSanPham}
                    <span className="text-sm dark:text-violet-400">x{product.soLuong}</span>
                </h3>
                <div className="text-right">
                    <span className="block">${product.giaTien.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") }</span>
                  <span className="text-sm dark:text-coolGray-400">sale {product.sale ? (product.giaTien - product.thanhTien).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") : "0"}</span>
                </div>
              </li>)
              })}
             
              
            </ul>
            <div className="pt-4 space-y-2">
              <div>
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{(v.tongTien + v.soTienGiam).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}</span>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-3 h-3 mt-1 fill-current dark:text-violet-400"
                  >
                    <path d="M485.887,263.261,248,25.373A31.791,31.791,0,0,0,225.373,16H64A48.055,48.055,0,0,0,16,64V225.078A32.115,32.115,0,0,0,26.091,248.4L279.152,486.125a23.815,23.815,0,0,0,16.41,6.51q.447,0,.9-.017a23.828,23.828,0,0,0,16.79-7.734L486.581,296.479A23.941,23.941,0,0,0,485.887,263.261ZM295.171,457.269,48,225.078V64A16.019,16.019,0,0,1,64,48H225.373L457.834,280.462Z"></path>
                    <path d="M148,96a52,52,0,1,0,52,52A52.059,52.059,0,0,0,148,96Zm0,72a20,20,0,1,1,20-20A20.023,20.023,0,0,1,148,168Z"></path>
                  </svg>
                  <span className="dark:text-coolGray-400">Spend $20.00, get 20% off</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span>{ v.soTienGiam.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}</span>
              </div>
            </div>
            <div className="pt-4 space-y-2">
            <div className="flex justify-between">
                <span>Customer</span>
                <span>{v.hoTen}</span>
              </div>
              <div className="flex justify-between">
                <span>Email</span>
                <span>{v.email}</span>
              </div>
              <div className="flex justify-between">
                <span>Date buy</span>
                <span>{moment(v.ngayDat).format('MMMM Do YYYY, h:mm:ss a')}</span>
              </div>
              <div className="flex justify-between">
                <span>Address</span>
                <span>{v.diaChi}</span>
              </div>
              <div className="flex justify-between">
                <span>Number Phone</span>
                <span>{v.soDt}</span>
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between">
                  <span>Total</span>
                  <span className="font-semibold">${v.tongTien.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}</span>
                </div>
                <button
                  type="button"
                  className="w-full py-2 font-semibold border rounded dark:bg-violet-400 dark:text-coolGray-900 dark:border-violet-400"
                >
                  <span className="text-lg font-semibold inline-block py-1 px-2  rounded text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1">
  {v.trangThai}
</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ),
    });
  };
  let arrayCheckLoding = [1, 2, 3, 4, 5, 6];
  const mapLichSu = !isLoading ? lichSuMua?.map((v, index) => {
    return (
      <div className="py-12 px-8  bg-gray-50 shadow-xl " key={index}>
        <div className="h-full flex items-start">
          <div className="w-18 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-500 pb-6 mb-2 border-b-6 border-gray-200 text-2xl">
              {' '}
              {moment(v.ngayDat).format('MMMM')}
            </span>
            <span className="font-medium text-3xl text-gray-800 title-font leading-none ">
              {moment(v.ngayDat).format('Do')}
            </span>
          </div>
          <div className="flex-grow pl-6">
            <div>
              <h2 className="tracking-widest text-2xl title-font font-medium text-indigo-500 mb-1">
                Status: {v.trangThai}
              </h2>
              <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                quantity: {v.tongSanPham?.length}
              </h1>
            </div>
            <div className="flex justify-between  mt-5">
              <h1 className="title-font text-3xl font-medium text-gray-900 mb-3">
                Total: {v.tongTien.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}
              </h1>
              <div>
                <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                  Total:{' '}
                  {(v.tongTien + v.soTienGiam)
                    .toString()
                    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}
                </h1>
                <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                  Sale: - {v.soTienGiam.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}
                </h1>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <a className="inline-flex items-center">
                <img
                  alt={v.hoTen}
                  src={v.avatar}
                  className="w-14 h-14 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-3">
                  <span className="title-font font-medium text-gray-900 text-2xl ">{v.hoTen}</span>
                </span>
              </a>
              <button
                onClick={() => {modalHistoryPay(v)}}
                data-modal-toggle="defaultModal"
                type="button"
                className="mr-10 block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }) : arrayCheckLoding.map((v, index) =>
  {
    return (
      <div className="py-12 px-8  bg-gray-50 shadow-xl " key={index}>
        <Skeleton.Input block active></Skeleton.Input>
        <Skeleton.Input block active></Skeleton.Input>
        <Skeleton.Input block active></Skeleton.Input>
        <Skeleton.Input block active></Skeleton.Input>
        <Skeleton.Avatar active></Skeleton.Avatar>
    </div>
    )
  })
  return (
    <div>
      <section className="text-gray-600 body-font my-20 max-w-8xl m-auto ">
        {lichSuMua?.length !== 0 ? (
          <div className="container px-10 py-28 mx-auto">
            <div className=" -mx-8 -my-12 grid  grid-cols-3 gap-4">{mapLichSu}</div>{' '}
          </div>
        ) : (
          <div>
            <article className="max-w-2xl px-6 py-24 mx-auto space-y-12 dark:bg-coolGray-800 dark:text-coolGray-50 ">
              <div className="w-full mx-auto space-y-4 text-center">
                <p className="text-xs font-semibold tracking-wider uppercase">#TailwindCSS</p>
                <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                  Interdum et malesuada fames ac ante ipsum primis in faucibus?
                </h1>
                <p className="text-sm dark:text-coolGray-400">
                  by
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    target="_blank"
                    className="underline dark:text-violet-400"
                  >
                    <span>Leroy Jenkins</span>
                  </a>
                  on
                  <time>Feb 12th 2021</time>
                </p>
              </div>
              <div className="dark:text-coolGray-100">
                <p>Insert the actual text content here...</p>
              </div>
              <div className="pt-12 border-t dark:border-coolGray-700">
                <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                  <img
                    src="https://source.unsplash.com/75x75/?portrait"
                    alt=""
                    className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-coolGray-500 dark:border-coolGray-700 "
                  />
                  <div className="flex flex-col">
                    <h4 className="text-lg font-semibold">Leroy Jenkins</h4>
                    <p className="dark:text-coolGray-400">
                      Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit
                      ligula, semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi
                      luctus ligula euismod lobortis ultricies et nibh.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center pt-4 space-x-4 align-center">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="GitHub"
                    className="p-2 rounded-md dark:text-coolGray-100 hover:dark:text-violet-400"
                  >
                    <svg
                      viewBox="0 0 496 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Dribble"
                    className="p-2 rounded-md dark:text-coolGray-100 hover:dark:text-violet-400"
                  >
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"></path>
                    </svg>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Twitter"
                    className="p-2 rounded-md dark:text-coolGray-100 hover:dark:text-violet-400"
                  >
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                    </svg>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Email"
                    className="p-2 rounded-md dark:text-coolGray-100 hover:dark:text-violet-400"
                  >
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          </div>
        )}
      </section>

      <div
        id="defaultModal"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
      >
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                Terms of Service
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts new consumer privacy
                laws for its citizens, companies around the world are updating their terms of
                service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect
                on May 25 and is meant to ensure a common set of data rights in the European Union.
                It requires organizations to notify users as soon as possible of high-risk data
                breaches that could personally affect them.
              </p>
            </div>

            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                data-modal-toggle="defaultModal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                I accept
              </button>
              <button
                data-modal-toggle="defaultModal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
