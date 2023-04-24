import stats from '../../constants/data.json';
import { Statistics } from '../Statistics/Statistics';

export const App = () => {
  console.log(stats);
  return (
    <div>
      <Statistics
  title ={stats.username}
  stats ={stats.stats}
/>
    </div>
  );
};
