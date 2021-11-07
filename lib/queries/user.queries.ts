import { gql } from '@apollo/client';

export const getUsersQuery = gql`
  query {
    users {
      id
      username
      uid
      email
      role
      website
      twitter
      github
      bio
      mentor
  }
}
`;

export const getUserQuery = gql`
query user($id: Int!) {
  user(id: $id) {
      id
      username
      uid
      email
      role
      website
      twitter
      github
      bio
      mentor
    }
  }
`;

export const getUserBioQuery = gql`
query user($id: Int!) {
  user(id: $id) {
      id
      bio
    }
  }
`;

export const usersSearchQuery = gql`
query searchUsers ($searchUsersInput: SearchUsersModel!) {
  searchUsers (searchUsersInput: $searchUsersInput) {
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
    imageUrl
  }
}
`;