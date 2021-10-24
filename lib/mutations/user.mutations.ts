import { gql } from '@apollo/client';

export const updateUserBioMutation = gql`
  mutation updateUserBio($user: UpdateUserBioModel!) {
    updateUserBio(updateUserBioInput: $user) {
      id
      bio
    }
  }
`;

export const updateUserMutation = gql`
  mutation updateUser($user: UpdateUserModel!) {
    updateUser(updateUserInput: $user) {
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
