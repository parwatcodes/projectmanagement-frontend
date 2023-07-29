import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './dashboard.css';
import Task from './Task';
import Member from '../Member';
import UserForm from '../Forms/UserForm';
import DashboardHome from '../DashboardHome';
import ProjectForm from '../Forms/ProjectForm';
import DashboardHeader from '../DashboardHeader';
import DashboardProject from "../DashboardProject";
import TaskForm from '../Forms/TaskForm';

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
          <Route path="/home" element={<></>} />
          <Route path="/tasks" element={<>
            <DashboardProject selectedProject={props.selectedProject} />
            <Task />
          </>} />
          <Route path="/members" element={<Member />} />
          <Route path="/settings" element={<></>} />
          <Route path="/add-project" element={<ProjectForm />} />
          <Route path="/add-user" element={<UserForm />} />
          <Route path="/add-task" element={<TaskForm />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
