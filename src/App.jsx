import { Users } from './components/Users/Users';
import './App.scss';
import { UserEdit } from './components/UserEdit/UserEdit';

export const App = () => {
  return (
    <div className="App">
      <Users />
      {/* <UserEdit /> */}
    </div>
  );
}
