import * as React from 'react';
import * as Yup from 'yup';

import { CircularProgress, CssBaseline, Grid } from '@mui/material';
import { Form, useFormik, withFormik } from 'formik';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from 'app/hooks';

import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { NavLink } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { authActions } from '../loginSlice';

const theme = createTheme();

export default function SignInSide() {
  const dispatch = useAppDispatch();
  const isLogging = useAppSelector((state) => state.auth.isLoggedIn);
  const formikLogin = useFormik({
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
              justifyContent: "center"
            }}
          >
         

            <div className="flex flex-col mt-20 xl:max-w-7xl w-full p-12 rounded-md  border xl:w-4/5 shadow-lg">
              <div className="md:mb-16  text-center">
                <h1 className="md:text-5xl text-2xl my-6  font-bold ">Sign in</h1>
                <p className="md:text-xl text-lg dark:text-coolGray-400">Sign in to access your account</p>
              </div>
              <form
                onSubmit={formikLogin.handleSubmit}
                className="space-y-12 ng-untouched ng-pristine ng-valid"
              >
                <div className="space-y-4">
                  <div>
                    <label className="md:text-2xl block mb-5 text-xl">Account</label>
                    <input
                      onChange={formikLogin.handleChange}
                      onBlur={formikLogin.handleBlur}
                      name="taiKhoan"
                      id="email"
                      placeholder="acoount"
                      className={`w-full text-xl px-6 py-5 ${formikLogin.errors.taiKhoan && formikLogin.touched.taiKhoan ? " border-solid border-red-700" : ""}  rounded-md  shadow appearance-none  text-gray-700 leading-tight`} 
                    />
                    <div className="text-red-900 ml-4 mt-3 ">
                      {formikLogin.errors.taiKhoan && formikLogin.touched.taiKhoan ? (
                        <p>{formikLogin.errors.taiKhoan}</p>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between ">
                      <label className="md:text-2xl block mb-5 text-xl">Password</label>
                     
                    </div>
                    <input
                      onChange={formikLogin.handleChange} 
                      onBlur={formikLogin.handleBlur}
                      type="password"
                      name="matKhau"
                      id="password"
                      placeholder="*****"
                      className={` w-full text-xl px-6 py-5 rounded-md leading-tight border ${formikLogin.errors.matKhau && formikLogin.touched.matKhau ? "border-solid border-red-700" : ""}  shadow   text-gray-700  focus:outline-none focus:shadow-outline border-red-800 boder-2 outline-none`}
                    />
          
                     <div className="text-red-900 ml-4 mt-3">
                     {formikLogin.errors.matKhau && formikLogin.touched.matKhau ? (
                      <p>{formikLogin.errors.matKhau}</p>
                    ) : null}
                    </div>
                  </div>
                </div>
                <div className="space-y-5">
                  <div>
                    <button
                      disabled={isLogging ? true : false}
                      type="submit"
                      className="w-full text-xl px-11 py-6 rounded-md bg-gray-800 text-gray-200 items-center"
                    >
                      {isLogging && <CircularProgress size={20} color="secondary" />} &nbsp; Sign in
                    </button>
                  </div>
                  <p className="md:px-20 text-2xl text-center ">
                    Don't have an account yet?
                    <NavLink
                      rel="noopener noreferrer"
                      to="/signup"
                      className="hover:underline"
                    >
                      Sign up
                    </NavLink>
                    .
                  </p>
                </div>
              </form>
            </div>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
