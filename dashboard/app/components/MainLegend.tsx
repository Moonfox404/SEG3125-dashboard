"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FieldOfStudy, getDisplayIconForField, getDisplayKeyForField, getFieldOfStudies, LangKey } from "../data/DataMaps";
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";

const MainLegend = () => {
  const [t, i18n] = useTranslation();

  const fieldOfStudies = getFieldOfStudies(i18n.language as LangKey);

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
          <p className="ml-3">{t(getDisplayKeyForField(fieldOfStudy))}</p>
        </div>
      </label>
    )
  }

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
