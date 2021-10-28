import { useMutation } from '@apollo/client';
import React from 'react'
import {
  addUserSkillMutation,
  getRemainingSkillsForUserQuery,
  getUserSkillsQuery,
} from '../../../lib';
import AddSkillCard from './add-skill-card.component';
 
export interface IAddSkillCardContainerProps {
  userId: number;
}
 
const AddSkillCardContainer: React.FC<IAddSkillCardContainerProps> = ({
  userId,
}) => {

  const [addUserSkill] = useMutation(addUserSkillMutation);
  const handleAddSkill = (
    { skillId, yearsExperience }:
    { skillId: number, yearsExperience: number },
  ) => {
    addUserSkill({
      variables: {
        userSkill: {
          userId,
          skillId,
          yearsExperience,
          rating: 1,
        },
      },
      refetchQueries: [getUserSkillsQuery, getRemainingSkillsForUserQuery],
    });
  };

  return (
    <AddSkillCard userId={userId} onAddSkill={handleAddSkill} />
  );
};
 
export default AddSkillCardContainer;