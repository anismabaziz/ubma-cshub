import { Router } from "express";
import {
  createSemester,
  deleteSemester,
  getSemester,
  getSemesters,
  updateSemester,
} from "../handlers/semesters";

const semestersRouter = Router();

semestersRouter.post("/", createSemester);
semestersRouter.get("/:id", getSemester);
semestersRouter.get("/", getSemesters);
semestersRouter.delete("/:id", deleteSemester);
semestersRouter.put("/:id", updateSemester);

export default semestersRouter;
