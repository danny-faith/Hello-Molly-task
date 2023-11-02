import { BreakPoint } from "../components/BreakPoint";
import { CompanyHierarchy } from "../components/CompanyHierarchy";
import { Hero } from "../components/Hero";
import hierarchy from "../hierarchy.json";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { TreeViewDemo } from "../components/TreeView";

async function getHiearchyServerSide() {
  "use server";
  return hierarchy;
}

export default async function ReactOrganizationalChart() {
  const hierarchy = await getHiearchyServerSide();

  console.log("hierarchy", hierarchy);

  return (
    <Box>
      <Hero />
      <BreakPoint>
        <TreeViewDemo />
        <Grid container justifyContent="center">
          <Grid xs={12} md={8} lg={12}>
            <Box py={5}>
              <CompanyHierarchy />
            </Box>
          </Grid>
        </Grid>
      </BreakPoint>
    </Box>
  );
}
