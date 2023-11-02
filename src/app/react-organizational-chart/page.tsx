import { CompanyHierarchy } from "../components/CompanyHierarchy";
import { Hero } from "../components/Hero";
import hierarchy from "../hierarchy.json";
import { Box } from "@mui/material";

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
      <Box py={5}>
        <CompanyHierarchy />
      </Box>
    </Box>
  );
}
