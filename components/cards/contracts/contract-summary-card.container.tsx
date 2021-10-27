import { useRouter } from 'next/router';
import React from 'react';
import dayjs from 'dayjs';
import ContractSummaryCard from './contract-summary-card.component';
 
export interface IContractSummaryCardContainerProps {
 
}

const items = [{
  id: 1,
  status: 'proposal',
  description: 'Agreed to teach about: props, state and hooks',
  name: 'React Fundamentals',
  price: 10000,
  startDate: dayjs().add(2, 'day').format('MMM D, YYYY'),
  endDate: dayjs().add(30, 'day').format('MMM D, YYYY'),
  unreadNotifications: [{ id: 1 }],
},
{
  id: 2,
  status: 'proposal',
  name: 'Node Fundamentals',
  price: 10000,
  description: 'Agreed to teach about: express, controllers and async',
  startDate: dayjs().add(4, 'day').format('MMM D, YYYY'),
  endDate: dayjs().add(32, 'day').format('MMM D, YYYY'),
  unreadNotifications: [{ id: 2 }],
},
{
  id: 3,
  status: 'active',
  name: 'CSS Advanced',
  price: 10000,
  description: 'Agreed to teach about: selectors, precendence and design',
  startDate: dayjs().subtract(5, 'day').format('MMM D, YYYY'),
  endDate: dayjs().add(4, 'day').format('MMM D, YYYY'),
  unreadNotifications: [],
},
{
  id: 4,
  status: 'completed',
  name: 'HTML Fundamentals',
  price: 10000,
  description: 'Agreed to teach about: tags, divs and body',
  startDate: dayjs().subtract(30, 'day').format('MMM D, YYYY'),
  endDate: dayjs().subtract(15, 'day').format('MMM D, YYYY'),
  unreadNotifications: [],
}]

const ContractSummaryCardContainer: React.FC<IContractSummaryCardContainerProps> = () => {
  const router = useRouter();

  const contract = items.find(a => a.id === +(router.query?.id as string ?? '') ?? 0);

  return (
    <ContractSummaryCard contract={contract} clickable={false} />
  );
};
 
export default ContractSummaryCardContainer;