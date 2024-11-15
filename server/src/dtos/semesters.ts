export interface CreateSemester {
  semesterNumber: number;
  yearId: string;
}

export interface UpdateSemester {
  semesterNumber?: number;
  yearId?: string;
}
