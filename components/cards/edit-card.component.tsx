import React, { useState } from 'react';
 
interface IEditItem {
  inputType: string;
  inputPlaceholder: string;
  valueName: string;
  value?: string;
}

export interface IEditCardProps {
  header: string;
  onSave: (data: any) => void;
  items: IEditItem[];
}

const EditCard: React.FC<IEditCardProps> = ({
  header,
  onSave,
  items,
}) => {
  // const [data, setData] = useState<any>({});

  const getFields = () => {
    return items.map(({
      inputType,
      inputPlaceholder,
      valueName,
      value,
    }) => {
      // const dataCopy = data;
      // dataCopy[valueName] = value;
      // setData(dataCopy);
      return (
        <>
          <span>{valueName}</span>
          <input type={inputType} value={value} placeholder={inputPlaceholder} />
        </>
      )
    })
  };
  return (
    <div className={'flex w-1/2 my-4 rounded overflow-hidden shadow-lg text-white card-dark-lighter-background'}>
      <div className={'flex-auto p-6'}>
        <div className={'my-1'}>
          <div className={'text-xl font-bold my-2'}>
            {header}  
          </div>
          <div className={'text-base'}>
            {getFields()}
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default EditCard;
