import { INguoiDungLogin } from './../models/user';
import { ListResponse } from 'models';
import { LoginType } from './../features/Login/types/index';
import axiosClient from './axiosClient';

const userApi = {
  login(data: LoginType): Promise<ListResponse<INguoiDungLogin>> {
    const url = '/QuanLyNguoiDung/DangNhap';
    return axiosClient.post(url, data);
  },
};

export default userApi;
