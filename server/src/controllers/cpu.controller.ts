import { Request, Response } from "express";

import nos from "node-os-utils";

export async function getCpuUsage(req: Request, res: Response) {
  const cpuUsage = await nos.cpu.usage(100);
  res.send({ cpuUsage });
}
