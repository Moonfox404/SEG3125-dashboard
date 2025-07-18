"use client";

import { Dispatch, useEffect, useState } from "react";
import { FieldOfStudy, getDisplayNameForField, getFieldOfStudies, getStudyLevels, getYears, StudyLevel } from "../data/DataMaps";
import Logo from "./Logo";

type GraphSettingsProps = {
  compareStudyLevel: StudyLevel;
  temporalStudyLevel: StudyLevel;
  setCompareStudyLevel: Dispatch<StudyLevel>;
  setTemporalStudyLevel: Dispatch<StudyLevel>;
  setYear: Dispatch<number>;
  setFieldOfStudy: Dispatch<FieldOfStudy>;
}

const GraphSettings = ({
  compareStudyLevel,
  temporalStudyLevel,
  setCompareStudyLevel,
  setTemporalStudyLevel,
  setYear,
  setFieldOfStudy,
}: GraphSettingsProps) => {
  const years = getYears();
  const studyFields = getFieldOfStudies();
  const studyLevels = getStudyLevels();

  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);

  const [sync, setSync] = useState(true);

  useEffect(() => {
    setYear(maxYear);
  }, [maxYear])

  useEffect(() => {
    if (sync) {
      setTemporalStudyLevel(compareStudyLevel);
    }
  }, [sync]);

  return (
    <div className="bg-base-100 h-screen w-2xs sm:w-xs px-8">
      <div className="h-[15vh] flex justify-center">
        <Logo />
      </div>
      <div>
        <label className="label whitespace-normal">
          <input type="checkbox" defaultChecked className="toggle toggle-neutral" onChange={(evt) => { setSync(evt.target.checked); }} />
          Sync education level between graphs
        </label>
        <div>
          {/* Comparison Settings */}
          <h2 className="text-3xl mt-10 mb-5">Compare</h2>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <legend className="fieldset-legend">Field of Study Graph Options</legend>

            <label className="label">Education Level</label>
            <select
              className="select select-neutral"
              onChange={
                (evt) => {
                  setCompareStudyLevel(evt.target.value as StudyLevel);
                  if (sync) {
                    setTemporalStudyLevel(evt.target.value as StudyLevel);
                  }
                }
              }
              value={compareStudyLevel}
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

                  if (sync) {
                    setCompareStudyLevel(evt.target.value as StudyLevel);
                  }
                }
              }
              value={temporalStudyLevel}
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
  )
}

export default GraphSettings;
