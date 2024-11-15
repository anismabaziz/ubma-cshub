import { asyncWrapper } from "../middlewares/async";
import { Request, Response, NextFunction } from "express-serve-static-core";
import {
  addResource,
  editResource,
  findResourceById,
  findResources,
  removeResource,
} from "../services/resources";
import { StatusCodes } from "http-status-codes";

interface CreateResourceRequestBody {
  resourceType: "YOUTUBE" | "DRIVE" | "BOOK";
  url: string;
  description: string;
  moduleId: string;
}

export const createResource = asyncWrapper(
  async (
    req: Request<{}, {}, CreateResourceRequestBody>,
    res: Response,
    next: NextFunction
  ) => {
    const { resourceType, url, description, moduleId } = req.body;
    const resource = await addResource({
      resourceType,
      url,
      description,
      moduleId,
    });
    res.status(StatusCodes.CREATED).json({ resource: resource });
  }
);
export const getResource = asyncWrapper(
  async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const resource = await findResourceById(id);
    res.status(StatusCodes.OK).json({ resource: resource });
  }
);
export const getResources = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const resources = await findResources();
    res.status(StatusCodes.OK).json({ resources });
  }
);
export const deleteResource = asyncWrapper(
  async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const deletedResource = await removeResource(id);
    res.status(StatusCodes.OK).json({ deletedResource });
  }
);

interface UpdateResourceRequestBody {
  resourceType?: "YOUTUBE" | "DRIVE" | "BOOK";
  url?: string;
  description?: string;
  moduleId?: string;
}
export const updateResource = asyncWrapper(
  async (
    req: Request<{ id: string }, {}, UpdateResourceRequestBody>,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const { resourceType, url, description, moduleId } = req.body;
    const resource = await editResource(id, {
      resourceType,
      url,
      description,
      moduleId,
    });
    res.status(StatusCodes.OK).json({ resource });
  }
);
