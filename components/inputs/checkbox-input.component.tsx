import React from 'react'
 
export interface ICheckboxInputProps {
  label?: string;
  value?: boolean;
  onChange: (newValue: boolean) => void;
  classes?: string;
}
 
const CheckboxInput: React.FC<ICheckboxInputProps> = ({
  onChange,
  label,
  classes,
  value,
}) => {
  return (
    <div>
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          className={`${classes} form-checkbox`}
          checked={value ?? false}
          onChange={() => {
            onChange(!value ?? true)}
          }
        />
        {label && <span className="ml-2">{label}</span>}
      </label>
    </div>
  );
};
 
export default CheckboxInput;