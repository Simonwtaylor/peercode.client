import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export interface IDatePickerInputProps {
  date?: Date;
  startDate?: Date;
  label?: string;
  onDatePickerChange: (newDate: Date) => void;
}
 
const DatePickerInput: React.FC<IDatePickerInputProps> = ({
  date,
  startDate,
  label,
  onDatePickerChange,
}) => {
  const [currentDate, setCurrentDate] = useState<Date|undefined>(date ?? new Date());
  return (
    <div>
      {label && <span className={'w-full block'}>{label}</span>}
      <DatePicker
        className={'text-black w-full p-1 rounded'}
        dateFormat={'MMMM d, yyyy h:mm aa'}
        selected={currentDate}
        startDate={startDate}
        onChange={(d) => {
          setCurrentDate(d as Date ?? undefined);
          onDatePickerChange(d as Date);
        }}
        showTimeInput={true}
        showTimeSelect={true}
      />
    </div>
  );
};
 
export default DatePickerInput;