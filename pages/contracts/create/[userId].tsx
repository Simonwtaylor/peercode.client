import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { Layout, CreateContractContainer } from '../../../components';
import { NavContext } from '../../../lib';
 
const ContractCreatePage: React.FC = () => {
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