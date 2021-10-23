import React, { useEffect } from 'react'
import { EditCard, ViewCard } from './index';
import { IEditCardProps, } from './edit-card.component';
import { IViewCardProps } from './view-card.component';
 
export interface ICardContainerProps extends IEditCardProps, IViewCardProps {
  mode: 'view'|'edit';
  originalData?: any;
}
 
const CardContainer: React.FC<ICardContainerProps> = ({
  mode,
  originalData,
  header,
  items,
  label,
  onSave,
  value,
}) => {

  useEffect(() => {

  }, [mode])

  if (mode === 'edit') {
    return <EditCard header={header} items={items} onSave={onSave} />
  }

  return (
    <ViewCard label={label} value={value} />
  );
};
 
export default CardContainer;