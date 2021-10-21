import { gql } from '@apollo/client';

export const getUsersQuery = gql`
  query {
    users {
      id
      username
      email
      uid
    }
  }
`;

export const getUserQuery = gql`
  query user($id: Int!) {
    user(id: $id) {
      id
      username
      email
      uid
    }
  }
`;