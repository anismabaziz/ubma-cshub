import { Degree } from "@/types/db";
import axiosClient from ".";

export const getAllDegrees = async () => {
  const response = await axiosClient.get<Degree[]>("/academics/api/degrees/");
  return response.data;
};
