import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import React from 'react';

import LoginPage from './Components/Login';
//importing pages
import HomePage from './Pages/Home';
import AddItemPage from './Pages/AddItem';
import AddItemHistory from './Pages/AddItemHistory';
import ScreenshotsPage from './Pages/Screenshots';
import SearchBanning from './Pages/SearchBanning';
import HwidBan from './Pages/HwidBan';
import BlockedLogin from './Pages/BlockedLogin';
///
//styles
import HeaderStyle from './Layouts/HeaderStyle.module.css';
///
function App() {
  const [cUser, setUser] = useState('');
  //main header
  function MainHeader() {
    return (
      <header className={HeaderStyle.header}>
        <div className={HeaderStyle.centerText}>
          <h2>KillerSource Online Administration System</h2>
          <h3>Welcome, {cUser} [ Authority: Super Administrator ]</h3>
        </div>
        <div className={HeaderStyle.navScrollDiv}>
          <div>
            <Link to='/'>
              <div className={HeaderStyle.nItem}>Home</div>
            </Link>
          </div>
          <div>
            <Link to='/Add-Item'>
              <div className={HeaderStyle.nItem}>Add Item</div>
            </Link>
          </div>
          <div>
            <Link to='/Add-Item-History'>
              <div className={HeaderStyle.nItem}>Add Item History</div>
            </Link>
          </div>
          <div>
            <Link to='/Screenshots'>
              <div className={HeaderStyle.nItem}>Screenshots</div>
            </Link>
          </div>
          <div>
            <Link to='/Search-Banning'>
              <div className={HeaderStyle.nItem}>Search User and Banning</div>
            </Link>
          </div>
          <div>
            <Link to='/HWID-Bannedlist'>
              <div className={HeaderStyle.nItem}>Hardware ID Banned List</div>
            </Link>
          </div>
          <div>
            <Link to='/Blocked-Login'>
              <div className={HeaderStyle.nItem}>Blocked Login Log</div>
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
  function HeaderRoute({ cUser }) {
    return (
      <div>
        <MainHeader />
        <div>
          <Switch>
            <Route path='/' exact>
              <HomePage />
            </Route>
            <Route path='/Add-Item'>
              <AddItemPage theAdmin={cUser} />
            </Route>
            <Route path='/Add-Item-History'>
              <AddItemHistory />
            </Route>
            <Route path='/Screenshots'>
              <ScreenshotsPage />
            </Route>
            <Route path='/Search-Banning'>
              <SearchBanning />
            </Route>
            <Route path='/HWID-Bannedlist'>
              <HwidBan />
            </Route>
            <Route path='/Blocked-Login'>
              <BlockedLogin />
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
        <HeaderRoute theAdmin={cUser} />
      ) : (
        <HeaderRoute theAdmin={cUser} />
        //<LoginPage Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
