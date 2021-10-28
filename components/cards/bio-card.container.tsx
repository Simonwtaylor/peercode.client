import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { getUserBioQuery, IUserBioResponse, updateUserBioMutation } from '../../lib';
import BioCard from './bio-card.component';
 
export interface IBioCardContainerProps {
  userId: number;
  editable: boolean;
}
 
const BioCardContainer: React.FC<IBioCardContainerProps> = ({
  userId,
  editable,
}) => {
  const { data, loading, error } = useQuery<IUserBioResponse>(getUserBioQuery, {
    variables: {
      id: userId,
    },
  });

  const [updateUserBio] = useMutation(updateUserBioMutation);

  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>{error}</>;
  }

  const handleUpdateUserBio = (bio: string) => {
    updateUserBio({
      variables: {
        user: {
          id: userId,
          bio,
        },
      },
      refetchQueries: [getUserBioQuery],
    });
  };
  
  return (
    <BioCard onBioEditSave={handleUpdateUserBio} bio={data?.user?.bio ?? ''} editable={editable} />
  );
};

export default BioCardContainer;