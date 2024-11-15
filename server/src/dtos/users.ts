export interface CreateUser {
  email: string;
  username: string;
  password: string;
  role: "STUDENT" | "ADMIN";
}

export interface UpdateUser {
  email: string;
  username: string;
  password: string;
  role: "STUDENT" | "ADMIN";
}
