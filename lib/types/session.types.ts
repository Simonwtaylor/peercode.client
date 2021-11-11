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

export interface ISessionDetail {
  id: number;
  discordChannelId?: string
  discordChannelName?: string;
  discordChannelPassword?: string;
  discordInviteLink?: string;
  callStarted: boolean;
  callEnded: boolean;
  sessionId?: number;
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

export interface ISessionDetailResponse {
  sessionDetail: ISessionDetail;
}