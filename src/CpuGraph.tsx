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
import axios from "axios";
import { API_URL } from "./constants";

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

const labels = [0, 3, 6, 9, 12, 15, 18, 21, 24, 27].reverse();

const CpuGraph = () => {
  const [cpuData, setCpuData] = useState<number[]>(new Array(10).fill(0));

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(API_URL + "/cpu/get-cpu-usage");

      const newCpuData = [...cpuData];
      newCpuData.shift();
      newCpuData.push(Number(res.data.cpuUsage));

      setCpuData(newCpuData);
    }

    const timer = setTimeout(() => fetchData(), 3000);

    return () => clearInterval(timer);
  }, [cpuData]);

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
