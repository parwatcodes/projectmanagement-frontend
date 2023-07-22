import React from 'react';

import SearchIcon from '../images/icons/search.svg'

const DashboardHeader = () => {

  return <div style={{
    display: 'flex'
  }}>
    <div>
      <img src={SearchIcon} alt='' />
      <input type='text' placeholder='Search for anything...' />
    </div>
    <div style={{
      display: 'flex',
      fontSize: '12px'
    }}>
      <div>
        <p>Parwat Kunwar</p>
        <p>Admin</p>
      </div>
      <div>PK</div>
    </div>
  </div>;
};

export default DashboardHeader;
