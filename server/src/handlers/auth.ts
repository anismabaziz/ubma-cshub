import { NextFunction, Request, Response } from "express-serve-static-core";
import { asyncWrapper } from "../middlewares/async";
import { findUserByUsername } from "../services/users";
import { comparePassword } from "../utils/password";
import { generateToken } from "../utils/jwt";
import { StatusCodes } from "http-status-codes";

interface LoginRequestBody {
  username: string;
  password: string;
}
export const login = asyncWrapper(
  async (
    req: Request<{}, {}, LoginRequestBody>,
    res: Response,
    next: NextFunction
  ) => {
    const { username, password } = req.body;
    const user = await findUserByUsername(username);
    if (!user) {
      return next(new Error("User not found"));
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return next(new Error("Access unauthorized"));
    }
    const token = generateToken(user.id);
    res.status(StatusCodes.OK).json({ token });
  }
);
