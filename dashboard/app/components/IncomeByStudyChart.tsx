"use client";


import { useEffect } from 'react';

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import type { ValueByFieldEntry } from '../data/DataMaps';
import IconAxisTick from './IconAxisTick';


type BarChartProps = {
  data: ValueByFieldEntry[],
  year: number
};

const IncomeByStudyChart = ({ data, year }: BarChartProps) => {

  useEffect(() => {
    console.log(data);
  });

  return <div className="card bg-base-100 w-full h-[55vh] p-5 shadow-md">
    <h2 className="text-2xl text-center w-full my-2">Median Income per Field ({year})</h2>
    <ResponsiveContainer>
      <BarChart
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="fieldOfStudy" angle={-90} tick={IconAxisTick} />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" />
        <Bar dataKey="valueMale" fill="#5D83D0" name="Man" />
        <Bar dataKey="valueFemale" fill="#BA375A" name="Woman" />
      </BarChart>
    </ResponsiveContainer>
  </div>
};

export default IncomeByStudyChart;
