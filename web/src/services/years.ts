import { Year } from "@/types/db";
import axiosClient from ".";

export const getAllYears = async () => {
  const response = await axiosClient.get<Year[]>("/academics/api/years/");
  return response.data;
};
