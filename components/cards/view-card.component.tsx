import React from 'react';
import { VscEdit } from 'react-icons/vsc';
 
export interface IViewCardProps {
  label: string;
  value: string;
  editable?: boolean;
  onEditClick?: () => void;
}

const ViewCard: React.FC<IViewCardProps> = ({
  label,
  value,
  editable,
  onEditClick,
}) => {
  return (
    <div className={'flex w-2/3 my-4 rounded overflow-hidden shadow-lg text-white card-dark-lighter-background'}>
      <div className={'flex-auto p-4'}>
        <div className={'my-1'}>
          <div className={'text-xl font-bold my-2'}>
            {label}

            {editable && <VscEdit className={'inline float-right cursor-pointer'} onClick={onEditClick} />}
          </div>
          <div className={'text-base'}>
            {value}
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default ViewCard;
