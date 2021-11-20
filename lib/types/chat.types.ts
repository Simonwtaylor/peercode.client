import { IUser } from ".";

export interface IChat {
  id: number;
  name: string;
  messages: IMessage[];
  userChats?: {
    user: IUser;
  }[];
}

export interface IMessage {
  id: number;
  content: string;
  datePosted: Date;
  edited?: boolean;
  userId?: number;
  user?: IUser;
}

export interface IGetChatResponse {
  chat: IChat;
}

export interface IGetUserChatsResponse {
  userChats: IChat[];
}