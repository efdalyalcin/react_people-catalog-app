import './Avatars.scss';

export const Avatars = ({ username }) => (
  <img 
    alt="avatar"
    className="Avatar__image"
    src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
  />
);
