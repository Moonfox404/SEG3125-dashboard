"use client";

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { FieldOfStudy, getDisplayKeyForField, ValueByYearEntry } from "../data/DataMaps";
import { useTranslation } from "react-i18next";

type LineChartProps = {
  data: ValueByYearEntry[];
  fieldOfStudy: FieldOfStudy;
}

const IncomeByYearChart = ({ data, fieldOfStudy }: LineChartProps) => {
  const [t, i18n] = useTranslation();

  return <div className="card bg-base-100 w-full h-[35vh] p-5 shadow-md">
    <h2 className="text-2xl text-center w-full">{t("income-by-year-graph-title")} ({t(getDisplayKeyForField(fieldOfStudy))})</h2>
    <ResponsiveContainer>
      <LineChart
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" />
        <Line name={t("legend-man")} type="monotone" dataKey="valueMale" stroke="var(--color-graph-blue)" />
        <Line name={t("legend-woman")} type="monotone" dataKey="valueFemale" stroke="var(--color-graph-pink)" />
      </LineChart>
    </ResponsiveContainer>
  </div>
};

export default IncomeByYearChart;
