import GraphSettingsDrawer from "./components/GraphSettingsDrawer";
import { loadDataEN, loadDataFR } from "./data/ParseDataFile";

export default async function Home() {
  const dataEN = await loadDataEN();
  const dataFR = await loadDataFR();

  return (
    <GraphSettingsDrawer dataEN={dataEN} dataFR={dataFR} />
  );
}
