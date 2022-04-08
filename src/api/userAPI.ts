import { INguoiDung } from 'models';
import { INguoiDungLogin } from './../models/user';
import { ListResponseARR } from './../models/common';
import { LoginType } from './../features/Login/types/index';
import axiosClient from './axiosClient';

const userApi = {
  login(data: LoginType): Promise<ListResponseARR<INguoiDungLogin>> {
    const url = '/QuanLyNguoiDung/DangNhap';
    return axiosClient.post(url, data);
  },
  signup(data: INguoiDung): Promise<ListResponseARR<INguoiDung>> {
    const url = '/QuanLyNguoiDung/DangKy';
    return axiosClient.post(url, data);
  },
};

export default userApi;
