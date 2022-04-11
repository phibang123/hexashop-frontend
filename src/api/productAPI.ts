import { ListResponseARR, ListResponseOBJ } from './../models/common';

import { ISanPham } from './../models/product';
import axiosClient from './axiosClient';

const pruduct = {
  getAll(): Promise<ListResponseARR<ISanPham>> {
    const url = 'QuanLySanPham/LayTatCaSanPham';
    return axiosClient.get(url);
  },
  getProjectById(id: string): Promise<ListResponseOBJ<ISanPham>> {
    const url = `QuanLySanPham/TimChiTietSanPham/${id}`;
    return axiosClient.get(url);
  },
};

export default pruduct;
