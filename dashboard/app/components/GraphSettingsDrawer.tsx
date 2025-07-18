"use client";

import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropsWithChildren, useState } from "react";
import { FieldOfStudy, getDisplayNameForField, StudyLevel } from "../data/DataMaps";
import Graphs from "./Graphs";

type GraphSettingsDrawerType = {
  data: any[],
  years: number[],
  studyFields: FieldOfStudy[],
  studyLevels: StudyLevel[],
};

const GraphSettingsDrawer = ({ data, years, studyFields, studyLevels }: GraphSettingsDrawerType) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);

  // menu states
  const [compareStudyLevel, setCompareStudyLevel] = useState<StudyLevel>("Undergraduate degree");
  const [temporalStudyLevel, setTemporalStudyLevel] = useState<StudyLevel>(compareStudyLevel);
  const [year, setYear] = useState(maxYear);
  const [fieldOfStudy, setFieldOfStudy] = useState<FieldOfStudy>("Total, field of study");

  return (
    <div className={"drawer" + (sidebarOpen ? " lg:drawer-open" : "")}>
      <input
        id="graphSettingsDrawer"
        type="checkbox"
        className="drawer-toggle"
        onChange={
          (evt) => {
            setSidebarOpen(evt.target.checked);
          }
        }
      />
      <div className="drawer-content">
        <label htmlFor="graphSettingsDrawer" className="btn btn-neutral w-5 drawer-button fixed top-0">
          <FontAwesomeIcon icon={sidebarOpen ? faChevronLeft : faChevronRight} />
        </label>
        <Graphs
          data={data}
          year={year}
          fieldOfStudy={fieldOfStudy}
          studyLevelCompare={compareStudyLevel}
          studyLevelTemporal={temporalStudyLevel}
        />
      </div>
      <div className="drawer-side shadow-md">
        <label htmlFor="graphSettingsDrawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="bg-base-100 h-screen w-2xs sm:w-xs px-8">
          <div className="h-[15vh]">
            {/* title here */}
          </div>
          <div>
            <div>
              {/* Comparison Settings */}
              <h2 className="text-3xl mb-5">Compare</h2>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                <legend className="fieldset-legend">Field of Study Graph Options</legend>

                <label className="label">Education Level</label>
                <select
                  className="select select-neutral"
                  onChange={
                    (evt) => {
                      setCompareStudyLevel(evt.target.value as StudyLevel);
                    }
                  }
                  defaultValue={compareStudyLevel}
                >
                  {
                    studyLevels.map((studyLevel, idx) => {
                      return <option key={idx}>{studyLevel}</option>
                    })
                  }
                </select>

                <label className="label">Data Collection Year</label>
                {/* number input with typing disabled */}
                <input
                  className="input input-neutral"
                  type="number"
                  step={1}
                  min={minYear}
                  max={maxYear}
                  defaultValue={maxYear}
                  required
                  onKeyDown={(evt) => { evt.preventDefault(); }}
                  onChange={(evt) => { setYear(Number(evt.target.value)); }}
                />
              </fieldset>
            </div>
            <div>
              {/* Trends Settings */}
              <h2 className="text-3xl mt-10 mb-5">Trends</h2>

              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                <legend className="fieldset-legend">Temporal Data Graph Options</legend>

                <label className="label">Education Level</label>
                <select
                  className="select select-neutral"
                  onChange={
                    (evt) => {
                      setTemporalStudyLevel(evt.target.value as StudyLevel);
                    }
                  }
                  defaultValue={temporalStudyLevel}
                >
                  {
                    studyLevels.map((studyLevel, idx) => {
                      return <option key={idx}>{studyLevel}</option>
                    })
                  }
                </select>

                <label className="label">Field of Study</label>
                <select
                  className="select select-neutral"
                  onChange={
                    (evt) => {
                      setFieldOfStudy(studyFields.at(evt.target.selectedIndex) ?? "Total, field of study");
                    }
                  }
                >
                  {
                    studyFields.map((fieldOfStudy, idx) => {
                      return <option key={idx}>{getDisplayNameForField(fieldOfStudy)}</option>
                    })
                  }
                </select>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GraphSettingsDrawer;
