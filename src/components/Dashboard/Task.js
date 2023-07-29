import React from "react";

import * as fetch from '../../api/fetch';

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

const Task = () => {
  const [tasks, setTasks] = React.useState(initialCards);

  React.useEffect(() => {
    try {
      fetch.get('/tasks')
        .then(resp => setTasks(resp.data))
        .catch(err => { throw err; });
    } catch (error) {
      console.log('console. error', error);
    }
  }, []);

  return (
    <div className="dashboard">
      {Object.keys(tasks).map(cardKey => {
        let listData = tasks[cardKey];

        return (
          <div className='list' key={cardKey}>
            <div className='listName'>
              <div className="dot"></div>
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
  );
};

export default Task;
