import React from 'react';

const List = (props) => {
  const { data } = props;

  return (
    <div>
      <div className='t-header'>
        <div id='h-col'>Fullname</div>
        <div id='h-col'>Email</div>
        <div id='h-col'>Role</div>
        <div id='h-col'>Hourly Rate</div>
      </div>
      <div className='t-data'>
        {data.map(user => (
          <div id='r-data'>
            <div id='data'>
              <img src='https://i.pravatar.cc/500?img=12' alt='' />
              <div>{user.fullname}</div>
            </div>
            <div id='data'>{user.email}</div>
            <div id='data'>
              <div>
              </div>
              <span className='role'>{user.role}</span>
            </div>
            <div id='data'>{user.hourlyRate}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;