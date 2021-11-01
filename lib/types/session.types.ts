export interface ISessionStatus {
  id: number;
  status: string;
  isActive: boolean;
}

export interface ISession {
  id: number;
  startDate: Date;
  endDate: Date;
  name: string;
  description?: string;
  notes?: string;
  statusId: number;
  status: ISessionStatus;
  contractId: number;
}

export interface ISessionsForUserResponse {
  userSessions: ISession[];
}

export interface IContractSessionsResponse {
  contractSessions: ISession[];
}

export interface ISessionResponse {
  session: ISession;
}