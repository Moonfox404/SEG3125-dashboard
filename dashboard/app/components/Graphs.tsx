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
    <div className="px-2 sm:px-15 sm:py-5 grid grid-cols-1 sm:grid-cols-3">
      <div className="col sm:col-span-3 p-2">
        <MainLegend />
      </div>
      <div className="col sm:col-span-2 p-2">
        <IncomeByStudyChart year={year} data={getMedianIncomeByFieldOfStudy(data, studyLevelCompare, year)} />
      </div>
      <div className="col p-2">
        <NumbersByStudyChart year={year} data={getNumberReportingByFieldOfStudy(data, studyLevelCompare, year)} />
      </div>
      <div className="col sm:col-span-3 p-2">
        <IncomeByYearChart fieldOfStudy={fieldOfStudy} data={getMedianIncomeByYear(data, studyLevelTemporal, fieldOfStudy)} />
      </div>
    </div>
  );
}

export default Graphs;
