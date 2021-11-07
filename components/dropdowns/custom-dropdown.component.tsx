import React, { ReactNode } from 'react';
 
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
}
 
const CustomDropdown: React.FC<ICustomDropdownProps> = ({
  data,
  value,
  onSelect,
  disabled,
  defaultMessage,
}) => {

  const buildOptions = (): ReactNode[] => {
    return data.map(({ key, id, text }) => <option key={key} value={id}>{text}</option>);
  };

  return (
    <select
      value={value}
      onChange={({ currentTarget }) => onSelect(+currentTarget.value)}
      onSelect={({ currentTarget }) => onSelect(+currentTarget.value)}
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