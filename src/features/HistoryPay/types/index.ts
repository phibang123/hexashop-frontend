import { ILicSuMuaHang } from './../../../models/historyPay';
export interface LichSuRespon {
  dateTime: string;
  message: any;
  status: number;
  data: ILicSuMuaHang[];
}
