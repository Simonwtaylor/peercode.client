import { gql } from '@apollo/client';

export const addUserSkillMutation = gql`
  mutation addUserSkill($userSkill: AddUserSkillModel!) {
    addUserSkill(addUserSkillInput: $userSkill) {
      id
    }
  }
`;

export const removeUserSkillMutation = gql`
  mutation removeUserSkill($id: Int!) {
    removeUserSkill(id: $id)
  }
`;
