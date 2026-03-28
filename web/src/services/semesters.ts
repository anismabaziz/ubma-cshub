import { Semester } from "@/types/db";
import axiosClient from ".";

export const getAllSemesters = async () => {
  const response = await axiosClient.get<Semester[]>("/academics/api/semesters/");
  return response.data;
};
