import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import {
  getRemainingSkillsForUserQuery,
  getUserSkillsQuery,
  IUserSkillsResponse,
  removeUserSkillMutation,
} from '../../../lib';
import SkillCards from './user-skills-card.component';
 
export interface IUserSkillsCardContainerProps {
  userId: number;
  editable?: boolean;
}
 
const UserSkillsCardContainer: React.FC<IUserSkillsCardContainerProps> = ({
  userId,
  editable,
}) => {
  const { data, loading, error } = useQuery<IUserSkillsResponse>(getUserSkillsQuery, {
    variables: {
      id: userId,
    },
  });

  const [removeUserSkill] = useMutation(removeUserSkillMutation);
  const handleRemoveSkill = (userSkillId: number) => {
    removeUserSkill({
      variables: {
        id: userSkillId,
      },
      refetchQueries: [getUserSkillsQuery, getRemainingSkillsForUserQuery],
    });
  };

  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>{error}</>;
  }

  return (
    <SkillCards
      skills={data?.getUserSkills ?? []}
      editable={editable}
      onUserSkillRemove={handleRemoveSkill}
    />
  );
};

export default UserSkillsCardContainer;