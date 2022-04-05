import axiosClient from './axiosClient';

const cateegories = {
  getAll() {
    const url = 'QuanLyCategoreis/LayToanBo';
    return axiosClient.get(url);
  },
};

export default cateegories;
