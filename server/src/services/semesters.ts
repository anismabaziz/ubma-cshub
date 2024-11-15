import { CreateSemester, UpdateSemester } from "../dtos/semesters";
import prisma from "../utils/db";

export const addSemester = async (semesterInfo: CreateSemester) => {
  const semester = await prisma.semester.create({ data: semesterInfo });
  return semester;
};
export const findSemesterByID = async (id: string) => {
  const semester = await prisma.semester.findUnique({ where: { id } });
  return semester;
};
export const findSemesters = async () => {
  const semesters = await prisma.semester.findMany({});
  return semesters;
};
export const removeSemester = async (id: string) => {
  const deletedSemester = await prisma.semester.delete({ where: { id } });
  return deletedSemester;
};
export const editSemester = async (
  id: string,
  semesterInfo: UpdateSemester
) => {
  const semester = await prisma.semester.update({
    where: { id },
    data: semesterInfo,
  });
  return semester;
};
