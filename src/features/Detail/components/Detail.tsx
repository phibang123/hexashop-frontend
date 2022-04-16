import './Detail.css';

import { Avatar, Button, Comment, Form, Input, List } from 'antd';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';

import DetailBanner from './DetailBanner';
import { INguoiDung } from 'models';
import { projectAction } from '../DetailSlide';
import { push } from 'connected-react-router';
import { toastError } from 'utils/toast/hotToast';
import { updateAction } from 'features/Infouser/InfouserSlide';

export default function Detail(props: any) {
  const project = useAppSelector((state) => state.projectReducer.sanPham);
  const userNguoiDung = useAppSelector((state) => state.auth.currentUser);

  const dispatch = useAppDispatch();

  useEffect(() => {
    let { id } = props.match.params;
    dispatch(projectAction.getProjectDetail(id));
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

  // const Editor = ({ onChange , onSubmit, submitting, value }) => (
  //   <>
  //     <Form.Item>
  //       <TextArea rows={4} onChange={onChange} value={value} />
  //     </Form.Item>
  //     <Form.Item>
  //       <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
  //         Add Comment
  //       </Button>
  //     </Form.Item>
  //   </>
  // );

  return (
    <div id="detail" className="border-top">
      <DetailBanner />
      <div>
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <div className="lg:w-1/2 ">
                <img
                  alt="ecommerce"
                  className="w-full object-cover object-center rounded border border-gray-200 shadow-xl h-4/5 max-h-full"
                  src={project?.hinhAnh}
                />
              </div>
              <div className="lg:w-1/2 w-full lg:pl-20 lg:py-6 mt-10 lg:mt-0 ">
                <h2 className="text-3xl title-font text-gray-500 tracking-widest">
                  {project?.categories}
                </h2>
                <h1 className="text-gray-900 text-6xl title-font font-medium mb-1">
                  {project?.tenSanPham}
                </h1>
                <div className="flex my-12">
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
                  <span className="flex ml-3 pl-3 py-2 border-l-2 text-2xl  border-gray-200">
                    <i className="fa-brands fa-facebook-f mx-3"></i>
                    <i className="fa-brands fa-twitter mx-3"></i>
                    <i className="fa-brands fa-github mx-3  "></i>
                  </span>
                </div>
                <p className="leading-relaxed my-5 text-3xl">{project?.moTa}</p>
                <div className="flex justify-between mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5 ">
                  <div className="flex text-2xl my-5">
                    <span className="mr-3">Quantity: </span>
                    <span>{project?.soLuong}</span>
                  </div>
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
                </div>
                <div className="flex text-4xl">
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
                </div>
              </div>
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
              {/* <Comment
avatar={<Avatar src={userNguoiDung?.avatar} alt={userNguoiDung?.hoTen} />}
content={
  <Editor
    onChange={this.handleChange}
    onSubmit={this.handleSubmit}
    submitting={submitting}
    value={value}
  />
}
/> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
