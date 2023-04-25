import user from '../constants/user.json';
import { Profile } from './Profile';
import data from '../constants/data.json';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  console.log(user);
  return (
    <div>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistics title="Upload stats" stats={data} />

    </div>
  );
};
