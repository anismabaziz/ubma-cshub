import { Request, Response, NextFunction } from "express-serve-static-core";
import { verifyToken } from "../utils/jwt";
import { findUserByID } from "../services/users";

export const isAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    return next(new Error("Access Denied, no token provided"));
  }
  try {
    const payload = await verifyToken(token);
    const userID = payload.userID;
    const user = await findUserByID(userID);
    if (!user) {
      throw new Error("Access Denied, user not found");
    }
    if (user.role != "ADMIN") {
      throw new Error("Access Denied, user not admin");
    }
    req.user = user;
    next();
  } catch (error) {
    next(new Error((error as Error).message));
  }
};
