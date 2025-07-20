"use client";

import { faChevronLeft, faChevronRight, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FieldOfStudy, LangKey, StudyLevel } from "../data/DataMaps";
import Graphs from "./Graphs";
import GraphSettings from "./GraphSettings";
import NavBar from "./NavBar";

import "@/app/i18n";
import { useTranslation } from "react-i18next";

type GraphSettingsDrawerType = {
  dataEN: any[],
  dataFR: any[]
};

const GraphSettingsDrawer = ({ dataEN, dataFR }: GraphSettingsDrawerType) => {
  const [t, i18n] = useTranslation();
  const data = i18n.language === "fr" ? dataFR : dataEN;

  const [sidebarOpen, setSidebarOpen] = useState(true);

  // menu states
  const [compareStudyLevel, setCompareStudyLevel] = useState<StudyLevel>(i18n.language === "fr" ? "Undergraduate degree" : "Grade de premier cycle");
  const [temporalStudyLevel, setTemporalStudyLevel] = useState<StudyLevel>(compareStudyLevel);
  const [year, setYear] = useState(2018);
  const [fieldOfStudy, setFieldOfStudy] = useState<FieldOfStudy>(i18n.language === "fr" ? "Total, field of study" : "Total, domaine d'études");

  return (
    <div className={"drawer" + (sidebarOpen ? " lg:drawer-open" : "")}>
      <input
        id="graphSettingsDrawer"
        type="checkbox"
        className="drawer-toggle"
        checked={sidebarOpen}
        onChange={
          (evt) => {
            setSidebarOpen(evt.target.checked);
          }
        }
      />
      <div className="drawer-content">
        {
          sidebarOpen &&
          <label htmlFor="graphSettingsDrawer" className="btn btn-neutral w-5 drawer-button fixed top-0 rounded-none z-2">
            <FontAwesomeIcon icon={faChevronLeft} />
          </label>
        }
        <nav>
          <NavBar showLogo={!sidebarOpen}>
            {
              !sidebarOpen &&
              <label htmlFor="graphSettingsDrawer" className="btn btn-ghost btn-lg drawer-button text-neutral">
                <FontAwesomeIcon icon={faSliders} />
              </label>
            }
          </NavBar>
        </nav>
        <main className="mt-15">
          <Graphs
            data={data}
            year={year}
            fieldOfStudy={fieldOfStudy}
            studyLevelCompare={compareStudyLevel}
            studyLevelTemporal={temporalStudyLevel}
            lang={i18n.language as LangKey}
          />
        </main>
        <footer className="text-center mb-5">
          <p className="text-neutral">*{t("footnote")}</p>
          <span className="text-neutral">
            {t("footer-text")} <a
              className="link link-secondary"
              href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3710027901"
              target="_blank"
            >
              {t("footer-link-name")}
            </a>
          </span>
        </footer>
      </div>
      <div className="drawer-side shadow-md z-2">
        <label htmlFor="graphSettingsDrawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <GraphSettings
          compareStudyLevel={compareStudyLevel}
          temporalStudyLevel={temporalStudyLevel}
          fieldOfStudy={fieldOfStudy}
          setYear={setYear}
          setCompareStudyLevel={setCompareStudyLevel}
          setFieldOfStudy={setFieldOfStudy}
          setTemporalStudyLevel={setTemporalStudyLevel}
        />
      </div>
    </div>
  );
}

export default GraphSettingsDrawer;
