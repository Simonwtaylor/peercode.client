import { gql } from '@apollo/client';

export const createSessionMutation = gql`
mutation createSession ($createSessionInput: CreateSessionModel!) {
  createSession (createSessionInput: $createSessionInput) {
    id
  }
}
`;
