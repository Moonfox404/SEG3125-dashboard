import loadData from "./data/ParseDataFile";
import GraphSettingsDrawer from "./components/GraphSettingsDrawer";

export default async function Home() {
  const data = await loadData();

  return (
    <GraphSettingsDrawer data={data} />
  );
}
