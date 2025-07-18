"use client";


import { useEffect } from 'react';

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import type { ValueByFieldEntry } from '../data/DataMaps';


type BarChartProps = {
  data: ValueByFieldEntry[],
  year: number
};

const IncomeByStudyChart = ({ data, year }: BarChartProps) => {

  const sortedData = [...data].sort((a, b) => {
    // sort total to beginning
    if (a.fieldOfStudy === "Total, field of study") {
      return -1;
    }
    if (b.fieldOfStudy === "Total, field of study") {
      return 1;
    }

    // sort other to end
    if (a.fieldOfStudy === "Other instructional programs") {
      return 1;
    }
    if (b.fieldOfStudy === "Other instructional programs") {
      return -1;
    }

    // lexographical
    if (a.shortName < b.shortName) {
      return -1;
    }
    if (a.shortName > b.shortName) {
      return 1;
    }
    return 0;
  });

  useEffect(() => {
    console.log(sortedData);
  });

  return <div className="card bg-base-100 w-full h-[50vh] p-5 shadow-md">
    <h2 className="text-2xl text-center w-full my-2">Median Income for {year}</h2>
    <ResponsiveContainer>
      <BarChart
        data={sortedData}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="shortName" angle={-45} textAnchor='end' height={110} />
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
