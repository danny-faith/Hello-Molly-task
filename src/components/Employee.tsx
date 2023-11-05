import { Avatar, IconButton, Paper } from "@mui/material";
import Typography from "@mui/joy/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { theme } from "../../theme";
import { useEffect, useRef, useState } from "react";
import { useHierarchyContext } from "@/app/context/HierarchyContext";

const activeStyle = {
  backgroundColor: `${theme.palette.primary.main} !important`,
};
const highlightedStyle = {
  backgroundColor: theme.palette.success.main,
};
const currentNodeStyle = {
  backgroundColor: theme.palette.success.light,
};

// TODO incorporate into IHierarchyData type
type Props = {
  name: string;
  position: Position;
  avatar: string;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  current: boolean;
  showCollapseButton: boolean;
  isActive: boolean;
  isHightlighted: boolean;
  onClick: any;
  id: string;
  isCurrentNode: boolean;
};

const createSxValues = (
  isHightlighted: boolean,
  isActive: boolean,
  isCurrentNode: boolean
) => ({
  p: 1,
  maxWidth: 345,
  display: "inline-block",
  cursor: "pointer",
  position: "relative",
  zIndex: 50,
  outline: 0,
  borderTop: `3px solid ${theme.palette.primary.dark}`,
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
  ...(isHightlighted && highlightedStyle),
  ...(isCurrentNode && currentNodeStyle),
  ...(isActive && activeStyle),
});

const Employee = ({
  name,
  position,
  id,
  avatar,
  setVisible,
  current,
  showCollapseButton,
  isActive,
  isHightlighted,
  onClick,
  isCurrentNode,
}: Props) => {
  const { setSelected } = useHierarchyContext();
  const employeeRef = useRef<HTMLDivElement>(null);
  const [elevation, setElevation] = useState(1);
  const avatarIntial = name.length > 0 ? name.charAt(0) : "?";
  const sxValues = createSxValues(isHightlighted, isActive, isCurrentNode);

  if (isActive && elevation !== 5) {
    setElevation(5);
  } else if (!isActive && elevation !== 1) {
    setElevation(1);
  }

  useEffect(() => {
    if (isCurrentNode) {
      const node = employeeRef.current;
      node?.focus();
    }
  }, [isCurrentNode]);

  const classes = [];
  if (isHightlighted) {
    classes.push("animate-pulse");
  }

  const handleExpandClick = () => {
    setVisible(!current);
  };

  const handleOnClick = () => {
    onClick(id);
  };

  const handlePaperMouseEnter = () => {
    setElevation(5);
  };

  const handlePaperMouseLeave = () => {
    setElevation(1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const { code } = e.nativeEvent;

    if (code === "Enter") {
      setSelected(id);
      setVisible(!current);
    }
  };

  return (
    <Paper
      elevation={elevation}
      onClick={handleOnClick}
      sx={sxValues}
      className={classes.join("")}
      onMouseEnter={handlePaperMouseEnter}
      onMouseLeave={handlePaperMouseLeave}
      onKeyDown={handleKeyDown}
      ref={employeeRef}
      tabIndex={-1}
    >
      <Grid ref={employeeRef} sx={{ mt: -2 }} container justifyContent="center">
        <Avatar
          sx={{ bgcolor: theme.palette.secondary.dark }}
          aria-label="Employee"
          src={avatar}
        >
          {avatarIntial}
        </Avatar>
      </Grid>
      <Typography
        fontSize={{ md: 14, lg: 16, xl: 18 }}
        fontWeight={500}
        textAlign="center"
        noWrap
        maxWidth={200}
        mt={1}
        // variant="hierarchyname" // frustrating this did not work, something wrong with Typeography and variant prop
      >
        {name}
      </Typography>
      <Typography
        fontSize={{ md: 12, lg: 14, xl: 16 }}
        textAlign="center"
        noWrap
        maxWidth={200}
      >
        {position}
      </Typography>
      {showCollapseButton && (
        <Grid container justifyContent="center">
          <IconButton onClick={handleExpandClick} aria-label="settings">
            <ExpandMoreIcon fontSize="small" />
          </IconButton>
        </Grid>
      )}
    </Paper>
  );
};

export { Employee };
