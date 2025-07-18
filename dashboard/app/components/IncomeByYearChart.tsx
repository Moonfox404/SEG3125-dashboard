"use client";

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ValueByYearEntry } from "../data/DataMaps";

const IncomeByYearChart = ({data}: {data: ValueByYearEntry[]}) => {
  return <div className="card bg-base-100 w-full h-[35vh] p-5 shadow-md">
    <h2 className="text-2xl text-center w-full">Median Income over Time</h2>
    <ResponsiveContainer>
      <LineChart
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" />
        <Line name="Man" type="monotone" dataKey="valueMale" stroke="#5D83D0" />
        <Line name="Woman" type="monotone" dataKey="valueFemale" stroke="#BA375A" />
      </LineChart>
    </ResponsiveContainer>
  </div>
};

export default IncomeByYearChart;
