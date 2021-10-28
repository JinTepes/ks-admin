import React from 'react';

function BlockedLogin() {
  return (
    <div className='parent'>
      <div className='holder'>
        <div>
          <h2>Hardware Blocked Login List</h2>
          <h4>
            This page will list all computers restricted to launch KS game
            client due to HWID banned.
          </h4>
          <h4>Only the latest 1000 records are shown here.</h4>
          <h4>
            To obtain the banning index for a player, tell him to enter{' '}
            <a href=''>killersource.net/ip.php</a> and search (ctrl+f) the
            printed ip with this table.
          </h4>
        </div>
        <div>
          <table>
            <tr>
              <th>Blocked Login IP Address</th>
              <th>Referenced Banning Index</th>
              <th>Blocked Login Date</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BlockedLogin;
