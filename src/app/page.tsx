import { Hero } from "../components/Hero";
import hierarchy from "./hierarchy";
import { Box, Grid } from "@mui/material";
import dynamic from "next/dynamic";
const CompanyHierarchy = dynamic(
  () => import("../components/CompanyHierarchy"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);
import { TreeViewWrapper } from "@/components/TreeView";
import { HierarchyProvider } from "./context/HierarchyContext";
import { HierarchyNavigation } from "@/components/HierarchyNavigation";

async function getHiearchyServerSide() {
  return hierarchy;
}

export default async function Home() {
  const hierarchy = await getHiearchyServerSide();

  return (
    <Box>
      <HierarchyProvider data={hierarchy}>
        <Hero data={hierarchy} />
        <TreeViewWrapper data={hierarchy} />
        <HierarchyNavigation
          sx={{ display: { xs: "none", md: "flex" } }}
          data={hierarchy}
        />
        <Grid container justifyContent="center">
          <Grid md={12} item={true}>
            <Box py={5}>
              <CompanyHierarchy data={hierarchy} setSelected={""} />
            </Box>
          </Grid>
        </Grid>
      </HierarchyProvider>
    </Box>
  );
}
