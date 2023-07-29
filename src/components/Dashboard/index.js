import React from 'react';

import './dashboard.css';
import Task from './Task';
import Member from '../Member';
import DashboardHome from '../DashboardHome';
import DashboardHeader from '../DashboardHeader';
import DashboardProject from "../DashboardProject";

const Dashboard = (props) => {
  const { selectedBoard, setSelectedBoard } = props;

  const renderSelectedBoard = () => {

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
        {renderSelectedBoard()}
      </div>
    </div>
  );
};

export default Dashboard;
