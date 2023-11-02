"use client";
import { Tree, TreeNode } from "react-organizational-chart";
import { Employee } from "./Employee";

const CompanyHierarchy = () => {
  return (
    <Tree label={<Employee position="CEO" name="Gregor Eisenhorn" />}>
      <TreeNode
        label={<Employee position="Director" name="Robert C. Martin" />}
      >
        <TreeNode
          label={<Employee position="Software engineer" name="Daniel Blythe" />}
        />
        <TreeNode
          label={<Employee position="Software engineer" name="Rosie Frosyth" />}
        />
        <TreeNode
          label={<Employee position="Software engineer" name="Daniel Blythe" />}
        />
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
};

export { CompanyHierarchy };
