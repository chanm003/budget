import React from 'react';
import './Home.scss';
import { useStore } from '../../context';
import Can from '../../security/Can';

const Home = () => {
  const { auth: { user } } = useStore();

  return (
    <div className='home'>
      <Can
        role={user.role}
        perform="dashboard-page:visit"
        yes={() => (
          <div>
            You have permissions
          </div>
        )}
        no={() => (
          <div>You do not have permissions</div>
        )}
      />
    </div>
  );
}

export default Home;