import express from "express";
import { getCpuUsage } from "../controllers/cpu.controller";

const cpuRouter = express.Router();

cpuRouter.get("/get-cpu-usage", getCpuUsage);

export default cpuRouter;
