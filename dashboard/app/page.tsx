import Image from "next/image";
import IncomeByStudyChart from "./components/IncomeByStudyChart";
import loadData from "./data/ParseDataFile";
import { getMedianIncomeByFieldOfStudy, getMedianIncomeByYear, getNumberReportingByFieldOfStudy } from "./data/DataMaps";
import NumbersByStudyChart from "./components/NumbersByStudyChart";
import IncomeByYearChart from "./components/IncomeByYearChart";

export default async function Home() {
  const data = await loadData();

  return (
    <div className="p-20 grid grid-cols-3">
      <div className="col col-span-2 p-2">
        <IncomeByStudyChart year={2018} data={getMedianIncomeByFieldOfStudy(data, "Undergraduate degree", 2018)}/>
      </div>
      <div className="col p-2">
        <NumbersByStudyChart data={getNumberReportingByFieldOfStudy(data, "Undergraduate degree", 2015)} />
      </div>
      <div className="col col-span-3 p-2">
        <IncomeByYearChart data={getMedianIncomeByYear(data, "Undergraduate degree", "Visual and performing arts, and communications technologies")} />
      </div>
    </div>
  );
}
