import { CreateUser, UpdateUser } from "../dtos/users";
import prisma from "../utils/db";

export async function addUser(userInfo: CreateUser) {
  const user = await prisma.user.create({
    data: userInfo,
  });
  return user;
}

export async function findUserByID(id: string) {
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      username: true,
      email: true,
      createdAt: true,
      updatedAt: true,
      role: true,
    },
  });
  return user;
}
export async function findUserByUsername(username: string) {
  const user = await prisma.user.findUnique({ where: { username } });
  return user;
}

export async function removeUser(id: string) {
  const deletedUser = await prisma.user.delete({ where: { id } });
  return deletedUser;
}
export async function editUser(id: string, userInfo: UpdateUser) {
  const user = await prisma.user.update({ where: { id }, data: userInfo });
  return user;
}
