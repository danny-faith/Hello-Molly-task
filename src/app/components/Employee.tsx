import { Avatar, IconButton, Box } from "@mui/material";
import { red } from "@mui/material/colors";
import Typography from "@mui/joy/Typography";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// TODO incorporate into IHierarchyData type
type Props = {
  name: string;
  position: Position;
  callback: React.Dispatch<React.SetStateAction<boolean>>;
  current: boolean;
  showCollapseButton: boolean;
};

const Employee = ({
  name,
  position,
  callback,
  current,
  showCollapseButton,
}: Props) => {
  const avatarIntial = name.length > 0 ? name.charAt(0) : "?";

  const handleExpandClick = () => {
    callback(!current);
  };

  return (
    <Box sx={{ p: 1, maxWidth: 345, display: "inline-block" }}>
      <Grid container justifyContent="center">
        <Avatar sx={{ bgcolor: red[500] }} aria-label="Employee">
          {avatarIntial}
        </Avatar>
      </Grid>
      <Typography fontSize={9} textAlign="center" noWrap maxWidth={200}>
        {name}
      </Typography>
      <Typography fontSize={9} textAlign="center" noWrap maxWidth={200}>
        {position}
      </Typography>
      {showCollapseButton && (
        <Grid container justifyContent="center">
          <IconButton onClick={handleExpandClick} aria-label="settings">
            <ExpandMoreIcon fontSize="small" />
          </IconButton>
        </Grid>
      )}
    </Box>
  );
};

export { Employee };
