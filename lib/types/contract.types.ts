import { ISkill } from "./skill.types";
import { IUser } from "./user.types";

export interface IContractStatus {
  id: number;
  status: string;
  isActive: boolean;
}

export interface IContractHistory {
  id: number;
  message: string;
  user?: IUser;    
  userId?: number;
  contractId: number;
}

export interface IUserContract {
  id: number;
  isSigned: boolean;
  didCreate: boolean;
  isMentor: boolean;
  dateSigned?: Date;
  user: IUser;
  userId: number;
  contractId: number;
}

export interface IContract {
  id: number;
  description: string;
  name: string;
  startDate?: Date;
  endDate?: Date;
  statusId: number;
  status: IContractStatus;
  histories: IContractHistory[];
  userContracts: IUserContract[];
  skills: ISkill[];
}

// *** Responses ***
export interface IContractsForUserResponse {
  contractsForUser: IContract[];
}

export interface IContractResponse {
  contract: IContract;
}