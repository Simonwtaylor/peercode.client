import React from 'react';
import { useQuery } from '@apollo/client';
import { CustomDropdown } from '.';
import { getRemainingSkillsForUserQuery, IGetRemainingSkillsForUserResponse } from '../../lib';
 
export interface ISkillsDropdownProps {
  userId: number;
  selectedItem?: number;
  onSelectSkill: (id: number) => void;
  disabled?: boolean;
}
 
const SkillsDropdown: React.FC<ISkillsDropdownProps> = ({
  userId,
  onSelectSkill,
  selectedItem,
  disabled,
}) => {
  const { data, loading, error } = useQuery<IGetRemainingSkillsForUserResponse>(
    getRemainingSkillsForUserQuery,
    {
      variables: {
        id: userId,
      },
    },
  );

  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>{error}</>;
  }

  return (
    <CustomDropdown
      data={
        data?.getRemainingSkillsForUser?.map(
          ({ id, name }) => ({ id, text: name, key: `skillsddl${id}` }),
        ) ?? []
      }
      value={selectedItem}
      onSelect={onSelectSkill}
      disabled={disabled}
    />
  );
};
 
export default SkillsDropdown;