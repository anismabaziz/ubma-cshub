import { Router } from "express";
import {
  createModule,
  deleteModule,
  getModule,
  getModules,
  updateModule,
} from "../handlers/modules";

const modulesRouter = Router();

modulesRouter.get("/:id", getModule);
modulesRouter.post("/", createModule);
modulesRouter.delete("/:id", deleteModule);
modulesRouter.get("/", getModules);
modulesRouter.put("/:id", updateModule);

export default modulesRouter;
