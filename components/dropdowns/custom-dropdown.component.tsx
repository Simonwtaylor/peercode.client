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
}
 
const CustomDropdown: React.FC<ICustomDropdownProps> = ({
  data,
  value,
  onSelect,
  disabled,
}) => {

  const buildOptions = (): ReactNode[] => {
    return data.map(({ key, id, text }) => <option key={key} value={id}>{text}</option>)
  };

  return (
    <select
      value={value}
      onChange={({ currentTarget }) => onSelect(+currentTarget.value)}
      onSelect={({ currentTarget }) => {
        console.log(`HIT FIRST LAYER ${currentTarget}`)
        onSelect(+currentTarget.value)}
      }
      className={'text-black'}
      placeholder={'---Please select---'}
      disabled={disabled}
    >
      <option unselectable={"on"}>Please Select an option</option>
      {buildOptions()}
    </select>
  );
};
 
export default CustomDropdown;