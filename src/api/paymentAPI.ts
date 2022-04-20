import { ListResponseARR, PaginationParams } from './../models/common';

import { ILicSuMuaHang } from './../models/historyPay';
import axiosClient from './axiosClient';

const payment = {
  getAll(): Promise<ListResponseARR<ILicSuMuaHang>> {
    const url = 'QuanLyLichSuMuaHang/LichSuMuaHang';
    return axiosClient.get(url);
  },
  getByUser(pagination: PaginationParams): Promise<ListResponseARR<ILicSuMuaHang>> {
    const url = `QuanLyLichSuMuaHang/LichSuMuaHang?page=${
      pagination.page ? pagination.page : ''
    }&limit=${pagination.limit ? pagination.limit : ''}`;
    return axiosClient.get(url);
  },
  byProduct(): Promise<ListResponseARR<ILicSuMuaHang>> {
    const url = 'QuanLyLichSuMuaHang/DatHang';
    return axiosClient.post(url);
  },
};

export default payment;
