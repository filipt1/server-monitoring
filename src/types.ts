export type DiskUsageRes = {
  totalGb: string;
  usedGb: string;
  freeGb: string;
  usedPercentage: string;
  freePercentage: string;
};

export type CpuUsageRes = {
  cpuUsage: number;
};
