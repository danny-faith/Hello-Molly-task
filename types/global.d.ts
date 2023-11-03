// types/global.d.ts

export {};

declare global {
  interface IHierarchyData {
    name: string;
    id: string;
    email: string;
    position: string;
    children?: IHierarchyData[];
  }
}
