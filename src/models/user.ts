export type IGioiHang = {
  _id?: any;
  _idSanPham: string;
  tenSanPham: string;
  soLuong: number;
  sale: boolean;
  phanTramSale: number;
  giaTien: number;
  thanhTien: number;
  hinhAnh: string;
  ngayThem?: string;
};

export interface IThich {
  _id?: any;
  _idSanPham: string;
  tenSanPham: string;
  hinhAnh: string;
  giaTien: number;
}

export interface INguoiDungInput {
  _id?: any;
  taiKhoan: string;
  matKhau: string;
  email: string;
  diaChi?: string;
  hoTen: string;
  avatar?: string;
  soDt: string;
  sex: 'Nam' | 'Nữ';
}

export interface INguoiDung extends INguoiDungInput {
  _id: object;
  adminInWeb: boolean;
  gioHang: IGioiHang[];
  thich: IThich[];
}

export interface INguoiDungLogin {
  token: string;
  user: INguoiDung;
}
