import { Router } from "express";
import { login } from "../handlers/auth";

const authRouter = Router();

authRouter.post("/login", login);

export default authRouter;
