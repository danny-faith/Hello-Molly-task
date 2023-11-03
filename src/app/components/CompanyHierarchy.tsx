"use client";
import { Tree, TreeNode } from "react-organizational-chart";
import { Employee } from "./Employee";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

// Having to use default export here due to issue with Next dynamic imports
export default function CompanyHierarchy() {
  const theme = useTheme();
  const showComponent = useMediaQuery(theme.breakpoints.up("md"));

  if (!showComponent) return null;

  return (
    <Tree label={<Employee position="CEO" name="Gregor Eisenhorn" />}>
      <TreeNode
        label={<Employee position="Director" name="Robert C. Martin" />}
      >
        <TreeNode
          label={<Employee position="Software engineer" name="Rosie Frosyth" />}
        />
        <TreeNode
          label={<Employee position="Software engineer" name="Daniel Blythe" />}
        />
        <TreeNode
          label={<Employee position="Software engineer" name="Rosie Frosyth" />}
        />
      </TreeNode>
      <TreeNode
        label={<Employee position="Director" name="Robert C. Martin" />}
      >
        <TreeNode
          label={<Employee position="Software engineer" name="Rosie Frosyth" />}
        />
      </TreeNode>
      <TreeNode label={<Employee position="CTO" name="Garviel Loken" />}>
        <TreeNode
          label={<Employee position="Software engineer" name="Daniel Blythe" />}
        />
        <TreeNode
          label={<Employee position="Software engineer" name="Rosie Frosyth" />}
        />
      </TreeNode>
    </Tree>
  );
}
