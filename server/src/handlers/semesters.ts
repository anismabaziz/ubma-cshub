import { asyncWrapper } from "../middlewares/async";
import { Request, Response, NextFunction } from "express-serve-static-core";
import {
  addSemester,
  editSemester,
  findSemesterByID,
  findSemesters,
  removeSemester,
} from "../services/semesters";
import { StatusCodes } from "http-status-codes";

interface CreateSemesterRequestBody {
  semesterNumber: number;
  yearId: string;
}
export const createSemester = asyncWrapper(
  async (
    req: Request<{}, {}, CreateSemesterRequestBody>,
    res: Response,
    next: NextFunction
  ) => {
    const { semesterNumber, yearId } = req.body;
    const semester = await addSemester({ semesterNumber, yearId });
    res.status(StatusCodes.CREATED).json({ semester });
  }
);
export const getSemester = asyncWrapper(
  async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const semester = await findSemesterByID(id);
    res.status(StatusCodes.OK).json({ semester });
  }
);
export const getSemesters = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const semesters = await findSemesters();
    res.status(StatusCodes.OK).json({ semesters });
  }
);
export const deleteSemester = asyncWrapper(
  async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const deletedSemester = await removeSemester(id);
    res.status(StatusCodes.OK).json({ deletedSemester });
  }
);

interface UpdateSemesterRequestBody {
  semesterNumber?: number;
  yearId?: string;
}
export const updateSemester = asyncWrapper(
  async (
    req: Request<{ id: string }, {}, UpdateSemesterRequestBody>,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const { semesterNumber, yearId } = req.body;
    const semester = await editSemester(id, { semesterNumber, yearId });
    res.status(StatusCodes.OK).json({ semester });
  }
);
