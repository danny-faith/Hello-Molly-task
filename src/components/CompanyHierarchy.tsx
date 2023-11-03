"use client";
import { Tree, TreeNode } from "react-organizational-chart";
import { Employee } from "./Employee";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import React from "react";

const RenderTree = ({
  nodes,
  isVisible,
  setSelected,
}: {
  nodes: IHierarchyData;
  isVisible: boolean;
  setSelected: any;
}) => {
  const [visible, setVisible] = React.useState<boolean>(isVisible || true);
  const treeNodeClass = visible ? "fadeInOpacity" : "fadeOutOpacity";
  const showCollapseButton = Array.isArray(nodes.children)
    ? nodes.children.length > 0
    : false;
  const isActive = nodes.id === "" ? true : false;

  return (
    <TreeNode
      key={nodes.id}
      label={
        <Employee
          position={nodes.position}
          name={nodes.name}
          id={nodes.id}
          callback={setVisible}
          current={visible}
          showCollapseButton={showCollapseButton}
          active={isActive}
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
    <Tree label="Company hierarchy">
      {<RenderTree nodes={data} isVisible={true} setSelected={setSelected} />}
    </Tree>
  );
}
