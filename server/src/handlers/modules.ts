import { asyncWrapper } from "../middlewares/async";
import { Request, Response, NextFunction } from "express-serve-static-core";
import {
  addModule,
  editModule,
  findModuleById,
  findModules,
  removeModule,
} from "../services/modules";
import { StatusCodes } from "http-status-codes";

interface CreateModuleRequestBody {
  name: string;
  code: string;
  description: string;
  semesterId: string;
}

export const createModule = asyncWrapper(
  async (
    req: Request<{}, {}, CreateModuleRequestBody>,
    res: Response,
    next: NextFunction
  ) => {
    const { name, code, description, semesterId } = req.body;
    const module_ = await addModule({ name, code, description, semesterId });
    res.status(StatusCodes.CREATED).json({ module: module_ });
  }
);
export const getModule = asyncWrapper(
  async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const module_ = await findModuleById(id);
    res.status(StatusCodes.OK).json({ module: module_ });
  }
);
export const getModules = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const modules = await findModules();
    res.status(StatusCodes.OK).json({ modules });
  }
);
export const deleteModule = asyncWrapper(
  async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const deletedModule = await removeModule(id);
    res.status(StatusCodes.OK).json({ deletedModule });
  }
);

interface UpdateModuleRequestBody {
  name?: string;
  code?: string;
  description?: string;
  semesterId?: string;
}
export const updateModule = asyncWrapper(
  async (
    req: Request<{ id: string }, {}, UpdateModuleRequestBody>,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const { name, code, description, semesterId } = req.body;
    const module = await editModule(id, {
      name,
      code,
      description,
      semesterId,
    });
    res.status(StatusCodes.OK).json({ module });
  }
);
