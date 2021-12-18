import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { VscCloudUpload } from 'react-icons/vsc';
import client from '../../apollo-client';
import { ContractSessionList, ContractSummaryCardContainer, Layout, ContractHistoryContainer } from '../../components/';
import { getContractUsersQuery, IUserContract, UserContext } from '../../lib';

interface IContractPageProps {
  users?: IUserContract[];
}

const ContractPage: React.FC<IContractPageProps> = ({
  users,
}) => {
  const { user } = useContext(UserContext);
  const router = useRouter();
  const id = +(router.query?.id as string ?? '') ?? 0;
  const currentUser = users?.find(a => a.userId === user.id);

  return (
    <Layout>
      <div className={'w-full items-center content-center justify-items-center place-items-center m-2 p-2 grid'}>
        <div className={'w-2/3'}>
          <ContractSummaryCardContainer contractId={id} currentUser={currentUser} />
        </div>
        <ContractSessionList contractId={id} clickable={true} users={users ?? []} />
        <div className={'flex w-2/3 my-4 rounded overflow-hidden shadow-lg text-white card-dark-lighter-background'}>
          <div className={'flex-auto p-4'}>
            <div className={'my-1'}>
              <div className={'text-xl font-bold my-2'}>
                Comments

              </div>
              <div className={'text-base'}>
              </div>
            </div>
          </div>
        </div>
        <ContractHistoryContainer contractId={id} />
      </div>
    </Layout>
  );
};

export default ContractPage;

export async function getServerSideProps(context: any) {
  const { data } = await client.query({
    query: getContractUsersQuery,
    variables: {
      contractId: +context?.params?.id ?? 1,
    },
    fetchPolicy: 'network-only',
  });

  return {
    props: {
      users: data?.contractUsers,
    },
  };
}