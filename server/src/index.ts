import express from "express";
import adminsRouter from "./routes/admins";
import { errorHandler } from "./middlewares/error-handler";
import authRouter from "./routes/auth";
import { isAdmin } from "./middlewares/auth";
import degreesRouter from "./routes/degrees";
import yearsRouter from "./routes/years";
import semestersRouter from "./routes/semesters";
import modulesRouter from "./routes/modules";
import resourcesRouter from "./routes/resources";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.get("/ping", (req, res) => {
  res.json({ pong: true });
});

app.get("/protected", isAdmin, (req, res) => {
  res.send("This is a protected route test");
});

app.use("/api/v1/admins", adminsRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/degrees", degreesRouter);
app.use("/api/v1/years", yearsRouter);
app.use("/api/v1/semesters", semestersRouter);
app.use("/api/v1/modules", modulesRouter);
app.use("/api/v1/resources", resourcesRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
