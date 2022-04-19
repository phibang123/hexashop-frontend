import { Pagination, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import productsReducer, { productsActions } from '../productSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';

import DetailBanner from '../../Detail/components/DetailBanner';
import { NavLink } from 'react-router-dom';
import SkeletonImage from 'antd/lib/skeleton/Image';
import { updateAction } from 'features/Infouser/InfouserSlide';

export default function Productlist() {
  const dispatch = useAppDispatch();
  const [current, setCurrent] = useState(1);
  useEffect(() => {
    dispatch(productsActions.getAllProductPaginition({ limit: 8 }));
  }, []);

  //const allProject = useAppSelector((state) => state.projectsReducer.allProduct);
  const productPagination = useAppSelector((state) => state.projectsReducer.producPaginition);
  const isLoadingProduct = useAppSelector((state) => state.projectsReducer.isLoadingProject);
  const totalPagination = useAppSelector((state) => state.projectsReducer.total);
  const userNguoiDung = useAppSelector((state) => state.auth.currentUser);

  let arrayCheckLoding = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className='border-t-4 pt-2 border-dotted'>
      <div>
        <DetailBanner />
      </div>
      <div className=" text-center mb-8 mt-10 mx-0">
        <h2 className='text-6xl font-bold text-gray-900'>Our Latest Products</h2>
        <span className='text-3xl font-medium italic text-gray-400'>Check out all of our products.</span>
      </div>
      <div className="bg-white">
        <div className="max-w-8xl mx-auto py-16 px-4 ">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-4 gap-20">
            {!isLoadingProduct
              ? productPagination?.map((product, index) => (
                  <div
                    key={product._id}
                    className="group col-span-1 rounded-lg overflow-hidden bg-gray-50 shadow-xl"
                  >
                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-50 overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                      <NavLink to={`/detail/${product._id}`}>
                        {isLoadingProduct && <Skeleton.Image />}
                        <img
                          src={product.hinhAnh}
                          alt={product.tenSanPham}
                          className="w-full max-h-96 object-center object-cover "
                        />
                      </NavLink>
                    </div>
                    <div className="px-5">
                      <h3 className="mt-4 text-2xl text-gray-900">
                        {product.tenSanPham.length > 30
                          ? product.tenSanPham.slice(0, 25) + ' ...'
                          : product.tenSanPham}
                      </h3>
                      <div className="text-2xl">
                        <i
                          className={`fa-solid fa-heart  ml-2  ${
                            product?.luotThich.idNguoiDungs.findIndex((v) => {
                              return v.tenNguoiDung === userNguoiDung?.hoTen;
                            }) !== -1
                              ? 'text-red-900'
                              : 'text-black'
                          }`}
                        ></i>{' '}
                        <span className="text-black">{product.luotThich.tongLuotThich}</span>
                      </div>
                      <div className="flex justify-between text-3xl mt-2">
                        <div>
                          <p
                            className={`mt-1 font-bold items-center mb-0  ${
                              product.sale ? 'text-red-600' : 'text-gray-900'
                            }`}
                          >
                            {product.thanhTien
                              .toString()
                              .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}
                            Đ
                            {product.sale ? (
                              <span className="ml-5 text-2xl font-semibold inline-block py-1 px-2  rounded text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1">
                                {product?.phanTramSale}%
                              </span>
                            ) : (
                              ''
                            )}
                          </p>
                          {product.sale ? (
                            <p className={`mt-3 text-xl font-medium text-gray-600 line-through`}>
                              {' '}
                              {`${product.giaTien
                                .toString()
                                .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}Đ`}
                            </p>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : arrayCheckLoding.map((v, index) => {
                  return (
                    // <Skeleton className='h-96 p-10' paragraph={{rows: 7}}  active loading={isLoadingProduct} key={index} />
                    <div
                      key={index}
                      className="group col-span-1 rounded-lg overflow-hidden bg-gray-50 shadow-xl"
                    >
                      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-50 overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                        <Skeleton.Input active className=' max-w-full' block></Skeleton.Input>
                        <Skeleton.Input active className=' max-w-full' block></Skeleton.Input>
                        <Skeleton.Input active className=' max-w-full' block></Skeleton.Input>
                        <Skeleton.Input active className=' max-w-full' block></Skeleton.Input>
                        <Skeleton.Input active className=' max-w-full' block></Skeleton.Input>
                      </div>
                      <div className="px-5">
                        <h3 className="mt-4 text-2xl text-gray-900">
                          <p>
                            <Skeleton.Input active block></Skeleton.Input>
                          </p>
                        </h3>
                        <div className="text-2xl">
                          <i>
                            {' '}
                            <p>
                              <Skeleton.Input active block></Skeleton.Input>
                            </p>
                          </i>
                          <span className="text-black">
                            {' '}
                            <p>
                              <Skeleton.Input active block></Skeleton.Input>
                            </p>
                          </span>
                        </div>
                        <div className="flex justify-between text-3xl mt-2">
                          <div>
                            <p>
                              <Skeleton.Input active block></Skeleton.Input>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
          <div className="mt-24 text-right">
            <Pagination
              defaultPageSize={8}
              current={current}
              onChange={(page, pageSize) => {
                dispatch(productsActions.getAllProductPaginition({ page: page, limit: pageSize }));
                setCurrent(page);
              }}
              total={totalPagination}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
