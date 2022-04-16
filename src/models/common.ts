import { productPaginition } from 'features/Products/types';

export interface PaginationParams {
  limit?: number;
  page?: number;
  //sort?: number;
  //_total: number;
}

export interface ListResponseParams<T> {
  data: T[];
  pagination: PaginationParams;
}

export interface ListResponseOBJ<T> {
  data: T;
  dateTime: string;
  message: any;
  status: number;
  success: boolean;
}

export interface ListResponseARR<T> {
  data: T[];
  dateTime: string;
  message: any;
  status: number;
  success: boolean;
}

export interface ListResponsePagination<T> {
  data: {
    total: number;
    data: T[];
  };
  dateTime: string;
  message: any;
  status: number;
  success: boolean;
}
