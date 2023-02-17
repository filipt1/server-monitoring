import axios from "axios";
import { useEffect, useState } from "react";

import { API_URL } from "./constants";
import { CpuUsageRes } from "./types";

const CpuUsage = () => {
  const [usage, setUsage] = useState<CpuUsageRes | undefined>();

  useEffect(() => {
    async function getData() {
      const response = await axios.get(API_URL + "/cpu/get-cpu-usage");

      if (response.status === 200) setUsage(response.data);
    }

    getData();
  }, []);
  return <div>{usage?.cpuUsage ?? "Unavailable"}</div>;
};

export default CpuUsage;
