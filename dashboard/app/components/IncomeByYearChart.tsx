"use client";

import { CartesianGrid, Label, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { FieldOfStudy, getDisplayKeyForField, ValueByYearEntry } from "../data/DataMaps";
import { useTranslation } from "react-i18next";

type LineChartProps = {
  data: ValueByYearEntry[];
  fieldOfStudy: FieldOfStudy;
}

const IncomeByYearChart = ({ data, fieldOfStudy }: LineChartProps) => {
  const [t, i18n] = useTranslation();

  return <div className="card bg-base-100 w-full h-[45vh] sm:h-[35vh] p-5 shadow-md">
    <h2 className="text-2xl text-center w-full">{t("income-by-year-graph-title")} ({t(getDisplayKeyForField(fieldOfStudy))})</h2>
    <ResponsiveContainer>
      <LineChart
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" height={50} >
          <Label value={t("year-axis-label")} position="insideBottom" />
        </XAxis>
        <YAxis width={90}>
          <Label value={t("income-axis-label")} position="insideBottomLeft" offset={15} angle={-90} />
        </YAxis>
        <Tooltip />
        <Legend verticalAlign="top" />
        <Line name={t("legend-man")} type="monotone" dataKey="valueMale" stroke="var(--color-graph-blue)" />
        <Line name={t("legend-woman")} type="monotone" dataKey="valueFemale" stroke="var(--color-graph-pink)" />
      </LineChart>
    </ResponsiveContainer>
  </div>
};

export default IncomeByYearChart;
