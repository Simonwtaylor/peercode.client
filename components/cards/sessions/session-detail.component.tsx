import React from 'react';
import { Button } from '../..';
import { ISessionDetail } from '../../../lib';
 
export interface ISessionDetailProps {
  sessionDetail: ISessionDetail;
  onSessionStart: () => void;
  onSessionEnd: () => void;
}
 
const SessionDetail: React.FC<ISessionDetailProps> = ({
  sessionDetail,
  onSessionStart,
  onSessionEnd,
}) => {

  const getStartButton = () => {
    if (!sessionDetail.callStarted) {
      return (
        <Button
          colour={'green'}
          onClick={onSessionStart}
          text={'Start Session'}
        />
      );
    }

    if (sessionDetail.callStarted && !sessionDetail.callEnded) {
      return (
        <Button
          colour={'red'}
          onClick={onSessionEnd}
          text={'End Session'}
        />
      );
    }
  };

  const handleSessionJoin = () => {
    window.open(sessionDetail.discordInviteLink);
  };

  const getRoomInfo = () => {
    if (sessionDetail.callStarted && !sessionDetail.callEnded) {
      return (
        <span
          className={'w-full block'}
        >
          <b>Room Name:</b> 
          {(sessionDetail.discordChannelName !== ""  && sessionDetail.discordChannelName !== null) && sessionDetail.discordChannelName}
        </span>
      );
    }
  };

  const getJoinRoomButton = () => {
    if (sessionDetail.callStarted && !sessionDetail.callEnded) {
      return (
        <>
          {(sessionDetail.discordInviteLink !== ""  && sessionDetail.discordInviteLink !== null) && 
            <div className={'my-2'}>
              <Button
                colour={'blue'}
                text={'Join Session in Discord'}
                onClick={handleSessionJoin}
              />
            </div>
          }
        </>
      );
    }
  };

  return (
    <div className={'flex w-2/3 my-4 rounded overflow-hidden shadow-lg text-white card-dark-lighter-background'}>
      <div className={'flex-auto p-4'}>
        <div className={'my-1'}>
          <div className={'text-xl font-bold my-2'}>
            Session Detail
          </div>
          <div className={'text-base'}>
            {getStartButton()}
          </div>
          <div className={'text-base'}>
            {getRoomInfo()}
            {getJoinRoomButton()}
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default SessionDetail;