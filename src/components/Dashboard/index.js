import React from 'react';

import './dashboard.css';
import DashboardHeader from '../DashboardHeader';

const initialCards = {
  todo: [
    { id: '1', content: 'Task 1' },
    { id: '2', content: 'Task 2' },
  ],
  inProgress: [
    { id: '3', content: 'Task 3' },
  ],
  inReview: [
    { id: '4', content: 'Task 4' },
  ],
  done: [
    { id: '5', content: 'Task 5' },
    { id: '6', content: 'Task 6' },
  ],
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
              <div>{cardKey}</div>
              <div className='task'>
                {listData.map(data => (
                  <>
                    <div>{data.content}</div>
                  </>
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
