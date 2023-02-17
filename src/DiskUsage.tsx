import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "./constants";
import { DiskUsageRes } from "./types";

const DiskUsage = () => {
  const [usage, setUsage] = useState<DiskUsageRes | undefined>(undefined);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(API_URL + "/disk/get-disk-usage");

      if (response.status === 200) setUsage(response.data);
    }

    getData();
  }, []);
  return <div>{usage?.usedPercentage}%</div>;
};

export default DiskUsage;
