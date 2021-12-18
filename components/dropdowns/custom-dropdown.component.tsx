import React, { ReactNode, useEffect, useState } from 'react';
 
interface IDropdownData {
  id: number;
  key: string;
  text: string;
}

export interface ICustomDropdownProps {
  data: IDropdownData[];
  value?: number;
  onSelect: (id: number) => void;
  disabled?: boolean;
  defaultMessage?: string;
  resetOnSelect?: boolean;
}
 
const CustomDropdown: React.FC<ICustomDropdownProps> = ({
  data,
  value,
  onSelect,
  disabled,
  defaultMessage,
  resetOnSelect
}) => {
  const [currentValue, setCurrentValue] = useState(value);
  const [reset, setReset] = useState(false);
  
  useEffect(() => {}, [reset]);

  const buildOptions = (): ReactNode[] => {
    return data.map(({ key, id, text }) => <option key={key} value={id}>{text}</option>);
  };

  return (
    <select
      value={currentValue}
      onChange={({ currentTarget }) => {
        onSelect(+currentTarget.value);
        resetOnSelect && setReset(!reset);
      }}
      onSelect={({ currentTarget }) => {
        onSelect(+currentTarget.value);
        resetOnSelect && setReset(!reset);
      }}
      className={'text-black rounded w-full'}
      placeholder={'---Please select---'}
      disabled={disabled}
      
    >
      <option unselectable={'on'}>{defaultMessage ?? 'Please Select an option'}</option>
      {buildOptions()}
    </select>
  );
};
 
export default CustomDropdown;