import { INguoiDungEdit, INguoiDungInput, INguoiDungLogin } from './../models/user';
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
  setAvatar(data: any): Promise<ListResponseOBJ<INguoiDung>> {
    const url = '/QuanLyNguoiDung/Avatar';
    return axiosClient.patch(url, data);
  },
  Like(data: string): Promise<ListResponseOBJ<INguoiDung>> {
    const url = `/QuanLyNguoiDung/Like/${data}`;
    return axiosClient.post(url);
  },
  addCart(data: string): Promise<ListResponseOBJ<INguoiDung>> {
    const url = `QuanLyNguoiDung/ThemVaoGioTangSoLuong/${data}`;
    return axiosClient.post(url);
  },
  reduceCart(data: string): Promise<ListResponseOBJ<INguoiDung>> {
    const url = `QuanLyNguoiDung/XoaKhoiGioGiamSoLuong/${data}`;
    return axiosClient.post(url);
  },
  deleteProductCart(data: string): Promise<ListResponseOBJ<INguoiDung>> {
    const url = `QuanLyNguoiDung/XoaKhoiGioHang/${data}`;
    return axiosClient.post(url);
  },
  updateProfile(data: INguoiDungEdit): Promise<ListResponseOBJ<INguoiDung>> {
    const url = `QuanLyNguoiDung/ChinhSua`;
    return axiosClient.patch(url, data);
  },
};

export default userApi;
