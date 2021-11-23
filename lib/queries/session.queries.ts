import { gql } from '@apollo/client';

export const getSessionsForUserQuery = gql`
query userSessions ($userId: Int!) {
  userSessions (userId: $userId) {
      id
      startDate
      endDate
      name
      description
      notes
      statusId
      status {
          id
          status
          isActive
      }
      contractId
  }
}
`;

export const getSessionQuery = gql`
query session ($id: Int!) {
  session (id: $id) {
    id
    startDate
    endDate
    name
    description
    notes
    statusId
    status {
      id
      status
      isActive
    }
    contractId
    discordChannelId
    discordChannelName
    discordChannelPassword
    discordInviteLink
    callStarted
    callEnded
  }
}
`;

export const getContractSessionsQuery = gql`
query contractSessions ($contractId: Int!) {
  contractSessions (contractId: $contractId) {
      id
      startDate
      endDate
      name
      description
      notes
      statusId
      status {
          id
          status
          isActive
      }
      contractId
  }
}
`;