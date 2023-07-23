import React from "react";

import './styles.css';
import EditIcon from '../images/icons/edit.svg';
import LinkIcon from '../images/icons/link.svg';
import AddIcon from '../images/icons/add.svg';

const DashboardProject = () => {

  return (
    <div className="project-label">
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '20px 0'
      }}>
        <div className="title" style={{
          display: 'flex'
        }}>
          <div>Mobile App</div>
          <div style={{
            display: 'flex',
            marginLeft: '5px'
          }}>
            <img src={EditIcon} alt="" />
          </div>
        </div>

        <div style={{
          display: 'flex'
        }}>
          <div className="invite-member">
            <img src={AddIcon} alt="" />
            <p>Invite</p>
          </div>
          <div className="members">
            <img src={'https://i.pravatar.cc/500?img=1'} alt="" />
            <img src={'https://i.pravatar.cc/500?img=2'} alt="" />
            <img src={'https://i.pravatar.cc/500?img=3'} alt="" />
            <img src={'https://i.pravatar.cc/500?img=4'} alt="" />
          </div>
        </div>
      </div>

      <div>
        <div className="select-wrapper">
          <select id="filter-select">
            <option disabled value="option1">Filter</option>
            <option value="option1">To Do</option>
            <option value="option2">In Review</option>
            <option value="option3">In Progress</option>
            <option value="option3">Done</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DashboardProject;
