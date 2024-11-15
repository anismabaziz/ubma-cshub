import { Router } from "express";
import {
  createAdmin,
  deleteAdmin,
  getAdmin,
  getAdmins,
  updateAdmin,
} from "../handlers/admins";

const adminsRouter = Router();

adminsRouter.post("/", createAdmin);
adminsRouter.get("/:id", getAdmin);
adminsRouter.get("/", getAdmins);
adminsRouter.put("/:id", updateAdmin);
adminsRouter.delete("/:id", deleteAdmin);

export default adminsRouter;
