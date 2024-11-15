import "dotenv/config";
import jwt from "jsonwebtoken";

export function generateToken(userID: string) {
  const token = jwt.sign({ userID }, process.env.JWT_SECRET as string);
  return token;
}

interface JWTPayload {
  userID: string;
}
export async function verifyToken(token: string) {
  const payload = jwt.verify(
    token,
    process.env.JWT_SECRET as string
  ) as JWTPayload;
  return payload;
}
