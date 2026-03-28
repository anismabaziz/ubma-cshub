import { Semester } from "@/types/db";
import axiosClient from ".";

export const getAllSemesters = async () => {
  const response = await axiosClient.get<Semester[]>("/academics/api/semesters/");
  return response.data;
};
export const getSemesterById = async (id: string) => {
  const response = await axiosClient.get<Semester>(`/academics/api/semesters/${id}/`);
  return response.data;
};
