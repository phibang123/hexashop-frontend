import axiosClient from './axiosClient';

const payment = {
  getAll() {
    const url = 'QuanLyLichSuMuaHang/LichSuMuaHang';
    return axiosClient.get(url);
  },
};

export default payment;
