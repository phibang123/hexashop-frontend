import { INguoiDung } from './../../../models/user';
export interface LoginType {
  taiKhoan: string;
  matKhau: string;
}

interface dataS {
  token: string;
  user: INguoiDung;
}
export interface LoginRespon {
  dateTime: string;
  message: any;
  status: number;
  data: dataS | string;
}
