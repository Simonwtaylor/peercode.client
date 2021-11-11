import { gql } from '@apollo/client';

export const createSessionMutation = gql`
mutation createSession ($createSessionInput: CreateSessionModel!) {
  createSession (createSessionInput: $createSessionInput) {
    id
  }
}
`;

export const startSessionMutation = gql`
mutation startSession ($id: Int!) {
  startSession (id: $id) {
    id
  }
}
`;

export const endSessionMutation = gql`
mutation endSession ($id: Int!) {
  endSession (id: $id) {
    id
  }
}
`;