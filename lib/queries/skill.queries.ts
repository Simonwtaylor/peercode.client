import { gql } from '@apollo/client';

export const getUserSkillsQuery = gql`
query getUserSkills($id: Int!) {
  getUserSkills(id: $id) {
    id
    yearsExperience
    rating
    skill {
      id
      name
      colour
      iconPath
    }
  }
}
`;
