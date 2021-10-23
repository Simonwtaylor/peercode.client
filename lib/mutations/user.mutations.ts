import { gql } from '@apollo/client';

export const updateUserBioMutation = gql`
  mutation updateUserBio($user: UpdateUserBioModel!) {
    updateUserBio(updateUserBioInput: $user) {
        id
        bio
    }
  }
`;
