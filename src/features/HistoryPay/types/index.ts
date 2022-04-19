import { ILicSuMuaHang } from './../../../models/historyPay';

export interface LichSuPaginition {
  data: ILicSuMuaHang[];
  total: number;
}

export interface LichSuRespon {
  dateTime: string;
  message: any;
  status: number;
  data: LichSuPaginition;
}
