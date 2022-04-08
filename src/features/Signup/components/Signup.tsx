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
      sex: 'Nam',
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
    onSubmit: (values:INguoiDungInput) => {
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
              <input
                type="text"
                onChange={formikSignup.handleChange}
                onBlur={formikSignup.handleBlur}
                className="block border border-grey-light w-full p-6 rounded  text-2xl"
                name="taiKhoan"
                placeholder="Account"
              />
              <div className="text-red-900 ml-5">
                {formikSignup.errors.taiKhoan && formikSignup.touched.taiKhoan ? (
                  <>{formikSignup.errors.taiKhoan}</>
                ) : null}
              </div>
            </div>
            <div className="mb-7">
              <input
                type="text"
                onChange={formikSignup.handleChange}
                onBlur={formikSignup.handleBlur}
                className="block border border-grey-light w-full p-6 rounded  text-2xl"
                name="email"
                placeholder="Email"
              />
              <div className="text-red-900 ml-5">
                {formikSignup.errors.email && formikSignup.touched.email ? (
                  <>{formikSignup.errors.email}</>
                ) : null}
              </div>
            </div>
            <div className="mb-7">
              <input
                type="password"
                onChange={formikSignup.handleChange}
                onBlur={formikSignup.handleBlur}
                className="block border border-grey-light w-full p-6 rounded text-2xl"
                name="matKhau"
                placeholder="Password"
              />
              <div className="text-red-900 ml-5">
                {formikSignup.errors.matKhau && formikSignup.touched.matKhau ? (
                  <>{formikSignup.errors.matKhau}</>
                ) : null}
              </div>
            </div>
            
            <div className="mb-7">
              <input
                type="text"
                onChange={formikSignup.handleChange}
                onBlur={formikSignup.handleBlur}
                className="block border border-grey-light w-full p-6 rounded mb-7 text-2xl"
                name="hoTen"
                placeholder="Full Name"
              />
              <div className="text-red-900 ml-5">
                {formikSignup.errors.hoTen && formikSignup.touched.hoTen ? (
                  <>{formikSignup.errors.hoTen}</>
                ) : null}
              </div>
            </div>
            <div className="mb-7">
              <input
                type="text"
                onChange={formikSignup.handleChange}
                onBlur={formikSignup.handleBlur}
                className="block border border-grey-light w-full p-6 rounded text-2xl"
                name="soDt"
                placeholder="Number phone"
              />
              <div className="text-red-900 ml-5">
                {formikSignup.errors.soDt && formikSignup.touched.soDt ? (
                  <>{formikSignup.errors.soDt}</>
                ) : null}
              </div>
            </div>
            <select
              onChange={formikSignup.handleChange}
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
            >
              <option >Select Sex</option>
              <option value="Nam" defaultValue={"Nam"}>
                Men
              </option>
              <option value="Nữ">Women</option>
            </select>

            <button
              type="submit"
              disabled={isSignUp ? true : false}
              className="w-full text-center py-6 text-2xl rounded bg-green text-white bg-gray-800 hover:bg-green-dark focus:outline-none my-4"
            >
             {isSignUp && <CircularProgress size={20} color="secondary" />} &nbsp;  Create Account
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
