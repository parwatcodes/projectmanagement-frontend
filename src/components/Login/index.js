import React from 'react';

import './styles.css';

const Login = () => {

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      height: '100vh'
    }}>
      <div id='form-wrapper'>
        <div className='wrapper'>
        <form id='login-form'>
          <h2>Welcome 👋</h2>
          <p>Today is a new day. It's your day. You shape it. Sign in to start managing your projects.</p>
          <div className='input-wrap'>
            <label for="email">Email</label>
            <input type="text" id="email" name="email" />
          </div>

          <div className='input-wrap'>
            <label for="password">Password</label>
            <input type="text" id="password" name="password" />
          </div>
          <input type="submit" value="Submit" />
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
