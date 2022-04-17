import { ListResponseARR, ListResponsePagination } from './../models/common';

import { ICategoryResponse } from './../models/categores';
import axiosClient from './axiosClient';

const cateegories = {
  getAll(data: string): Promise<ListResponseARR<ICategoryResponse>> {
    const url = `QuanLyCategoreis/LayToanBo?categoriesName=${data ? data : ''}`;
    return axiosClient.get(url);
  },
};

export default cateegories;
