import { useRouter } from 'next/router';
import React from 'react';
import { VscCloudUpload } from 'react-icons/vsc';
import client from '../../apollo-client';
import { ContractSessionList, ContractSummaryCardContainer, Layout, ContractHistoryContainer } from '../../components/';
import { getContractUsersQuery, IUserContract } from '../../lib';

interface IContractPageProps {
  users?: IUserContract[];
}

const ContractPage: React.FC<IContractPageProps> = ({
  users,
}) => {
  const router = useRouter();
  const id = +(router.query?.id as string ?? '') ?? 0;

  return (
    <Layout>
      <div className={'w-full items-center content-center justify-items-center place-items-center m-2 p-2 grid'}>
        <div className={'w-2/3'}>
          <ContractSummaryCardContainer contractId={id} />
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
        <div className={'flex w-2/3 my-4 rounded overflow-hidden shadow-lg text-white card-dark-lighter-background'}>
          <div className={'flex-auto p-4'}>
            <div className={'my-1'}>
              <div className={'text-xl font-bold my-2'}>
                Files & Attachments

                <VscCloudUpload className={'inline float-right cursor-pointer'} onClick={() => console.log('add')} />
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
  });

  return {
    props: {
      users: data?.contractUsers,
    },
  };
}