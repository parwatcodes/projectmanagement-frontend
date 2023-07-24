import React from 'react';

import './dashboard.css';
import DashboardHeader from '../DashboardHeader';
import DashboardProject from "../DashboardProject";
import Member from '../Member';
import Task from './Task';

const Dashboard = (props) => {
  const { selectedBoard, setSelectedBoard } = props;

  const renderSelectedBoard = () => {

    switch (selectedBoard) {
      case 3:
        return <Member />;
      default:
        return <>
          <DashboardProject />
          <Task />
        </>;
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
        {renderSelectedBoard()}
      </div>
    </div>
  );
};

export default Dashboard;
