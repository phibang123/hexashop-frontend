export interface PaginationParams {
  _limit: number;
  _page: number;
  _sort: number;
  _total: number;
}

export interface ListResponseParams<T> {
  data: T[];
  pagination: PaginationParams;
}

export interface ListResponseOBJ<T> {
  data: T;
  dateTime: string;
  message: any;
  status: number;
}

export interface ListResponseARR<T> {
  data: T[];
  dateTime: string;
  message: any;
  status: number;
}
