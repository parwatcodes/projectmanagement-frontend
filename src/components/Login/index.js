import React from 'react';
import { useNavigate } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";

import './styles.css';
import * as fetch from '../../api/fetch';

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const loginSuccess = (data) => {
    localStorage.setItem('email', data.email);
    localStorage.setItem('id', data._id);
    navigate('/home');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);
    setTimeout(() => {
      fetch.post('/login', formData)
        .then(resp => {
          if (resp.success) {
            loginSuccess(resp.data);
          } else {
            setErrorMessage(resp.message);
          }
        }).catch(err => {
          console.log('Error occurred while making the API call:', err);
        }).finally(() => setIsLoading(false));
    }, 1000);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      height: '100vh'
    }}>
      <div id='form-wrapper'>
        <div className='wrapper'>
          <form id='login-form' onSubmit={handleSubmit}>
            <div id='message-wrapper'>
              <h2>Welcome 👋</h2>
              <p>Today is a new day. It's your day. You shape it.</p>
              <p>Sign in to start managing your projects and tasks.</p>
            </div>
            {errorMessage && <div id='login-error'>
              {errorMessage}
            </div>}
            <div className='input-wrap'>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email}
                onChange={handleChange} required />
            </div>

            <div className='input-wrap'>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" value={formData.password}
                onChange={handleChange} required />
            </div>
            <span id='forgot-pass'>Forgot password?</span>
            <button id='login-submit' type="submit" value="Submit" >
              Submit&nbsp;
              <div style={{
                height: '15px',
                width: '15px',
                display: 'flex',
                alignItems: 'center',
                visibility: isLoading ? 'visible' : 'hidden'
              }}>
                <ClipLoader size={10} color="#fff" speedMultiplier={2} loading={isLoading} />
              </div>
            </button>
          </form>
          <div id="sign-up-m">Don't have an account? <span>Sign up</span></div>
          <div id='copyright'>
            {`©${new Date().getFullYear()} ALL RIGHTS RESERVED`}
          </div>
        </div>
      </div>
      <div id='page-art'>
        <img src={'https://raw.githubusercontent.com/parwatcodes/TaskMan/main/public/images/logo.png'} alt='' />
      </div>
    </div>
  );
};

export default Login;
