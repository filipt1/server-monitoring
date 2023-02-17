import express from "express";
import { getDiskUsage } from "../controllers/disk.controller";

const diskRouter = express.Router();

diskRouter.get("/get-disk-usage", getDiskUsage);

export default diskRouter;
