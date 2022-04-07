import * as React from 'react';
import * as Yup from 'yup';

import { Form, useFormik, withFormik } from 'formik';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from 'app/hooks';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { CircularProgress } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { authActions } from '../loginSlice';

const theme = createTheme();

export default function SignInSide() {
  const dispatch = useAppDispatch();
  const isLogging = useAppSelector(state => state.login.isLoggedIn)
  console.log(isLogging)
  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required('account not required'),
      matKhau: Yup.string()
        .min(6, 'Password must have min 6 characters')
        .required('PassWord not required')
        .max(32, 'Password must have max 32 character'),
    }),
    onSubmit: (values) => {
      // const action = dangKyAsynAction(values);
      dispatch(authActions.login(values));
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography  component="h1" variant="h5">
              Login
            </Typography>
            <form className="container" onSubmit={formik.handleSubmit}>
              <div className="">
                <div className="mb-20">
                  <label className="block mb-2 text-4xl  font-medium text-gray-900 dark:text-gray-300">
                    Tài khoản
                  </label>
                  <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="taiKhoan"
                    className="bg-gray-50 border text-4xl  border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="user"
                  />
                  <div className="text-red-900 text-2xl">
                    {formik.errors.taiKhoan && formik.touched.taiKhoan ? (
                      <>{formik.errors.taiKhoan}</>
                    ) : null}
                  </div>
                </div>
                <div className="mb-24">
                  <label className="block mb-2  text-4xl font-medium text-gray-900 dark:text-gray-300">
                    Mật khẩu
                  </label>
                  <input
                    className="bg-gray-50 text-4xl border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="password"
                    name="matKhau"
                  />
                  <div className="text-red-900 text-2xl">
                    {formik.errors.matKhau && formik.touched.matKhau ? (
                      <>{formik.errors.matKhau}</>
                    ) : null}
                  </div>
                </div>

                <div className="d-flex justify-content-between w-50 mt-10">
                  <button
                    className="text-white bg-blue-700 hover:bg-blue-800  text-4xl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="submit"
                  >
                    {isLogging && <CircularProgress size={20} color="secondary"/> } &nbsp; Login
                  </button>

                  {/* <button htmlType="submit" size='large' style={{ color: '#ffffff', width: '45%', backgroundColor: 'red', marginTop: '50px' }} onClick={() =>
                {
                    history.push('/signup')
                }} className='mt-5'  type='button'>Sign up</button>
                </div> */}
                </div>
              </div>
            </form>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
