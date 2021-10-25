import React, { useState } from 'react'
import { VscCircleSlash, VscSave } from 'react-icons/vsc';
import { EditCard, ViewCard } from '.';
 
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
      <ViewCard label={'Bio'} value={bio} editable={editable} onEditClick={() => setMode('edit')} />
    )
  }

  if (mode === 'edit') {
    return (
      <div className={'flex w-2/3 my-4 rounded overflow-hidden shadow-lg text-white card-dark-lighter-background'}>
        <div className={'flex-auto p-4'}>
          <div className={'my-1'}>
            <div className={'text-xl font-bold my-2'}>
              Bio

              {editable && <VscCircleSlash className={'inline float-right cursor-pointer'} onClick={() => setMode('view')} />}
            </div>
            <div className={'text-base'}>
              <textarea className={'text-black w-full min-h-full'} value={editBio} onChange={({ currentTarget }) => setEditBio(currentTarget.value)} />
            </div>
            <div>
              <button
                onClick={() => {
                  onBioEditSave(editBio);
                  setMode('view');
                }}
                className={'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2'}
              >
                <VscSave className="text-white m4-1 inline" /> Save
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      BioCard Works!
    </>
  );
};
 
export default BioCard;