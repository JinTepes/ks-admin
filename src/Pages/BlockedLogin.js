import React from 'react';
import dStyle from '../Layouts/BlockedLoginStyle.module.css';

function BlockedLogin() {
  return (
    <div className={dStyle.parent}>
      <div className={dStyle.holder}>
        <div className={dStyle.hInfo}>
          <h2 style={{alignSelf: 'center'}} >Hardware Blocked Login List</h2>
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
            <tr>
              <td>
                ip ad
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              </td>
              <td>
                uis nostrud exercitation
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BlockedLogin;
