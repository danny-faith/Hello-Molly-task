"use client";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TreeView } from "@mui/x-tree-view/TreeView";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Avatar, CardHeader, useTheme } from "@mui/material";
import { theme } from "../../theme";

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
      title={name}
      subheader={position}
    />
  );
};

const renderTree = (node: Employee) => (
  <TreeItem key={node.id} nodeId={node.id} label={TreeViewLabel(node)}>
    {Array.isArray(node.children)
      ? node.children.map((childNode) => renderTree(childNode))
      : null}
  </TreeItem>
);

const TreeViewWrapper = ({ data }: { data: IHierarchyData }) => {
  const theme = useTheme();
  const showComponent = useMediaQuery(theme.breakpoints.down("md"));

  if (!showComponent) return null;

  return (
    <TreeView
      aria-label="Company navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {data.map((node) => renderTree(node))}
    </TreeView>
  );
};

export { TreeViewWrapper };
