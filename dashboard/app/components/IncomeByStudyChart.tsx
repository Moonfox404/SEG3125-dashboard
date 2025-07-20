"use client";

import { useEffect, useState } from 'react';

import { Bar, BarChart, CartesianGrid, Label, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import type { ValueByFieldEntry } from '../data/DataMaps';
import IconAxisTick from './IconAxisTick';
import { useTranslation } from 'react-i18next';


type BarChartProps = {
  data: ValueByFieldEntry[],
  year: number
};

const IncomeByStudyChart = ({ data, year }: BarChartProps) => {

  const [vertical, setVertical] = useState(false);
  const [t, i18n] = useTranslation();

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1200px)");

    setVertical(mq.matches);

    mq.addEventListener("change", (evt) => {
      setVertical(evt.matches);
    })
  })

  return <div className="card bg-base-100 w-full h-[70vh] sm:h-[55vh] p-5 shadow-md">
    <h2 className="text-2xl text-center w-full my-2">{t("income-by-study-graph-title")} ({year})</h2>
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
          height={50}
        >
          <Label value={t(t(vertical ? "income-axis-label" : "study-axis-label"))} position="insideBottom" />
        </XAxis>
        <YAxis
          dataKey={vertical ? "fieldOfStudy" : undefined}
          tick={vertical ? IconAxisTick : undefined}
          type={vertical ? "category" : "number"}
          interval={vertical ? 0 : "preserveStart"}
          tickMargin={vertical ? 20 : undefined}
          width={85}
        >
          <Label value={t(vertical ? "study-axis-label" : "income-axis-label")} position="insideLeft" angle={-90} />
        </YAxis>
        <Tooltip />
        <Legend verticalAlign="top" />
        <Bar dataKey="valueMale" fill="var(--color-graph-blue)" name={t("legend-man")} />
        <Bar dataKey="valueFemale" fill="var(--color-graph-pink)" name={t("legend-woman")} />
      </BarChart>
    </ResponsiveContainer>
  </div>
};

export default IncomeByStudyChart;
