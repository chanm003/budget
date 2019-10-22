import React, { useContext } from 'react';
import './Home.scss';
import { GlobalContext } from '../../context';
import Can from '../../security/Can';

const Home = () => {
  const { user } = useContext(GlobalContext);

  if (user.distinguishedName === 'CN=CHAN.MICHAEL.1175801169,OU=CONTRACTOR,OU=PKI,OU=DoD,O=U.S. Government,C=US') {
    user.role = 'admin';
    //user.role = 'visitor';
  }

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