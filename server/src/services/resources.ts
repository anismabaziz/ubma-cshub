import { CreateResource, UpdateResource } from "../dtos/resources";
import prisma from "../utils/db";

export const addResource = async (resourceInfo: CreateResource) => {
  const resource = await prisma.resource.create({ data: resourceInfo });
  return resource;
};

export const findResourceById = async (id: string) => {
  const resource = await prisma.resource.findUnique({ where: { id } });
  return resource;
};
export const findResources = async () => {
  const resources = await prisma.resource.findMany({});
  return resources;
};
export const removeResource = async (id: string) => {
  const deletedResource = await prisma.resource.delete({ where: { id } });
  return deletedResource;
};

export const editResource = async (
  id: string,
  resourceInfo: UpdateResource
) => {
  const resource = await prisma.resource.update({
    where: { id },
    data: resourceInfo,
  });
  return resource;
};
