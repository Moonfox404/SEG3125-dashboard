"use client";

import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from "recharts";
import { ValueByFieldEntry } from "../data/DataMaps";
import IconAxisTick from "./IconAxisTick";

type RadarChartProps = {
  data: ValueByFieldEntry[];
};

const NumbersByStudyChart = ({ data }: RadarChartProps) => {
  return (
    <div className="card bg-base-100 w-full h-[55vh] p-5 shadow-md">
      <h2 className="text-2xl text-center w-full">Number Reporting</h2>
      <ResponsiveContainer>
        <RadarChart cx="50%" cy="50%" outerRadius="85%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="fieldOfStudy" tick={IconAxisTick} />
          <Tooltip />
          <Radar name="Woman" dataKey="valueFemale" stroke="#BA375A" fill="#BA375A" fillOpacity={0.5} />
          <Radar name="Man" dataKey="valueMale" stroke="#5D83D0" fill="#5D83D0" fillOpacity={0.5} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NumbersByStudyChart;
