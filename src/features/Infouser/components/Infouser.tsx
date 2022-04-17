import * as Yup from 'yup';

import { INguoiDungEdit, INguoiDungInput } from 'models';
import React, { useRef, useState } from 'react';
import { toastError, toastLoading, toastSuccess } from 'utils/toast/hotToast';
import { useAppDispatch, useAppSelector } from 'app/hooks';

import { CircularProgress } from '@mui/material';
import { LoginRespon } from 'features/Login/types';
import { Redirect } from 'react-router';
import { authActions } from 'features/Login/loginSlice';
import axios from 'axios';
import toast from 'react-hot-toast';
import { updateAction } from '../InfouserSlide';
import { useFormik } from 'formik';

export default function Infouser() {
  const userReducer = useAppSelector((state) => state.auth.currentUser);
  const isLoadding = useAppSelector((state) => state.updateUser.isLoading);
  const [editB, seteditB] = useState(false);
  const refer: any = useRef();
  const dispatch = useAppDispatch();

  const formikEditUser = useFormik({
    initialValues: {
      matKhau: '',
      diaChi: userReducer?.diaChi,
      soDt: userReducer?.soDt,
      sex: userReducer?.sex,
      hoTen: userReducer?.hoTen,
    },
    validationSchema: Yup.object({
      matKhau: Yup.string()
        .min(6, 'Password must have min 6 characters')
        .required('PassWord not required')
        .max(32, 'Password must have max 32 character'),
      soDt: Yup.string().required('phone not required'),
      hoTen: Yup.string().required('Full Name not required'),
      diaChi: Yup.string().required('Address Name not required'),
    }),
    onSubmit: (values: INguoiDungEdit) => {
      dispatch(updateAction.updateEditProfile(values));
    },
  });

  const [img, setImg] = useState<any>({
    avatar: null,
  });
  if (!localStorage.getItem('access_token')) {
    return <Redirect to="/login" />;
  }

  const fileSelectedHandler = (event: any) => {
    setImg({
      avatar: event.target.files[0],
    });
    
  };

  const fileUploadHandler = async (e: any) => {
    e.preventDefault();
    setImg({ avatar: null })
  
    const frmData = new FormData();
    await frmData.append('avatar', img.avatar, img.avatar.name);
    try {
      toastLoading();
      await axios
        .patch('https://hexashop-api.herokuapp.com/api/QuanLyNguoiDung/Avatar', frmData, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            authorization: 'Bearer ' + localStorage.getItem('access_token'),
          },
        })
        .then((result) =>
        {
          setImg({
            avatar: null,
          });
          refer.current.value = "";
          toast.dismiss();
          dispatch(authActions.loginSuccess(result.data.data));
          dispatch(updateAction.success);
          toastSuccess('Success');
        });
    } catch (error)
    {
      setImg({
        avatar: null,
      });
      refer.current.value = "";
      toast.dismiss();
      toastError('Some thing wrong!');
      dispatch(updateAction.success);
    }
  };
  return (
    <div id="infouser" className=" mx-auto px-8 py-8 mb-28">
      <div className="w-3/4 bg-gray-100 mx-auto bg-zinc-300 shadow overflow-hidden sm:rounded-2xl flex mt-36">
        <div className="w-1/4 border-4">
          <img
            id="dropdownInformationButton"
            alt="user"
            data-dropdown-toggle="dropdownInformation"
            className="p-10 rounded-full items-center"
            style={{ width: '-webkit-fill-available' }}
            src={userReducer?.avatar}
          ></img>

          <div className="flex justify-center">
            <div className="mb-3 w-96">
              <form className="flex ">
                <input
                  type="file"
                  className="form-control
                
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  ref={refer}
                  onChange={fileSelectedHandler}
                ></input>
                <button
                  disabled={isLoadding ? true : false}
                  onClick={fileUploadHandler}
                  className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-5"
                >
                  {isLoadding && <CircularProgress size={20} color="secondary" />} &nbsp; Upload
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="w-3/4">
          <div className="px-4 py-8 sm:px-6 border-4 flex justify-between items-center">
            <div>
              <h3 className="text-4xl leading-6 font-medium text-gray-900 ">
                Applicant Information
              </h3>
              <p className="mt-1 max-w-2xl text-xl   text-gray-500">
                Personal details and application.
              </p>
            </div>
            <div>
              <button
                className="bg-gray-900 rounded-lg text-white px-5 py-3 text-2xl"
                onClick={() => seteditB(!editB)}
              >
                Edit Profile
              </button>
            </div>
          </div>
          {!editB ? (
            <div className="border-t border-4 border-gray-200">
              <dl>
                <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-xl font-medium text-gray-500 ">Full name</dt>
                  <dd className="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2">
                    {userReducer?.hoTen}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-xl font-medium text-gray-500">SDT</dt>
                  <dd className="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2">
                    {userReducer?.soDt}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-xl font-medium text-gray-500">Sex</dt>
                  <dd className="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2">
                    {userReducer?.sex}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-xl font-medium text-gray-500">Address</dt>
                  <dd className="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2">
                    {userReducer?.diaChi}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-xl font-medium text-gray-500">PassWord</dt>
                  <dd className="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2">***********</dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-xl font-medium text-gray-500">Emaill</dt>
                  <dd className="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2">
                    {userReducer?.email}
                  </dd>
                </div>
              </dl>
            </div>
          ) : (
            <div className="border-t border-4 border-gray-200  px-8 py-12">
              <form onSubmit={formikEditUser.handleSubmit}>
                <h1 className="mb-12 text-3xl text-center">Edit profile</h1>

                <div className="mb-7">
                  <label className="block mb-5 text-2xl">Address</label>
                  <input
                    type="text"
                    value={formikEditUser.values.diaChi}
                    onChange={formikEditUser.handleChange}
                    onBlur={formikEditUser.handleBlur}
                    className="block border border-grey-light w-full p-6 rounded  text-2xl"
                    name="diaChi"
                    placeholder="Enter Address"
                  />
                  <div className="text-red-900 ml-5">
                    {formikEditUser.errors.diaChi && formikEditUser.touched.diaChi ? (
                      <>{formikEditUser.errors.diaChi}</>
                    ) : null}
                  </div>
                </div>
                <div className="mb-7">
                  <label className="block mb-5 text-2xl">Password</label>
                  <input
                    type="password"
                    onChange={formikEditUser.handleChange}
                    onBlur={formikEditUser.handleBlur}
                    className="block border border-grey-light w-full p-6 rounded  text-2xl"
                    name="matKhau"
                    placeholder="Enter password"
                  />
                  <div className="text-red-900 ml-5">
                    {formikEditUser.errors.matKhau && formikEditUser.touched.matKhau ? (
                      <>{formikEditUser.errors.matKhau}</>
                    ) : null}
                  </div>
                </div>
                <div className="mb-7">
                  <label className="block mb-5 text-2xl">Full Name</label>
                  <input
                    type="text"
                    onChange={formikEditUser.handleChange}
                    onBlur={formikEditUser.handleBlur}
                    value={formikEditUser.values.hoTen}
                    className="block border border-grey-light w-full p-6 rounded text-2xl"
                    name="hoTen"
                    placeholder="Enter Full Name"
                  />
                  <div className="text-red-900 ml-5">
                    {formikEditUser.errors.hoTen && formikEditUser.touched.hoTen ? (
                      <>{formikEditUser.errors.hoTen}</>
                    ) : null}
                  </div>
                </div>

                <div className="mb-7">
                  <label className="block mb-5 text-2xl">Number Phone</label>
                  <input
                    type="text"
                    onChange={formikEditUser.handleChange}
                    onBlur={formikEditUser.handleBlur}
                    className="block border border-grey-light w-full p-6 rounded mb-7 text-2xl"
                    name="soDt"
                    value={formikEditUser.values.soDt}
                    placeholder="Enter Number Phone"
                  />
                  <div className="text-red-900 ml-5">
                    {formikEditUser.errors.soDt && formikEditUser.touched.soDt ? (
                      <>{formikEditUser.errors.soDt}</>
                    ) : null}
                  </div>
                </div>

                <div className="mb-7">
                  <label className="block mb-5 text-2xl">Select Sex</label>
                  <select
                    onChange={formikEditUser.handleChange}
                    onBlur={formikEditUser.handleBlur}
                    className="form-select appearance-none
      block
      w-full
      px-6
      py-5
      text-2xl
      font-extralight
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
     
      rounded
      transition
      ease-in-out
      m-0
      border-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                    name="sex"
                    value={formikEditUser.values.sex}
                  >
                    <option>Select Sex</option>
                    <option value="Nam" selected>
                      Men
                    </option>
                    <option value="Nữ">Women</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isLoadding ? true : false}
                  onClick={() => {
                    setTimeout(() => {
                      seteditB(false);
                    }, 2000);
                  }}
                  className="w-full text-center py-6 text-2xl rounded bg-green text-white bg-gray-800 hover:bg-green-dark focus:outline-none my-4"
                >
                  {isLoadding && <CircularProgress size={20} color="secondary" />} &nbsp; Create
                  AccountEdit
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
