export interface IUserResponse {
  user: IUser;
}

export interface IUsersResponse {
  users: IUser[];
}

export interface IUser {
  id: number;
  username: string;
  email: string;
  uid: string;
}