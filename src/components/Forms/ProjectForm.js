import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import * as apiMethods from './methods';
import * as fetch from '../../api/fetch';

const ProjectForm = () => {
  const { control, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const { projectId } = useParams();
  const [projectData, setProjectData] = React.useState(null);

  console.log('para', projectId)

  React.useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const { data, success } = await fetch.get(`/projects/${projectId}`);

        console.log(data);
        setProjectData(data);

        setValue('name', data.name);
        setValue('description', data.description);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (projectId) {
      fetchProjectData();
    }
  }, [projectId, setValue]);

  const onSubmit = async (data) => {
    try {
      if (projectId) {
        let resp = await apiMethods.updateProject(projectId, { data });

      } else {
        let resp = await apiMethods.addProject(data);
      }

      window.location.reload();
    } catch (error) {

    }
  };

  const formName = projectId ? 'Edit a project' : 'Add a project';

  return (
    <div id='project-form'>
      <div className='head-title'>{formName}</div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className='input-wrap'>
          <label>Name:</label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} />}
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

        <div className='row btn-wrap'>
          <div className='input-wrap btn'>
            <button type="submit">Submit</button>
          </div>

          <div className='input-wrap btn' onClick={() => navigate(-1)}>
            <button className='cancel'>Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
