import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const ProjectForm = () => {
  console.log('0000')
  const { control, handleSubmit } = useForm();

  // This function will be called when the form is submitted
  const onSubmit = (data) => {
    console.log(data);
    // You can handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        {/* 'name' is the name of the field, and 'control' is from useForm() */}
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
        />
      </div>

      <div>
        <label>Description:</label>
        {/* 'name' is the name of the field, and 'control' is from useForm() */}
        <Controller
          name="description"
          control={control}
          defaultValue=""
          render={({ field }) => <textarea {...field} />}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ProjectForm;
