import { useState, useCallback, useEffect } from 'react';
import { getUsers } from '../../api/getUsers';
import './Users.scss';
import 'antd/dist/antd.min.css';
import { User } from '../User/User';

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [likedUsers, setLikedUsers] = useState([]);

  const loadUsers = useCallback(
    async () => {
      try {
        const peopleFromServer = await getUsers();

        setUsers(peopleFromServer);
        setIsLoaded(true);
      } catch {
        setUsers([]);
        // error is handled with a turnary in the render
      }
    },
    [],
  );

  useEffect(
    () => {
      loadUsers();
    },
    [loadUsers]
  );

  const handleLikeUser = (userId) => {
    if (likedUsers.includes(userId)) {
      setLikedUsers(likedUsers.filter(user => user !== userId))
    } else {
      setLikedUsers([...likedUsers, userId]);
    }
  };

  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const updateUser = (userId, newUser) => {
    setUsers(users.map(user => {
      if (user.id === userId) {
        user = {...newUser};
      }

      return user;
    }));
  };

  return (
    <div>
      {isLoaded 
        ? (users.length
            ? (<div className="ant-row">
                {users.map(user => (
                  <div 
                    className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-8 ant-col-lg-8 ant-col-xl-6"
                    key={user.id}
                  >
                    <User 
                      user={user}
                      handleLikeUser={handleLikeUser}
                      deleteUser={deleteUser}
                      updateUser={updateUser}
                    />
                  </div>
                ))}
              </div>)
            : (<h1>No User Data Found</h1>)
          )
        : <div className="spinner"></div>
      }
    </div>
  );
};
