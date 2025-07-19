"use client";

import { faChevronLeft, faChevronRight, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { FieldOfStudy, StudyLevel } from "../data/DataMaps";
import Graphs from "./Graphs";
import GraphSettings from "./GraphSettings";
import NavBar from "./NavBar";

type GraphSettingsDrawerType = {
  data: any[],
};

const GraphSettingsDrawer = ({ data }: GraphSettingsDrawerType) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // menu states
  const [compareStudyLevel, setCompareStudyLevel] = useState<StudyLevel>("Undergraduate degree");
  const [temporalStudyLevel, setTemporalStudyLevel] = useState<StudyLevel>(compareStudyLevel);
  const [year, setYear] = useState(2018);
  const [fieldOfStudy, setFieldOfStudy] = useState<FieldOfStudy>("Total, field of study");

  useEffect(() => {
    console.log(sidebarOpen);
  }, [sidebarOpen]);

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
          <label htmlFor="graphSettingsDrawer" className="btn btn-neutral w-5 drawer-button fixed top-0 rounded-none">
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
        <main>
          <Graphs
            data={data}
            year={year}
            fieldOfStudy={fieldOfStudy}
            studyLevelCompare={compareStudyLevel}
            studyLevelTemporal={temporalStudyLevel}
          />
        </main>
        <footer className="text-center mb-5">
          Data taken from <a
            className="link link-secondary"
            href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3710027901"
            target="_blank"
          >
            Statistics Canada Table
          </a>
        </footer>
      </div>
      <div className="drawer-side shadow-md">
        <label htmlFor="graphSettingsDrawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <GraphSettings
          compareStudyLevel={compareStudyLevel}
          temporalStudyLevel={temporalStudyLevel}
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
