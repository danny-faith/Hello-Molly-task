"use client";
import { Tree, TreeNode } from "react-organizational-chart";
import { Employee } from "./Employee";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const renderTree = (nodes: IHierarchyData) => (
  <TreeNode
    key={nodes.id}
    label={<Employee position={nodes.position} name={nodes.name} />}
  >
    {Array.isArray(nodes.children)
      ? nodes.children.map((node) => renderTree(node))
      : null}
  </TreeNode>
);

// Having to use default export here due to issue with Next dynamic imports
export default function CompanyHierarchy({ data }: { data: IHierarchyData }) {
  const theme = useTheme();
  const showComponent = useMediaQuery(theme.breakpoints.up("md"));

  if (!showComponent) return null;

  return <Tree label="Hello Molly">{renderTree(data)}</Tree>;
}
