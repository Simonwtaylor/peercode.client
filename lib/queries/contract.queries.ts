import { gql } from '@apollo/client';

export const getContractsForUserQuery = gql`
query contractsForUser ($id: Int!) {
  contractsForUser (id: $id) {
    id
    description
    name
    startDate
    endDate
    statusId
    status {
      id
      status
      isActive
    }
    histories {
      id
      message
      user {
        id
        username
        email
        role
        bio
        github
        twitter
        website
        mentor
        uid
      }
      userId
      contractId
    }
    skills {
      id
      name
      colour
      isActive
      iconPath
    }
  }
}
`;

export const getContractQuery = gql`
query contract ($id: Int!) {
  contract (id: $id) {
      id
      description
      name
      startDate
      endDate
      statusId
      numberOfSessions
      sessionPrice
      status {
          id
          status
          isActive
      }
      histories {
          id
          message
          user {
              id
              username
              email
              role
              bio
              github
              twitter
              website
              mentor
              uid
          }
          userId
          contractId
      }
      userContracts {
          id
          isSigned
          didCreate
          isMentor
          dateSigned
          user {
              id
              username
              email
              role
              bio
              github
              twitter
              website
              mentor
              uid
          }
          userId
          contractId
      }
      skills {
          id
          name
          colour
          isActive
          iconPath
      }
      sessions {
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
}
`;

export const getContractHistoryQuery = gql`
query contractHistories ($contractId: Int!) {
  contractHistories (contractId: $contractId) {
    id
    message
    user {
      id
      username
      email
      role
      bio
      github
      twitter
      website
      mentor
      uid
    }
    userId
    contractId
  }
}
`;
