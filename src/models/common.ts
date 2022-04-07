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

export interface ListResponse<T> {
  data: T;
}
