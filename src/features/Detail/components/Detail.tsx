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

//const { TextArea } = Input;
export default function Detail(props: any) {
  const project = useAppSelector((state) => state.projectReducer.sanPham);
  const userNguoiDung = useAppSelector((state) => state.auth.currentUser);

  // const [comment, setComment] = React.useState({
	// 	submitting: false,
	// 	value: "",
	// });
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
      <div className="detail_content container mx-auto my-20">
        <div className="d_content_big grid grid-cols-4 gap-4  m-auto max-w-8xl ">
          <div className="img col-span-2">
            <img className=" mb-9 h-2/3 m-auto w-3/4" src={project?.hinhAnh} alt="" />
          </div>
          <div className="ml-20 right-content col-span-2 ">
            <div>
              <h4>{project?.tenSanPham}</h4>
              <span className="price">{project?.categories}</span>

              <span>{project?.moTa}</span>
              <div className="flex justify-between mt-5 items-center quantity-content">
                <span className="font-medium text-5xl">Lieks:</span>
                <div className="text-4xl">
                  {project?.luotThich.tongLuotThich}
                  <i
                    onClick={() =>
                      project ? dispatch(updateAction.setLike(project?._id)) : toastError('Error')
                    }
                    className={`fa-solid fa-heart cursor-pointer ${
                      checkLike !== -1 ? 'text-red-800' : ''
                    }`}
                  ></i>{' '}
                </div>
              </div>
              <div className="">
                <div className="left-content">
                  <h6>Quantity: {project?.soLuong}</h6>
                </div>
              </div>
              <div className="total">
                <h4 className={`${project?.sale ? 'line-through' : ''}`}>
                  Total: {project?.thanhTien}
                </h4>
                <h3> {project?.sale ? 'Sale' + project.thanhTien : ''} </h3>
                <div className="flex justify-end ">
                  <button
                    className="border-2 border-gray-600 mr-5 bg-gray-800 text-white px-3 rounded-md"
                    onClick={() =>
                      project
                        ? dispatch(updateAction.setAddCart(project?._id))
                        : toastError('Error')
                    }
                  >
                    Add To Cart
                  </button>
                  <button
                    className="px-7 border-4 rounded-md py-3 bg-yellow-400 text-white"
                    onClick={() =>
                      project
                        ? dispatch(updateAction.setAddCartRedirest(project?._id))
                        : toastError('Error')
                    }
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-full">
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
      </div>
    </div>
  );
}
