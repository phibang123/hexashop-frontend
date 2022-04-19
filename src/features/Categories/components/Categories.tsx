import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@mui/icons-material';
import { Button, Dropdown, Menu, Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';

import DetailBanner from 'features/Detail/components/DetailBanner';
import { NavLink } from 'react-router-dom';
import { categoriesAction } from '../CategoriesSlide';
import { productsActions } from 'features/Products/productSlice';

export default function Categories(props: any) {
  let { categories } = props.match.params;
  const [current, setCurrent] = useState(1);
  const [nameSort, setNameSort] = useState('Sort By');
  const dispatch = useAppDispatch();
  useEffect(() => {
    setCurrent(1);
    if (!categories.includes('&')) {
      if (categories.includes('!')) {
        const text = categories.split('!');
        dispatch(categoriesAction.getCategoriesProduct(text[0]));
        dispatch(
          productsActions.getAllProductPaginition({
            limit: 6,
            categori: text[0],
            sort: text[1],
            page: 1,
          })
        );
      } else {
        dispatch(categoriesAction.getCategoriesProduct(categories));
        dispatch(
          productsActions.getAllProductPaginition({ limit: 6, categori: categories, page: 1 })
        );
      }
    } else {
      if (categories.includes('!')) {
        const text: string = categories.split('!');
        const textCustomCategories: string = text[0].replace(/&/g, '/');
        dispatch(categoriesAction.getCategoriesProduct(categories.split('&')[0]));
        dispatch(
          productsActions.getAllProductPaginition({
            limit: 6,
            categori: textCustomCategories,
            sort: text[1],
            page: 1,
          })
        );
      } else {
        const text: string = categories.replace(/&/g, '/');
        dispatch(categoriesAction.getCategoriesProduct(categories.split('&')[0]));
        dispatch(
          productsActions.getAllProductPaginition({ limit: 6, categori: text, page: 1 })
        );
      }
    }
    if (categories.includes('!')) {
      const text = categories.split('!');
      const customTextName = text[1].split(':');
      setNameSort(customTextName[0]);
    } else {
      setNameSort('Sort By');
    }
  }, [categories]);

  const productPagination = useAppSelector((state) => state.projectsReducer.producPaginition);
  const isLoadingProductPagination = useAppSelector(
    (state) => state.projectsReducer.isLoadingProject
  );
  const totalPagination = useAppSelector((state) => state.projectsReducer.total);
  const categoriesProduct = useAppSelector((state) => state.categoriesProductReducer.categories);
  const isLoadingCategories = useAppSelector((state) => state.categoriesProductReducer.isLoading);
  const userNguoiDung = useAppSelector((state) => state.auth.currentUser);
  const menu = (
    <Menu className="w-64">
      <NavLink to={`${categories.split('!')[0]}!createdAt:desc`} >
        <Menu.Item key={1}>
          <li className="align-middle  hover:text-sky-700 font-bold cursor-pointer  md:text-2xl text-center">
            Product new
          </li>
        </Menu.Item>
      </NavLink>
      <Menu.Item key={2}>
        <NavLink to={`${categories.split('!')[0]}!luotThich:desc`}>
          <li className="align-middle  hover:text-sky-700 font-bold cursor-pointer  md:text-2xl text-center">
            Like <ArrowUpwardOutlined className="pb-2" />
          </li>
        </NavLink>
      </Menu.Item>
      <Menu.Item key={3}>
        <NavLink to={`${categories.split('!')[0]}!luotThich:asc`}>
          <li className="align-middle  hover:text-sky-700 font-bold cursor-pointer  md:text-2xl text-center">
            Like <ArrowDownwardOutlined className="pb-2" />
          </li>
        </NavLink>
      </Menu.Item>
      <Menu.Item key={4}>
        <NavLink to={`${categories.split('!')[0]}!thanhTien:desc`}>
          <li className="align-middle  hover:text-sky-700 font-bold cursor-pointer  md:text-2xl text-center">
            Price Up
          </li>
        </NavLink>
      </Menu.Item>
      <Menu.Item key={5}>
        <NavLink to={`${categories.split('!')[0]}!thanhTien:asc`}>
          <li className="align-middle  hover:text-sky-700 font-bold cursor-pointer  md:text-2xl text-center">
            Price Down
          </li>
        </NavLink>
      </Menu.Item>
      <Menu.Item key={6}>
        <NavLink to={`${categories.split('!')[0]}`}>
          <li className="align-middle  hover:text-sky-700 font-bold cursor-pointer  md:text-2xl text-center">
            Cancal
          </li>
        </NavLink>
      </Menu.Item>
    </Menu>
  );
  return (
    <div id="detail" className="border-top">
      <DetailBanner />
      <div>
        <section className="body-font overflow-hidden bg-white">
          <div className="container px-5 pb-24 mx-auto mt-10">
            <div className="lg:w-4/5 mx-auto flex flex-wrap  rounded-md overflow-hidden">
              <div className="w-full my-10 flex justify-between">
                <h1 className="text-5xl text-black font-medium">Total: {totalPagination}</h1>
                <div>
                  <Dropdown overlay={menu} placement="bottom" arrow>
                    <Button>{nameSort}</Button>
                  </Dropdown>
                </div>
              </div>
              <aside className=" py-6 pr-6 text-3xl w-1/5 dark:bg-coolGray-900 dark:text-coolGray-100">
                <nav className="space-y-8 text-sm">
                  <h1 className="text-4xl border-b-2 py-3  w-44">{categoriesProduct?.[0].name}</h1>
                  {categoriesProduct?.[0].chilrens.map((v, index) => {
                    return (
                      <div className="space-y-2" key={index}>
                        <h2 className="text-3xl font-semibold tracking-widest uppercase dark:text-coolGray-400">
                          {v.name}
                        </h2>
                        <div className="flex flex-col text-2xl space-y-1">
                          {v.chilrens.map((vc, index) => {
                            let [str1, ...custom]: string[] = vc.category.split('/');
                            return (
                              <NavLink
                                activeStyle={{ color: 'blue' }}
                                className="ml-3 text-gray-700"
                                to={`/categories${'/' + custom.join('&')}`}
                                key={index}
                              >
                                {vc.name}
                              </NavLink>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </nav>
              </aside>
              <div className="p-6 w-4/5 mb-20">
                <div className="grid grid-cols-3 gap-20">
                  {productPagination?.[0] ? (
                    productPagination?.map((product, index) => (
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
                                <p
                                  className={`mt-3 text-xl font-medium text-gray-600 line-through`}
                                >
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
                  ) : (
                    <article className="max-w-2xl col-span-3 px-6 py-24 mx-auto space-y-16 dark:bg-coolGray-800 dark:text-coolGray-50">
                      <div className="w-full mx-auto space-y-4">
                        <h1 className="text-5xl font-bold leading-none">
                          Interdum et malesuada fames ac ante ipsum primis in faucibus?
                        </h1>
                        <div className="flex flex-wrap space-x-2 text-sm dark:text-coolGray-400">
                          <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">
                            #MambaUI
                          </a>
                          <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">
                            #TailwindCSS
                          </a>
                          <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">
                            #Angular
                          </a>
                        </div>
                        <p className="text-sm dark:text-coolGray-400">
                          by
                          <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline dark:text-lightBlue-400"
                          >
                            <span>Leroy Jenkins</span>
                          </a>
                          on
                        </p>
                      </div>
                      <div className="dark:text-coolGray-100">
                        <p>Insert the actual text content here...</p>
                      </div>
                    </article>
                  )}
                </div>
              </div>
            </div>
            <div className="lg:w-4/5 mx-auto ">
              <Pagination
                defaultPageSize={6}
                className="text-right"
                current={current}
                onChange={(page, pageSize) => {
                  if (!categories.includes('&')) {
                    if (categories.includes('!')) {
                      const text = categories.split('!');
                      dispatch(
                        productsActions.getAllProductPaginition({
                          page: page,
                          limit: pageSize,
                          categori: text[0],
                          sort: text[1],
                        })
                      );
                    } else {
                      dispatch(
                        productsActions.getAllProductPaginition({
                          page: page,
                          limit: pageSize,
                          categori: categories,
                        })
                      );
                    }
                  } else {
                    if (categories.includes('!')) {
                      const text: string = categories.split('!');
                      const textCustomCategories: string = text[0].replace(/&/g, '/');
                      dispatch(
                        productsActions.getAllProductPaginition({
                          page: page,
                          limit: pageSize,
                          categori: textCustomCategories,
                          sort: text[0],
                        })
                      );
                    } else {
                      const textCustomCategories: string = categories.replace(/&/g, '/');
                      dispatch(
                        productsActions.getAllProductPaginition({
                          page: page,
                          limit: pageSize,
                          categori: textCustomCategories,
                        })
                      );
                    }
                  }
                  setCurrent(page);
                }}
                total={totalPagination}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
