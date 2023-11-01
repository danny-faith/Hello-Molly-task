import { Hero } from "./components/Hero";
import hierarchy from "./hierarchy.json";

async function getHiearchyServerSide() {
  "use server";
  return hierarchy;
}

export default async function Home() {
  const hierarchy = await getHiearchyServerSide();

  console.log("hierarchy", hierarchy);

  return (
    <div>
      <Hero />
      <pre>{JSON.stringify(hierarchy, null, 2)}</pre>
    </div>
  );
}
