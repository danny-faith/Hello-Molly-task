"use client";
import React from "react";
import { INode, ReactHiererchyChart } from "react-hierarchy-chart";
import { Employee } from "../../components/Employee";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

interface custNode extends INode {
  name: string;
  position: string;
  childs?: custNode[];
}

const nodes: custNode[] = [
  {
    name: "Caleb Matthews",
    cssClass: "level1",
    position: "Chief Executive Officer",
    childs: [
      {
        name: "Antonia Sancho",
        cssClass: "level2",
        position: "HR Manager",
      },
      {
        name: "Thoms Hilty",
        cssClass: "level2",
        position: "Marketing Manager",
        childs: [
          {
            name: "Eyal Matthews",
            cssClass: "level3",
            position: "Social Media",
          },
          {
            name: "Adam Mark",
            cssClass: "level3",
            position: "Offline Marketing",
          },
        ],
      },
      {
        name: "Barry Roy",
        cssClass: "level2",
        position: "Production Manager",
        childs: [
          {
            name: "Ligia Opera",
            cssClass: "level3",
            position: "Supply Chain",
          },
          {
            name: "Moran Perry",
            cssClass: "level3",
            position: "Operational Manager",
          },
          {
            name: "Ligia Opera",
            cssClass: "level3",
            position: "Supply Chain",
          },
          {
            name: "Moran Perry",
            cssClass: "level3",
            position: "Operational Manager",
          },
        ],
      },
    ],
  },
];

export default function ReactHierarchyChart() {
  return (
    <Grid container justifyContent="center">
      <Grid xs={12} md={8} lg={8}>
        {/* <ReactHiererchyChart
          nodes={nodes}
          direction="vertical"
          randerNode={(node: custNode) => (
            <Employee name={node.name} position={node.position} />
          )}
        /> */}
      </Grid>
    </Grid>
  );
}
