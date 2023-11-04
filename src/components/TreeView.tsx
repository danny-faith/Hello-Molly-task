"use client";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TreeView } from "@mui/x-tree-view/TreeView";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";

const renderTree = (nodes: Employee) => (
  <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
    {Array.isArray(nodes.children)
      ? nodes.children.map((node) => renderTree(node))
      : null}
  </TreeItem>
);

const TreeViewDemo = ({ data }: { data: IHierarchyData }) => {
  const theme = useTheme();
  const showComponent = useMediaQuery(theme.breakpoints.down("md"));

  if (!showComponent) return null;

  return (
    <TreeView
      aria-label="Company navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {data.map((elem) => renderTree(elem))}
    </TreeView>
  );
};

export { TreeViewDemo };
