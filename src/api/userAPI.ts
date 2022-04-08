import { INguoiDungInput, INguoiDungLogin } from './../models/user';
import { ListResponseARR, ListResponseOBJ } from './../models/common';

import { INguoiDung } from 'models';
import { LoginType } from './../features/Login/types/index';
import axiosClient from './axiosClient';

const userApi = {
  login(data: LoginType): Promise<ListResponseARR<INguoiDungLogin>> {
    const url = '/QuanLyNguoiDung/DangNhap';
    return axiosClient.post(url, data);
  },
  signup(data: INguoiDungInput): Promise<ListResponseARR<INguoiDung>> {
    const url = '/QuanLyNguoiDung/DangKy';
    return axiosClient.post(url, data);
  },
  getProfile(): Promise<ListResponseOBJ<INguoiDung>> {
    const url = '/QuanLyNguoiDung/ThongTin';
    return axiosClient.get(url);
  },
};

export default userApi;
