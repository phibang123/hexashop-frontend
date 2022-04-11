import './Product.css';

import React, { useEffect } from 'react';
import productsReducer, { productsActions } from '../productSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';

import DetailBanner from '../../Detail/components/DetailBanner';
import { NavLink } from 'react-router-dom';
import { Pagination } from 'antd';
import { updateAction } from 'features/Infouser/InfouserSlide';

export default function Productlist()
{
  const dispatch = useAppDispatch()
  const allProject = useAppSelector(state => state.projectsReducer.allProduct)
  //const project = useAppSelector(state => state.projectReducer.sanPham)
  const userNguoiDung = useAppSelector(state => state.auth.currentUser)
  useEffect(() => {
    dispatch(productsActions.getAllProduct())
  }, [userNguoiDung])
  // const checkLike = product?.luotThich.idNguoiDungs.findIndex((v) => {
  //   return v.tenNguoiDung === userNguoiDung?.hoTen;
  // });
  return (
    <div id="product">
      <div>
        <DetailBanner />
      </div>
      <div className="section-heading text-center  mx-0">
        <h2>Our Latest Products</h2>
        <span>Check out all of our products.</span>
      </div>
      <div className="bg-white">
        <div className="max-w-8xl mx-auto py-16 px-4 ">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-4 gap-x-20">
            {allProject?.map((product) => (
              <div key={product._id}  className="group col-span-1 rounded-lg overflow-hidden bg-gray-50 shadow-xl">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-50 overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <NavLink to={`/detail/${product._id}`}>
                  <img
                    src={product.hinhAnh} 
                    alt={product.tenSanPham}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                    />
                    </NavLink>
                </div>
                <div className='px-5'>
                <h3 className="mt-4 text-2xl text-gray-900">
                  {product.tenSanPham.length > 30 ? product.tenSanPham.slice(0,25) + " ..." :  product.tenSanPham}
                </h3>
                  <div className='flex justify-between text-4xl mt-2'>
                    <div>
                      <p className={`mt-1 font-medium text-gray-900 ${product.sale ? "line-through" : ""}`}>{product.giaTien.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}Đ</p>
                      {
                        product.sale ? <p className={`mt-1 font-medium text-red-700`}>  {`==> ${product.thanhTien}` }</p> : ""
                      }
                    </div>
                    
                    <div className="">
                     <span className='text-black'>{product.luotThich.tongLuotThich}</span>
                  <i
                    onClick={() =>
                      dispatch(updateAction.setLike(product?._id))
                    }
                    className={`fa-solid fa-heart cursor-pointer ml-2  ${product?.luotThich.idNguoiDungs.findIndex((v) => {
                        return v.tenNguoiDung === userNguoiDung?.hoTen
                      })  !== -1 ? "text-red-900" :"text-black" }`}
                  ></i>{' '}
                </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
          <div className='mt-24 text-right'>
          <Pagination defaultCurrent={6} total={50} />
          </div>

        </div>
      </div>
    </div>
  );
}
