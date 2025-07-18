"use client";


import { useEffect } from 'react';

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import type { MedianIncomeByFieldEntry } from '../data/DataMaps';


type BarChartProps = {
  data: MedianIncomeByFieldEntry[],
};

const IncomeByStudyChart = ({ data }: BarChartProps) => {

  const sortedData = [...data].sort((a, b) => {
    if (a.fieldOfStudy === "Total, field of study") {
      return -1;
    }
    if (b.fieldOfStudy === "Total, field of study") {
      return 1;
    }

    if (a.fieldOfStudy === "Other instructional programs") {
      return 1;
    }

    if (a.fieldOfStudy === "Other instructional programs") {
      return -1;
    }

    if (a.fieldOfStudy < b.fieldOfStudy) {
      return -1;
    }
    if (a.fieldOfStudy > b.fieldOfStudy) {
      return 1;
    }
    return 0;
  });

  useEffect(() => {
    console.log(sortedData);
  });

  // const options = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: 'top' as const,
  //     },
  //     title: {
  //       display: true,
  //       text: 'Median Income',
  //     },
  //   },
  // };

  // const chartData = {
  //   labels: sortedData
  //     .map((value) => value.fieldOfStudy)
  //     .reduce((accumulator: string[], current) => {
  //       if (!accumulator.includes(current)) {
  //         accumulator.push(current);
  //       }
  //       return accumulator;
  //     }, []),
  //   datasets: [
  //     {
  //       label: "Female",
  //       data: sortedData
  //         .filter((value) => value.sex === "Woman")
  //         .map(row => row.medianIncome),
  //       backgroundColor: 'rgba(255, 99, 132, 0.5)'
  //     },
  //     {
  //       label: "Male",
  //       data: sortedData
  //         .filter((value) => value.sex === "Man")
  //         .map(row => row.medianIncome),
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)'
  //     }
  //   ]
  // }

  return <div className="card bg-base-100 w-full h-screen p-5">
    <h2 className="text-4xl text-center w-full">Median Income</h2>
    <ResponsiveContainer>
      <BarChart
        data={sortedData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="shortName" angle={-45} textAnchor='end' height={150} />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" />
        <Bar dataKey="medianIncomeFemale" fill="pink" name="Woman" />
        <Bar dataKey="medianIncomeMale" fill="blue" name="Man" />
      </BarChart>
    </ResponsiveContainer>
  </div>
};

export default IncomeByStudyChart;
