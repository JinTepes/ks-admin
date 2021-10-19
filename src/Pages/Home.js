import React from 'react';
import HomeStyle from '../Layouts/HomeStyle.module.css';

function HomePage(){
    return(
        <div className={HomeStyle.msg}>
            <div><h1>Welcome to the online management system!</h1></div>
            <div><h1>Please select an operation above.</h1></div>
        </div>
    );
}

export default HomePage;