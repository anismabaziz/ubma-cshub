export interface CreateResource {
  resourceType: "YOUTUBE" | "DRIVE" | "BOOK";
  url: string;
  description: string;
  moduleId: string;
}
export interface UpdateResource {
  resourceType?: "YOUTUBE" | "DRIVE" | "BOOK";
  url?: string;
  description?: string;
  moduleId?: string;
}
