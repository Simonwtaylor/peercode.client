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