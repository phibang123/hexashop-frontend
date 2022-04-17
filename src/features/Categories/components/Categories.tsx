import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';

import { NavLink } from 'react-router-dom';
import { Pagination } from 'antd';
import { categoriesAction } from '../CategoriesSlide';
import { productsActions } from 'features/Products/productSlice';

export default function Categories(props: any) {
  let { categories } = props.match.params;
  const [current, setCurrent] = useState(1);
  console.log(categories);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(categoriesAction.getCategoriesProduct(categories));
    dispatch(productsActions.getAllProductPaginition({ limit: 6, categori: categories }));
  }, [categories]);

  const productPagination = useAppSelector((state) => state.projectsReducer.producPaginition);
  const isLoadingProductPagination = useAppSelector(
    (state) => state.projectsReducer.isLoadingProject
  );
  const totalPagination = useAppSelector((state) => state.projectsReducer.total);
  const categoriesProduct = useAppSelector((state) => state.categoriesProductReducer.categories);
  const isLoadingCategories = useAppSelector((state) => state.categoriesProductReducer.isLoading);
  const userNguoiDung = useAppSelector((state) => state.auth.currentUser);

  console.log(categoriesProduct, 'alo');
  console.log(productPagination);
  return (
    <div className="max-w-8xl m-auto flex">
      <aside className=" py-6 pr-6 text-3xl w-1/5 dark:bg-coolGray-900 dark:text-coolGray-100">
        <nav className="space-y-8 text-sm">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-widest uppercase dark:text-coolGray-400">
              Getting Started
            </h2>
            <div className="flex flex-col text-2xl space-y-1">
              <a rel="noopener noreferrer" href="#">
                Installation
              </a>
              <a rel="noopener noreferrer" href="#">
                Plugins
              </a>
              <a rel="noopener noreferrer" href="#">
                Migrations
              </a>
              <a rel="noopener noreferrer" href="#">
                Appearance
              </a>
              <a rel="noopener noreferrer" href="#">
                Mamba UI
              </a>
            </div>
          </div>
        </nav>
      </aside>
      <div className="p-6 w-4/5">
        <div className="grid grid-cols-3 gap-20">
          {productPagination?.map((product, index) => (
            <div
              key={product._id}
              className="group col-span-1 rounded-lg overflow-hidden bg-gray-50 shadow-xl"
            >
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-50 overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <NavLink to={`/detail/${product._id}`}>
                  {/* {isLoadingProduct && <Skeleton.Image />} */}
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
                      {product.thanhTien.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}Đ
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
          ))}
        </div>
        <div className=" mt-24">
          <Pagination
            defaultPageSize={6}
            className="text-right"
            current={current}
            onChange={(page, pageSize) => {
              dispatch(
                productsActions.getAllProductPaginition({
                  page: page,
                  limit: pageSize,
                  categori: categories,
                })
              );
              setCurrent(page);
            }}
            total={totalPagination}
          />
        </div>
      </div>
    </div>
  );
}
