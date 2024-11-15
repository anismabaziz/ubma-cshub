import { Request, Response, NextFunction } from "express-serve-static-core";
import { StatusCodes } from "http-status-codes";
export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: (error as Error).message });
};
