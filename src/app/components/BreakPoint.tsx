"use client";
import { useTheme } from "@mui/material/styles";
import { Box, useMediaQuery } from "@mui/material";

const BreakPoint = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const sm = useMediaQuery(theme.breakpoints.only("sm"));
  const md = useMediaQuery(theme.breakpoints.only("md"));
  const lg = useMediaQuery(theme.breakpoints.only("lg"));
  const xl = useMediaQuery(theme.breakpoints.only("xl"));
  //   console.log({ xs, sm, md, lg, xl });
  let res = "";
  if (xs) res = "xs";
  else if (sm) res = "sm";
  else if (md) res = "md";
  else if (lg) res = "lg";
  else if (xl) res = "xl";
  const bgColours = {
    xs: "#fef3c7",
    sm: "#fcd34d",
    md: "#f59e0b",
    lg: "#b45309",
    xl: "#78350f",
  };
  //   console.log(bgColours.sm);
  //   console.log("res", res);
  //   console.log("colour", bgColours[res as any]);

  return <Box bgcolor={bgColours[res as any]}>{children}</Box>;
};

export { BreakPoint };
