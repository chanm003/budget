import React from 'react';
import './Home.scss';
import { useAuth } from '../../context/auth';
import Can from '../../security/Can';

const Home = () => {
  const { user } = useAuth();

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