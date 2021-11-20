import React from 'react';

export interface ITextInputProps {
  label?: string;
  value?: string;
  onChange: (newValue: string) => void;
  classes?: string;
  type?: string;
  placeholder?: string;
  onEnterSubmit: () => void;
}

const TextInput: React.FC<ITextInputProps> = ({
  onChange,
  label,
  value,
  classes,
  type,
  placeholder,
  onEnterSubmit,
}) => {
  const onKeyPressHandler = (e: any) => {
    console.log(e);
    if (e.key === "Enter" && !e.shiftKey) {
      onEnterSubmit();
    }
  };

  return (
    <div>
      {label && <span className={'w-full block'}>{label}</span>}
      <input
        onChange={({ currentTarget }) => onChange(currentTarget.value)}
        value={value}
        className={`${classes} text-black shadow-sm border-gray-300 rounded p-1 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 w-full`}
        type={type}
        placeholder={placeholder}
        onKeyPress={onKeyPressHandler}
      />
    </div>
  );
};
 
export default TextInput;