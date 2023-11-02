import { Card, Avatar, IconButton } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Typography from "@mui/joy/Typography";

type Position = "CEO" | "CTO" | "Director" | "Employee" | "Software engineer";

type Props = {
  name: string;
  position: Position;
};

const Employee = ({ name, position }: Props) => {
  const avatarIntial = name.length > 0 ? name.charAt(0) : "?";

  return (
    <Card sx={{ maxWidth: 345, display: "inline-block" }}>
      <CardHeader
        sx={{ textAlign: "left" }}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="Employee">
            {avatarIntial}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Typography noWrap maxWidth={200}>
            {name}
          </Typography>
        }
        subheader={position}
      />
    </Card>
  );
};

export { Employee };
