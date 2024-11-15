import {
  getDegree,
  createDegree,
  getDegrees,
  updateDegree,
  deleteDegree,
} from "../handlers/degrees";

import { Router } from "express";

const degreesRouter = Router();

degreesRouter.get("/", getDegrees);
degreesRouter.post("/", createDegree);
degreesRouter.delete("/:id", deleteDegree);
degreesRouter.put("/:id", updateDegree);
degreesRouter.get("/:id", getDegree);

export default degreesRouter;
