"use client";
import { Tree, TreeNode } from "react-organizational-chart";
import { Employee } from "./Employee";
import { useTheme } from "@mui/material/styles";
import { Box, Button, Grid, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import { useHierarchyContext } from "@/app/context/HierarchyContext";
import { navigationDirectionReducer } from "../../utils/utils";
import { HierarchyNavigation } from "./HierarchyNavigation";

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
  const fadeClass = visible ? "fadeInOpacity" : "fadeOutOpacity";
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
      className={fadeClass}
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
  const { setExpandAll, expandAll, currentNode, setCurrentNode, cursor } =
    useHierarchyContext();
  const theme = useTheme();
  const showComponent = useMediaQuery(theme.breakpoints.up("md"));

  if (!showComponent) return null;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const { code } = e.nativeEvent;
    const id = navigationDirectionReducer(code, cursor);

    if (id) {
      setCurrentNode(id);
    }
  };

  function handleExpandAll() {
    setExpandAll(true);
  }

  return (
    <Box tabIndex={-1} onKeyDown={handleKeyDown}>
      <Grid container justifyContent="center">
        <Grid item>
          <Button sx={{ mb: 4 }} variant="contained" onClick={handleExpandAll}>
            Expand all
          </Button>
        </Grid>
      </Grid>
      <HierarchyNavigation
        data={data}
        sx={{ display: { xs: "none", md: "flex" } }}
      />
      <Box mt={4}>
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
    </Box>
  );
}
