import { Request, Response } from "express";

import nos from "node-os-utils";

export async function getDiskUsage(req: Request, res: Response) {
  const diskUsage = await nos.drive.info("/");
  res.send(diskUsage);
}
