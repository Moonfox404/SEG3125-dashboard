"use client";

import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from "recharts";
import { ValueByFieldEntry } from "../data/DataMaps";
import IconAxisTick from "./IconAxisTick";
import { useTranslation } from "react-i18next";

type RadarChartProps = {
  data: ValueByFieldEntry[];
  year: number
};

const NumbersByStudyChart = ({ data, year }: RadarChartProps) => {
  const [t, i18n] = useTranslation();

  return (
    <div className="card bg-base-100 w-full h-[55vh] p-5 shadow-md">
      <h2 className="text-2xl text-center w-full">{t("numbers-by-study-graph-title")}</h2>
      <p className="text-lg text-center w-full">({year})</p>
      <ResponsiveContainer>
        <RadarChart cx="50%" cy="50%" outerRadius="85%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="fieldOfStudy" tick={IconAxisTick} />
          <Tooltip />
          <Radar name={t("legend-woman")} dataKey="valueFemale" stroke="var(--color-graph-pink)" fill="var(--color-graph-pink)" fillOpacity={0.5} />
          <Radar name={t("legend-man")} dataKey="valueMale" stroke="var(--color-graph-blue)" fill="var(--color-graph-blue)" fillOpacity={0.5} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NumbersByStudyChart;
