import { Avatars } from '../Avatars/Avatars';
import { UserInfo } from '../UserInfo/UserInfo';
import { UserActions } from '../UserActions/UserActions';
import { useState } from 'react';

export const User = ({
  user,
  handleLikeUser,
  deleteUser,
  updateUser
}) => {
  const [avatarName] = useState(user.name);

  return (
    <div 
      className="ant-card ant-card-bordered"
      style={{ margin:'15px' }}
    >
      <div className="ant-card-cover">
        <div className="User__avatar">
          <Avatars username={avatarName} />
        </div>
      </div>
      <div className="ant-card-body">
        <UserInfo 
          userName={user.name}
          userEmail={user.email}
          userPhone={user.phone}
          userWebsite={user.website}
        />
      </div>
      <>
        <UserActions 
          handleLikeUser={handleLikeUser}
          userId={user.id}
          deleteUser={deleteUser}
          updateUser={updateUser}
          user={user}
        />
      </>
    </div>
  );
};
