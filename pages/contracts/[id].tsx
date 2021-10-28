import React from 'react';
import { VscAdd, VscCloudUpload } from 'react-icons/vsc';
import { ContractSummaryCardContainer, Layout } from '../../components/';

export interface IContractPageProps {

}

const ContractPage: React.FC<IContractPageProps> = () => {
  return (
    <Layout>
      <div className={'w-full items-center content-center justify-items-center place-items-center m-2 p-2 grid'}>
        <div className={'w-2/3'}>
          <ContractSummaryCardContainer />
        </div>
        <div className={'flex w-2/3 my-4 rounded overflow-hidden shadow-lg text-white card-dark-lighter-background'}>
          <div className={'flex-auto p-4'}>
            <div className={'my-1'}>
              <div className={'text-xl font-bold my-2'}>
                Sessions

                <VscAdd className={'inline float-right cursor-pointer'} onClick={() => console.log('add')} />
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
      </div>
    </Layout>
  );
};
 
export default ContractPage;
