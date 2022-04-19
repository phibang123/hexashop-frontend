import {
  ListResponseARR,
  ListResponseOBJ,
  ListResponsePagination,
  PaginationParams,
} from './../models/common';

import { ISanPham } from './../models/product';
import axiosClient from './axiosClient';

const pruduct = {
  getAll(): Promise<ListResponseARR<ISanPham>> {
    const url = 'QuanLySanPham/LayTatCaSanPham';
    return axiosClient.get(url);
  },
  getAllPaganition(pagination: PaginationParams): Promise<ListResponsePagination<ISanPham>> {
    const url = `QuanLySanPham/LayTatCaSanPhamPhanTrang?page=${
      pagination.page ? pagination.page : ''
    }&limit=${pagination.limit ? pagination.limit : ''}&categori=${
      pagination.categori ? pagination.categori : ''
    }&categories=${pagination.categories ? pagination.categori : ''}&sortBy=${
      pagination.sort ? pagination.sort : ''
    }`;
    return axiosClient.get(url);
  },
  getProjectById(id: string): Promise<ListResponseOBJ<ISanPham>> {
    const url = `QuanLySanPham/TimChiTietSanPham/${id}`;
    return axiosClient.get(url);
  },
};

export default pruduct;
