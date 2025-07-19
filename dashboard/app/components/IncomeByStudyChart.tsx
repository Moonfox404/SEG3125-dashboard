"use client";

import { useEffect, useState } from 'react';

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import type { ValueByFieldEntry } from '../data/DataMaps';
import IconAxisTick from './IconAxisTick';


type BarChartProps = {
  data: ValueByFieldEntry[],
  year: number
};

const IncomeByStudyChart = ({ data, year }: BarChartProps) => {

  const [vertical, setVertical] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1200px)");

    setVertical(mq.matches);

    mq.addEventListener("change", (evt) => {
      setVertical(evt.matches);
    })
  })

  return <div className="card bg-base-100 w-full h-[55vh] p-5 shadow-md">
    <h2 className="text-2xl text-center w-full my-2">Median Income per Field ({year})</h2>
    <ResponsiveContainer>
      <BarChart
        layout={vertical ? "vertical" : "horizontal"}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey={vertical ? undefined : "fieldOfStudy"}
          tick={vertical ? undefined : IconAxisTick}
          type={vertical ? "number" : "category"}
          interval={vertical ? "preserveStart" : 0}
        />
        <YAxis
          dataKey={vertical ? "fieldOfStudy" : undefined}
          tick={vertical ? IconAxisTick : undefined}
          type={vertical ? "category" : "number"}
          interval={vertical ? 0 : "preserveStart"}
          tickMargin={vertical ? 20 : undefined}
        />
        <Tooltip />
        <Legend verticalAlign="top" />
        <Bar dataKey="valueMale" fill="var(--color-graph-blue)" name="Man" />
        <Bar dataKey="valueFemale" fill="var(--color-graph-pink)" name="Woman" />
      </BarChart>
    </ResponsiveContainer>
  </div>
};

export default IncomeByStudyChart;
