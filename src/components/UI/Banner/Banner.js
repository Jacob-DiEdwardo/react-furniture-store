import React from 'react';

import classes from './Banner.module.css';

const banner = (props) => {
    return (
        <div className={classes.Banner}>
            <div className={classes.Showing}>
                <h2>Showing 1 - 12 of 16 products</h2>
            </div>
            <div className={classes.ButtonContainer}>
                {props.children}
            </div>
        </div>
    );
}
 
export default banner;