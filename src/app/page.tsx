import { Hero } from "../components/Hero";
import hierarchy from "./hierarchy";
import { Box, Grid } from "@mui/material";
import CompanyHierarchy from "@/components/CompanyHierarchy";
import { TreeViewWrapper } from "@/components/TreeView";
import { HierarchyProvider } from "./context/HierarchyContext";
import { BreakPoint } from "@/components/BreakPoint";

async function getHiearchyServerSide() {
  return hierarchy;
}

export default async function Home() {
  const hierarchy = await getHiearchyServerSide();

  return (
    <Box>
      <HierarchyProvider>
        <Hero data={hierarchy} />
        <TreeViewWrapper data={hierarchy} />
        <Grid container justifyContent="center">
          <Grid md={12}>
            <Box py={5}>
              <CompanyHierarchy data={hierarchy} setSelected={""} />
            </Box>
          </Grid>
        </Grid>
      </HierarchyProvider>
    </Box>
  );
}
