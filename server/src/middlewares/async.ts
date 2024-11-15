import { Request, Response, NextFunction } from "express-serve-static-core";

export const asyncWrapper = (fn: Function) => {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
