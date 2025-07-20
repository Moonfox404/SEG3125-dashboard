"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FieldOfStudy, getDisplayIconForField, getDisplayKeyForField, getFieldOfStudies, LangKey, translateFieldOfStudy } from "../data/DataMaps";
import { Dispatch, Fragment, useState } from "react";
import { useTranslation } from "react-i18next";

type LegendProps = {
  disabledList: Set<FieldOfStudy>
  setDisabledList: Dispatch<Set<FieldOfStudy>>
};

const MainLegend = ({ disabledList, setDisabledList }: LegendProps) => {
  const [t, i18n] = useTranslation();

  const fieldOfStudies = getFieldOfStudies(i18n.language as LangKey);

  const FieldWithDisable = ({
    fieldOfStudy
  }: {
    fieldOfStudy: FieldOfStudy
  }) => {
    return (
      <label className="cursor-pointer col flex items-center">
        <input
          type="checkbox"
          className="hidden"
          onChange={(evt) => {
            if (evt.target.checked) {
              disabledList.add(fieldOfStudy);
              disabledList.add(translateFieldOfStudy(fieldOfStudy) as FieldOfStudy);
            } else {
              disabledList.delete(fieldOfStudy);
              disabledList.delete(translateFieldOfStudy(fieldOfStudy) as FieldOfStudy);
            }
            setDisabledList(new Set(disabledList));
          }}
          checked={disabledList.has(fieldOfStudy)}
        />
        <div className={"flex items-center px-2" + (disabledList.has(fieldOfStudy) ? " text-neutral/50 line-through" : "")}>
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
