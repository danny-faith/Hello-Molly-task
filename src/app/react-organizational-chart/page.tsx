import dynamic from "next/dynamic";
const CompanyHierarchy = dynamic(
  () => import("../../components/CompanyHierarchy"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);
import { Hero } from "../../components/Hero";
import hierarchy from "../hierarchy";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { TreeViewWrapper } from "../../components/TreeView";
import { HierarchyProvider } from "../context/HierarchyContext";

async function getHiearchyServerSide() {
  return hierarchy;
}

export default async function ReactOrganizationalChart() {
  const hierarchy = await getHiearchyServerSide();

  return (
    <Box>
      <HierarchyProvider data={hierarchy}>
        <Hero data={hierarchy} />
        <TreeViewWrapper data={hierarchy} />
        <Grid container justifyContent="center">
          <Grid xs={12} md={8} lg={12}>
            <Box py={5}>
              <CompanyHierarchy data={hierarchy} setSelected={""} />
            </Box>
          </Grid>
        </Grid>
      </HierarchyProvider>
    </Box>
  );
}
