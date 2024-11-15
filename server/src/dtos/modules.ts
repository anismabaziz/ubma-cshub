export interface CreateModule {
  name: string;
  code: string;
  description: string;
  semesterId: string;
}

export interface UpdateModule {
  name?: string;
  code?: string;
  description?: string;
  semesterId?: string;
}
