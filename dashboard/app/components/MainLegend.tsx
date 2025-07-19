"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FieldOfStudy, getDisplayIconForField, getDisplayNameForField, getFieldOfStudies } from "../data/DataMaps";
import { Fragment, useState } from "react";

const FieldWithDisable = ({
  fieldOfStudy
}: {
  fieldOfStudy: FieldOfStudy
}) => {
  const [disabled, setDisabled] = useState(false);

  return (
    <label className="cursor-pointer col flex items-center">
      <input
        type="checkbox"
        className="hidden"
        onChange={(evt) => { setDisabled(evt.target.checked); }}
      />
      <div className={"flex items-center px-2" + (disabled ? " text-neutral/50 line-through" : "")}>
        <FontAwesomeIcon icon={getDisplayIconForField(fieldOfStudy)} />
        <p className="ml-3">{getDisplayNameForField(fieldOfStudy)}</p>
      </div>
    </label>
  )
}

const MainLegend = () => {
  const fieldOfStudies = getFieldOfStudies();

  return (
    <div className="card bg-base-100 w-full p-5 shadow-md flex justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-7">
        {
          fieldOfStudies
            .map((fieldOfStudy, idx) => {
              return (
                <Fragment key={idx}>
                  <FieldWithDisable fieldOfStudy={fieldOfStudy} />
                </Fragment>
              );
            })
        }
      </div>
    </div>
  );
}

export default MainLegend;
