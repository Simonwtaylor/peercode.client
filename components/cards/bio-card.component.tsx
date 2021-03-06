import React, { useState } from 'react';
import { VscCircleSlash, VscSave } from 'react-icons/vsc';
import { ViewCard } from '.';
import { Button } from '..';
 
export interface IBioCardProps {
  bio: string;
  editable: boolean;
  onBioEditSave: (newBio: string) => void;
}
 
const BioCard: React.FC<IBioCardProps> = ({
  bio,
  editable,
  onBioEditSave,
}) => {
  const [mode, setMode] = useState<'view'|'edit'>('view');
  const [editBio, setEditBio] = useState(bio);

  if (mode === 'view') {
    return (
      <ViewCard
        label={'Bio'}
        value={bio}
        editable={editable}
        onEditClick={() => setMode('edit')}
      />
    );
  }

  if (mode === 'edit') {
    return (
      <div className={'flex w-2/3 my-4 rounded overflow-hidden shadow-lg text-white card-dark-lighter-background'}>
        <div className={'flex-auto p-4'}>
          <div className={'my-1'}>
            <div className={'text-xl font-bold my-2'}>
              Bio

              {editable && <VscCircleSlash className={'inline float-right cursor-pointer'} onClick={() => setMode('view')} />}
              {editable && <VscSave className={'inline float-right cursor-pointer mx-2'} onClick={() => {
                onBioEditSave(editBio);
                setMode('view');
              }} />}
            </div>
            <div className={'text-base'}>
              <textarea
                className={'text-black w-full min-h-full p-2 rounded'}
                value={editBio}
                onChange={({ currentTarget }) => setEditBio(currentTarget.value)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <></>
  );
};
 
export default BioCard;