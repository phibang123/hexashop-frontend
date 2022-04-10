import { ILicSuMuaHang } from './../models/historyPay';
import { ListResponseARR } from './../models/common';
import axiosClient from './axiosClient';

const payment = {
  getAll(): Promise<ListResponseARR<ILicSuMuaHang>> {
    const url = 'QuanLyLichSuMuaHang/LichSuMuaHang';
    return axiosClient.get(url);
  },
  getByUser(): Promise<ListResponseARR<ILicSuMuaHang>> {
    const url = 'QuanLyLichSuMuaHang/LichSuMuaHang';
    return axiosClient.get(url);
  },
  byProduct(): Promise<ListResponseARR<ILicSuMuaHang>> {
    const url = 'QuanLyLichSuMuaHang/DatHang';
    return axiosClient.post(url);
  },
};

export default payment;
