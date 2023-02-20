import useFetch from "./hooks/useFetch";
import { DiskUsageRes } from "./types";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Spinner from "./Spinner";

ChartJS.register(ArcElement, Tooltip, Legend);

const DiskUsage = () => {
  const {
    data: diskUsage,
    loading,
    error,
  } = useFetch<DiskUsageRes>("/disk/get-disk-usage");

  const data = {
    labels: ["Free Space (GB)", "Used space (GB)"],
    datasets: [
      {
        label: "# of Votes",
        data: [diskUsage?.freeGb, diskUsage?.usedGb],
        backgroundColor: ["rgba(255, 206, 86, 0.2)", "rgba(255, 159, 64, 0.2)"],
        borderColor: ["rgba(255, 206, 86, 1)", "rgba(255, 159, 64, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Disk usage:</h2>
      {loading ? <Spinner /> : <Pie data={data} />}
      {error ? "An error occurred" : ""}
    </div>
  );
};

export default DiskUsage;
