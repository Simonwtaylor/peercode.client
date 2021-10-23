export interface IUserResponse {
  user: IUser;
}

export interface IUserBioResponse {
  user: IUserBio;
}

export interface IUsersResponse {
  users: IUser[];
}

export interface IUser {
  id: number;
  username: string;
  email: string;
  role: string;
  uid: string;
  website?: string;
  twitter?: string;
  github?: string;
  bio: string;
  mentor: boolean;
}

export interface IUserBio {
  id: number;
  bio: string;
}

export interface IUserProfile {
  id: number;
  username: string;
  email: string;
  role: string;
  website?: string;
  twitter?: string;
  github?: string;
  mentor: boolean;
}