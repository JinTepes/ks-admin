import React from 'react';

import style from '../Layouts/SBStyle.module.css';

function SearchBanning(){
    return(
        <div className="Parent">
            <div className="Holder">
                <h2>Search for User and Ban Tool</h2>
                <div>
                    <h4>Input a username, player name, or both, to search.</h4>
                    <h4>This tool only shows users who created a character in his/her account</h4>
                </div>
                <div>
                    <div>
                        <label htmlFor='sAccName'>Account Name Containes:</label>
                        <input type='text' id='sAccName' name='sAccName' />
                        <label htmlFor='sInName'>In-game Name Containes:</label>
                        <input type='text' id='sInName' name='sInName' />
                        <div>
                            <input type='button' value='Find User' />
                        </div>
                    </div>
                    <div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBanning;