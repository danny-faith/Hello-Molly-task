import dynamic from "next/dynamic";
import { BreakPoint } from "../components/BreakPoint";
const CompanyHierarchy = dynamic(
  () => import("../components/CompanyHierarchy"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);
import { Hero } from "../components/Hero";
import hierarchy from "../hierarchy";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { TreeViewDemo } from "../components/TreeView";

async function getHiearchyServerSide() {
  return hierarchy;
}

export default async function ReactOrganizationalChart() {
  const hierarchy = await getHiearchyServerSide();

  return (
    <Box>
      <Hero />
      {/* <BreakPoint> */}
      <TreeViewDemo data={hierarchy} />
      <Grid container justifyContent="center">
        <Grid xs={12} md={8} lg={12}>
          <Box py={5}>
            <CompanyHierarchy data={hierarchy} />
          </Box>
        </Grid>
      </Grid>
      {/* </BreakPoint> */}
    </Box>
  );
}
