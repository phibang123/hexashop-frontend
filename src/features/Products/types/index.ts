import { ISanPham } from './../../../models/product';
export interface projectAllRes {
  dateTime: string;
  message: any;
  status: number;
  data: ISanPham[];
}

export interface productPaginition {
  data: ISanPham[];
  total: number;
}

export interface projectAllPaginitionRes {
  dateTime: string;
  message: any;
  status: number;
  data: productPaginition;
}
