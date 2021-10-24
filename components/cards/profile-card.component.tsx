import React, { useState } from 'react';
import { VscGithubAlt, VscTwitter, VscGlobe, VscVerified, VscBook, VscEdit, VscSave, VscCircleSlash } from 'react-icons/vsc';
import { CheckboxInput, TextInput } from '../inputs';

export interface IUserProfileProps {
  username: string;
  email: string;
  role: string;
  website?: string;
  twitter?: string;
  github?: string;
  mentor: boolean;
}

export interface IProfileCardProps {
  data: IUserProfileProps;
  editable: boolean;
  onProfileEditSave: (data: IUserProfileProps) => void;
}
 
const ProfileCard: React.FC<IProfileCardProps> = ({
  data,
  editable,
  onProfileEditSave
}) => {
  const [mode, setMode] = useState<'view'|'edit'>('view');
  const { username, email, role, mentor, twitter, github, website } = data;

  const [editUsername, setEditUsername] = useState(username);
  const [editEmail, setEditEmail] = useState(email);
  const [editRole, setEditRole] = useState(role);
  const [editMentor, setEditMentor] = useState(mentor);
  const [editTwitter, setEditTwitter] = useState(twitter);
  const [editGithub, setEditGithub] = useState(github);
  const [editWebsite, setEditWebsite] = useState(website);

  const getMentor = () => {
    if (mentor) {
      return <><VscVerified className={'text-white text-lg mr-2 mt-1'} /> Mentor</>;
    }

    return <><VscBook className={'text-white text-lg mr-2 mt-1'} /> Learner</>;
  };

  const getEditButton = () => {
    if (mode === 'edit') {
      return (
        <>
          <button
            onClick={() => {
              onProfileEditSave({ 
                username: editUsername,
                email: editEmail,
                role: editRole,
                mentor: editMentor,
                twitter: editTwitter,
                github: editGithub,
                website: editWebsite,
              });

              setMode('view');
            }}
            className={'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2'}
          >
            <VscSave className="text-white m4-1 inline" /> Save
          </button>
          <button onClick={() => setMode('view')} className={'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2'}>
            <VscCircleSlash className="text-white m4-1 inline" /> Cancel
          </button>
        </>
      );
    }

    if (mode === 'view') {
      return (
        <button onClick={() => setMode('edit')} className={'bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-2'}>
          <VscEdit className="text-white m4-1 inline" /> Edit
        </button>
      );
    }
  };

  if (mode === 'view') {
    return (
      <div className={'flex flex-col w-1/2 my-4 rounded overflow-hidden shadow-lg text-white card-dark-lighter-background'}>
        <div className={'flex'}>
          <div className="flex-none w-48 relative">
            <img
              src={'https://lh3.googleusercontent.com/ogw/ADea4I6VLmj2JDCRaAILO3eM5-cHw-4PbQZkJMCwTj6a=s64-c-mo'}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className={'flex-auto p-4'}>
            <div className={'my-1'}>
              <div className={'text-3xl'}>
                {username}
              </div>
              <div className={'text-lg'}>
                {email}
              </div>
              <div className={'text-lg'}>
                {role}
              </div>
              {editable && <div className={'my-4'}>
                {getEditButton()}
              </div>}
            </div>
          </div>
        </div>
        <div className={'bg-blue-500 w-full flex p-2 flex-row text-xl'}>
          <div className={'flex w-1/2'}>
            {getMentor()}
          </div>
          <div className={'flex w-1/2 mt-1 flex-row-reverse'}>
            {twitter && <VscTwitter onClick={() => window.location.href = twitter } className="text-white mx-1 cursor-pointer" />}
            {website && <VscGlobe onClick={() => window.location.href = website} className="text-white mx-1 cursor-pointer" />}
            {github && <VscGithubAlt onClick={() => window.location.href = github} className="text-white mx-1 cursor-pointer" />}
          </div>
        </div>
      </div>
    );
  }

  if (mode === 'edit') {
    return (
      <div className={'flex flex-col w-1/2 my-4 rounded overflow-hidden shadow-lg text-white card-dark-lighter-background'}>
        <div className={'grid grid-cols-2 p-4'}>
          <div className={''}>
            <TextInput onChange={setEditUsername} value={editUsername} label={'Username'} />
          </div>
          <div className={''}>
            <TextInput onChange={setEditEmail} value={editEmail} label={'Email'} />
          </div>
          <div className={''}>
            <TextInput onChange={setEditRole} value={editRole} label={'Role'} />
          </div>
          <div className={''}>
            <TextInput onChange={setEditWebsite} value={editWebsite} label={'Website'} />
          </div>
          <div className={''}>
            <TextInput onChange={setEditGithub} value={editGithub} label={'Github'} />
          </div>
          <div className={''}>
            <TextInput onChange={setEditTwitter} value={editTwitter} label={'Twitter'} />
          </div>
          <div className={''}>
            <CheckboxInput onChange={setEditMentor} value={editMentor} label={'Mentor'} />
          </div>
          {editable && <div className={'my-4'}>
            {getEditButton()}
          </div>}
        </div>
        <div className={'bg-blue-500 w-full flex p-2 flex-row text-xl'}>
          <div className={'flex w-full'}>
            <VscEdit className={'m-1'} />
            Currently editing 
          </div>
        </div>
      </div>
    );
  }
  return (
    <></>
  );
};
 
export default ProfileCard;