import CpuGraph from "./CpuGraph";
import useFetch from "./hooks/useFetch";
import { CpuUsageRes } from "./types";

const CpuUsage = () => {
  const { data, loading, error } = useFetch<CpuUsageRes>("/cpu/get-cpu-usage");

  return (
    <div>
      <h2>CPU usage:</h2>
      {data?.cpuUsage ?? "Unavailable"}
      <CpuGraph />
    </div>
  );
};

export default CpuUsage;
