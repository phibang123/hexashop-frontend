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
  moTa?: string;
};

export interface IThich {
  _id?: any;
  _idSanPham: string;
  tenSanPham: string;
  hinhAnh: string;
  giaTien: number;
  moTa?: string;
}

export interface INguoiDungInput {
  taiKhoan: string;
  matKhau: string;
  email: string;
  diaChi?: string;
  hoTen: string;
  avatar?: string;
  soDt: string;
  sex?: 'Nam' | 'Nữ' | '';
}

export interface INguoiDungEdit {
  matKhau?: string;
  diaChi?: string;
  hoTen?: string;
  soDt?: string;
  sex?: 'Nam' | 'Nữ' | '';
}

export interface INguoiDung extends INguoiDungInput {
  _id: string;
  adminInWeb: boolean;
  gioHang: IGioiHang[];
  thich: IThich[];
}

export interface INguoiDungLogin {
  token: string;
  user: INguoiDung;
}

export interface ICommentInput {
  comment: string;
}
