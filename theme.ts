import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#E1B5E0",
      light: "#F6E0F5",
      dark: "#C370C2",
    },
    secondary: {
      main: "#abe2ad",
      light: "#89CE8A",
      dark: "#58B858",
    },
    success: {
      main: "#F6F9A1",
    },
  },
  typography: {
    hierarchyname: {
      fontSize: "1.2rem",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          hierarchyname: "h2",
        },
      },
    },
  },
});
