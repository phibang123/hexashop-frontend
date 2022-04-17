import { ICategoryResponse } from './../../../models/categores';
export interface categoriesReponse {
  dateTime: string;
  message: any;
  status: number;
  data: ICategoryResponse[];
}
