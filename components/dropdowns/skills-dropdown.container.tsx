import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { CustomDropdown } from '.';
import { getSkillsQuery, IGetSkillsResponse, ISkill } from '../../lib';
 
export interface ISkillsDropdownProps {
  selectedItem?: number;
  onSelectSkill: (skill?: ISkill) => void;
  disabled?: boolean;
  resetOnSelect?: boolean;
}
 
const SkillsDropdown: React.FC<ISkillsDropdownProps> = ({
  onSelectSkill,
  selectedItem,
  disabled,
  resetOnSelect,
}) => {
  const [reset, setReset] = useState(false);
  useEffect(() => { }, [reset])
  const { data, loading, error } = useQuery<IGetSkillsResponse>(getSkillsQuery);

  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>{error}</>;
  }

  return (
    <CustomDropdown
      data={
        data?.skills?.map(
          ({ id, name }) => ({ id, text: name, key: `skillsddl${id}` }),
        ) ?? []
      }
      value={selectedItem}
      onSelect={(id) => {
        onSelectSkill(data?.skills.find(a => a.id === id));
        setReset(!reset);
      }}
      disabled={disabled}
      defaultMessage={'Select Skills'}
      resetOnSelect={resetOnSelect}
    />
  );
};
 
export default SkillsDropdown;