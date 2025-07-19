"use client";

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { FieldOfStudy, getDisplayNameForField, ValueByYearEntry } from "../data/DataMaps";

type LineChartProps = {
  data: ValueByYearEntry[];
  fieldOfStudy: FieldOfStudy;
}

const IncomeByYearChart = ({ data, fieldOfStudy }: LineChartProps) => {
  return <div className="card bg-base-100 w-full h-[35vh] p-5 shadow-md">
    <h2 className="text-2xl text-center w-full">Median Income over Time ({getDisplayNameForField(fieldOfStudy)})</h2>
    <ResponsiveContainer>
      <LineChart
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" />
        <Line name="Man" type="monotone" dataKey="valueMale" stroke="var(--color-graph-blue)" />
        <Line name="Woman" type="monotone" dataKey="valueFemale" stroke="var(--color-graph-pink)" />
      </LineChart>
    </ResponsiveContainer>
  </div>
};

export default IncomeByYearChart;
