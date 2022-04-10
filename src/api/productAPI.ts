import axiosClient from './axiosClient';

const pruduct = {
  getAll() {
    const url = 'QuanLySanPham/LayTatCaSanPham';
    return axiosClient.get(url);
  },
  getProjectById(id: string) {
    const url = `QuanLySanPham/TimChiTietSanPham/${id}`;
    return axiosClient.get(url);
  },
};

export default pruduct;
