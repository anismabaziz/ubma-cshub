import { asyncWrapper } from "../middlewares/async";
import { Request, Response, NextFunction } from "express-serve-static-core";
import {
  addYear,
  editYear,
  findYearByID,
  findYears,
  removeYear,
} from "../services/years";
import { StatusCodes } from "http-status-codes";

export const getYear = asyncWrapper(
  async (
    req: Request<{ id: string }, {}, {}>,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const year = await findYearByID(id);
    res.status(StatusCodes.OK).json({ year });
  }
);

interface CreateYearRequestBody {
  yearNumber: number;
  degreeId: string;
}
export const createYear = asyncWrapper(
  async (
    req: Request<{}, {}, CreateYearRequestBody>,
    res: Response,
    next: NextFunction
  ) => {
    const { yearNumber, degreeId } = req.body;
    const year = await addYear({ yearNumber, degreeId });
    res.status(StatusCodes.CREATED).json({ year });
  }
);
export const getYears = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const years = await findYears();
    res.status(StatusCodes.OK).json({ years });
  }
);
export const deleteYear = asyncWrapper(
  async (
    req: Request<{ id: string }, {}, {}>,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const deletedYear = await removeYear(id);
    res.status(StatusCodes.OK).json({ deletedYear });
  }
);

interface UpdateYearRequestBody {
  yearNumber?: number;
  degreeId?: string;
}
export const updateYear = asyncWrapper(
  async (
    req: Request<{ id: string }, UpdateYearRequestBody>,
    res: Response,
    next: NextFunction
  ) => {
    const { yearNumber, degreeId } = req.body;
    const { id } = req.params;
    const year = await editYear(id, { yearNumber, degreeId });
    res.status(StatusCodes.OK).json({ year });
  }
);
