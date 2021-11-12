import { gql } from '@apollo/client';

export const createSessionMutation = gql`
mutation createSession ($createSessionInput: CreateSessionModel!) {
  createSession (createSessionInput: $createSessionInput) {
    id
  }
}
`;

export const startSessionMutation = gql`
mutation startSession ($sessionId: Int!) {
  startSession (sessionId: $sessionId) {
    id
  }
}
`;

export const endSessionMutation = gql`
mutation endSession ($sessionId: Int!) {
  endSession (sessionId: $sessionId) {
    id
  }
}
`;