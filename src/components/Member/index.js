import React from 'react';

import List from './List';
import './styles.css';
import { ReactComponent as AddIcon } from '../images/icons/add.svg';

const data = [
  {
    "fullname": "John Smith",
    "email": "john.smith@example.com",
    "role": "Admin"
  },
  {
    "fullname": "Jane Doe",
    "email": "jane.doe@example.com",
    "role": "Member",
    "hourlyRate": "$25",
    "assignedTasks": ["Task 1", "Task 2", "Task 3"],
    "projects": ["Project A", "Project B"]
  },
  {
    "fullname": "Michael Johnson",
    "email": "michael.johnson@example.com",
    "role": "Member",
    "hourlyRate": "$30",
    "assignedTasks": ["Task 4", "Task 5"],
    "projects": ["Project C", "Project P"]
  }
];

const Member = () => {

  return (
    <>
      <div className='member-header'>
        <div>Members</div>
        <div className='add-mem'>
          <AddIcon height={30} width={30} />
        </div>
      </div>
      <List data={data} />
    </>
  );
};

export default Member;
