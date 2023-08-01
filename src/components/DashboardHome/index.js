import React from 'react';

import './styles.css';
import * as fetch from '../../api/fetch';
import { listNameMappings } from '../constants';

const DashboardHome = (props) => {
  const [projects, setProjects] = React.useState([]);
  const [tasks, setTasks] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [taskByStatus, setTaskByStatus] = React.useState({});
  const [userGroups, setuserGroups] = React.useState({});

  React.useEffect(() => {
    try {
      fetch.get('/projects').then(resp => {
        setProjects(resp.data);
      });
    } catch (error) {

    }
  }, []);

  React.useEffect(() => {
    try {
      fetch.get('/tasks').then(resp => {
        setTasks(resp.data);

        let taskByStatus = getTotalTasksByStatus(resp.data);
        setTaskByStatus(taskByStatus);
      });
    } catch (error) {

    }
  }, []);

  React.useEffect(() => {
    try {
      fetch.get('/users').then(resp => {
        setUsers(resp.data);

        let groupByRole = groupUsersByRole(resp.data);
        setuserGroups(groupByRole);
      });
    } catch (error) {

    }
  }, []);

  const getTotalTasksByStatus = (taskData) => {
    const statusCounts = taskData.reduce((accumulator, currentTask) => {
      const status = currentTask.status;
      if (!accumulator[status]) {
        accumulator[status] = 1;
      } else {
        accumulator[status]++;
      }
      return accumulator;
    }, {});

    return statusCounts;
  };

  const groupUsersByRole = (userData) => {
    const usersByRole = userData.reduce((accumulator, currentUser) => {
      const role = currentUser.role;
      if (!accumulator[role]) {
        accumulator[role] = [];
      }
      accumulator[role].push(currentUser);
      return accumulator;
    }, {});

    return usersByRole;
  };

  console.log('gg', userGroups)

  return (
    <div style={{
      marginTop: '60px'
    }}>
      <div className='home-wrapper'>
        <div style={{
          padding: '20px'
        }}>

          <div style={{
            display: 'flex'
          }}>
            <div id="total-project">
              <div id='total'>
                {projects.length}
              </div>
              <span>Project(s)</span>
            </div>
            <div className='user-wrapper'>
            <div id="total-users">
              <div id='total-u'>
                {users.length}
              </div>
              <span>User(s)</span>
            </div>
            <div id="user-types">
              <div className='listTask'>
              Admin: &nbsp;
                <span>{userGroups.admin?.length}</span>
              </div>
              <div className='listTask'>
                Member: &nbsp;
                <span>{userGroups.member?.length}</span>
              </div>
            </div>
            </div>


          </div>
          <div style={{
            display: 'flex',
            marginTop: '20px'
          }}>
            <div id="total-task">
              <div id='total-t'>
                {tasks.length}
              </div>
              <span>Task(s)</span>
            </div>
            <div className='taskByStatus'>
              {Object.keys(taskByStatus).map(listKey => {
                return (
                  <div className='listTask'>
                    {listNameMappings[listKey]}: <span>{taskByStatus[listKey]}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
