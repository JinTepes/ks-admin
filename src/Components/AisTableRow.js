
import React from 'react';

function AisTableRow({ history }) {
  

  return (
  <>
    {
    history.map((item, index) => (
        <tr key={index}>
            <td>{item.staffName}</td>
            <td>{item.targetPlayerName}</td>
            <td>{item.itemName}</td>
            <td>{item.itemDuration}</td>
            <td>{item.reason}</td>
            <td>{item.otherStaffInCharge}</td>
            <td>{item.Date}</td>
        </tr>
        )
    )
    }
  </>
  );
}

export default AisTableRow;
