import React from 'react';
import dStyle from '../Layouts/ScreenshotsStyle.module.css';

function ScreenshotsPage() {
  return (
    <div className={dStyle.parent}>
      <div className={dStyle.holder}>
        <h1>View Screenshots Captured by Admin Command</h1>
        <h4>
          This page will list all the screenshots of players (For cheating
          detection only)
        </h4>
        <h4>
          Note: It takes time to upload the image to this page. (Around 5-30
          seconds after using the screenshot command)
        </h4>
        <h5>
          NOTE: Do not use the screenshot as the evidence of cheating.
        </h5>
        <div>
          <table>
            <tr>
              <th>Account Name</th>
              <th>Capture Date</th>
              <th>View Image</th>
              <th>Delete Image</th>
            </tr>
            <tr>
              <td>1 Acc Name</td>
              <td>1 Capture</td>
              <td>
                <a href=''>1 View Image</a>
              </td>
              <td>
                <a href=''>1 Del</a>
              </td>
            </tr>
            <tr>
              <td>2 Acc Name</td>
              <td>2 Capture</td>
              <td>
                <a href=''>2 View Image</a>
              </td>
              <td>
                <a href=''>2 Del</a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ScreenshotsPage;
