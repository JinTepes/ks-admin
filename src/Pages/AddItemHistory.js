import { useState, useEffect } from 'react';
import React from 'react';

import AisTableRow from '../Components/AisTableRow';

//styling
import AddItmHsStyle from '../Layouts/AddItmHsStyle.module.css';

function AddItemHistory() {
  //data population
  const [adItmHistory, setadItmHistory] = useState([]);

  useEffect(() => {
    const getHistory = async () => {
      const historyFromServer = await fetchaItemHistory();
      setadItmHistory(historyFromServer);
    };

    getHistory();
    console.log(adItmHistory);
  }, []);

  //fetching JSON data
  const fetchaItemHistory = async () => {
    const response = await fetch('http://localhost:5000/addItemHistory');
    const data = await response.json();
    //console.log(data);
    return data;
  };

  return (
    <div className={AddItmHsStyle.pContainer}>
      <div className={AddItmHsStyle.holder}>
        <div style={{display: 'flex'}, {flexWrap: 'wrap'}}>
          <input type='text' id='goTo' name='goTo' />
          <input style={{marginLeft: '15px'}} type='button' id='aihBtn' value='Goto Page' />
        </div>
        <div>
          <table>
            <tr>
              <th>Staff Name</th>
              <th>Target Player Name</th>
              <th>Item Name</th>
              <th>Item Duration</th>
              <th>Reason</th>
              <th>Other Staff In Charge</th>
              <th>Date</th>
            </tr>
            <AisTableRow history={adItmHistory} />
          </table>
        </div>
      </div>
    </div>
  );
}

export default AddItemHistory;
