import { Major } from "@/types/db";
import axiosClient from ".";

export const getAllMajors = async () => {
  const response = await axiosClient.get<Major[]>("/academics/api/majors/");
  return response.data;
};
