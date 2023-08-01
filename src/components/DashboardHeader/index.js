import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

import './styles.css';
import SearchIcon from '../images/icons/search.svg';
import DownArrow from '../images/icons/down-arrow.svg';
import * as fetch from '../../api/fetch';

const DashboardHeader = () => {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = React.useState({});

  React.useEffect(() => {
    const id = localStorage.getItem('id');

    fetch.get(`/users/${id}`).then(resp => {
      setLoggedInUser(resp.data);
    }).catch(err => {
      console.error('Error in dashboard header: ', err);
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('id');

    navigate('/login');
  };

  //Todo: get the position of pp and accordingly show the modal
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
        <p id='name'>{loggedInUser.fullname}</p>
        <p id='role'>{loggedInUser.role}</p>
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
      }}>
        <div style={{
          display: 'flex',
          position: 'relative'
        }}>
          <img id='img-alt' src='https://i.pravatar.cc/500?img=12' alt='pp' />
          <a id="clickable">
            <img src={DownArrow} alt='arrow' />
          </a>
          <span className="logged logged-in"></span>
          <Tooltip anchorSelect="#clickable" className='tool-tip' style={{ backgroundColor: "#fff", color: "black", boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', padding: '10px 30px', fontSize: '16px', fontWeight: 500 }} clickable>
            <div onClick={handleLogout}>Logout</div>
          </Tooltip>
        </div>
      </div>
    </div>
  </div>;
};

export default DashboardHeader;
