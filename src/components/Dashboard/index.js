import React from 'react';

import './dashboard.css';
import DashboardHeader from '../DashboardHeader';

const initialCards = {
  todo: [
    { id: '1', title: 'Brainstorming', description: "Brainstorming brings team members' diverse experience into play." },
    { id: '2', title: 'Task 2', description: "Brainstorming brings team members' diverse experience into play." },
  ],
  inProgress: [
    { id: '3', title: 'Task 3', description: "Brainstorming brings team members' diverse experience into play." },
  ],
  inReview: [
    { id: '4', title: 'Task 4', description: "Brainstorming brings team members' diverse experience into play." },
  ],
  done: [
    { id: '5', title: 'Task 5', description: "Brainstorming brings team members' diverse experience into play." },
    { id: '6', title: 'Task 6', description: "Brainstorming brings team members' diverse experience into play." },
  ],
};

const listNameMappings = {
  todo: 'To Do',
  inProgress: 'In Progress',
  inReview: 'In Review',
  done: 'Done'
};

const Dashboard = () => {
  const [cards, setCards] = React.useState(initialCards);

  return (
    <div style={{
      flex: 1
    }}>
      <DashboardHeader />
      <div className="dashboard">
        {Object.keys(cards).map(cardKey => {
          let listData = cards[cardKey];

          return (
            <div className='list' key={cardKey}>
              <div className='listName'>
                <div class="dot"></div>
                <div>{listNameMappings[cardKey]}</div>
                <div>+</div>
              </div>
              <div className='taskWrapper'>
                {listData.map(data => (
                  <div className='task'>
                    <span className='status'>Low</span>
                    <div className='task-title'>{data.title}</div>
                    <div className='task-description'>{data.description}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
