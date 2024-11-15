import prisma from "../utils/db";

export async function findAdmins() {
  const user = await prisma.user.findMany({ where: { role: "ADMIN" } });
  return user;
}
