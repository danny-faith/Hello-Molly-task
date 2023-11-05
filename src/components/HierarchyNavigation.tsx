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

  const cursor = useMemo(() => new Cursor(data), [data]);

  const navigationDirectionReducer = (keyCode: string) => {
    switch (keyCode) {
      case "up":
      case "ArrowUp":
        cursor.up();
        break;
      case "left":
      case "ArrowLeft":
        cursor.left();
        break;
      case "right":
      case "ArrowRight":
        cursor.right();
        break;
      default:
        cursor.down();
        break;
    }

    return cursor.get().id;
  };

  const handleNavigationButton = (e: React.BaseSyntheticEvent) => {
    const { value } = e.target;
    const id = navigationDirectionReducer(value);

    if (id) {
      setCurrentNode(id);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const { code } = e.nativeEvent;
    const id = navigationDirectionReducer(code);

    if (id) {
      setCurrentNode(id);
    }
  };

  return (
    <Box sx={sx} onKeyDown={handleKeyDown}>
      <Container>
        <Grid sx={{ p: 1 }} container justifyContent="center">
          <Grid container item lg={3} justifyContent="center">
            <Button
              onClick={handleNavigationButton}
              value="up"
              variant="contained"
            >
              Up
            </Button>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid sx={{ p: 1 }} item={true}>
            <Button
              onClick={handleNavigationButton}
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
              onClick={handleNavigationButton}
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
              onClick={handleNavigationButton}
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
