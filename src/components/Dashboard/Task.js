import React from "react";
import { useParams, useNavigate } from 'react-router-dom';

import * as apiMethods from './methods';
import { ReactComponent as AddIcon } from '../images/icons/add.svg';
import { listColors, priorityMap, statusColor, statusColorBg, listNameMappings } from '../constants';

const Task = () => {
  const [tasks, setTasks] = React.useState({});
  const { projectId } = useParams();
  const navigate = useNavigate();

  const transformData = (inputData) => {
    const result = inputData.reduce((acc, task) => {
      const { _id, name, description, status } = task;
      // const project = task.project_id;
      const formattedTask = task;

      if (!acc[status]) {
        acc[status] = [formattedTask];
      } else {
        acc[status].push(formattedTask);
      }

      return acc;
    }, {
      todo: [],
      inProgress: [],
      inReview: [],
      done: []
    });

    return result;
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        if (projectId) { // fetch task only with the specific project id.
          let resp = await apiMethods.getTaskByProjectId(projectId);

          setTasks(transformData(resp.data));
        } else { // fetch all task regardless of which project they are from.
          let resp = await apiMethods.getTask();

          setTasks(transformData(resp.data));
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
                <div>{listNameMappings[cardKey]} </div> &nbsp;
                {listData.length > 0 && (
                  <div id='task-count'>{listData.length}</div>
                )}
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
              {listData.map(data => {
                console.log('d', data)
                return (
                  <div className='task' onClick={() => {
                    let pathname = `/tasks/${data._id}`;

                    if (projectId) {
                      pathname = `/projects/${projectId}/tasks/${data._id}`;
                    }

                    navigate(pathname);
                  }}>
                    <span className='status' style={{
                      color: statusColor[data.priority],
                      backgroundColor: statusColorBg[data.priority]
                    }}>{priorityMap[data.priority]}</span>
                    <div className='task-title'>{data.title}</div>
                    <div className='task-description'>{data.description}</div>
                    <span className='task-project'>{data?.project_id?.name}</span>

                    <div className="line"></div>
                  </div>
                )
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Task;
