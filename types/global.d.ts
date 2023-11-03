// types/global.d.ts

export {};

declare global {
  type Position =
    | "CEO"
    | "CTO"
    | "Director"
    | "Employee"
    | "Software engineer"
    | "CFO"
    | "Finance Manager"
    | "Financial Analyst"
    | "Accounting Manager"
    | "COO"
    | "VP of Operations"
    | "Director of Production"
    | "Director of Logistics"
    | "VP of HR"
    | "HR Manager";

  interface IHierarchyData {
    name: string;
    id: string;
    email: string;
    position: Position;
    children?: IHierarchyData[];
  }
}
