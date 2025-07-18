import IncomeByStudyChart from "./components/IncomeByStudyChart";
import loadData from "./data/ParseDataFile";
import { getFieldOfStudies, getMedianIncomeByFieldOfStudy, getMedianIncomeByYear, getNumberReportingByFieldOfStudy, getStudyLevels, getYears } from "./data/DataMaps";
import NumbersByStudyChart from "./components/NumbersByStudyChart";
import IncomeByYearChart from "./components/IncomeByYearChart";
import GraphSettingsDrawer from "./components/GraphSettingsDrawer";

export default async function Home() {
  const data = await loadData();

  return (
    <GraphSettingsDrawer data={data} years={getYears()} studyFields={getFieldOfStudies()} studyLevels={getStudyLevels()} />
  );
}
