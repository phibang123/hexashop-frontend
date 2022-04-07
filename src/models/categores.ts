export interface ICategori {
  ids: number;
  name: string;
  parent: string;
  category: string;
  level: number;
  parentId: number;
  slug: string;
}

export interface ICategoryResponse {
  id: number;
  name: string;
  category: string;
  slug: string;
  chilrens: ICategoryResponse[];
}
