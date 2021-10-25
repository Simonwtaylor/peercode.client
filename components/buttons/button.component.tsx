import React, { ReactNode } from 'react';
 
export interface IButtonProps {
  colour: string;
  text: string;
  icon?: ReactNode;
  onClick: () => void;
  classes?: string;
}
 
const Button: React.FC<IButtonProps> = ({ 
  colour,
  text,
  icon,
  onClick,
  classes,
}) => {
  return (
    <button
      className={`bg-${colour}-500 hover:bg-${colour}-700 text-white font-bold py-2 px-4 rounded mr-2 ${classes}`}
      onClick={onClick}
    >
      {icon && icon}
      {text}
    </button>
  );
};
 
export default Button;