import * as React from 'react';
import * as Yup from 'yup';

import { Form, withFormik } from 'formik';
import { useAppDispatch, useAppSelector } from 'app/hooks';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { CircularProgress } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import { INguoiDungInput } from 'models';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { NavLink } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { signUpActions } from '../signupSlide';
import { useFormik } from 'formik';

export default function Signup() {
  interface windowScreen {
    widthWindow: number;
    heightWindow: number;
  }
  const dispatch = useAppDispatch();
  const isSignUp = useAppSelector((state) => state.signup.isSignUp);

  const [{ widthWindow, heightWindow }, setSize] = React.useState<windowScreen>({
    widthWindow: window.innerWidth,
    heightWindow: window.innerHeight,
  });

  React.useEffect(() => {
    window.onresize = () => {
      setSize({
        widthWindow: Math.round(window.innerWidth),
        heightWindow: Math.round(window.innerHeight),
      });
    };
  }, []);
  const formikSignup = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
      email: '',
      soDt: '',
      sex: '',
      hoTen: '',
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required('account not required'),
      matKhau: Yup.string()
        .min(6, 'Password must have min 6 characters')
        .required('PassWord not required')
        .max(32, 'Password must have max 32 character'),
      email: Yup.string().email('Invalid email format').required('email not required'),
      soDt: Yup.string().required('phone not required'),
      hoTen: Yup.string().required('Full Name not required'),
    }),
    onSubmit: (values: INguoiDungInput) => {
      // const action = dangKyAsynAction(values);
      dispatch(signUpActions.singup(values));
    },
  });
  return (
    <div
      className="bg-grey-lighter min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(https://picsum.photos/${Math.round(widthWindow)}/${Math.round(
          heightWindow * 2
        )}?grayscale)`,
      }}
    >
      <div className="container max-w-5xl mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-9 py-12 rounded shadow-2xl text-black w-full">
          <form onSubmit={formikSignup.handleSubmit}>
            <h1 className="mb-12 text-5xl text-center">Sign up</h1>

            <div className="mb-7">
              <label className="block text-gray-500 font-bold xl:text-2xl text-left mb-1 pr-4">
              Account
              </label>
              <input
                type="text"
                onChange={formikSignup.handleChange}
                onBlur={formikSignup.handleBlur}
                className={`w-full text-xl px-6 py-5 ${
                  formikSignup.errors.taiKhoan && formikSignup.touched.taiKhoan
                    ? ' border-solid border-red-700'
                    : ''
                }  rounded-md  shadow appearance-none  text-gray-700 leading-tight`}
                name="taiKhoan"
                placeholder="abcdef"
              />
              <div className="text-red-900 ml-5 xl:text-xl">
                {formikSignup.errors.taiKhoan && formikSignup.touched.taiKhoan ? (
                  <p>{formikSignup.errors.taiKhoan}</p>
                ) : null}
              </div>
            </div>
            <div className="mb-7">
            <label className="block text-gray-500 font-bold xl:text-2xl text-left mb-1 pr-4">
            Email
              </label>
              <input
                type="text"
                onChange={formikSignup.handleChange}
                onBlur={formikSignup.handleBlur}
                className={`w-full text-xl px-6 py-5 ${
                  formikSignup.errors.email && formikSignup.touched.email
                    ? ' border-solid border-red-700'
                    : ''
                }  rounded-md  shadow appearance-none  text-gray-700 leading-tight`}
                name="email"
                placeholder="b@gmial.com"
              />
              <div className="text-red-900 ml-5 xl:text-xl">
                {formikSignup.errors.email && formikSignup.touched.email ? (
                  <p>{formikSignup.errors.email}</p>
                ) : null}
              </div>
            </div>
            <div className="mb-7">
            <label className="block text-gray-500 font-bold xl:text-2xl text-left mb-1 pr-4">
            Password
              </label>
              <input
                type="password"
                onChange={formikSignup.handleChange}
                onBlur={formikSignup.handleBlur}
                className={`w-full text-xl px-6 py-5 ${
                  formikSignup.errors.matKhau && formikSignup.touched.matKhau
                    ? ' border-solid border-red-700'
                    : ''
                }  rounded-md  shadow appearance-none  text-gray-700 leading-tight`}
                name="matKhau"
                placeholder="***********"
              />
              <div className="text-red-900 ml-5 xl:text-xl">
                {formikSignup.errors.matKhau && formikSignup.touched.matKhau ? (
                  <p>{formikSignup.errors.matKhau}</p>
                ) : null}
              </div>
            </div>

            <div className="mb-7">
            <label className="block text-gray-500 font-bold xl:text-2xl text-left mb-1 pr-4">
            Full Name
              </label>
              <input
                type="text"
                onChange={formikSignup.handleChange}
                onBlur={formikSignup.handleBlur}
                className={`w-full text-xl px-6 py-5 ${
                  formikSignup.errors.hoTen && formikSignup.touched.hoTen
                    ? ' border-solid border-red-700'
                    : ''
                }  rounded-md  shadow appearance-none  text-gray-700 leading-tight`}
                name="hoTen"
                placeholder="Alex ..."
              />
              <div className="text-red-900 ml-5 xl:text-xl">
                {formikSignup.errors.hoTen && formikSignup.touched.hoTen ? (
                  <p>{formikSignup.errors.hoTen}</p>
                ) : null}
              </div>
            </div>
            <div className="mb-7">
            <label className="block text-gray-500 font-bold xl:text-2xl text-left mb-1 pr-4">
            Number phone
              </label>
              <input
                type="text"
                onChange={formikSignup.handleChange}
                onBlur={formikSignup.handleBlur}
                className={`w-full text-xl px-6 py-5 ${
                  formikSignup.errors.soDt && formikSignup.touched.soDt
                    ? ' border-solid border-red-700'
                    : ''
                }  rounded-md  shadow appearance-none  text-gray-700 leading-tight`}
                name="soDt"
                placeholder="0999999"
              />
              <div className="text-red-900 ml-5 xl:text-xl">
                {formikSignup.errors.soDt && formikSignup.touched.soDt ? (
                  <p>{formikSignup.errors.soDt}</p>
                ) : null}
              </div>
            </div>
            <label className="block text-gray-500 font-bold xl:text-2xl text-left mb-1 pr-4">
             Sex
              </label>
            <select
              onChange={formikSignup.handleChange}
              className="form-select appearance-none
              rounded-md  shadow  text-gray-700 leading-tight
      block
      w-full
      px-6
      py-5
      text-2xl
      font-extralight
      bg-white bg-clip-padding bg-no-repeat
      border-collapse
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
              name="sex"
            >
              <option>Select Sex</option>
              <option value="Nam" selected>
                Men
              </option>
              <option value="Nữ">Women</option>
            </select>

            <button
              type="submit"
              disabled={isSignUp ? true : false}
              className="w-full text-center py-6 text-2xl rounded bg-green text-white bg-gray-800 hover:bg-green-dark focus:outline-none my-4"
            >
              {isSignUp && <CircularProgress size={20} color="secondary" />} &nbsp; Create Account
            </button>

            <div className="text-grey-dark mt-9 text-2xl   text-center">
              Already have an account?
              <NavLink className="no-underline border-b border-blue text-blue" to="/login">
                Log in
              </NavLink>
              .
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
