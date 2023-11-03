import { Hero } from "./components/Hero";
import hierarchy from "./hierarchy.json";
import { Box } from "@mui/material";
import { Typography } from "@mui/joy";

async function getHiearchyServerSide() {
  "use server";
  return hierarchy;
}

export default async function Home() {
  const hierarchy = await getHiearchyServerSide();

  console.log("hierarchy", hierarchy);

  return (
    <Box>
      <Hero />
      <Box py={5}>
        <Typography>Home</Typography>
      </Box>
      {/* <pre>{JSON.stringify(hierarchy, null, 2)}</pre> */}
    </Box>
  );
}
