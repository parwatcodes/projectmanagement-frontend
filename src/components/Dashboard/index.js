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

const Dashboard = (props) => {
  const { selectedBoard, setSelectedBoard } = props;

  const RenderSelectedBoard = () => {

    switch (selectedBoard) {
      case 1:
        return <DashboardHome />;
      case 2:
        return <>
          <DashboardProject />
          <Task />
        </>;
      case 3:
        return <Member />;
      case 4:
        return <>

        </>;
      default:
    }
  };

  return (
    <div style={{
      flex: 1,
      padding: '20px 40px'
    }}>
      <DashboardHeader />
      <div className='line-abs'></div>
      <div className='selectedBoard'>
        <Routes>
          <Route path="/home" element={<ProjectForm />} />
          <Route path="/tasks" element={<>
            <DashboardProject />
            <Task />
          </>} />
          <Route path="/members" element={<Member />} />
          <Route path="/settings" element={<ProjectForm />} />
          <Route path="/add-project" element={<ProjectForm />} />
        </Routes>
        {/* <RenderSelectedBoard /> */}
      </div>
    </div>
  );
};

export default Dashboard;
