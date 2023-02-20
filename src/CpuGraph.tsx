import React, { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { CpuUsageRes } from "./types";
import useFetch from "./hooks/useFetch";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  animation: {
    duration: 0,
  },
  scales: {
    y: {
      min: 0,
      max: 100,
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const labels = [0, 3, 6, 9, 12, 15, 18, 21, 24, 27];

const data = {
  labels,
  datasets: [
    {
      label: "CPU usage",
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      borderColor: "rgb(255, 234, 174)",
      backgroundColor: "rgb(255, 250, 235)",
    },
  ],
};

const CpuGraph = () => {
  const [cpuData, setCpuData] = useState<number[]>(new Array(10).fill(0));

  const data = {
    labels,
    datasets: [
      {
        label: "CPU usage",
        data: cpuData,
        borderColor: "rgb(255, 234, 174)",
        backgroundColor: "rgb(255, 250, 235)",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default CpuGraph;
