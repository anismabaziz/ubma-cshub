import { Router } from "express";
import {
  createResource,
  deleteResource,
  getResource,
  getResources,
  updateResource,
} from "../handlers/resources";

const resourcesRouter = Router();

resourcesRouter.post("/", createResource);
resourcesRouter.get("/:id", getResource);
resourcesRouter.delete("/:id", deleteResource);
resourcesRouter.put("/:id", updateResource);
resourcesRouter.get("/", getResources);

export default resourcesRouter;
