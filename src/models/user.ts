export enum UserRole {
  GUEST = 'GUEST',
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export interface User {
  id: string;
  role: UserRole;
}
