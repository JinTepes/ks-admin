import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import React from 'react';

import LoginPage from './Components/Login';
//importing pages
import HomePage from './Pages/Home';
import AddItemPage from './Pages/AddItem';
import AddItemHistory from './Pages/AddItemHistory';
///
//styles
import HeaderStyle from './Layouts/HeaderStyle.module.css';
///
function App() {
  //main header
  function MainHeader() {
    return (
      <header className={HeaderStyle.header}>
        <div className={HeaderStyle.centerText}>
          <h2>KillerSource Online Administration System</h2>
          <h3>Welcome, {cUser} [ Authority: Super Administrator ]</h3>
        </div>
        <div className={HeaderStyle.navScrollDiv}>
          <div className={HeaderStyle.nItem}>
            <Link to='/'>
              <div>Home</div>
            </Link>
          </div>
          <div className={HeaderStyle.nItem}>
            <Link to='/Add-Item'>
              <div>Add Item</div>
            </Link>
          </div>
          <div className={HeaderStyle.nItem}>
            <Link to='/Add-Item-History'>
              <div>Add Item History</div>
            </Link>
          </div>
          <div className={HeaderStyle.nItem}>
            <Link to='/'>
              <div>Screenshots</div>
            </Link>
          </div>
          <div className={HeaderStyle.nItem}>
            <Link to='/'>
              <div>Search User and Banning</div>
            </Link>
          </div>
          <div className={HeaderStyle.nItem}>
            <Link to='/'>
              <div>Hardware ID Banned List</div>
            </Link>
          </div>
          <div className={HeaderStyle.nItem}>
            <Link to='/'>
              <div>Blocked Login Log</div>
            </Link>
          </div>
          <div className={HeaderStyle.nItem}>
            <div>
              <div
                onClick={() => {
                  setUser('');
                }}
                className={HeaderStyle.SP1}
              >
                Logout
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
  //routing
  function HeaderRoute() {
    return (
      <div>
        <MainHeader />
        <div>
          <Switch>
            <Route path='/' exact>
              <HomePage />
            </Route>
            <Route path='/Add-Item'>
              <AddItemPage />
            </Route>
            <Route path='/Add-Item-History'>
              <AddItemHistory />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
  //admin users infos, just change this to quarry stuff
  const adminUser = {
    username: 'admin1',
    password: 'admin111',
  };
  //
  const [cUser, setUser] = useState('');
  const [error, setError] = useState('');
  //
  //Login event
  const Login = (details) => {
    if (
      details.username === adminUser.username &&
      details.password === adminUser.password
    ) {
      console.log('Logged In!');
      setUser(details.username);
    } else {
      setError('Wrong Info');
      console.log('Wrong Deetz!');
    }
  };

  return (
    <div>
      {cUser !== '' ? (
        <HeaderRoute />
      ) : (
        <LoginPage Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
