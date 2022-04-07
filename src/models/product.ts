export interface IIdNguoiDung {
  idNguoiDung: string;
  tenNguoiDung: string;
}
export interface IComment {
  idNguoiDung: string;
  tenNguoiDung: string;
  avatar: string;
  ngoiDungComment: string;
}

export interface ILuotThich {
  tongLuotThich: number;
  idNguoiDungs: IIdNguoiDung[];
}

export interface ISanPhamInput {
  tenSanPham: string;
  giaTien: number;
  sale: boolean;
  phanTramSale: number;
  categories: string;
  hinhAnh?: string;
  soLuong: number;
  moTa?: string;
}

export interface ISanPham extends ISanPhamInput {
  _id?: object;
  tenSanPham: string;
  giaTien: number;
  sale: boolean;
  phanTramSale: number;
  thanhTien: number;
  categories: string;

  hinhAnh: string;
  luotThich: ILuotThich;

  comment: IComment[];
  soLuong: number;
}
