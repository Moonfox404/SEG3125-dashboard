"use client";

import { Dispatch, useEffect, useState } from "react";
import { FieldOfStudy, getDisplayKeyForField, getFieldOfStudies, getStudyLevels, getYears, LangKey, StudyLevel, translateFieldOfStudy, translateStudyLevel } from "../data/DataMaps";
import Logo from "./Logo";
import { useTranslation } from "react-i18next";


type GraphSettingsProps = {
  compareStudyLevel: StudyLevel;
  temporalStudyLevel: StudyLevel;
  fieldOfStudy: FieldOfStudy;
  setCompareStudyLevel: Dispatch<StudyLevel>;
  setTemporalStudyLevel: Dispatch<StudyLevel>;
  setYear: Dispatch<number>;
  setFieldOfStudy: Dispatch<FieldOfStudy>;
}

const GraphSettings = ({
  compareStudyLevel,
  temporalStudyLevel,
  fieldOfStudy,
  setCompareStudyLevel,
  setTemporalStudyLevel,
  setYear,
  setFieldOfStudy,
}: GraphSettingsProps) => {
  const [t, i18n] = useTranslation();

  const years = getYears();
  const studyFields = getFieldOfStudies(i18n.language as LangKey);
  const studyLevels = getStudyLevels(i18n.language as LangKey);

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

  useEffect(() => {
    setCompareStudyLevel(translateStudyLevel(compareStudyLevel) as StudyLevel);
    setTemporalStudyLevel(translateStudyLevel(temporalStudyLevel) as StudyLevel);
    setFieldOfStudy(translateFieldOfStudy(fieldOfStudy) as FieldOfStudy);
  }, [i18n.language])

  return (
    <div className="bg-base-100 h-screen w-2xs sm:w-xs px-8">
      <div className="h-[15vh] flex items-center">
        <Logo />
      </div>
      <div>
        <label className="label whitespace-normal">
          <input type="checkbox" defaultChecked className="toggle toggle-secondary" onChange={(evt) => { setSync(evt.target.checked); }} />
          {t("sync-toggle")}
        </label>
        <div>
          {/* Comparison Settings */}
          <h2 className="text-3xl mt-10 mb-5">{t("compare-header")}</h2>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <legend className="fieldset-legend">{t("compare-opt-header")}</legend>

            <label className="label">{t("edu-lvl-select-label")}</label>
            <select
              id="compare-edu-lvl-select"
              className="select select-secondary"
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

            <label className="label">{t("year-input-label")}</label>
            {/* number input with typing disabled */}
            <input
              className="input input-secondary"
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
          <h2 className="text-3xl mt-10 mb-5">{t("trend-header")}</h2>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <legend className="fieldset-legend">{t("trend-opt-header")}</legend>

            <label className="label">{t("edu-lvl-select-label")}</label>
            <select
              id="temporal-edu-lvl-select"
              className="select select-secondary"
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

            <label className="label">{t("study-select-label")}</label>
            <select
              className="select select-secondary"
              onChange={
                (evt) => {
                  setFieldOfStudy(studyFields.at(evt.target.selectedIndex) ?? "Total, field of study");
                }
              }
            >
              {
                studyFields.map((fieldOfStudy, idx) => {
                  return <option key={idx}>{t(getDisplayKeyForField(fieldOfStudy))}</option>
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
