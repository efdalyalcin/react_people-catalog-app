import { useState } from 'react';
import './UserActions.scss';

export const UserActions = ({ 
  handleLikeUser,
  userId,
  deleteUser
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDeleteHovering, setIsDeleteHovering] = useState(false);
  const [isEditHovering, setIsEditHovering] = useState(false);

  const handleDeleteMouseEnter = () => {
    setIsDeleteHovering(true);
  };

  const handleDeleteMouseLeave = () => {
    setIsDeleteHovering(false);
  };

  const handleEditMouseEnter = () => {
    setIsEditHovering(true);
  };

  const handleEditMouseLeave = () => {
    setIsEditHovering(false);
  };

  return (
    <ul 
      className="ant-card-actions"
      style={{ backgroundColor: '#fafafa'}}
    >
      <li className="UserActions__item">
        {isLiked
          ? (
            <i 
              aria-label="icon: heart"
              className="anticon anticon-heart"
              style={{color: "rgb(255, 0, 0)", fontSize: "20px"}}
            >
              <button
                type="button"
                className="UserActions__button"
                onClick={() => {
                  handleLikeUser(userId);
                  setIsLiked(!isLiked);
                }}
              >
                <svg 
                  viewBox="64 64 896 896"
                  data-icon="heart"
                  width="1em"
                  height="1em" 
                  fill="currentColor" 
                  aria-hidden="true"
                >
                  <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z">
                  </path>
                </svg>
              </button>
            </i>
          )
          : (<i 
            aria-label="icon: heart"
            className="anticon anticon-heart"
            style={{color: "#f00", fontSize: "20px"}}
          >
            <button
              type="button"
              className="UserActions__button"
              onClick={() => {
                handleLikeUser(userId);
                setIsLiked(!isLiked);
              }}
            >
              <svg 
                viewBox="64 64 896 896"
                data-icon="heart"
                width="1em"
                height="1em" 
                fill="currentColor" 
                aria-hidden="true"
              >
                <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
              </svg>
            </button>
          </i>)
        }
      </li>
      <li className="UserActions__item">
        <button
          type="button"
          className="UserActions__button"
          onMouseEnter={handleEditMouseEnter}
          onMouseLeave={handleEditMouseLeave}
        >
          <i 
            aria-label="icon: edit"
            className="anticon anticon-edit"
            style={{ color: isEditHovering ? "#1890ff" : "",
              transition: "color 0.5s ease"
            }}
          >
            <svg 
              viewBox="64 64 896 896"
              data-icon="edit"
              width="18px"
              height="18px"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
            </svg>
          </i>
        </button>
      </li>
      <li className="UserActions__item">
        <button 
          type="button"
          className="UserActions__button"
          onClick={() => deleteUser(userId)}
          onMouseEnter={handleDeleteMouseEnter}
          onMouseLeave={handleDeleteMouseLeave}
        >
          <i 
            aria-label="icon: delete"
            className="anticon anticon-delete"
            style={{ color: isDeleteHovering ? "#1890ff" : "",
              transition: "color 0.5s ease"
            }}
          >
            <svg 
              viewBox="64 64 896 896"
              data-icon="delete"
              width="18px"
              height="18px"
              fill="currentColor" 
              aria-hidden="true"
            >
              <path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"></path>
            </svg>
          </i>
        </button>
      </li>
    </ul>
  );
};
