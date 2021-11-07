import React, { useState } from 'react';
import { SkillsCard, SkillsDropdown } from '..';
import { ISkill } from '../../lib';
import { UserListContainer } from '../user-list';
import UserSearch from './user-search.component';
 
const UserSearchContainer: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [skills, setSkills] = useState<ISkill[]>([]);
  const [refresh, setRefresh] = useState(false);

  const handleSearchTextChange = (text: string) => {
    setSearchText(text);
  };

  const handleSkillRemove = (id: number) => {
    const newSkills = skills;
    const ind = newSkills.findIndex(a => a.id === id);
    newSkills.splice(ind, 1);
    setSkills(newSkills);
    setRefresh(!refresh);
  };

  return (
    <div className={'m-10'}>
      <div className={'flex flex-row gap-2 my-2'}>
        <div className={'flex w-9/12'}>
          <UserSearch value={searchText} onTextChange={handleSearchTextChange} />
        </div>
        <div className={'flex w-3/12'}>
          <SkillsDropdown
            onSelectSkill={(skill?: ISkill) => {
              if (skill && !skills.find(a => a.id === skill?.id)) {
                const newSkills = skills;
                newSkills.push(skill);
                setSkills(newSkills);
                setRefresh(!refresh);
              }
            }}
          />
        </div>
      </div>
      <SkillsCard skills={skills} removable={true} onSkillRemove={handleSkillRemove} />
      <UserListContainer name={searchText} skills={skills} />
    </div>
  );
};

export default UserSearchContainer;