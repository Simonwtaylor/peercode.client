import React from 'react';
import { IContract } from '../../../lib/';
import ContractSummaryCard from './contract-summary-card.component';

export interface IContractListProps {
  contracts: IContract[];
}
 
const ContractList: React.FC<IContractListProps> = ({
  contracts,
}) => {

  const buildContractCards = () => {
    return contracts.map((contract) => (<ContractSummaryCard contract={contract} clickable={true} />));
  };

  return (
    <div className={'grid grid-cols-2 gap-6 w-full'}>
      {buildContractCards()}
    </div>
  );
};
 
export default ContractList;