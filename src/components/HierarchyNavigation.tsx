"use client";
import { useHierarchyContext } from "@/app/context/HierarchyContext";
import {
  Container,
  Button,
  Grid,
  Typography,
  Box,
  SxProps,
  Theme,
} from "@mui/material";
import React, { useMemo } from "react";
import { Cursor } from "../../utils/utils";

const HierarchyNavigation = ({
  data,
  sx,
}: {
  data: IHierarchyData;
  sx?: SxProps<Theme> | undefined;
}) => {
  const { setCurrentNode, currentNode } = useHierarchyContext();

  const cursor = useMemo(() => {
    return new Cursor(data);
  }, [data]);

  const navigationHandler = (e: React.BaseSyntheticEvent) => {
    const { value } = e.target;
    switch (value) {
      case "up":
        cursor.up();
        break;
      case "left":
        cursor.left();
        break;
      case "right":
        cursor.right();
        break;
      default:
        cursor.down();
        break;
    }
    const id = cursor?.get().id;

    if (id) {
      setCurrentNode(id);
    }
  };

  return (
    <Box sx={sx}>
      <Container>
        <Grid sx={{ p: 1 }} container justifyContent="center">
          <Grid container item lg={3} justifyContent="center">
            <Button onClick={navigationHandler} value="up" variant="contained">
              Up
            </Button>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid sx={{ p: 1 }} item={true}>
            <Button
              onClick={navigationHandler}
              value="left"
              variant="contained"
            >
              Left
            </Button>
          </Grid>
          <Grid sx={{ p: 1 }} item={true}>
            <Typography>{currentNode}</Typography>
          </Grid>
          <Grid sx={{ p: 1 }} item={true}>
            <Button
              onClick={navigationHandler}
              value="right"
              variant="contained"
            >
              Right
            </Button>
          </Grid>
        </Grid>
        <Grid sx={{ p: 1 }} container justifyContent="center">
          <Grid container item lg={3} justifyContent="center">
            <Button
              onClick={navigationHandler}
              value="down"
              variant="contained"
            >
              Down
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export { HierarchyNavigation };
