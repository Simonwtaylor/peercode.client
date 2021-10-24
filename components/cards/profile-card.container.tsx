import { useMutation, useQuery } from '@apollo/client';
import React from 'react';
import { getUserQuery, IUserResponse, updateUserMutation } from '../../lib';
import ProfileCard, { IUserProfileProps } from './profile-card.component';
 
export interface IProfileCardContainerProps {
  id: number;
  editable: boolean;
}

const ProfileCardContainer: React.FC<IProfileCardContainerProps> = ({
  editable,
  id,
}) => {
  const { data, loading, error } = useQuery<IUserResponse>(getUserQuery, {
    variables: {
      id,
    },
  });

  const [updateUser] = useMutation(updateUserMutation);

  const handleProfileSave = (newProfile: IUserProfileProps) => {
    updateUser({
      variables: {
        user: {
          ...data?.user,
          ...newProfile,
        },
      },
      refetchQueries: [getUserQuery],
    });
  };


  if (loading) {
    return <>Loading...</>;
  }

  if (error || !data) {
    return <>{error}</>;
  }

  return (
    <ProfileCard data={data?.user} editable={editable} onProfileEditSave={handleProfileSave}  />
  );
};

export default ProfileCardContainer;
