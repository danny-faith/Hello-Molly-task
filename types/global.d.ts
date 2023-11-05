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

  type Employee = {
    name: string;
    id: string;
    email: string;
    position: Position;
    avatar: string;
    children?: Employee[];
  };

  type IHierarchyData = Employee[];
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    hierarchyname: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    hierarchyname?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    hierarchyname: true;
  }
}

declare module "@mui/material/styles/createTypography" {
  interface FontStyle {
    hierarchyname: string;
  }
}
