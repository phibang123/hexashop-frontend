import { ISanPham } from './../../../models/product';
export interface projectAllRes {
  dateTime: string;
  message: any;
  status: number;
  data: ISanPham[];
}
