import React from 'react';

import './styles.css';
import SearchIcon from '../images/icons/search.svg';
import DownArrow from '../images/icons/down-arrow.svg';

const DashboardHeader = () => {

  return <div style={{
    display: 'flex',
    justifyContent: 'space-between'
  }}>
    <div className='search-bar'>
      <img id='search-icon' src={SearchIcon} alt='' />
      <input className='search-input' type='text' placeholder='Search for anything...' />
    </div>
    <div style={{
      display: 'flex',
      fontSize: '12px',
      alignItems: 'center'
    }}>
      <div className='info-wrapper'>
        <p id='name'>Parwat Kunwar</p>
        <p id='role'>Admin</p>
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
      }}>
        <div id='img-alt'>PK</div>
        <img src={DownArrow} alt='arrow' />
      </div>
    </div>
  </div>;
};

export default DashboardHeader;
