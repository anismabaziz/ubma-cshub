import { Router } from "express";
import {
  createYear,
  deleteYear,
  getYear,
  getYears,
  updateYear,
} from "../handlers/years";

const yearsRouter = Router();

yearsRouter.post("/", createYear);
yearsRouter.get("/:id", getYear);
yearsRouter.get("/", getYears);
yearsRouter.delete("/:id", deleteYear);
yearsRouter.put("/:id", updateYear);

export default yearsRouter;
