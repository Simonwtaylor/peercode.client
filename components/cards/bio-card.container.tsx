import { useMutation, useQuery } from '@apollo/client';
import React from 'react'
import { getUserBioQuery, IUserBioResponse, updateUserBioMutation } from '../../lib';
import BioCard from './bio-card.component';
 
export interface IBioCardContainerProps {
  id: number;
  editable: boolean;
}
 
const BioCardContainer: React.FC<IBioCardContainerProps> = ({
  id,
  editable,
}) => {
  const { data, loading, error } = useQuery<IUserBioResponse>(getUserBioQuery, {
    variables: {
      id,
    },
  });

  const [updateUserBio] = useMutation(updateUserBioMutation);

  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>{error}</>;
  }

  const handleUpdateUserBio = (newBio: string) => {
    updateUserBio({
      variables: {
        user: {
          id,
          bio: newBio,
        },
      },
      refetchQueries: [getUserBioQuery],
    });
  };

  console.log(data);
  
  return (
    <BioCard onBioEditSave={handleUpdateUserBio} bio={data?.user?.bio ?? ''} editable={editable} />
  );
};
 
export default BioCardContainer;