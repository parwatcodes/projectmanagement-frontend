import React from 'react';

const DashboardHeader = () => {

  return <div style={{
    display: 'flex'
  }}>
    <div>
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
