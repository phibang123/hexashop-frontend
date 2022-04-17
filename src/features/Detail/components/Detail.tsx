import './Detail.css';

import { Avatar, Button, Comment, Form, Input, List, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';

import DetailBanner from './DetailBanner';
import { INguoiDung } from 'models';
import { NavLink } from 'react-router-dom';
import { projectAction } from '../DetailSlide';
import { push } from 'connected-react-router';
import { toastError } from 'utils/toast/hotToast';
import { updateAction } from 'features/Infouser/InfouserSlide';
import { useDispatch } from 'react-redux';

const { TextArea } = Input;
const Editors = ({ onChange, onSubmit, submitting, value }: any) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </>
);

export default function Detail(props: any) {
  const project = useAppSelector((state) => state.projectReducer.sanPham);
  const isLoadingComment = useAppSelector((state) => state.projectReducer.isLoadding);
  const userNguoiDung = useAppSelector((state) => state.auth.currentUser);

  const dispatch = useAppDispatch();

  const [comment, setComment] = useState({
    value: '',
  });
  let { id } = props.match.params;
  useEffect(() => {
    dispatch(projectAction.getProjectDetail(id));
    window.scrollTo(0, 0)
  }, [userNguoiDung]);

  
  const checkLike = project?.luotThich.idNguoiDungs.findIndex((v) => {
    return v.tenNguoiDung === userNguoiDung?.hoTen;
  });

  const data = project?.comment.map((v) => {
    return {
      author: v.tenNguoiDung,
      avatar: v.avatar,
      content: <p>{v.ngoiDungComment}</p>,
    };
  });

  const handleChangeInput = (e: any) => {
    let { value, name } = e.target;

    setComment({
      value: value,
  
    });
  };

  //formik cho comment
  const handleSubmit = () => {
    if (!comment.value) {
      return;
    }
    setComment({
      value: comment.value,
    });
    dispatch(projectAction.pushCommentProduct({comment: comment.value, id}))
    setTimeout(() => {
      setComment({
        value: '',
      });
    }, 1000);
  };

  const customeCategories: string[] | undefined = project?.categories.split('/');

  return (
    <div id="detail" className="border-top">
      <DetailBanner />
      <div>
        <section className="body-font overflow-hidden bg-gray-100">
          <div className="container px-5 pb-24 mx-auto mt-10">
            <div className="lg:w-4/5 mx-auto flex flex-wrap shadow-2xl bg-white rounded-md overflow-hidden">
              <div className="lg:w-1/3  p-5 ">
                {project && (
                  <img
                    alt="ecommerce"
                    className="w-full h-full object-cover object-center rounded-md border  max-h-full"
                    src={project?.hinhAnh}
                  />
                )}
                {!project && <Skeleton.Input className="w-full" active block></Skeleton.Input>}
                {!project && <Skeleton.Input className="w-full" active block></Skeleton.Input>}
                {!project && <Skeleton.Input className="w-full" active block></Skeleton.Input>}
                {!project && <Skeleton.Input className="w-full" active block></Skeleton.Input>}
                {!project && <Skeleton.Input className="w-full" active block></Skeleton.Input>}
                {!project && <Skeleton.Input className="w-full" active block></Skeleton.Input>}
                {!project && <Skeleton.Input className="w-full" active block></Skeleton.Input>}
                {!project && <Skeleton.Input className="w-full" active block></Skeleton.Input>}
                {!project && <Skeleton.Input className="w-full" active block></Skeleton.Input>}
                {!project && <Skeleton.Input className="w-full" active block></Skeleton.Input>}
                {!project && <Skeleton.Input className="w-full" active block></Skeleton.Input>}
                {!project && <Skeleton.Input className="w-full" active block></Skeleton.Input>}
              </div>

              <div className="lg:w-2/3 w-full lg:pl-20 lg:py-6 mt-10 lg:mt-0 ">
                <h2 className="text-3xl title-font text-gray-500 tracking-widest">
                  <NavLink className="mr-2" to={`/${customeCategories?.[1]}`}>
                    {customeCategories?.[1]}{' '}
                    {project && <span className="text-gray-800">{`>`}</span>}
                  </NavLink>
                  <NavLink className="mr-2" to={`/${customeCategories?.[2]}`}>
                    {customeCategories?.[2]}{' '}
                    {project && <span className="text-gray-800">{`>`}</span>}
                  </NavLink>
                  <NavLink className="mr-2" to={`/${customeCategories?.[3]}`}>
                    {customeCategories?.[3]}{' '}
                    {project && <span className="text-gray-800">{`>`}</span>}
                  </NavLink>
                  {!project && <Skeleton.Input active></Skeleton.Input>}
                </h2>
                <h1 className="text-gray-900 text-6xl title-font font-medium mb-1">
                  {project?.tenSanPham}
                  {!project && <Skeleton.Input active></Skeleton.Input>}
                </h1>
                <div className="flex my-12">
                  {project && (
                    <span className="flex items-center text-3xl">
                      <i
                        className={`fa-solid fa-heart cursor-pointer transition-all duration-500 ${
                          checkLike !== -1 ? 'text-red-700 hover:text-black' : 'hover:text-red-700'
                        }`}
                      ></i>

                      <span className="text-gray-600  ml-3">
                        {project?.luotThich.tongLuotThich}{' '}
                        <button
                          onClick={() =>
                            project
                              ? dispatch(updateAction.setLike(project?._id))
                              : toastError('Error')
                          }
                          className={`mx-5 rounded  text-white px-3 py-1 transition-all duration-500 ${
                            checkLike !== -1
                              ? 'bg-red-700 hover:bg-gray-900'
                              : 'bg-gray-900 hover:bg-red-700'
                          } `}
                        >
                          {checkLike !== -1 ? 'Unlike' : 'Like'}
                        </button>
                      </span>
                    </span>
                  )}
                  {project && (
                    <span className="flex ml-3 pl-3 py-2 border-l-2 text-2xl  border-gray-200">
                      <i className="fa-brands fa-facebook-f mx-3"></i>
                      <i className="fa-brands fa-twitter mx-3"></i>
                      <i className="fa-brands fa-github mx-3  "></i>
                    </span>
                  )}
                  {!project && <Skeleton.Input active></Skeleton.Input>}
                </div>
                <p className="leading-relaxed my-5 text-3xl">{project?.moTa}</p>
                <div className="flex justify-between mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5 w-11/12">
                  {project && (
                    <div className="flex text-2xl my-5">
                      <span className="mr-3">Quantity: </span>
                      <span>{project?.soLuong}</span>
                    </div>
                  )}
                  {!project && <Skeleton.Input active block></Skeleton.Input>}
                  {project?.sale ? (
                    <div className="flex ml-6 text-2xl my-5 items-center">
                      <span className="mr-3 text-red-600">Sale: </span>
                      <div className="relative ">
                        <span className="text-2xl font-semibold inline-block py-1 px-2  rounded text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1">
                          {project?.phanTramSale}%
                        </span>
                      </div>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
                <div className="flex my-10">
                  {project && (
                    <div>
                      <span
                        className={`title-font  text-5xl font-extrabold text-gray-900 ${
                          project?.sale ? 'text-red-700' : ''
                        }`}
                      >
                        {project?.thanhTien.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')} Đ
                      </span>
                      {project?.sale ? (
                        <span className="title-font font-medium text-2xl line-through mx-5">
                          {' '}
                          {project?.giaTien.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')} Đ
                        </span>
                      ) : (
                        ''
                      )}
                    </div>
                  )}
                  {!project && <Skeleton.Input active></Skeleton.Input>}
                </div>
                <div className="flex text-4xl">
                  {project && (
                    <button
                      className="flex text-white mr-10 bg-yellow-500 border-0 py-5 px-6 focus:outline-none hover:bg-yellow-600 rounded items-center "
                      onClick={() =>
                        project
                          ? dispatch(updateAction.setAddCart(project?._id))
                          : toastError('Error')
                      }
                    >
                      Get to cart <i className="fa-solid fa-cart-arrow-down ml-3"></i>
                    </button>
                  )}
                  {!project && <Skeleton.Input active></Skeleton.Input>}
                  {project && (
                    <button
                      className="flex text-white bg-red-500 border-0 py-5 px-6 focus:outline-none hover:bg-red-600 rounded items-center "
                      onClick={() =>
                        project
                          ? dispatch(updateAction.setAddCartRedirest(project?._id))
                          : toastError('Error')
                      }
                    >
                      Buy <i className="fa-solid fa-money-bill-1-wave ml-3"></i>
                    </button>
                  )}
                  {!project && <Skeleton.Input active></Skeleton.Input>}
                </div>
              </div>
            </div>
            <div className="lg:w-4/5 p-10 mx-auto flex-wrap shadow-2xl bg-white rounded-md my-10">
              {' '}
              <List
                className="comment-list"
                header={`${data?.length} Comment`}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                  <li>
                    <Comment author={item.author} avatar={item.avatar} content={item.content} />
                  </li>
                )}
              />
              <Comment
                avatar={<Avatar src={userNguoiDung?.avatar} alt={userNguoiDung?.hoTen} />}
                content={
                  <Editors
                    onChange={handleChangeInput}
                    onSubmit={handleSubmit}
                    submitting={isLoadingComment}
                    value={comment.value}
                  />
                }
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
