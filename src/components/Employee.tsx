import { Avatar, IconButton, Box, Paper } from "@mui/material";
import { red } from "@mui/material/colors";
import Typography from "@mui/joy/Typography";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { theme } from "../../theme";

const activeStyle = {
  backgroundColor: theme.palette.primary.main,
};
const highlightedStyle = {
  backgroundColor: theme.palette.success.main,
};

// TODO incorporate into IHierarchyData type
type Props = {
  name: string;
  position: Position;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  current: boolean;
  showCollapseButton: boolean;
  isActive: boolean;
  isHightlighted: boolean;
  onClick: any;
  id: string;
};

const Employee = ({
  name,
  position,
  id,
  setVisible,
  current,
  showCollapseButton,
  isActive,
  isHightlighted,
  onClick,
}: Props) => {
  const avatarIntial = name.length > 0 ? name.charAt(0) : "?";
  const sxValues = {
    p: 1,
    maxWidth: 345,
    display: "inline-block",
    cursor: "pointer",
    ...(isHightlighted && highlightedStyle),
    ...(isActive && activeStyle),
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  };

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

  return (
    <Paper
      elevation={1}
      onClick={handleOnClick}
      sx={sxValues}
      className={classes.join("")}
    >
      <Grid container justifyContent="center">
        <Avatar sx={{ bgcolor: red[500] }} aria-label="Employee">
          {avatarIntial}
        </Avatar>
      </Grid>
      <Typography
        fontSize={14}
        fontWeight={500}
        textAlign="center"
        noWrap
        maxWidth={200}
        mt={1}
      >
        {name}
      </Typography>
      <Typography fontSize={12} textAlign="center" noWrap maxWidth={200}>
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
