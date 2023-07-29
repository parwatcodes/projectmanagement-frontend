import React from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.css';
import List from './List';
import * as fetch from '../../api/fetch';
import { ReactComponent as AddIcon } from '../images/icons/add.svg';

const Member = () => {
  const navigate = useNavigate();
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    try {
      fetch.get('/users')
        .then(resp => setUsers(resp.data))
        .catch(err => { throw err; });
    } catch (error) {
      console.log('console. error', error);
    }
  }, []);

  return (
    <>
      <div className='member-header'>
        <div>Members</div>
        <div className='add-mem' onClick={() => {
          navigate('/add-user')
        }}>
          <AddIcon height={30} width={30} />
        </div>
      </div>
      <List data={users} />
    </>
  );
};

export default Member;
