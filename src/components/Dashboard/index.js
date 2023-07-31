import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

import './dashboard.css';
import Task from './Task';
import Member from '../Member';
import Settings from '../Settings';
import TaskForm from '../Forms/TaskForm';
import UserForm from '../Forms/UserForm';
import DashboardHome from '../DashboardHome';
import AddIcon from '../images/icons/add.svg';
import ProjectForm from '../Forms/ProjectForm';
import DashboardHeader from '../DashboardHeader';
import DashboardProject from "../DashboardProject";

const Dashboard = (props) => {

  return (
    <div style={{
      flex: 1,
      padding: '20px 40px'
    }}>
      <DashboardHeader />
      <div className='line-abs'></div>
      <div className='selectedBoard'>
        <Routes>
          <Route path="/home" element={<DashboardHome />} />
          <Route path="/tasks" element={<>
            <div style={{
              display: 'flex',
              alignItems: 'baseline'
            }}>
              <div className='head-title-display'>Tasks</div>
              <Link to='add-task' style={{
                marginLeft: '5px'
              }}>
                <img className='add-project-btn' src={AddIcon} alt="" />
              </Link>
            </div>
            <Task />
          </>} />
          <Route path="/users" element={<Member />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/add-project" element={<ProjectForm />} />
          <Route path="/users/add-user" element={<UserForm />} />
          <Route path="/tasks/add-task" element={<TaskForm />} />
          <Route path="/tasks/:taskId" element={<TaskForm />} />
          <Route path="/projects/:projectId/add-task" element={<TaskForm />} />
          <Route path="/users/:userid" element={<UserForm />} />
          <Route path="/projects/:projectId" element={<>
            <DashboardProject />
            <Task />
          </>} />
          <Route path="/projects/:projectId/edit" element={<ProjectForm />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
