"use client";
import { Button, Drawer, Icon, Slider } from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

import React from "react";
// CODE COPIED FROM MUI docs

type Anchor = "top" | "left" | "bottom" | "right";

export default function MaterialUI() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
  return (
    <>
      {(["left", "right", "top", "bottom"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {
              <p>
                <Icon />
                <AccessAlarmIcon />
              </p>
            }
          </Drawer>
        </React.Fragment>
      ))}
      <div>
        <Slider defaultValue={30} />
        <Slider
          defaultValue={30}
          className="text-teal-600"
          slotProps={{ thumb: { className: "rounded-sm" } }}
        />
      </div>
    </>
  );
}
