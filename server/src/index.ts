import express from "express";
import cors from "cors";

import diskRouter from "./routes/disk";
import cpuRouter from "./routes/cpu";

const PORT = process.env.PORT || 3333;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/disk", diskRouter);
app.use("/cpu", cpuRouter);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
