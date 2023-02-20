import useFetch from "./hooks/useFetch";
import { DiskUsageRes } from "./types";

const DiskUsage = () => {
  const { data, loading, error } = useFetch<DiskUsageRes>(
    "/disk/get-disk-usage"
  );

  return (
    <div>
      <h2>Disk usage:</h2>
      {data?.usedPercentage}
    </div>
  );
};

export default DiskUsage;
