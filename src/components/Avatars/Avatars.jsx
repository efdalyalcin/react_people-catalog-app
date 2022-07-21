import './Avatars.scss';

export const Avatars = ({ username }) => (
  <div className="cardHeadImage">
    <img 
      alt="avatar"
      className="Avatar"
      src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
    />
  </div>
);
