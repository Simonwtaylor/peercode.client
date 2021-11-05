import { useRouter } from 'next/router';
import React, { useContext } from 'react'
import { Layout } from '../../../components';
import CreateContractContainer from '../../../components/cards/contracts/create-contract.container';
import { NavContext } from '../../../lib';
 
export interface IContractCreatePageProps {
 
}
 
const ContractCreatePage: React.FC<IContractCreatePageProps> = () => {
  const { userId } = useContext(NavContext);
  const router = useRouter();
  const otherUserId = +(router.query?.userId as string ?? '') ?? 0;

  return (
    <Layout>
      <div className={'w-full items-center content-center justify-items-center place-items-center m-2 p-2 grid'}>
        <CreateContractContainer otherUserId={otherUserId} userId={userId} />
      </div>
    </Layout>
  );
};
 
export default ContractCreatePage;