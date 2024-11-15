import { NextFunction, Request, Response } from "express-serve-static-core";
import {
  addDegree,
  editDegree,
  findDegreeByID,
  removeDegree,
  findDegrees,
} from "../services/degrees";
import { asyncWrapper } from "../middlewares/async";
import { StatusCodes } from "http-status-codes";

interface CreateDegreeRequestBody {
  name: "MASTERS" | "BACHELOR";
}
export const createDegree = asyncWrapper(
  async (
    req: Request<{}, {}, CreateDegreeRequestBody>,
    res: Response,
    next: NextFunction
  ) => {
    const { name } = req.body;
    const degree = await addDegree({
      name,
    });
    res.status(StatusCodes.CREATED).json({ degree });
  }
);

export const getDegree = asyncWrapper(
  async (
    req: Request<{ id: string }, {}, {}>,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const degree = await findDegreeByID(id);
    res.status(StatusCodes.OK).json({ degree });
  }
);

export const getDegrees = asyncWrapper(
  async (
    req: Request<{ id: string }, {}, {}>,
    res: Response,
    next: NextFunction
  ) => {
    const degrees = await findDegrees();
    res.status(StatusCodes.OK).json({ degrees });
  }
);

export const deleteDegree = asyncWrapper(
  async (
    req: Request<{ id: string }, {}, {}>,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const deletedDegree = await removeDegree(id);
    res.status(StatusCodes.OK).json({ deletedDegree });
  }
);

interface UpdateDegreeRequestBody {
  name?: "MASTERS" | "BACHELOR";
}
export const updateDegree = asyncWrapper(
  async (
    req: Request<{ id: string }, {}, UpdateDegreeRequestBody>,
    res: Response,
    next: NextFunction
  ) => {
    const { name } = req.body;
    const { id } = req.params;

    const degree = await editDegree(id, {
      name,
    });
    res.status(StatusCodes.OK).json({ degree });
  }
);
