import React from "react";
import dStyle from '../Layouts/HWIDBanStyle.module.css';

function HwidBan(){

    return(
        <div className={dStyle.parent}>
            <div className={dStyle.holder}>
                <div className={dStyle.info}>
                    <h2>Hardware ID Banned List</h2>
                    <h4>This page will list all players whose hardware are banned</h4>
                    <h4>Each page shows 100 records only, please use next/previous page below</h4>
                </div>
                <div>
                    <div className={dStyle.gotoInfo}>
                        <input type="text" name="goTo" id='goTo' />
                        <input type="button" id="bgoTo" value='Goto Page' />
                    </div>
                    <div className={dStyle.holdPrevNext}>
                        <div className={dStyle.bHold1}>
                            <input type='button' id='hwidPrev' value='Previous' />
                        </div>
                        <div className={dStyle.bHold1}>
                            <input type='button' id='hwidNext' value='Next' />
                        </div>
                    </div>
                    <div className={dStyle.hTable}>
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
                            <tr>
                                <td>
                                    index here
                                </td>
                                <td>
                                    accounts here
                                </td>
                                <td>
                                    remarks
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default HwidBan;