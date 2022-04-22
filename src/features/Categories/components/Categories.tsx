import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@mui/icons-material';
import { Button, Dropdown, Menu, Pagination, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';

import DetailBanner from 'features/Detail/components/DetailBanner';
import { MoneyVietName } from 'utils/customeMoney/customeMony';
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
        // dispatch(categoriesAction.getCategoriesProduct(text[0]));
        dispatch(
          productsActions.getAllProductPaginition({
            limit: 6,
            categori: text[0],
            sort: text[1],
            page: 1,
          })
        );
      } else {
        // dispatch(categoriesAction.getCategoriesProduct(categories));
        dispatch(
          productsActions.getAllProductPaginition({ limit: 6, categori: categories, page: 1 })
        );
      }
    } else {
      if (categories.includes('!')) {
        const text: string = categories.split('!');
        const textCustomCategories: string = text[0].replace(/&/g, '/');
        // dispatch(categoriesAction.getCategoriesProduct(categories.split('&')[0]));
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
        // dispatch(categoriesAction.getCategoriesProduct(categories.split('&')[0]));
        dispatch(productsActions.getAllProductPaginition({ limit: 6, categori: text, page: 1 }));
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
  useEffect(() => {
    dispatch(categoriesAction.getCategoriesProduct(categories))
  }, [categories.split("&")[0]])
  

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
    
        <Menu.Item  className='text-center' key={1}>
        <NavLink to={`${categories.split('!')[0]}!createdAt:desc`}>
          <span className="align-middle  hover:text-sky-700 font-bold cursor-pointer  md:text-2xl">
            Product new
          </span>
      </NavLink>

        </Menu.Item>
      <Menu.Item className='text-center' key={2}>
        <NavLink to={`${categories.split('!')[0]}!luotThich:desc`}>
          <span className="hover:text-sky-700 font-bold cursor-pointer  md:text-2xl">
            Like <ArrowUpwardOutlined className="pb-2" />
          </span>
        </NavLink>
      </Menu.Item>
      <Menu.Item  className='text-center' key={3}>
        <NavLink to={`${categories.split('!')[0]}!luotThich:asc`}>
          <span className="align-middle  hover:text-sky-700 font-bold cursor-pointer  md:text-2xl">
            Like <ArrowDownwardOutlined className="pb-2" />
          </span>
        </NavLink>
      </Menu.Item>
      <Menu.Item  className='text-center' key={4}>
        <NavLink to={`${categories.split('!')[0]}!thanhTien:desc`}>
          <span className="align-middle  hover:text-sky-700 font-bold cursor-pointer  md:text-2xl">
            Price Up
          </span>
        </NavLink>
      </Menu.Item>
      <Menu.Item  className='text-center' key={5}>
        <NavLink to={`${categories.split('!')[0]}!thanhTien:asc`}>
          <span className="align-middle  hover:text-sky-700 font-bold cursor-pointer  md:text-2xl">
            Price Down
          </span>
        </NavLink>
      </Menu.Item>
      <Menu.Item  className='text-center' key={6}>
        <NavLink to={`${categories.split('!')[0]}`}>
          <span className="align-middle  hover:text-sky-700 font-bold cursor-pointer  md:text-2xl">
            Cancal
          </span>
        </NavLink>
      </Menu.Item>
    </Menu>
  );
  let arrayCheckLoding = [1, 2, 3, 4, 5, 6];
  //map Categories
  const mapCategories = categoriesProduct?.[0].chilrens.map((v, index) =>
  {
    let [str1Paren, ...customParen]: string[] = v.category.split('/');
    return (
      
      <div className="space-y-2" key={index}>
        <h2 className="text-3xl font-semibold tracking-widest uppercase dark:text-coolGray-400">
          
          <NavLink  activeStyle={{ color: 'blue' }}   className="text-gray-700"      to={`/categories${'/' + customParen.join('&')}`}>
          {v.name}

          </NavLink>
        </h2>
        <div className="flex flex-col text-2xl space-y-1">
          {v.chilrens.map((vc, index) => {
            let [str1Child, ...customChild]: string[] = vc.category.split('/');
            return (
              <NavLink
                activeStyle={{ color: 'blue' }}
                className="ml-3 text-gray-700"
                to={`/categories${'/' + customChild.join('&')}`}
                key={index}
              >
                {vc.name}
              </NavLink>
            );
          })}
        </div>
      </div>
    );
  });
  //map ProductPagination
  const mapProductPagination = !isLoadingProductPagination
    ? productPagination?.map((product, index) => (
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
                  {MoneyVietName(product.thanhTien)}
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
                  {MoneyVietName(product.giaTien)}
                   
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
          <div className="py-12 px-8  bg-gray-50 shadow-xl " key={index}>
            <Skeleton.Input block active></Skeleton.Input>
            <Skeleton.Input block active></Skeleton.Input>
            <Skeleton.Input block active></Skeleton.Input>
            <Skeleton.Input block active></Skeleton.Input>
            <Skeleton active></Skeleton>
          </div>
        );
      });

  //customeSkeleton
  const customeSkeleton = (string: string | object | undefined) => {
    if (isLoadingCategories || string === undefined) {
      return <Skeleton.Input active></Skeleton.Input>;
    } else {
      return string;
    }
  };

  const customeCartObject = (string: string | object | void | undefined) => {
    if (isLoadingCategories || string === undefined) {
      return (
        <div>
          <Skeleton.Input active></Skeleton.Input>;<Skeleton.Input active></Skeleton.Input>;
          <Skeleton.Input active></Skeleton.Input>;<Skeleton.Input active></Skeleton.Input>;
          <Skeleton></Skeleton>
        </div>
      );
    } else {
      return string;
    }
  };
  const customeSkeletonObject = (string: string | object | void | undefined) => {
    if (isLoadingCategories || string === undefined) {
      return (
        <div>
          <Skeleton></Skeleton>
          <Skeleton></Skeleton>
          <Skeleton></Skeleton>
          <Skeleton></Skeleton>
        </div>
      );
    } else {
      return string;
    }
  };
  return (
    <div id="detail" className="border-top">
      <DetailBanner />
      <div>
        <section className="body-font overflow-hidden bg-white">
          <div className="container px-5 pb-24 mx-auto mt-10">
            <div className="lg:w-4/5 mx-auto flex flex-wrap  rounded-md overflow-hidden">
              <div className="w-full my-10 flex justify-between">
                <h1 className="text-5xl text-black font-medium">
                  {customeSkeleton(`Total: ${totalPagination}`)}
                </h1>
                <div>
                  {customeSkeleton(
                    <Dropdown overlay={menu} placement="bottom" arrow>
                      <Button>{nameSort}</Button>
                    </Dropdown>
                  )}
                </div>
              </div>
              <aside className=" py-6 pr-6 text-3xl w-1/5 dark:bg-coolGray-900 dark:text-coolGray-100">
                <nav className="space-y-8 text-sm">
                  <h1 className="text-4xl border-b-2 py-3  w-44">
                    {customeSkeleton(categoriesProduct?.[0].name)}
                  </h1>
                  {customeSkeletonObject(mapCategories)}
                </nav>
              </aside>
              <div className="p-6 w-4/5 mb-20">
                <div className="grid grid-cols-3 gap-20">
                  {!productPagination?.[0] && !isLoadingProductPagination ? (
                    <section className="my-8 col-span-full dark:bg-coolGray-800 dark:text-coolGray-100">
                      <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          className="w-16 h-16 dark:text-lightBlue-400"
                        >
                          <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
                          <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
                        </svg>
                        <p className="px-6 py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl dark:text-coolGray-300">
                          "Veniam quidem animi ea maxime odit fugiat architecto perferendis ipsum
                          perspiciatis iusto, provident qui nam dolorum corporis."
                        </p>
                        <div className="flex justify-center space-x-3">
                          <img
                            src="https://source.unsplash.com/80x80/?portrait?1"
                            alt=""
                            className="w-20 h-20 bg-center bg-cover rounded-md dark:bg-coolGray-500 dark:bg-coolGray-700 "
                          />
                          <div>
                            <p className="leading-tight">Leroy Jenkins</p>
                            <p className="text-sm leading-tight dark:text-coolGray-300">
                              Founder, Company
                            </p>
                            <a
                              className="flex items-center py-2 space-x-1 text-sm dark:text-lightBlue-400"
                              href="/"
                            >
                              <span>Read full story</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </section>
                  ) : (
                    mapProductPagination
                  )}
                </div>
              </div>
            </div>
            <div className="lg:w-4/5 mx-auto ">
              {productPagination?.length  === 6 ? customeSkeleton(<Pagination
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
              /> ) : <div></div>}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
