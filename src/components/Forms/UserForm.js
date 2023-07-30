import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import './styles.css';
import * as fetch from '../../api/fetch';
import * as apiMethods from './methods';

const UserForm = () => {
  const { control, handleSubmit, watch, setValue } = useForm();
  const navigate = useNavigate();
  const { userid } = useParams();
  const [userData, setUserData] = React.useState(null);

  React.useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data, success } = await fetch.get(`/users/${userid}`);

        console.log(data);
        setUserData(data);

        setValue('fullname', data.fullname);
        setValue('email', data.email);
        setValue('role', data.role);
        setValue('password', data.password);
        setValue('hourlyRate', data.hourlyRate || ''); // hourlyRate is optional, so set an empty string if not provided
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (userid) {
      fetchUserData();
    }
  }, [userid, setValue]);

    const updatePasswordValue = () => {
      const emailValue = watch('email');
      const generatedPassword = emailValue ? `${emailValue.split('@')[0]}@123` : '';
      setValue('password', generatedPassword);
    };

    React.useEffect(() => {
      updatePasswordValue();
    }, [watch('email')]); // Dependency on the email input value

  const onSubmit = async (data) => {
    console.log(data);

    try {
      if (userid) {
        let resp = await apiMethods.updateUser(userid, { data });

      } else {
        let resp = await apiMethods.addUser(data);
      }

      navigate('/members');
    } catch (error) {

    }
  };

  const selectedRole = watch('role');
  const formName = userid ? 'Edit a user' : 'Create a user';

  return (
    <div>
      <div className='head-title'>{formName}</div>
      <form id='user-form' onSubmit={handleSubmit(onSubmit)}>
        <div className='row'>
          <div className='input-wrap'>
            <label>Full Name:</label>
            <Controller
              name="fullname"
              control={control}
              rules={{ required: 'Full name is required' }}
              defaultValue=""
              render={({ field, fieldState }) => (
                <>
                  <input {...field} />
                  {fieldState.error && <span className='error'>{fieldState.error.message}</span>}
                </>
              )}
            />
          </div>

          <div className='input-wrap'>
            <label>Email:</label>
            <Controller
              name="email"
              control={control}
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Invalid email format',
                },
              }}
              defaultValue=""
              render={({ field, fieldState }) => (
                <>
                  <input {...field} />
                  {fieldState.error && <span className='error'>{fieldState.error.message}</span>}
                </>
              )}
            />
          </div>
        </div>

        <div className='row'>
          <div className='input-wrap'>
            <label>Role:</label>
            <Controller
              name="role"
              control={control}
              defaultValue="admin"
              render={({ field }) => (
                <select className='select' {...field}>
                  <option value="admin">Admin</option>
                  <option value="member">Member</option>
                </select>
              )}
            />
          </div>

          <div className='input-wrap'>
            <label>Password: (auto-gen)</label>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => {
                let watcher = watch('email')?.split('@')[0];

                return (
                  <input
                    {...field}
                    disabled
                    value={watcher ? `${watcher}@123` : watcher} // Autogenerated value based on the email
                  />
                );
              }}
            />
          </div>
        </div>
        {selectedRole === 'member' && (
          <div className='row'>
            <div className='input-wrap'>

            </div>
            <div className='input-wrap'>
              <label>Hourly Rate:</label>
              <Controller
                name="hourlyRate"
                control={control}
                defaultValue=""
                render={({ field }) => <input {...field} />}
              />
            </div>
          </div>
        )}

        <div className='row btn-wrap'>
          <div className='input-wrap btn'>
            <button type="submit">Submit</button>
          </div>

          <div className='input-wrap btn' onClick={() => navigate('/members')}>
            <button className='cancel'>Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
