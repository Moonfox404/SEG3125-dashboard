"use client";

import { useState } from "react";
import { FieldOfStudy, getMedianIncomeByFieldOfStudy, getMedianIncomeByYear, getNumberReportingByFieldOfStudy, LangKey, StudyLevel, ValueByFieldEntry, ValueByYearEntry } from "../data/DataMaps";
import IncomeByStudyChart from "./IncomeByStudyChart";
import IncomeByYearChart from "./IncomeByYearChart";
import MainLegend from "./MainLegend";
import NumbersByStudyChart from "./NumbersByStudyChart";

type GraphsProps = {
  data: any[],
  studyLevelCompare: StudyLevel,
  year: number,
  studyLevelTemporal: StudyLevel,
  fieldOfStudy: FieldOfStudy,
  lang: LangKey
}

const Graphs = ({
  data,
  studyLevelCompare,
  year,
  studyLevelTemporal,
  fieldOfStudy,
  lang
}: GraphsProps) => {
  const [disabledSet, setDisabledSet] = useState<Set<FieldOfStudy>>(new Set());

  const filterData = (dataEntries: ValueByFieldEntry[]) => {
    return dataEntries.filter((value) => {
      return !disabledSet.has(value.fieldOfStudy);
    })
  }

  return (
    <div className="px-2 sm:px-15 sm:py-5 grid grid-cols-1 sm:grid-cols-3">
      <div className="col sm:col-span-3 p-2">
        <MainLegend disabledList={disabledSet} setDisabledList={setDisabledSet} />
      </div>
      <div className="col sm:col-span-2 p-2">
        <IncomeByStudyChart 
          year={year} 
          data={filterData(getMedianIncomeByFieldOfStudy(data, studyLevelCompare, year, lang))} 
        />
      </div>
      <div className="col p-2">
        <NumbersByStudyChart 
          year={year} 
          data={filterData(getNumberReportingByFieldOfStudy(data, studyLevelCompare, year, lang))} 
        />
      </div>
      <div className="col sm:col-span-3 p-2">
        <IncomeByYearChart fieldOfStudy={fieldOfStudy} data={getMedianIncomeByYear(data, studyLevelTemporal, fieldOfStudy, lang)} />
      </div>
    </div>
  );
}

export default Graphs;
