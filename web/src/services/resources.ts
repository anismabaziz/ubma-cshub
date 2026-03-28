import { Resource } from "@/types/db";
import axiosClient from ".";

export const getResourcesByModule = async (id: string) => {
  const response = await axiosClient.get<Resource[]>(
    `/academics/api/resources/by-module/${id}/`
  );
  return response.data;
};
