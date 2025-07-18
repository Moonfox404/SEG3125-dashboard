import Image from "next/image";
import IncomeByStudyChart from "./components/IncomeByStudyChart";
import loadData from "./data/ParseDataFile";
import { getMedianIncomeByFieldOfStudy, getNumberReportingByFieldOfStudy } from "./data/DataMaps";
import NumbersByStudyChart from "./components/NumbersByStudyChart";

export default async function Home() {
  const data = await loadData();

  return (
    <div className="p-20 grid grid-cols-3">
      <div className="col col-span-2 p-2">
        <IncomeByStudyChart data={getMedianIncomeByFieldOfStudy(data, "Undergraduate degree", 2018)}/>
      </div>
      <div className="col p-2">
        <NumbersByStudyChart data={getNumberReportingByFieldOfStudy(data, "Undergraduate degree", 2015)} />
      </div>
    </div>
  );
}
