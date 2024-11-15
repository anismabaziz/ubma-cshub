import { CreateDegree, UpdateDegree } from "../dtos/degrees";
import prisma from "../utils/db";

export const addDegree = (degreeInfo: CreateDegree) => {
  const degree = prisma.degree.create({ data: degreeInfo });
  return degree;
};

export const findDegreeByID = (id: string) => {
  const degree = prisma.degree.findUnique({ where: { id } });
  return degree;
};

export const findDegrees = () => {
  const degrees = prisma.degree.findMany();
  return degrees;
};

export const removeDegree = (id: string) => {
  const deletedDegree = prisma.degree.delete({ where: { id } });
  return deletedDegree;
};

export const editDegree = (id: string, degreeInfo: UpdateDegree) => {
  const degrees = prisma.degree.update({ where: { id }, data: degreeInfo });
  return degrees;
};
