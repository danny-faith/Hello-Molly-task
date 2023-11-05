"use client";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TreeView } from "@mui/x-tree-view/TreeView";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Avatar, CardHeader, useTheme } from "@mui/material";
import { theme } from "../../theme";
import { useHierarchyContext } from "@/app/context/HierarchyContext";
import React, { useEffect } from "react";

const allIds = ["5564", "5560", "5556", "5555"];

const TreeViewLabel = ({ name, position }: Employee) => {
  const avatarIntial = name.length > 0 ? name.charAt(0) : "?";

  return (
    <CardHeader
      avatar={
        <Avatar
          sx={{ bgcolor: theme.palette.secondary.dark }}
          aria-label="Employee"
        >
          {avatarIntial}
        </Avatar>
      }
      title={name} // this should be typography comp with variant="hierarchyname"
      subheader={position}
    />
  );
};

const renderTree = (node: Employee, highlighted: string[]) => (
  <TreeItem
    key={node.id}
    nodeId={node.id}
    sx={{
      "& > div > div.MuiTreeItem-label": {
        backgroundColor: highlighted.includes(node.id)
          ? theme.palette.success.main
          : "transparent",
      },
    }}
    label={TreeViewLabel(node)}
  >
    {Array.isArray(node.children)
      ? node.children.map((childNode) => renderTree(childNode, highlighted))
      : null}
  </TreeItem>
);

const TreeViewWrapper = ({ data }: { data: IHierarchyData }) => {
  const { expandAll, highlighted, setExpandAll, selected } =
    useHierarchyContext();
  const theme = useTheme();
  const showComponent = useMediaQuery(theme.breakpoints.down("md"));
  const [expanded, setExpanded] = React.useState<string[]>([]);

  useEffect(() => {
    if (expandAll) {
      setExpanded(allIds);
      setExpandAll(false);
    }
  }, [expandAll, setExpandAll]);
  console.log("highlighted", highlighted);

  const handleToggle = (_event: React.SyntheticEvent, nodeIds: string[]) => {
    setExpanded(nodeIds);
  };

  if (!showComponent) return null;

  return (
    <TreeView
      aria-label="Company navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      expanded={expanded}
      onNodeToggle={handleToggle}
    >
      {data.map((node) => renderTree(node, highlighted))}
    </TreeView>
  );
};

export { TreeViewWrapper };
