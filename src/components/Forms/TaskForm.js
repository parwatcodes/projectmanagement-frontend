import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';

import * as apiMethods from './methods';
import * as fetch from '../../api/fetch';

const TaskForm = () => {
  const { control, handleSubmit, watch, formState, setValue } = useForm();
  const [members, setMembers] = React.useState([]);
  const [projects, setProjects] = React.useState([]);
  const [taskData, setTaskData] = React.useState({});

  const { projectId, taskId } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (taskId) {
      const fetchTaskData = async () => {
        try {
          const { data, success } = await fetch.get(`/tasks/${taskId}`);

          console.log(data);
          setTaskData(data);

          setValue('name', data.name);
          setValue('description', data.description);
          setValue('status', data.status);
          setValue('priority', data.priority);
          setValue('startDate', data.startDate);
          setValue('endDate', data.endDate);
          setValue('assignedTo', data.assignedTo);
          setValue('project_id', data.project_id);
        } catch (error) {
          console.error('Error fetching task data:', error);
        }
      };
      fetchTaskData();
    } else {
      setValue('status', 'todo');
      setValue('priority', 'low');
    }
  }, [taskId, setValue]);

  React.useEffect(() => {
    if (projectId) {
      apiMethods.getMembersByProject(projectId)
        .then(({ data, success }) => {
          setMembers(data);
        })
        .catch((error) => {
          console.error('Error fetching members:', error);
        });

      apiMethods.getProject(projectId)
        .then(({ data, success }) => setProjects([data.project]))
        .catch((error) => console.error('Error fetching project: ', error));
    } else {
      apiMethods.getProjects()
        .then(({ data, success }) => setProjects(data))
        .catch((error) => console.error('Error fetching project: ', error));
    }
  }, [projectId]);

  React.useEffect(() => {
    if (projects && projects.length === 1) {
      setValue('project_id', projects[0]._id);
    }
  }, [projects]);

  const onSubmit = async (data) => {
    try {
      if (taskId) {
        let resp = await apiMethods.updateTask(taskId, { data });

      } else {
        let resp = await apiMethods.addTask(data);
      }

      navigate(-1);
    } catch (error) {

    }
  };

  const formName = taskId ? 'Edit a task' : 'Create a task';

  return (
    <div>
      <div className='head-title'>{formName}</div>
      <form id='task-form' onSubmit={handleSubmit(onSubmit)}>

        <div className='input-wrap'>
          <label>Name:</label>
          <Controller
            name="name"
            control={control}
            rules={{ required: 'Task name is required' }}
            defaultValue=""
            render={({ field, fieldState }) => (
              <div>
                <input {...field} />
                {fieldState.error && (
                  <span className='error'>{fieldState.error.message}</span>
                )}
              </div>
            )}
          />
        </div>

        <div className='input-wrap'>
          <label>Description:</label>
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field }) => <textarea id='p-textarea' {...field} />}
          />
        </div>

        <div className='input-wrap'>
          <label>Project:</label>
          <Controller
            name="project_id"
            control={control}
            defaultValue=""
            rules={{ required: 'Please select an option' }}
            render={({ field, fieldState }) => (
              <div>
                <select className="form-select" {...field}>
                  <option value="" disabled>
                    Select a project
                  </option>
                  {projects?.map((option) => (
                    <option key={option._id} value={option._id}>
                      {option.name}
                    </option>
                  ))}
                </select>
                {fieldState.error && (
                  <span className='error'>{fieldState.error.message}</span>
                )}
              </div>
            )}
          />
        </div>

        <div className='row'>
          <div className='input-wrap'>
            <div className='task-form-col-child'>
              <label>Assign to:</label>
              <Controller
                name="assignedTo"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <select className='form-select' {...field}>
                    <option disabled value=''>Select to assign the task</option>
                    {members.map((option) => (
                      <option key={option._id} value={option._id}>
                        {option.fullname}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>

            <div className='task-form-col-child'>
              <label>Priority:</label>
              <Controller
                name="priority"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <select className='form-select' {...field}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                )}
              />
            </div>

            <div className='task-form-col-child'>
              <label>Status:</label>
              <Controller
                name="status"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <select className='form-select' {...field}>
                    <option value="todo">To Do</option>
                    <option value="inProgress">In Progress</option>
                    <option value="In Review">In Review</option>
                    <option value="done">Done</option>
                  </select>
                )}
              />
            </div>
          </div>

          <div className='input-wrap' style={{
            alignSelf: 'flex-start'
          }}>
            <div className='task-form-col-child'>
              <label>Start Date:</label>
              <Controller
                name="startDate"
                control={control}
                defaultValue=""
                render={({ field, fieldState }) => (
                  <div>
                    <input type="datetime-local" {...field} />
                  </div>
                )}
              />
            </div>

            <div className='task-form-col-child'>
              <label>End Date:</label>
              <Controller
                name="endDate"
                control={control}
                defaultValue=""
                render={({ field, fieldState }) => (
                  <div>
                    <input type="datetime-local" {...field} />
                  </div>
                )}
              />
            </div>
          </div>


        </div>



        <div className='row btn-wrap'>
          <div className='input-wrap btn'>
            <button type="submit">Submit</button>
          </div>
          <div className='input-wrap btn' onClick={() => { navigate(-1); }}>
            <button className='cancel'>Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
