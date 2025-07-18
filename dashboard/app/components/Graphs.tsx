import { FieldOfStudy, getMedianIncomeByFieldOfStudy, getMedianIncomeByYear, getNumberReportingByFieldOfStudy, StudyLevel } from "../data/DataMaps";
import IncomeByStudyChart from "./IncomeByStudyChart";
import IncomeByYearChart from "./IncomeByYearChart";
import MainLegend from "./MainLegend";
import NumbersByStudyChart from "./NumbersByStudyChart";

type GraphsProps = {
  data: any[],
  studyLevelCompare: StudyLevel,
  year: number,
  studyLevelTemporal: StudyLevel,
  fieldOfStudy: FieldOfStudy
}

const Graphs = ({
  data,
  studyLevelCompare,
  year,
  studyLevelTemporal,
  fieldOfStudy,
}: GraphsProps) => {
  return (
    <div className="px-2 sm:p-15 grid grid-cols-1 sm:grid-cols-3">
      <div className="col sm:col-span-3 p-2">
        <MainLegend />
      </div>
      <div className="col sm:col-span-2 p-2">
        <IncomeByStudyChart year={2018} data={getMedianIncomeByFieldOfStudy(data, studyLevelCompare, year)} />
      </div>
      <div className="col p-2">
        <NumbersByStudyChart data={getNumberReportingByFieldOfStudy(data, studyLevelCompare, year)} />
      </div>
      <div className="col sm:col-span-3 p-2">
        <IncomeByYearChart data={getMedianIncomeByYear(data, studyLevelTemporal, fieldOfStudy)} />
      </div>
    </div>
  );
}

export default Graphs;
