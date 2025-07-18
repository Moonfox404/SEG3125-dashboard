"use client";

import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from "recharts";
import { ValueByFieldEntry } from "../data/DataMaps";

type RadarChartProps = {
  data: ValueByFieldEntry[];
};

const NumbersByStudyChart = ({ data }: RadarChartProps) => {
  return (
    <div className="card bg-base-100 w-full h-[50vh] p-5">
      <ResponsiveContainer>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="shortName" />
          <Tooltip />
          <Radar name="Woman" dataKey="valueFemale" stroke="#A9284B" fill="#A9284B" fillOpacity={0.5} />
          <Radar name="Man" dataKey="valueMale" stroke="#A4BEF3" fill="#A4BEF3" fillOpacity={0.5} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NumbersByStudyChart;
