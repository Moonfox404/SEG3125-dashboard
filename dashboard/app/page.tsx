import Image from "next/image";
import IncomeByStudyChart from "./components/IncomeByStudyChart";
import loadData from "./data/ParseDataFile";
import { getMedianIncomeByFieldOfStudy } from "./data/DataMaps";

export default async function Home() {
  const data = await loadData();

  return (
    <div className="p-20">
      <IncomeByStudyChart data={getMedianIncomeByFieldOfStudy(data, "Undergraduate degree", 2018)}/>
    </div>
  );
}
