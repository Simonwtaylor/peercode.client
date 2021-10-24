import { useQuery } from '@apollo/client';
import React from 'react'
import { getUserSkillsQuery, IUserSkillsResponse } from '../../../lib';
import SkillCards from './skills-card.component';
 
export interface ISkillsCardContainerProps {
  userId: number;
}
 
const SkillsCardContainer: React.FC<ISkillsCardContainerProps> = ({
  userId,
}) => {
  const { data, loading, error } = useQuery<IUserSkillsResponse>(getUserSkillsQuery, {
    variables: {
      id: userId,
    },
  });

  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>{error}</>;
  }

  console.log(data);

  return (
    <SkillCards skills={data?.getUserSkills ?? []} />
  );
};
 
export default SkillsCardContainer;