import React from 'react';
import './Home.scss';
import { useAuth } from '../core/authentication/authContext';
import Can from '../core/security/Can';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className='home'>
      <Can
        role={user.role}
        perform="directorates:list"
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