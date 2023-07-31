import React from "react";
import { useParams, useNavigate } from 'react-router-dom';

import * as apiMethods from './methods';
import { ReactComponent as AddIcon } from '../images/icons/add.svg';
import { listColors } from '../constants';

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
  const { projectId } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        if (projectId) { // fetch project only with the specific project id.
          let resp = apiMethods.getTaskByProjectId(projectId);

          // setTasks(resp.data);
        } else { // fetch all task regardless of which project they are from.
          let resp = apiMethods.getTask();

          // setTasks(resp.data);
        }
      } catch (error) {
        console.log('console. error', error);
      }
    };

    fetchData();
  }, [projectId]);

  return (
    <div className="dashboard">
      {Object.keys(tasks).map(cardKey => {
        let listData = tasks[cardKey];

        return (
          <div className='list' key={cardKey}>
            <div className='listName' style={{
              borderBottom: `2.5px solid ${listColors[cardKey]}`
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center'
              }}>
                <div className="dot" style={{
                  backgroundColor: listColors[cardKey]
                }}></div>
                <div>{listNameMappings[cardKey]}</div>
              </div>
              {(cardKey === 'todo' && projectId) && (
                <div className='add-mem' onClick={() => {
                  navigate(`${window.location.pathname}/add-task`);
                }}>
                  <AddIcon height={30} width={30} />
                </div>
              )}
            </div>
            <div className='taskWrapper'>
              {listData.map(data => (
                <div className='task' onClick={() => {
                  navigate(`/tasks/${data._id}`);
                }}>
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
