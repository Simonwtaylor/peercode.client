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

export const getRemainingSkillsForUserQuery = gql`
query getRemainingSkillsForUser($id: Int!) {
  getRemainingSkillsForUser(id: $id) {
      id
      name
      colour
      iconPath
  }
}
`;

export const getSkillsQuery = gql`
query skills {
  skills {
    id
    name
    colour
    isActive
    iconPath
  }
}
`;