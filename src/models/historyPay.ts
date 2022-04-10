export interface IGioiHangHistory {
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
}

export interface ILicSuMuaHang {
  idNguoiDung: string;
  taiKhoan: string;
  //matKhau: string;
  email: string;
  diaChi?: string;
  hoTen: string;
  avatar: string;
  soDt: string;

  sex: 'Nam' | 'Nữ';
  trangThai: 'chờ xác nhận' | 'đã xác nhận' | 'đang giao' | 'giao thành công';
  ngayDat?: string;
  tongTien: number;
  soTienGiam: number;
  tongSanPham: IGioiHangHistory[];
}
