import React from 'react';

import dStyle from '../Layouts/SearchBanStyle.module.css';

function SearchBanning(){
    return(
        <div className={dStyle.parent}>
            <div className={dStyle.holder}>
                <h2 style={{alignSelf: 'center'}}>Search for User and Ban Tool</h2>
                <div>
                    <h4>Input a username, player name, or both, to search.</h4>
                    <h4>This tool only shows users who created a character in his/her account</h4>
                </div>
                <div className={dStyle.uInfo}>
                    <div className={dStyle.uInfoLeft}>
                        <label htmlFor='sAccName'>Account Name Containes:</label>
                        <input style={{marginTop: '10px'}} type='text' id='sAccName' name='sAccName' />
                        <label style={{marginTop: '10px'}} htmlFor='sInName'>In-game Name Containes:</label>
                        <input style={{marginTop: '10px'}} type='text' id='sInName' name='sInName' />
                        <div style={{alignSelf: 'center'}}>
                            <input style={{marginTop: '10px'}} type='button' value='Find User' />
                        </div>
                    </div>
                    <div className={dStyle.uInfoRight}>
                        <div className={dStyle.rightInfo}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBanning;