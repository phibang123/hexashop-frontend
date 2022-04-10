import { INguoiDung } from 'models';
import { ISanPham } from './../../../models/product';
export interface ProjectDetailRepon {
  dateTime: string;
  message: any;
  status: number;
  data: ISanPham;
}
