import * as express from "express-serve-static-core";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
        username: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        role: "ADMIN" | "STUDENT";
      };
    }
  }
}
