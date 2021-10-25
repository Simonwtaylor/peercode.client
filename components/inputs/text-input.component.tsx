import React from 'react'
 
export interface ITextInputProps {
  label?: string;
  value?: string;
  onChange: (newValue: string) => void;
  classes?: string;
  type?: string;
}
 
const TextInput: React.FC<ITextInputProps> = ({
  onChange,
  label,
  value,
  classes,
  type,
}) => {
  return (
    <div>
      {label && <span className={'w-full block'}>{label}</span>}
      <input
        onChange={({ currentTarget }) => onChange(currentTarget.value)}
        value={value}
        className={`${classes} text-black shadow-sm border-gray-300 rounded-lg my-1 p-1 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 w-10/12`}
        type={type}
      />
    </div>
  );
};
 
export default TextInput;