"use client";
import { Tree, TreeNode } from "react-organizational-chart";
import { Employee } from "./Employee";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import React from "react";
import { useHierarchyContext } from "@/app/context/HierarchyContext";

const RenderTree = ({
  nodes,
  isVisible,
}: {
  nodes: Employee;
  isVisible: boolean;
  setSelected: any;
}) => {
  const [visible, setVisible] = React.useState<boolean>(isVisible || true);
  const { selected, setSelected, highlighted, setHighlighted } =
    useHierarchyContext();
  const treeNodeClass = visible ? "fadeInOpacity" : "fadeOutOpacity";
  const showCollapseButton = Array.isArray(nodes.children)
    ? nodes.children.length > 0
    : false;
  const isActive = nodes.id === selected ? true : false;
  const isHightlighted = highlighted.includes(nodes.id);
  console.log("isHightlighted", isHightlighted);

  return (
    <TreeNode
      key={nodes.id}
      label={
        <Employee
          position={nodes.position}
          name={nodes.name}
          id={nodes.id}
          setVisible={setVisible}
          current={visible}
          showCollapseButton={showCollapseButton}
          isActive={isActive}
          isHightlighted={isHightlighted}
          onClick={setSelected}
        />
      }
      className={treeNodeClass}
    >
      {Array.isArray(nodes.children)
        ? nodes.children.map((node, i) => (
            <RenderTree
              key={i}
              nodes={node}
              isVisible={visible}
              setSelected={setSelected}
            />
          ))
        : null}
    </TreeNode>
  );
};

// Having to use default export here due to issue with Next dynamic imports
export default function CompanyHierarchy({
  data,
  setSelected,
}: {
  data: IHierarchyData;
  setSelected: any;
}) {
  const theme = useTheme();
  const showComponent = useMediaQuery(theme.breakpoints.up("md"));

  if (!showComponent) return null;

  return (
    <Tree label="Meet the company">
      {data.map((x) => (
        <RenderTree
          key={x.id}
          nodes={x}
          isVisible={true}
          setSelected={setSelected}
        />
      ))}
    </Tree>
  );
}
