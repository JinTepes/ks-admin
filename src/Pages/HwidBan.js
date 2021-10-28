import React from "react";

function HwidBan(){

    return(
        <div className='parent'>
            <div className='holder'>
                <div>
                    <h2>Hardware ID Banned List</h2>
                    <h4>This page will list all players whose hardware are banned</h4>
                    <h4>Each page shows 100 records only, please use next/</h4>
                </div>
                <div>
                    <div>
                        <input type='button' id='hwidPrev' value='Previous' />
                        <input type='button' id='hwidNext' value='Next' />
                    </div>
                    <div>
                        <table>
                            <tr>
                                <th>
                                    Banning Index
                                </th>
                                <th>
                                    Accounts Associated with these HWID
                                </th>
                                <th>
                                    Remarks when Banning
                                </th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default HwidBan;