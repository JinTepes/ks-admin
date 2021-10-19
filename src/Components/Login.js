import { useState } from 'react';
import React from 'react';
import LoginStyle from '../Layouts/LoginStye.module.css';

function LoginPage({ Login, error }) {
  //login deetz
  const [details, setDetails] = useState({ username: '', password: '' });
  //Login click function
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <div className={LoginStyle.CenterContainer}>
      <div className={LoginStyle.pContainer}>
        <form onSubmit={submitHandler}>
          <div className={LoginStyle.childForm}>
            <h2>KS Admin Login</h2>
            {error !== '' ? <div className='error'></div> : ''}
            <div className={LoginStyle.details}>
              <label htmlFor='username'>Username:</label>
              <input
                type='text'
                name='username'
                id='username'
                onChange={(e) =>
                  setDetails({ ...details, username: e.target.value })
                }
              ></input>
            </div>
            <div className={LoginStyle.details}>
              <label htmlFor='password'>Password:</label>
              <input
                type='password'
                name='password'
                id='password'
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
              ></input>
            </div>
            <div className={LoginStyle.btnHolder}>
              <input type='submit' value='LOGIN' />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
