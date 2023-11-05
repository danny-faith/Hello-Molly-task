"use client";
import { Tree, TreeNode } from "react-organizational-chart";
import { Employee } from "./Employee";
import { useTheme } from "@mui/material/styles";
import { Box, Button, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import { useHierarchyContext } from "@/app/context/HierarchyContext";

// This component needs refactoring, too big
const RenderTree = ({
  nodes,
  isVisible,
  setExpandAll,
  currentNode,
}: {
  nodes: Employee;
  isVisible: boolean;
  setSelected: any;
  expandAll: boolean;
  setExpandAll: React.Dispatch<React.SetStateAction<boolean>>;
  currentNode: string;
}) => {
  const [visible, setVisible] = React.useState<boolean>(isVisible || true);
  const { selected, setSelected, highlighted, expandAll } =
    useHierarchyContext();
  const treeNodeClass = visible ? "fadeInOpacity" : "fadeOutOpacity";
  const showCollapseButton = Array.isArray(nodes.children)
    ? nodes.children.length > 0
    : false;
  const isActive = nodes.id === selected ? true : false;
  const isHightlighted = highlighted.includes(nodes.id);
  const isCurrentNode = currentNode === nodes.id;

  useEffect(() => {
    if (expandAll) {
      setExpandAll(false);
      setVisible(true);
    }
  }, [expandAll, setExpandAll, visible]);

  // throw new Error('An error') // uncomment to test Next route error boundaries

  return (
    <TreeNode
      key={nodes.id}
      label={
        <Employee
          position={nodes.position}
          name={nodes.name}
          avatar={nodes.avatar}
          id={nodes.id}
          setVisible={setVisible}
          current={visible}
          showCollapseButton={showCollapseButton}
          isActive={isActive}
          isHightlighted={isHightlighted}
          isCurrentNode={isCurrentNode}
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
              expandAll={expandAll}
              setExpandAll={setExpandAll}
              currentNode={currentNode}
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
  const { setExpandAll, expandAll, currentNode } = useHierarchyContext();
  const theme = useTheme();
  const showComponent = useMediaQuery(theme.breakpoints.up("md"));

  if (!showComponent) return null;

  function handleExpandAll() {
    setExpandAll(true);
  }

  return (
    <Box>
      <Button variant="contained" onClick={handleExpandAll}>
        Expand all
      </Button>
      <Tree label="Meet the company">
        {data.map((x) => (
          <RenderTree
            key={x.id}
            nodes={x}
            isVisible={true}
            setSelected={setSelected}
            expandAll={expandAll}
            setExpandAll={setExpandAll}
            currentNode={currentNode}
          />
        ))}
      </Tree>
    </Box>
  );
}
