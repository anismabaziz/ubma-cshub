import { CreateYear, UpdateYear } from "../dtos/years";
import prisma from "../utils/db";

export const addYear = async (yearInfo: CreateYear) => {
  const year = await prisma.year.create({ data: yearInfo });
  return year;
};

export const findYearByID = async (id: string) => {
  const year = await prisma.year.findUnique({ where: { id } });
  return year;
};

export const findYears = async () => {
  const years = await prisma.year.findMany({});
  return years;
};

export const removeYear = async (id: string) => {
  const deletedYear = await prisma.year.delete({ where: { id } });
  return deletedYear;
};

export const editYear = async (id: string, yearInfo: UpdateYear) => {
  const year = await prisma.year.update({ where: { id }, data: yearInfo });
  return year;
};
